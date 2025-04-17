<template>
  <div class="w-full max-w-5xl mx-auto flex flex-col justify-center min-h-screen">
    <div class="max-w-[185rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Redirecting...</h2>
        <p class="mt-1 text-gray-600 dark:text-gray-400">You're being redirected to Premier Servi on Steam.</p>
        <div class="w-[140px] mx-auto my-5 p-2 h-12 bg-primary text-2xl font-bold text-center rounded-md text-white">
          <svg class="animate-spin h-6 w-6 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    window.location.href = 'https://store.steampowered.com/app/2884670/Premier_Servi/'
  }, 1500)
})
</script> 