import { Component, AfterViewInit } from '@angular/core';

declare var lucide: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero-section" id="hero">
      <div class="glow-orb orb-1"></div>
      <div class="glow-orb orb-2"></div>
      
      <div class="container hero-container">
        <div class="hero-content">
          <div class="badge animate-reveal">
            <span class="pulse"></span>
            Available for new opportunities
          </div>
          
          <h1 class="animate-reveal" style="animation-delay: 0.2s">
            Building Modern <br>
            <span class="text-gradient">Web Applications</span>
          </h1>
          
          <p class="description animate-reveal" style="animation-delay: 0.4s">
            I'm <span class="highlight">Sathana K.P</span>, a Frontend &amp; Full Stack Developer with around 
            2 years of experience specialized in engineering high-performance, responsive web applications 
            with Angular, TypeScript, Node.js &amp; Express.js.
          </p>
          
          <div class="cta-group animate-reveal" style="animation-delay: 0.6s">
            <a href="#projects" class="btn-primary">
              Explore Projects
              <i data-lucide="arrow-right"></i>
            </a>
            <a href="#experience" class="btn-secondary">
              View Experience
              <i data-lucide="briefcase"></i>
            </a>
          </div>
        </div>

        <div class="hero-visual animate-fade-in" style="animation-delay: 0.8s">
          <div class="visual-card glass-card">
            <div class="card-header">
              <div class="dots"><span></span><span></span><span></span></div>
              <span class="code-title">developer.ts</span>
            </div>
            <div class="card-body">
              <pre><code><span class="code-keyword">const</span> <span class="code-variable">developer</span> = &#123;
  name: <span class="code-string">'Sathana K.P'</span>,
  role: <span class="code-string">'Frontend &amp; Full Stack'</span>,
  experience: <span class="code-string">'~2 Years'</span>,
  tech: [<span class="code-string">'Angular'</span>, <span class="code-string">'TypeScript'</span>, <span class="code-string">'Node.js'</span>, <span class="code-string">'Express.js'</span>],
  database: [<span class="code-string">'MongoDB'</span>, <span class="code-string">'Mongoose'</span>],
  tools: [<span class="code-string">'Azure DevOps'</span>, <span class="code-string">'Git'</span>],
  focus: <span class="code-string">'Full Stack Architecture'</span>
&#125;;</code></pre>
            </div>
          </div>
          <div class="floating-badge badge-1 glass-card">
            <i data-lucide="layers"></i>
            <span>Full Stack Dev</span>
          </div>
          <div class="floating-badge badge-2 glass-card">
            <i data-lucide="zap"></i>
            <span>Performance</span>
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <div class="mouse"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding-top: 100px;
      background: radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.05) 0%, transparent 50%),
                  radial-gradient(circle at 100% 100%, rgba(192, 132, 252, 0.05) 0%, transparent 50%);
    }

    .glow-orb {
      position: absolute;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      filter: blur(120px);
      z-index: -1;
      opacity: 0.4;
      animation: orbFloat 20s infinite alternate ease-in-out;
    }

    .orb-1 {
      top: -10%;
      right: -5%;
      background: var(--primary);
    }

    .orb-2 {
      bottom: -10%;
      left: -5%;
      background: var(--secondary);
      animation-delay: -5s;
    }

    @keyframes orbFloat {
      from { transform: translate(0, 0) scale(1); }
      to { transform: translate(-100px, 50px) scale(1.1); }
    }

    .hero-container {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 4rem;
      align-items: center;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.5rem 1rem;
      background: rgba(255,255,255,0.05);
      border: 1px solid var(--glass-border);
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--primary);
      margin-bottom: 2rem;
    }

    .pulse {
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      position: relative;
    }

    .pulse::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(3); opacity: 0; }
    }

    h1 {
      font-size: 5rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      letter-spacing: -2px;
    }

    .highlight { color: var(--text-main); font-weight: 800; border-bottom: 2px solid var(--primary); }

    .description {
      font-size: 1.2rem;
      color: var(--text-muted);
      max-width: 600px;
      margin-bottom: 3rem;
      line-height: 1.8;
    }

    .cta-group {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-main);
      padding: 0.8rem 1.8rem;
      border-radius: 100px;
      font-weight: 600;
      border: 1px solid var(--glass-border);
      cursor: pointer;
      transition: var(--transition);
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 0.95rem;
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--primary);
      transform: translateY(-2px);
    }

    .btn-secondary i {
      width: 18px;
      height: 18px;
      color: var(--primary);
    }

    /* Visual Side */
    .hero-visual { position: relative; }

    .visual-card {
      padding: 0;
      border-radius: 20px;
      box-shadow: var(--shadow-lg);
      transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
      transition: var(--transition);
    }

    .visual-card:hover { transform: perspective(1000px) rotateY(0deg) rotateX(0deg); }

    .card-header {
      padding: 0.8rem 1.2rem;
      background: rgba(255,255,255,0.03);
      border-bottom: 1px solid var(--glass-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .code-title {
      font-size: 0.75rem;
      color: var(--text-muted);
      font-family: 'Fira Code', monospace;
    }

    .dots { display: flex; gap: 6px; }
    .dots span { width: 10px; height: 10px; border-radius: 50%; background: #334155; }
    .dots span:nth-child(1) { background: #ef4444; }
    .dots span:nth-child(2) { background: #f59e0b; }
    .dots span:nth-child(3) { background: #10b981; }

    .card-body { padding: 1.8rem; font-family: 'Fira Code', monospace; font-size: 0.88rem; }
    .code-keyword { color: #c084fc; }
    .code-variable { color: #38bdf8; }
    .code-string { color: #10b981; }

    .floating-badge {
      position: absolute;
      padding: 0.9rem 1.3rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      border-radius: 15px;
      font-weight: 700;
      font-size: 0.85rem;
      box-shadow: var(--shadow-lg);
      animation: float 4s infinite alternate ease-in-out;
    }

    .badge-1 { top: -20px; right: -20px; }
    .badge-2 { bottom: -20px; left: -30px; animation-delay: -2s; }

    .floating-badge i { color: var(--primary); width: 18px; height: 18px; }

    @keyframes float {
      from { transform: translateY(0); }
      to { transform: translateY(-15px); }
    }

    /* Scroll Indicator */
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
      color: var(--text-muted);
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .mouse {
      width: 25px;
      height: 45px;
      border: 2px solid var(--glass-border);
      border-radius: 20px;
      position: relative;
    }

    .mouse::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 50%;
      width: 4px;
      height: 8px;
      background: var(--primary);
      border-radius: 2px;
      transform: translateX(-50%);
      animation: scrollMove 2s infinite;
    }

    @keyframes scrollMove {
      0% { transform: translate(-50%, 0); opacity: 1; }
      100% { transform: translate(-50%, 20px); opacity: 0; }
    }

    /* Animations */
    .animate-reveal {
      opacity: 0;
      animation: revealUp 1s cubic-bezier(0.2, 1, 0.3, 1) forwards;
    }

    @keyframes revealUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 1200px) {
      h1 { font-size: 4rem; }
    }

    @media (max-width: 992px) {
      .hero-container { grid-template-columns: 1fr; text-align: center; }
      .description { margin-left: auto; margin-right: auto; }
      .cta-group { justify-content: center; }
      .hero-visual { display: none; }
    }

    @media (max-width: 576px) {
      h1 { font-size: 3rem; }
    }
  `]
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initIcons();
  }

  private initIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    } else {
      setTimeout(() => this.initIcons(), 100);
    }
  }
}
