import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var lucide: any;

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding" id="skills">
      <div class="container">
        <div class="section-header text-center">
          <p class="subtitle">Expertise</p>
          <h2>Skills & <span>Tools</span></h2>
        </div>

        <div class="skills-wrapper">
          <div class="skill-category">
            <h3>Tools & Workflow</h3>
            <div class="skills-grid">
              <div class="skill-card glass-card" *ngFor="let tool of tools">
                <i [attr.data-lucide]="tool.icon"></i>
                <span>{{ tool.name }}</span>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3>Development</h3>
            <div class="skills-grid">
              <div class="skill-card glass-card" *ngFor="let skill of devSkills">
                <i [attr.data-lucide]="skill.icon"></i>
                <span>{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .text-center { text-align: center; margin-bottom: 5rem; }
    
    .section-header h2 {
      font-size: 4rem;
      margin-top: 0.5rem;
      font-weight: 800;
      letter-spacing: -1px;
    }

    .section-header h2 span {
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subtitle {
      color: var(--primary);
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 4px;
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      display: block;
    }

    .skills-wrapper {
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }

    .skill-category {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
    }

    .skill-category.active {
      opacity: 1;
      transform: translateY(0);
    }

    .skill-category h3 {
      font-size: 1.8rem;
      margin-bottom: 2.5rem;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      color: var(--text-main);
    }

    .skill-category h3::after {
      content: '';
      flex-grow: 1;
      height: 1px;
      background: linear-gradient(to right, var(--glass-border), transparent);
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 2rem;
    }

    .skill-card {
      aspect-ratio: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      padding: 1.5rem;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--glass-border);
      transition: var(--transition);
      cursor: default;
    }

    .skill-card:hover {
      background: rgba(56, 189, 248, 0.08);
      border-color: var(--primary);
      transform: translateY(-10px) scale(1.05);
      box-shadow: 0 15px 30px rgba(0,0,0,0.3), var(--shadow-glow);
    }

    .skill-card i {
      width: 40px;
      height: 40px;
      color: var(--text-muted);
      transition: var(--transition);
    }

    .skill-card:hover i {
      color: var(--primary);
      transform: scale(1.1);
    }

    .skill-card span {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-muted);
      transition: var(--transition);
    }

    .skill-card:hover span {
      color: var(--text-main);
    }

    @media (max-width: 768px) {
      .skills-grid { grid-template-columns: repeat(3, 1fr); gap: 1rem; }
      .skill-card { padding: 1rem; }
      .section-header h2 { font-size: 2.5rem; }
    }

    @media (max-width: 480px) {
      .skills-grid { grid-template-columns: repeat(2, 1fr); }
    }
  `]
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  devSkills = [
    { name: 'Angular', icon: 'layers' },
    { name: 'React', icon: 'atom' },
    { name: 'TypeScript', icon: 'code-2' },
    { name: 'JavaScript', icon: 'braces' },
    { name: 'HTML5', icon: 'layout' },
    { name: 'CSS3', icon: 'palette' }
  ];

  tools = [
    { name: 'Git', icon: 'git-branch' },
    { name: 'GitHub', icon: 'git-pull-request' },
    { name: 'VS Code', icon: 'terminal' },
    { name: 'Postman', icon: 'send' },
    { name: 'Jira', icon: 'layout-grid' },
    { name: 'Swagger', icon: 'file-text' }
  ];

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
          entry.target.classList.remove('active');
        }
      });
    }, options);

    const categories = document.querySelectorAll('.skill-category');
    categories.forEach(cat => this.observer?.observe(cat));
  }
}
