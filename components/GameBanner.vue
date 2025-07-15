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
          <div class="banner-features">
            <div class="feature-tag">Puzzle</div>
            <div class="feature-tag">Unity</div>
            <div class="feature-tag">Free</div>
          </div>
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
            class="play-button"
          >
            <span class="button-text">🎮 Play Now</span>
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
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(249, 250, 251, 0.85) 100%
  );
  border: 1px solid rgba(229, 231, 235, 0.8);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  position: relative;
  margin: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
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
  gap: 1rem;
}

.game-logo {
  max-width: 250px;
}

.logo-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.02);
}

.banner-description {
  font-size: 1rem;
  line-height: 1.5;
  color: #6b7280;
  margin: 0;
}

.banner-features {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.feature-tag {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.banner-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-preview {
  width: 200px;
  height: auto;
  position: relative;
}

.screenshot-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.screenshot-image:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.banner-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.play-button {
  display: inline-block;
  position: relative;
  background: linear-gradient(135deg, #059669, #0d9488);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
  overflow: hidden;
  border: none;
}

.play-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(5, 150, 105, 0.4);
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
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.play-button:hover .button-glow {
  left: 100%;
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
    max-width: 200px;
    margin: 0 auto;
  }
  
  .game-preview {
    width: 180px;
    margin: 0 auto;
  }
  
  .banner-description {
    font-size: 0.9rem;
  }
  
  .banner-features {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .game-banner {
    padding: 1rem;
    margin: 0 0.5rem;
  }
  
  .banner-content {
    gap: 1rem;
  }
  
  .game-logo {
    max-width: 160px;
  }
  
  .game-preview {
    width: 150px;
  }
  
  .play-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .banner-description {
    font-size: 0.85rem;
  }
  
  .feature-tag {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
}
</style>