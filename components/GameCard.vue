<template>
    <a
    :href="link" target="_blank"
        class="rounded-md flex flex-col overflow-hidden game-card shadow-lg hover:scale-105 ease-in-out duration-100 mx-auto">
        <NuxtImg class="object-cover h-60 w-80" :src="img" />
        <div class="text-black flex flex-col p-4">
            <h1 class="text-xl font-bold mb-1">
                <span>{{ title }} - {{ year }}</span>
            </h1>
            <h2 class="">
                <span>{{ desc }}</span>

            </h2>
            <div class="space-x-2 mt-auto">
                <div v-for="tag in tags" :key="tag"
                    class="bg-azure px-3 py-1 font-semibold text-sm inline-flex rounded-full">
                    {{ tag }}
                </div>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
const props = defineProps({
    img: {
        type: String
    },
    title: {
        type: String
    },
    desc: {
        type: String
    },
    year: {
        type: String
    },
    link: {
        type: String
    },
    tags: Array as PropType<string[]>,
})
</script>

<style scoped>
.game-card {
    max-width: 250px;
}
</style>