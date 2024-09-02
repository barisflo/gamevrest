<template>
    <div>
      <p>If you are not redirected, <a href="mailto:example@example.com?subject=Hello&body=Please%20write%20your%20message%20here">click here</a>.</p>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    window.location.href = 'mailto:example@example.com?subject=Hello&body=Please%20write%20your%20message%20here';
  });
  </script>
  