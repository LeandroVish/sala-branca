<template>
  <div class="min-h-screen flex flex-col">
      <AppNavbar />
    <main class="flex-1 p-4">
      <router-view />
    </main>
    <footer class="bg-gray-100 text-center p-4 text-sm text-gray-500">
      © 2025 Sala Branca. Todos os direitos reservados.
    </footer>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'App',
  components: {
    AppNavbar
  }
}
</script>

<style>
/* Se você quiser algum estilo global que não seja Tailwind, pode adicionar aqui */
</style>
