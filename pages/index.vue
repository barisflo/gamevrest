<template>
    <main className="flex flex-col items-center">
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