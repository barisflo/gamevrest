<template>
  <div class="game-banner-wrapper">
    <div class="game-banner">
      <div class="banner-content">
        <div class="banner-text">
          <h1 class="banner-title">
            Messy Kingdom
          </h1>
          <p class="banner-subtitle">
            A chaotic adventure awaits in this whimsical kingdom!
          </p>
          <p class="banner-description">
            Dive into a world where chaos reigns supreme. Navigate through unpredictable challenges, 
            meet quirky characters, and restore order to the most wonderfully messy kingdom ever created.
          </p>
          <div class="banner-features">
            <div class="feature-tag">Adventure</div>
            <div class="feature-tag">Puzzle</div>
            <div class="feature-tag">Indie</div>
          </div>
          <a 
            href="https://barisflo.itch.io/messy-kingdom" 
            target="_blank" 
            rel="noopener noreferrer"
            class="play-button"
          >
            <span class="button-text">🎮 Play Now on itch.io</span>
            <div class="button-glow"></div>
          </a>
        </div>
        <div class="banner-visual">
          <div class="game-preview">
            <div class="preview-placeholder">
              <div class="crown-icon">👑</div>
              <div class="messy-elements">
                <div class="element element-1">⚔️</div>
                <div class="element element-2">🏰</div>
                <div class="element element-3">🌟</div>
                <div class="element element-4">🎭</div>
                <div class="element element-5">🗝️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-banner-wrapper {
  width: 100%;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}

.game-banner {
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.1) 0%,
    rgba(147, 51, 234, 0.1) 25%,
    rgba(236, 72, 153, 0.1) 50%,
    rgba(249, 115, 22, 0.1) 75%,
    rgba(34, 197, 94, 0.1) 100%
  );
  background-image: url('/castle_16.9__spring_borders.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  padding: 3rem 2rem;
  position: relative;
  margin: 0 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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
    rgba(255, 255, 255, 0.85) 100%
  );
  backdrop-filter: blur(1px);
  border-radius: 20px;
  z-index: 1;
}

.banner-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
}

.banner-text {
  color: #1f2937;
}

.banner-title {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #7c3aed, #ec4899, #f59e0b);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.banner-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #374151;
}

.banner-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #6b7280;
}

.banner-features {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.feature-tag {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.play-button {
  display: inline-block;
  position: relative;
  background: linear-gradient(135deg, #059669, #0d9488);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(5, 150, 105, 0.3);
  overflow: hidden;
}

.play-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(5, 150, 105, 0.4);
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
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.play-button:hover .button-glow {
  left: 100%;
}

.banner-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-preview {
  width: 300px;
  height: 200px;
  position: relative;
}

.preview-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fbbf24, #ec4899, #8b5cf6);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.crown-icon {
  font-size: 4rem;
  animation: float 3s ease-in-out infinite;
}

.messy-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.element {
  position: absolute;
  font-size: 1.5rem;
  animation: float 2s ease-in-out infinite;
}

.element-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  top: 30%;
  right: 15%;
  animation-delay: 0.5s;
}

.element-3 {
  bottom: 25%;
  left: 20%;
  animation-delay: 1s;
}

.element-4 {
  bottom: 30%;
  right: 10%;
  animation-delay: 1.5s;
}

.element-5 {
  top: 60%;
  left: 50%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .game-banner {
    padding: 2rem 1rem;
    margin: 0 0.5rem;
  }
  
  .banner-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .banner-title {
    font-size: 2.5rem;
  }
  
  .banner-subtitle {
    font-size: 1.2rem;
  }
  
  .banner-description {
    font-size: 1rem;
  }
  
  .game-preview {
    width: 250px;
    height: 150px;
  }
  
  .crown-icon {
    font-size: 3rem;
  }
  
  .element {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .game-banner {
    padding: 1.5rem 1rem;
  }
  
  .banner-title {
    font-size: 2rem;
  }
  
  .play-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
  
  .game-preview {
    width: 200px;
    height: 120px;
  }
}
</style>