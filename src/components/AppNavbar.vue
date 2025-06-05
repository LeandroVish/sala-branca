<template>
  <header class="bg-white text-black shadow-md w-full">
    <div class="flex items-center justify-between h-16 px-4 md:px-8 lg:px-12">
      <!-- Logo / Título -->
      <div class="flex-shrink-0">
        <h1 class="text-xl font-bold">Sala Branca</h1>
      </div>

      <!-- Botão Hambúrguer (aparece em mobile) -->
      <button
        @click="menuAtivo = !menuAtivo"
        class="md:hidden focus:outline-none"
        aria-label="Abrir menu"
      >
        <span
          class="block w-6 h-0.5 bg-black my-1 transition-transform"
          :class="{ 'rotate-45 translate-y-1.5': menuAtivo }"
        ></span>
        <span
          class="block w-6 h-0.5 bg-black my-1 transition-opacity"
          :class="{ 'opacity-0': menuAtivo }"
        ></span>
        <span
          class="block w-6 h-0.5 bg-black my-1 transition-transform"
          :class="{ '-rotate-45 -translate-y-1.5': menuAtivo }"
        ></span>
      </button>

      <!-- Menu Desktop (links alinhados à direita, com espaçamento) -->
      <nav class="hidden md:flex ml-auto space-x-8">
        <!-- Cada router-link herdará Poppins (via index.css) -->
        <router-link to="/" class="hover:text-gray-600">Sala Branca</router-link>
        <router-link to="/tarefas" class="hover:text-gray-600">Tarefas</router-link>
        <router-link to="/pensamentos" class="hover:text-gray-600">Pensamentos</router-link>
        <router-link to="/cronograma" class="hover:text-gray-600">Cronograma</router-link>
        <router-link to="/login" class="hover:text-gray-600">Login</router-link>
      </nav>
    </div>

    <!-- Menu Mobile (drawer que desliza) -->
    <transition name="slide">
      <nav
        v-if="menuAtivo"
        class="md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 px-6 pt-20"
      >
        <ul class="flex flex-col space-y-6">
          <li><router-link @click.native="menuAtivo = false" to="/">Sala Branca</router-link></li>
          <li><router-link @click.native="menuAtivo = false" to="/tarefas">Tarefas</router-link></li>
          <li><router-link @click.native="menuAtivo = false" to="/pensamentos">Pensamentos</router-link></li>
          <li><router-link @click.native="menuAtivo = false" to="/cronograma">Cronograma</router-link></li>
          <li><router-link @click.native="menuAtivo = false" to="/login">Login</router-link></li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      menuAtivo: false
    }
  }
}
</script>

<style scoped>
/* Transição suave para o menu mobile (0.4s) */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
