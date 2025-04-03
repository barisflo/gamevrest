<template>
  <div class="cake-section min-w-full py-7 mx-auto px-4">
    <!-- <NuxtImg class=" absolute p-2 -z-10" src="/cake1.png" alt="Gamevrest logo" width="600" /> -->
    <div class="content-wrapper">
      <div class="flex flex-wrap justify-center">
        <NuxtImg class="p-2 game-image" src="/coverart.png" alt="Premier Servi Cover art by Florent Baris for Gamevrest" width="600" />
        <NuxtImg class="p-2 game-image" src="/green.png" alt="Premier Servi Gameplay Grenouille" width="600" />
      </div>
      <div class="flex flex-wrap justify-center">
        <NuxtImg class="p-2 game-image" src="/paris.png" alt="Premier Servi select menu" width="600" />
        <NuxtImg class="p-2 game-image" src="/bakery.png" alt="Premier Servi Tutorial" width="600" />
      </div>
      <div class="flex flex-wrap justify-center mt-4 text-gray-700 font-medium">
        Indie Game studio Gamevrest by Florent Baris, Gaspard Thirion and Mickaël Scherlen
      </div>
    </div>
  </div>
</template>

<style scoped>
.cake-section {
  margin-top: 20px;
  position: relative;
}

.cake-section::before {
  content: "";
  background-image: url('/cake1.png');
  background-repeat: repeat;
  background-size: 50%;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.content-wrapper {
  position: relative;
  z-index: 1;
}

.game-image {
  border-radius: 12px;
}
</style>