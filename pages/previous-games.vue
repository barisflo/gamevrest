
<template>
<main class="w-full max-w-5xl mx-auto container flex flex-col justify-center">
    <div class="p-6 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">

        <GameCard img="/images/BarrierSquad.png" link="https://play.google.com/store/apps/details?id=com.gamevrest.BarriersQuad" title="Barrier Squad" year="2024"
              desc="Mobile Game, tower defense like"
              />
      <GameCard img="/images/proxima.png" link="https://www.youtube.com/watch?v=HJnT_nsFjWY&ab_channel=Baris" title="Proxima Cities" year="2020"             
      desc="Augmented reality city, on mobile application"
            />
      <GameCard img="/images/PCRDefender.png" link="https://gamepipe.io/@barisf/pcr-defender" title="PCR Defender" year="2015"
            desc="Promotional video game for C2i santé"
            />
    </div>
    <div class="max-w-[185rem] mx-auto mt-4">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-2xl font-bold md:text-2xl md:leading-tight dark:text-white">Check out our latest game</h2>
            <a href="/"><div class="w-[140px] mx-auto my-5 p-2 h-12 bg-primary text-2xl font-bold text-center rounded-md text-white">
                Home</div></a>
        </div>
    </div>
</main>
</template>