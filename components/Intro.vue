<template>
    <div class="mb-6 min-w-full px-6 lg:px-24">
        <div class="text-center pb-3 md:pb-3">
            <NuxtImg class="m-auto object-cover object-center transform scale-110 hover:scale-125 transition-transform ease-in-out duration-300" src="/PremierServi.png" alt="Gamevrest logo" width="600" />
                <h1 class="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter pb-2 mb-4 bg-clip-text text-transparent bg-gradient-to-br from-yellow-200 to-rose-300 top-0 left-0 right-0 text-shadow-element">
                    Eat the cake before your friends without getting spotted !
                </h1>
            <a href="https://store.steampowered.com/app/2884670/Premier_Servi/?beta=0">
                <NuxtImg class="p-2 m-auto hover:scale-105 ease-in-out duration-100" src="/steam.png" alt="Steam wishlist" width="300" />
            </a>
            <a href="https://store.steampowered.com/app/2884670/Premier_Servi/?beta=0"
                class="text-xl text-gray-900 mb-4 text-shadow-sm"> Switch • Steam</a>
            <div class="max-w-3xl mx-auto">
                <p class="text-xl text-gray-700 mb-4 mt-2 text-shadow-sm font-medium" data-aos="zoom-y-out" data-aos-delay="150">Developed by 3
                    young french hobbyist, Premier Servi (First Arrived, First Served) is a colorful Party Game
                    featuring delicious French Pastry !</p>
                <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out"
                    data-aos-delay="300">
                </div>
                <!-- <div>
                   Game studio by Florent Baris and Gaspard Thirion
                </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-shadow-element {
    color: transparent;
    filter: drop-shadow(3px 1px 1px rgba(0, 0, 0, 0.6));
}

.text-shadow-sm {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
</style>