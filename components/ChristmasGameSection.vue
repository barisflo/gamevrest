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
        <div class="christmas-screens">
          <button
            v-for="(screen, index) in screens"
            :key="index"
            type="button"
            class="screen-thumb"
            @click="openZoom(screen)"
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
          v-if="zoomedImage"
          class="zoom-overlay"
          @click.self="closeZoom"
        >
          <button
            type="button"
            class="zoom-close"
            aria-label="Close"
            @click="closeZoom"
          >
            ×
          </button>
          <img
            :src="zoomedImage"
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

const zoomedImage = ref<string | null>(null)

function openZoom(src: string) {
  zoomedImage.value = src
  document.body.style.overflow = 'hidden'
}

function closeZoom() {
  zoomedImage.value = null
  document.body.style.overflow = ''
}

onUnmounted(() => {
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

.zoom-close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  width: 48px;
  height: 48px;
  font-size: 2rem;
  line-height: 1;
  color: white;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
}

.zoom-close:hover {
  background: rgba(255, 255, 255, 0.25);
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
}
</style>
