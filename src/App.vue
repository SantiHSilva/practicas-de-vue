<template>
  <div class="flex flex-col h-screen">
    <header>
      <h1>Mi Aplicación Vue</h1>
    </header>
    <main class="grow-1 overflow-auto">
      <!-- ! Todas la visualización de las vistas van a estar dentro de main, el header permanecera siempre, y el footer tambien -->
      <!-- ! Siendo una plantilla -->
      texto que se va ver en todo lado
      <router-view></router-view>
    </main>
    <footer>
      <p>© 2024 Mi Aplicación Vue</p>
    </footer>
  </div>
</template>

<script>

import { RouterView } from 'vue-router';

export default {
  components: {
    RouterView
  }
}

</script>