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
          <p class="banner-description">
            The fate of the realm lies in your inventory. You'd better start organizing it.
          </p>
        </div>
        
        <div class="banner-center">
          <div class="game-preview">
            <div class="preview-container">
              <img 
                src="/messy-kingdom-screenshot.png" 
                alt="Messy Kingdom Screenshot" 
                class="screenshot-image"
              />
            </div>
          </div>
        </div>

        <div class="banner-right">
          <a 
            href="https://barisflo.itch.io/messy-kingdom" 
            target="_blank" 
            rel="noopener noreferrer"
            class="play-button"
          >
            <span class="button-text">Try now</span>
            <div class="button-glow"></div>
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
  border-radius: 16px;
  padding: 2rem 2.5rem;
  position: relative;
  margin: 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
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
    rgba(255, 255, 255, 0.95) 0%,
    rgba(248, 250, 252, 0.90) 30%,
    rgba(241, 245, 249, 0.85) 70%,
    rgba(226, 232, 240, 0.80) 100%
  );
  backdrop-filter: blur(8px);
  border-radius: 16px;
  z-index: 1;
}

.banner-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  position: relative;
  z-index: 2;
  max-width: 100%;
  margin: 0;
}

.banner-left {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.game-logo {
  max-width: 280px;
}

.logo-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  transition: transform 0.4s ease;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.logo-image:hover {
  transform: scale(1.01);
}

.banner-description {
  font-size: 1.1rem;
  line-height: 1.6;
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
  width: 220px;
  height: auto;
  position: relative;
}

.preview-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  padding: 8px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.screenshot-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.4s ease;
}

.preview-container:hover .screenshot-image {
  transform: scale(1.02);
}

.banner-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.play-button {
  display: inline-block;
  position: relative;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.4s ease;
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.3);
  overflow: hidden;
  border: none;
  text-transform: lowercase;
  letter-spacing: 0.5px;
}

.play-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
  background: linear-gradient(135deg, #7c3aed, #6d28d9);
}

.button-text {
  position: relative;
  z-index: 2;
}

.button-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
  transition: left 0.8s ease;
}

.play-button:hover .button-glow {
  left: 100%;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .game-banner {
    padding: 1.5rem 2rem;
  }
  
  .banner-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .banner-right {
    justify-content: center;
  }
  
  .game-logo {
    max-width: 240px;
    margin: 0 auto;
  }
  
  .game-preview {
    width: 200px;
    margin: 0 auto;
  }
  
  .banner-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .game-banner {
    padding: 1.2rem 1.5rem;
    margin: 0 0.5rem;
  }
  
  .banner-content {
    gap: 1.5rem;
  }
  
  .game-logo {
    max-width: 200px;
  }
  
  .game-preview {
    width: 180px;
  }
  
  .play-button {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
  
  .banner-description {
    font-size: 0.9rem;
  }
}
</style>