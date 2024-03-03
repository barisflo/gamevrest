<template>
<header
          class="flex flex-wrap z-50 w-full bg-white border-b border-gray-200 text-sm  dark:bg-gray-800 dark:border-gray-700">
          <nav
              class="relative max-w-7xl w-full mx-auto px-4 flex items-center justify-between lg:px-8"
              aria-label="Global">
              <div class="flex items-center justify-between">
                  <a class="flex items-center justify-between text-xl font-semibold dark:text-white min-w-16" href="/" aria-label="Brand">
                      <NuxtImg
                      src="/logo.png"
                      alt="Gamevrest logo"
                      width="60"
                  />
                <p class="hidden sm:block" >
                    Gamevrest
                </p></a>

              </div>
                  <div
                      class="flex flex-row items-center justify-end gap-x-6 mt-0 pl-7">
                         <a class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                         href="/previous-games">Previous Games</a>
                         <a class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                         href="/team">Our team</a>
                  </div>
          </nav>
      </header>
</template>