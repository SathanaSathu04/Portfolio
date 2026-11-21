import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var lucide: any;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
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
                <i data-lucide="layers"></i>
                <span class="box-label">Full Stack</span>
              </div>
              <div class="visual-box tertiary-box glass-card">
                <i data-lucide="layout"></i>
                <span class="box-label">Angular</span>
              </div>
              <div class="visual-box quaternary-box glass-card">
                <i data-lucide="server"></i>
                <span class="box-label">Node.js</span>
              </div>
              <div class="experience-card glass-card">
                <span class="number">~2</span>
                <span class="label">Years Experience</span>
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
                I am a dedicated <span class="text-primary">Frontend &amp; Full Stack Developer</span> with a passion for building 
                robust, high-performance web applications. With <span class="text-secondary">around 2 years of professional experience</span> 
                across enterprise healthcare and service platforms, I excel at turning complex workflows into elegant, intuitive digital experiences.
              </p>
              <p>
                My technical approach combines <span class="text-accent">reactive UI architecture</span> using Angular &amp; TypeScript with 
                solid backend engineering principles in Node.js, Express.js, MongoDB, Mongoose, and team collaboration in Azure DevOps (Azure Repos, raising PRs, and work item tracking).
              </p>
              
              <div class="stats-row">
                <div class="stat-card glass-card">
                  <h3>~2 Yrs</h3>
                  <p>Experience</p>
                </div>
                <div class="stat-card glass-card">
                  <h3>3</h3>
                  <p>Live Projects</p>
                </div>
                <div class="stat-card glass-card">
                  <h3>8.6</h3>
                  <p>B.Tech CGPA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Area of Interest Section -->
        <div class="interest-container animate-on-scroll">
          <div class="interest-header">
            <div class="interest-badge">
              <i data-lucide="compass"></i>
              <span>Specialization &amp; Focus</span>
            </div>
            <h3>Areas of <span>Interest</span></h3>
            <p>Core engineering domains and technologies I am deeply passionate about driving forward.</p>
          </div>

          <div class="interest-grid">
            <div class="interest-card glass-card featured">
              <div class="interest-icon-wrap">
                <i data-lucide="layers"></i>
              </div>
              <div class="interest-tag">Primary Interest</div>
              <h4>Full Stack Development</h4>
              <p>
                Architecting end-to-end web applications combining dynamic, reactive Angular frontends 
                with scalable Node.js &amp; Express.js RESTful APIs and MongoDB, ensuring cohesive data flow, clean architecture, and high reliability.
              </p>
            </div>

            <div class="interest-card glass-card">
              <div class="interest-icon-wrap">
                <i data-lucide="layout"></i>
              </div>
              <div class="interest-tag">Frontend</div>
              <h4>Frontend Engineering &amp; UI Architecture</h4>
              <p>
                Designing modular, reusable component systems, managing complex state and asynchronous streams with RxJS, 
                and building pixel-perfect, responsive interfaces with HTML5 &amp; CSS3.
              </p>
            </div>

            <div class="interest-card glass-card">
              <div class="interest-icon-wrap">
                <i data-lucide="server"></i>
              </div>
              <div class="interest-tag">Backend</div>
              <h4>Backend Systems &amp; RESTful APIs</h4>
              <p>
                Developing RESTful APIs, implementing modular controller-service patterns, middleware, 
                authentication, and efficient business logic with Node.js and Express.js.
              </p>
            </div>

            <div class="interest-card glass-card">
              <div class="interest-icon-wrap">
                <i data-lucide="database"></i>
              </div>
              <div class="interest-tag">Database &amp; Version Control</div>
              <h4>MongoDB, Mongoose &amp; Azure DevOps</h4>
              <p>
                Managing NoSQL databases with MongoDB &amp; Mongoose ODM, data modeling, optimizing queries, and collaborating within 
                agile development workflows using Azure DevOps for work item tracking, Azure Repos, and raising PRs for code reviews.
              </p>
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
      margin-bottom: 6rem;
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
      padding: 1.5rem;
      border-radius: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      transition: var(--transition);
      width: 170px;
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
      transform: rotate(-12deg);
      background: rgba(56, 189, 248, 0.1);
      border-color: var(--primary);
      transition-delay: 0.2s;
    }

    .secondary-box {
      bottom: 5%;
      right: 0%;
      transform: rotate(12deg);
      background: rgba(192, 132, 252, 0.1);
      border-color: var(--secondary);
      transition-delay: 0.4s;
    }

    .tertiary-box {
      top: 5%;
      right: 0%;
      transform: rotate(8deg);
      background: rgba(129, 140, 248, 0.1);
      border-color: var(--accent);
      transition-delay: 0.6s;
    }

    .quaternary-box {
      bottom: 5%;
      left: 0%;
      transform: rotate(-8deg);
      background: rgba(16, 185, 129, 0.1);
      border-color: #10b981;
      transition-delay: 0.8s;
    }

    .experience-card {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2.2rem;
      border-radius: 28px;
      text-align: center;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      box-shadow: var(--shadow-lg);
      z-index: 3;
      width: 230px;
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
    }

    .visual-box i {
      width: 28px;
      height: 28px;
      color: var(--primary);
      display: block !important;
    }

    .experience-card .number {
      display: block;
      font-size: 3.2rem;
      font-weight: 800;
      color: var(--primary);
      line-height: 1;
      margin-bottom: 0.4rem;
    }

    .experience-card .label {
      font-size: 0.85rem;
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

    .visual-stack:hover .primary-box { transform: rotate(-5deg) translate(-8px, -8px); }
    .visual-stack:hover .secondary-box { transform: rotate(5deg) translate(8px, 8px); }
    .visual-stack:hover .tertiary-box { transform: rotate(5deg) translate(8px, -8px); }
    .visual-stack:hover .quaternary-box { transform: rotate(-5deg) translate(-8px, 8px); }
    .visual-stack:hover .experience-card { transform: translate(-50%, -53%); }

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
      font-size: 1.12rem;
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
      margin-top: 2.5rem;
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

    /* Area of Interest */
    .interest-container {
      margin-top: 4rem;
      padding-top: 3rem;
      border-top: 1px solid var(--glass-border);
    }

    .interest-header {
      text-align: center;
      max-width: 650px;
      margin: 0 auto 3.5rem auto;
    }

    .interest-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 1rem;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.2);
      border-radius: 100px;
      color: var(--primary);
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 1rem;
    }

    .interest-badge i { width: 14px; height: 14px; }

    .interest-header h3 {
      font-size: 2.8rem;
      font-weight: 800;
      margin-bottom: 0.8rem;
    }

    .interest-header h3 span {
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .interest-header p {
      color: var(--text-muted);
      font-size: 1.05rem;
    }

    .interest-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    .interest-card {
      padding: 2.5rem;
      border-radius: 24px;
      transition: var(--transition);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .interest-card.featured {
      border-color: rgba(56, 189, 248, 0.4);
      background: linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(15, 23, 42, 0.6) 100%);
    }

    .interest-card:hover {
      transform: translateY(-6px);
      border-color: var(--primary);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3), var(--shadow-glow);
    }

    .interest-icon-wrap {
      width: 52px;
      height: 52px;
      border-radius: 16px;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
      margin-bottom: 1.5rem;
    }

    .interest-icon-wrap i { width: 24px; height: 24px; }

    .interest-tag {
      font-size: 0.72rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--primary);
      margin-bottom: 0.5rem;
    }

    .interest-card h4 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--text-main);
    }

    .interest-card p {
      color: var(--text-muted);
      font-size: 0.98rem;
      line-height: 1.7;
      margin: 0;
    }

    @media (max-width: 992px) {
      .about-grid { grid-template-columns: 1fr; gap: 4rem; }
      .about-visual { max-width: 400px; margin: 0 auto; }
      .section-header { text-align: center; }
      .interest-grid { grid-template-columns: 1fr; }
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
    if (typeof IntersectionObserver === 'undefined') {
      const visual = document.querySelector('.about-visual');
      if (visual) visual.classList.add('active');
      const animItems = document.querySelectorAll('.animate-on-scroll');
      animItems.forEach(item => item.classList.add('active'));
      return;
    }

    const options = { threshold: 0.05 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, options);

    const visual = document.querySelector('.about-visual');
    if (visual) this.observer.observe(visual);

    const animItems = document.querySelectorAll('.animate-on-scroll');
    animItems.forEach(item => this.observer?.observe(item));
  }
}
