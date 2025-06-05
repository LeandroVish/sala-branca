<template>
  <div class="p-4">
    <div class="flex justify-between mb-6">
      <h2 class="text-2xl font-semibold">Bem-vindo, {{ user.username }}</h2>
      <button
        @click="fazerLogout"
        class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
    <p>Seu e-mail: {{ user.email }}</p>
    <!-- Aqui você pode colocar links para /tarefas, /pensamentos, etc. -->
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name: 'HomeView',
  data() {
    return {
      user: {
        id: null,
        username: '',
        email: ''
      }
    };
  },
  async created() {
    try {
      // Chama GET /api/auth/me/
      const resp = await api.get('me/');
      this.user = resp.data;
    } catch (erro) {
      // Se o token estiver inválido/expirado, redireciona pra login
      this.$router.push({ name: 'Login' });
    }
  },
  methods: {
    fazerLogout() {
      // Remove tokens do localStorage e volta para login
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>

<style scoped>
/* Estilos extras, se quiser */
</style>
