<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="p-0 mobail:w-4/5 mobail:p-0 px-3  m-auto">
      <nav class="flex gap-5 items-center pt-4 text-xl font-medium">
        
        <RouterLink to="/">
          <img src="@/assets/images/logo.png" class="w-12 rounded-full" alt="">
        </RouterLink>
        <RouterLink to="/">Врачи</RouterLink>
        <RouterLink to="/nurse">Медсестры</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


