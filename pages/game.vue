<template>
    <div
      class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center"
    >
      <div class="flex flex-row justify-center flex-grow">
        <div
          class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch]  flex flex-col"
        >
        <NuxtPage/>
        </div>
    </div>
  </div>
  </template>
  
  
  
  <script setup>
    const houses = useHouses()

  </script>
  
  
  <style scoped>
  
  </style>