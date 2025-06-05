<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>
      <form @submit.prevent="fazerLogin">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium mb-1">Username</label>
          <input
            id="username"
            type="text"
            v-model="username"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
            required
          />
        </div>
        <div class="mb-6">
          <label for="senha" class="block text-sm font-medium mb-1">Senha</label>
          <input
            id="senha"
            type="password"
            v-model="senha"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
            required
          />
        </div>
        <button
          type="submit"
          :disabled="carregando"
          class="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors flex items-center justify-center"
        >
          <span v-if="!carregando">Entrar</span>
          <span v-else class="animate-pulse">Carregando…</span>
        </button>
      </form>

      <p v-if="erroMsg" class="text-red-500 text-center mt-4">
        {{ erroMsg }}
      </p>
    </div>
  </div>
</template>

<script>
import api from '../services/api.js'

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      senha: '',
      carregando: false,
      erroMsg: ''
    };
  },
  methods: {
    async fazerLogin() {
      if (!this.username.trim() || !this.senha.trim()) {
        this.erroMsg = 'Username e senha são obrigatórios.'
        return;
      }

      this.erroMsg = ''
      this.carregando = true

      try {
        const resposta = await api.post('login/', {
          username: this.username,
          password: this.senha
        });

        localStorage.setItem('access', resposta.data.access);
        localStorage.setItem('refresh', resposta.data.refresh);

        this.carregando = false;
        this.username = '';
        this.senha = '';

        this.$router.push({ name: 'Home' });
      } catch (erro) {
        this.carregando = false;
        if (erro.response && erro.response.status === 401) {
          this.erroMsg = 'Credenciais inválidas. Tente novamente.'
        } else {
          this.erroMsg = 'Erro de servidor. Tente mais tarde.'
        }
      }
    }
  }
}
</script>


<style scoped>
/* Estilos extras, se desejar */
</style>
