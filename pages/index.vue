<template>
  <p class="p-4 text-center text-gray-600 dark:text-gray-400">Redirecting to Steam…</p>
</template>

<script setup lang="ts">
// Temporary: root should send visitors straight to Jingle Blocks on Steam.
const JINGLE_BLOCKS_STEAM =
  'https://store.steampowered.com/app/4498810/Jingle_Blocks/'

await navigateTo(JINGLE_BLOCKS_STEAM, { external: true, replace: true })
</script>
