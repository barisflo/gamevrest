<template>
  <div class="game-banner-wrapper">
    <div class="game-banner">
      <div class="banner-content">
        <div class="banner-left">
          <div class="game-logo">
            <img 
              src="/messy-kingdom-header.png" 
              alt="Messy Kingdom" 
              class="logo-image"
            />
          </div>
          <h3 class="banner-title">Check out our new project !</h3>
          <p class="banner-description">
            The fate of the realm lies in your inventory. You'd better start organizing it.
          </p>
        </div>
        
        <div class="banner-center">
          <div class="game-preview">
            <img 
              src="/messy-kingdom-screenshot.png" 
              alt="Messy Kingdom Screenshot" 
              class="screenshot-image"
            />
          </div>
        </div>

        <div class="banner-right">
          <a 
            href="https://barisflo.itch.io/messy-kingdom" 
            target="_blank" 
            rel="noopener noreferrer"
            class="play-link"
          >
            <span class="link-text">Play now</span>
            <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-banner-wrapper {
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  padding: 0;
}

.game-banner {
  background-image: url('/messy-kingdom-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1.2rem 2rem;
  position: relative;
  margin: 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.game-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.92) 0%,
    rgba(248, 250, 252, 0.88) 50%,
    rgba(241, 245, 249, 0.85) 100%
  );
  backdrop-filter: blur(6px);
  z-index: 1;
}

.banner-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 2;
  max-width: 100%;
  margin: 0;
}

.banner-left {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.banner-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #374151;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
}

.game-logo {
  max-width: 320px;
}

.logo-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
  filter: 
    drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))
    drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))
    contrast(1.2)
    brightness(1.1);
  transform: scale(1.1);
}

.logo-image:hover {
  transform: scale(1.12);
}

.banner-description {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #475569;
  margin: 0;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
}

.banner-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-preview {
  width: 180px;
  height: auto;
  position: relative;
}

.screenshot-image {
  width: 100%;
  height: auto;
  border-radius: 6px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.screenshot-image:hover {
  transform: scale(1.02);
}

.banner-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.play-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #374151;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.8);
}

.play-link:hover {
  color: #1f2937;
  transform: translateX(6px);
}

.link-text {
  font-size: 1.1rem;
  font-weight: 800;
}

.arrow {
  font-size: 1.3rem;
  font-weight: 800;
  transition: transform 0.3s ease;
}

.play-link:hover .arrow {
  transform: translateX(6px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .game-banner {
    padding: 1rem 1.5rem;
  }
  
  .banner-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
  
  .banner-right {
    justify-content: center;
  }
  
  .game-logo {
    max-width: 280px;
    margin: 0 auto;
  }
  
  .game-preview {
    width: 160px;
    margin: 0 auto;
  }
  
  .banner-description {
    font-size: 0.9rem;
  }

  .banner-title {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .game-banner {
    padding: 0.8rem 1rem;
    margin: 0 0.5rem;
  }
  
  .banner-content {
    gap: 1rem;
  }
  
  .game-logo {
    max-width: 240px;
  }
  
  .game-preview {
    width: 140px;
  }
  
  .play-link {
    font-size: 1rem;
  }
  
  .link-text {
    font-size: 1rem;
  }
  
  .arrow {
    font-size: 1.2rem;
  }
  
  .banner-description {
    font-size: 0.85rem;
  }

  .banner-title {
    font-size: 0.9rem;
  }
}
</style>