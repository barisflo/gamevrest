<template>
    <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-1 grow flex justify-center">
        <slot />
    </main>
      <Footer />
    </div>
  </template>