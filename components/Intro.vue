<template>
    <div class="mb-6 min-w-full px-6 lg:px-24">
        <div class="text-center pb-3 md:pb-3">
            <!-- <NuxtImg class="m-auto object-cover object-center transform scale-110 hover:scale-125 transition-transform ease-in-out duration-300" src="/PremierServi.png" alt="Gamevrest logo" width="600" /> -->
            <!-- YouTube Trailer Video -->
            <h1 class="text-2xl md:text-4xl my-6 font-extrabold leading-tight md:leading-tighter tracking-tighter pb-2 main-title">
                Eat the cake before your friends without getting spotted !
            </h1>
            <div class="video-wrapper">
                <div class="video-container">
                    <iframe 
                        src="https://www.youtube.com/embed/uLVhjcnU13Q" 
                        title="Premier Servi Trailer" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            
            <a href="https://store.steampowered.com/app/2884670/Premier_Servi/?beta=0">
                <NuxtImg class="pt-2 m-auto hover:scale-105 ease-in-out duration-100" src="/steam.png" alt="Steam wishlist" width="300" />
            </a>
            <!-- <a href="https://store.steampowered.com/app/2884670/Premier_Servi/?beta=0"
                class="text-xl text-gray-900 mb-4 text-shadow-sm"> Switch • Steam</a> -->
            <div class="max-w-3xl mx-auto">
                <p class="text-xl text-gray-700 mb-4 text-shadow-sm font-medium" data-aos="zoom-y-out" data-aos-delay="150">Developed by 3
                    young french hobbyist, Premier Servi (First Arrived, First Served) is a colorful Party Game
                    featuring delicious French Pastry !</p>
                <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out"
                    data-aos-delay="300">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-title {
    background: linear-gradient(45deg, #fbbf24, #f59e0b, #ec4899, #be185d);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Simplified mobile styling */
@media (max-width: 768px) {
    .main-title {
        background: linear-gradient(45deg, #fbbf24, #ec4899);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
        /* Remove any potential outline conflicts on mobile */
        -webkit-text-stroke: none;
        text-stroke: none;
        filter: none;
    }
}

.text-shadow-sm {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.video-wrapper {
    max-width: 600px;
    margin: 0 auto;
    /* margin-bottom: 8px; */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    overflow: hidden;
}

.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* Perfect 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

@media (max-width: 840px) {
    .video-wrapper {
        max-width: 100%;
        margin: 0 auto;
    }
}
</style>