<template>
    <main class="flex flex-col items-center checkered-background">
        <ClientOnly>
            <!-- <div class="h-[320]" v-if="!loaded">coucou</div> -->
        </ClientOnly>
        <Intro style="z-index: 1;" />
        <Main style="z-index: 1;" />  
    </main>
</template>

<script setup lang="ts">
const loaded = ref(false);

const isLoaded = () => loaded.value = true;
</script>

<style scoped>
.checkered-background {
    background-image: url('/damierbakery.png');
    background-repeat: repeat;
    background-size: 600px; /* Adjust this value to control the pattern size */
    background-position: center;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(255, 255, 255, 0.8);
    background-blend-mode: overlay;
}
</style>