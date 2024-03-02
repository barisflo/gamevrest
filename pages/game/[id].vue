<template>
    <div class="flex flex-col overflow-hidden rounded-md">
        <a>
            <!-- <NuxtImg :src="house?.image" :alt="house?.name" width="600" class="h-[200px] object-cover rounded-md" /> -->
            <div class="flex flex-col py-2 pl-1 text-black">
                <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold truncate overflow-hidden max-w-[200px]">{{ house?.name }}</h3>
                    <p class="text-sm">{{ house?.rating }}/5</p>
                </div>
                <p class="text-base text-slate-900">{{ house?.description }}</p>
                <p class="pt-2 font-bold">{{ formatKRW(house?.price) }}/month</p>
            </div>
        </a>
    </div>
</template>
  
<script setup lang="ts">
import { formatKRW } from '~/scripts/utils'

const route = useRoute()

const houseId = route.params.id

const house = computed(() => useHouses().find((house) => house.rating.toString() == houseId))

useHead({
    title: "Koho - " + house.value?.name,
})
//const progress = useLocalStorage('progress', [])
</script>