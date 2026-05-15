import { Component, AfterViewInit, OnDestroy } from '@angular/core';

declare var lucide: any;

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="section-padding" id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-visual animate-on-scroll">
            <div class="visual-stack">
              <div class="visual-box primary-box glass-card">
                <i data-lucide="code-2"></i>
                <span class="box-label">Front-end</span>
              </div>
              <div class="visual-box secondary-box glass-card">
                <i data-lucide="layout"></i>
                <span class="box-label">Responsive</span>
              </div>
              <div class="visual-box tertiary-box glass-card">
                <i data-lucide="layers"></i>
                <span class="box-label">Angular</span>
              </div>
              <div class="visual-box quaternary-box glass-card">
                <i data-lucide="zap"></i>
                <span class="box-label">Optimization</span>
              </div>
              <div class="experience-card glass-card">
                <span class="number">1.4+</span>
                <span class="label">Years in Tech</span>
              </div>
            </div>
            <div class="glow-bg"></div>
          </div>
          
          <div class="about-content">
            <div class="section-header animate-on-scroll">
              <p class="subtitle">Discovery</p>
              <h2>The Story <span>Behind The Code</span></h2>
            </div>
            
            <div class="content-body animate-on-scroll">
              <p>
                I am a passionate <span class="text-primary">Frontend Developer</span> with a keen eye for detail 
                and a deep love for creating seamless user experiences. With over a year of hands-on experience 
                in the industry, I've mastered the art of turning complex problems into elegant digital solutions.
              </p>
              <p>
                My objective is to push the boundaries of what's possible on the web, combining 
                <span class="text-secondary">robust engineering</span> with 
                <span class="text-accent">artistic design</span>.
              </p>
              
              <div class="stats-row">
                <div class="stat-card glass-card">
                  <h3>8.6</h3>
                  <p>B.Tech CGPA</p>
                </div>
                <div class="stat-card glass-card">
                  <h3>2</h3>
                  <p>Live Projects</p>
                </div>
                <div class="stat-card glass-card">
                  <h3>Angular</h3>
                  <p>Main Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 0.8fr 1.2fr;
      gap: 5rem;
      align-items: center;
    }

    .about-visual { 
      position: relative;
      height: 450px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .visual-stack {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 2;
    }

    .visual-box {
      position: absolute;
      padding: 2rem;
      border-radius: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      transition: var(--transition);
      width: 180px;
      opacity: 0;
      scale: 0.5;
    }

    .about-visual.active .visual-box {
      opacity: 1;
      scale: 1;
    }

    .primary-box {
      top: 5%;
      left: 0%;
      transform: rotate(-15deg);
      background: rgba(56, 189, 248, 0.1);
      border-color: var(--primary);
      transition-delay: 0.2s;
    }

    .secondary-box {
      bottom: 5%;
      right: 0%;
      transform: rotate(15deg);
      background: rgba(192, 132, 252, 0.1);
      border-color: var(--secondary);
      transition-delay: 0.4s;
    }

    .tertiary-box {
      top: 5%;
      right: 0%;
      transform: rotate(10deg);
      background: rgba(129, 140, 248, 0.1);
      border-color: var(--accent);
      transition-delay: 0.6s;
    }

    .quaternary-box {
      bottom: 5%;
      left: 0%;
      transform: rotate(-10deg);
      background: rgba(16, 185, 129, 0.1);
      border-color: #10b981;
      transition-delay: 0.8s;
    }

    .experience-card {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2.5rem;
      border-radius: 30px;
      text-align: center;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      box-shadow: var(--shadow-lg);
      z-index: 3;
      width: 240px;
      opacity: 0;
      transition: var(--transition);
    }

    .about-visual.active .experience-card {
      opacity: 1;
    }

    .box-label {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--text-main);
      white-space: nowrap;
      margin-top: 0.5rem;
    }

    .visual-box i {
      width: 32px;
      height: 32px;
      color: var(--primary);
      display: block !important;
      visibility: visible !important;
    }

    .experience-card .number {
      display: block;
      font-size: 3.5rem;
      font-weight: 800;
      color: var(--primary);
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    .experience-card .label {
      font-size: 0.9rem;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--text-muted);
      letter-spacing: 1px;
    }

    .glow-bg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 400px;
      background: var(--gradient-1);
      filter: blur(120px);
      opacity: 0.15;
      z-index: 1;
    }

    .visual-stack:hover .primary-box { transform: rotate(-5deg) translate(-10px, -10px); }
    .visual-stack:hover .secondary-box { transform: rotate(5deg) translate(10px, 10px); }
    .visual-stack:hover .tertiary-box { transform: rotate(5deg) translate(10px, -10px); }
    .visual-stack:hover .quaternary-box { transform: rotate(-5deg) translate(-10px, 10px); }
    .visual-stack:hover .experience-card { transform: translate(-50%, -55%); }

    .section-header h2 { font-size: 3rem; margin-top: 0.5rem; }
    .section-header h2 span {
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subtitle {
      color: var(--primary);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 0.8rem;
    }

    .content-body p {
      font-size: 1.15rem;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
      line-height: 1.8;
    }

    .text-primary { color: var(--primary); font-weight: 600; }
    .text-secondary { color: var(--secondary); font-weight: 600; }
    .text-accent { color: var(--accent); font-weight: 600; }

    .stats-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-top: 3rem;
    }

    .stat-card {
      padding: 1.5rem;
      text-align: center;
      border-radius: 20px;
      transition: var(--transition);
    }

    .stat-card:hover {
      transform: translateY(-5px);
      border-color: var(--primary);
      background: rgba(56, 189, 248, 0.05);
    }

    .stat-card h3 { font-size: 1.8rem; color: var(--text-main); margin-bottom: 0.3rem; }
    .stat-card p { font-size: 0.8rem; color: var(--text-muted); font-weight: 700; margin-bottom: 0; }

    @media (max-width: 992px) {
      .about-grid { grid-template-columns: 1fr; gap: 4rem; }
      .about-visual { max-width: 400px; margin: 0 auto; }
      .section-header { text-align: center; }
    }
  `]
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit() {
    this.initIcons();
    this.setupScrollAnimation();
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }

  private initIcons() {
    setTimeout(() => {
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }, 200);
  }

  private setupScrollAnimation() {
    const options = { threshold: 0.05 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Remove so animation replays next time it enters view
          entry.target.classList.remove('active');
        }
      });
    }, options);

    const visual = document.querySelector('.about-visual');
    if (visual) this.observer.observe(visual);
  }
}
