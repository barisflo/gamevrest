<template>
    <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-1 grow flex justify-center">
        <slot />
    </main>
      <Footer />
    </div>
  </template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', 'G-8NXE8X8XZB')
})
</script>