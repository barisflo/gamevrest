<template>
  <div class="bg-cake min-w-full py-7" :style="{ backgroundImage: `url('/cake1.png')` }">
    <!-- <NuxtImg class=" absolute p-2 -z-10" src="/cake1.png" alt="Gamevrest logo" width="600" /> -->
    <div class="flex flex-wrap justify-center">
      <NuxtImg class="p-2" src="/coverart.png" alt="Premier Servi Cover art by Florent Baris for Gamevrest" width="600" />
      <NuxtImg class="p-2" src="/blu.png" alt="Premier Servi Gameplay Grenouille" width="600" />
    </div>
    <div class="flex flex-wrap  justify-center">
      <NuxtImg class="p-2" src="/green.png" alt="Premier Servi select menu" width="600" />
      <NuxtImg class="p-2" src="/red.png" alt="Premier Servi Tutorial" width="600" />
    </div>
    <div class="flex flex-wrap  justify-center">
      Indie Game studio Gamevrest by Florent Baris, Gaspard Thirion and Mickaël Scherlen
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg-cake {
  // background: url("cake1.png");
  background-repeat: repeat;
  background-size: 50%;
}
</style>