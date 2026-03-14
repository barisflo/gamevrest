<template>
  <div class="christmas-section">
    <div class="christmas-banner" :style="{ backgroundImage: `url('/images/Christmas/BG.png')` }">
      <div class="christmas-content">
        <div class="christmas-title-wrapper">
          <NuxtImg
            src="/images/Christmas/title no noel.png"
            alt="Game Noël"
            class="christmas-title"
          />
        </div>
        <div class="christmas-cta">
          <p class="christmas-description">
            Wishlist Jingle Blocks : Christmas themed incremental in which you must make enough Toys for everyone in the world !
          </p>
          <a
            href="https://store.steampowered.com/app/4498810/Jingle_Blocks/"
            target="_blank"
            rel="noopener noreferrer"
            class="christmas-steam-link"
          >
            <NuxtImg
              src="/steam.png"
              alt="Wishlist Jingle Blocks on Steam"
              class="christmas-steam-btn"
              width="300"
            />
          </a>
        </div>
        <div class="christmas-screens">
          <button
            v-for="(screen, index) in screens"
            :key="index"
            type="button"
            class="screen-thumb"
            @click="openZoom(index)"
          >
            <NuxtImg
              :src="screen"
              :alt="`Screenshot ${index + 1}`"
              class="screen-image"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Zoom modal -->
    <Teleport to="body">
      <Transition name="zoom-fade">
        <div
          v-if="zoomedIndex !== null"
          class="zoom-overlay"
          @click.self="closeZoom"
        >
          <button
            type="button"
            class="zoom-close"
            aria-label="Close"
            @click="closeZoom"
          >
            <svg class="zoom-btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <button
            type="button"
            class="zoom-arrow zoom-arrow-prev"
            aria-label="Previous screenshot"
            @click.stop="goPrev"
          >
            <svg class="zoom-btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            class="zoom-arrow zoom-arrow-next"
            aria-label="Next screenshot"
            @click.stop="goNext"
          >
            <svg class="zoom-btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <img
            :src="screens[zoomedIndex]"
            alt="Screenshot zoomed"
            class="zoom-image"
            @click.stop
          >
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const screens = [
  '/images/Christmas/gamemas.png',
  '/images/Christmas/toy.png',
  '/images/Christmas/tree.png',
]

const zoomedIndex = ref<number | null>(null)

function openZoom(index: number) {
  zoomedIndex.value = index
  document.body.style.overflow = 'hidden'
}

function closeZoom() {
  zoomedIndex.value = null
  document.body.style.overflow = ''
}

function goPrev() {
  if (zoomedIndex.value === null) return
  zoomedIndex.value = zoomedIndex.value <= 0 ? screens.length - 1 : zoomedIndex.value - 1
}

function goNext() {
  if (zoomedIndex.value === null) return
  zoomedIndex.value = zoomedIndex.value >= screens.length - 1 ? 0 : zoomedIndex.value + 1
}

function onKeydown(e: KeyboardEvent) {
  if (zoomedIndex.value === null) return
  if (e.key === 'Escape') closeZoom()
  if (e.key === 'ArrowLeft') goPrev()
  if (e.key === 'ArrowRight') goNext()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.christmas-section {
  width: 100%;
  min-width: 0;
  margin-bottom: 1rem;
  position: relative;
}

.christmas-banner {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 3.5rem 2rem;
  min-height: 520px;
  position: relative;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.christmas-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.25) 50%,
    rgba(0, 0, 0, 0.35) 100%
  );
  z-index: 1;
}

.christmas-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
  box-sizing: border-box;
}

.christmas-title-wrapper {
  width: 100%;
  max-width: 600px;
  padding: 0 0.5rem;
}

.christmas-title {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
}

.christmas-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.christmas-description {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  max-width: 520px;
}

.christmas-steam-link {
  display: inline-block;
  transition: transform 0.2s ease;
}

.christmas-steam-link:hover {
  transform: scale(1.05);
}

.christmas-steam-btn {
  display: block;
  max-width: 280px;
  width: 100%;
  height: auto;
  filter:
    drop-shadow(0 0 12px rgba(255, 220, 150, 0.9))
    drop-shadow(0 0 24px rgba(255, 200, 100, 0.6))
    drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
}

.christmas-screens {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.screen-thumb {
  flex: 1 1 260px;
  max-width: 360px;
  min-width: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.screen-thumb:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.screen-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

/* Zoom overlay */
.zoom-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;
  padding: 2rem;
}

.zoom-close,
.zoom-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  color: white;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.zoom-btn-svg {
  display: block;
  width: 50%;
  height: 50%;
  margin: auto;
}

.zoom-close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
}

.zoom-close .zoom-btn-svg {
  width: 44%;
  height: 44%;
}

.zoom-close:hover {
  background: rgba(255, 255, 255, 0.25);
}

.zoom-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  z-index: 10;
}

.zoom-arrow .zoom-btn-svg {
  width: 40%;
  height: 40%;
}

.zoom-arrow:hover {
  background: rgba(255, 255, 255, 0.35);
  border-color: rgba(255, 255, 255, 0.7);
}

.zoom-arrow-prev {
  left: 1rem;
}

.zoom-arrow-next {
  right: 1rem;
}

.zoom-image {
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
  cursor: default;
}

.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: opacity 0.2s ease;
}

.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .christmas-banner {
    padding: 2.5rem 1rem;
    min-height: 480px;
  }

  .christmas-content {
    padding: 0 0.5rem;
  }

  .christmas-title-wrapper {
    max-width: 100%;
    padding: 0;
  }

  .christmas-title {
    width: 100%;
  }

  .christmas-description {
    font-size: 0.9rem;
  }

  .christmas-steam-btn {
    max-width: 240px;
  }

  .christmas-screens {
    gap: 1rem;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .screen-thumb {
    width: 100%;
    max-width: 100%;
    flex: none;
  }
}

@media (max-width: 480px) {
  .christmas-banner {
    padding: 2rem 0.75rem;
  }

  .christmas-content {
    padding: 0 0.25rem;
  }

  .zoom-arrow {
    width: 44px;
    height: 44px;
    font-size: 1.75rem;
  }

  .zoom-arrow-prev {
    left: 0.5rem;
  }

  .zoom-arrow-next {
    right: 0.5rem;
  }
}
</style>
