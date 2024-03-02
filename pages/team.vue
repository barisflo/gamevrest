<template>
    <div class="w-full max-w-5xl mx-auto flex flex-col justify-center">
        <div class="max-w-[185rem] px-4 sm:px-6 lg:px-8 mx-auto">
            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our Team</h2>

            </div>

            <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

                <div class="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                    <NuxtImg width={80} height={80} class="rounded-lg w-24 h-24 shadow" src="/team/fb.jpeg"
                        alt="Florent Baris" />

                    <div class="sm:flex sm:flex-col sm:h-full">
                        <div>
                            <h3 class="font-medium text-gray-800 dark:text-gray-200">
                                Florent Baris
                            </h3>
                            <!-- <h3 class="font-medium text-gray-500 dark:text-gray-200">
                                프로랑 바리스
                            </h3> -->

                            <p class="mt-1 text-xs uppercase text-gray-500">
                                Roi de la montagne
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                    <NuxtImg width={80} height={80} class="rounded-lg w-24 h-24 shadow" src="/team/gaspou.jpg" alt="Gaspard Thirion" />

                    <div class="sm:flex sm:flex-col sm:h-full">
                        <div>
                            <h3 class="font-medium text-gray-800 dark:text-gray-200">
                                Gaspou le BG
                            </h3>
                            <!-- <h3 class="font-medium text-gray-500 dark:text-gray-200">
                                이승연
                            </h3> -->
                            <p class="mt-1 text-xs uppercase text-gray-500">
                                Technico crackito
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                    <div class="rounded-lg w-24 h-24 bg-slate-200 shadow" />

                    <div>
                        <h3 class="font-medium text-gray-800 dark:text-gray-200">
                            You ?
                        </h3>
                        <a class="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500" href="/soon">
                            Join us
                        </a>
                    </div>
                </div>

            </div>
    </div>
</div></template>