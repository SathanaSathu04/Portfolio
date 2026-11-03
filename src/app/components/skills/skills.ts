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
          <h2>Technical <span>Skills</span> &amp; Tools</h2>
          <p class="header-desc">
            Comprehensive skill set spanning modern frontend development, backend architecture, database operations, and developer collaboration tools.
          </p>
        </div>

        <div class="skills-wrapper">
          <!-- Technical Skills Grid -->
          <div class="skill-category">
            <div class="category-header">
              <div class="cat-title">
                <i data-lucide="code-2"></i>
                <h3>Core Technical Skills</h3>
              </div>
              <span class="cat-badge">Full Stack Competencies</span>
            </div>

            <div class="tech-skills-grid">
              <div class="tech-card glass-card" *ngFor="let skill of technicalSkills">
                <div class="tech-card-top">
                  <div class="tech-icon-box">
                    <i [attr.data-lucide]="skill.icon"></i>
                  </div>
                  <span class="tech-category-pill">{{ skill.category }}</span>
                </div>
                <h4>{{ skill.name }}</h4>
                <p class="tech-desc">{{ skill.description }}</p>
              </div>
            </div>
          </div>

          <!-- Tools & Workflow Grid -->
          <div class="skill-category">
            <div class="category-header">
              <div class="cat-title">
                <i data-lucide="wrench"></i>
                <h3>Tools &amp; Workflow</h3>
              </div>
              <span class="cat-badge">Development &amp; Collaboration Tools</span>
            </div>

            <div class="tools-grid-container">
              <div class="tools-grid">
                <div class="tool-card glass-card" *ngFor="let tool of tools">
                  <div class="tool-icon-wrap">
                    <i [attr.data-lucide]="tool.icon"></i>
                  </div>
                  <div class="tool-info">
                    <span class="tool-name">{{ tool.name }}</span>
                    <span class="tool-role">{{ tool.role }}</span>
                  </div>
                </div>
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

    .header-desc {
      color: var(--text-muted);
      font-size: 1.1rem;
      max-width: 650px;
      margin: 1rem auto 0 auto;
      line-height: 1.8;
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

    .category-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--glass-border);
      flex-wrap: wrap;
      gap: 1rem;
    }

    .cat-title {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .cat-title i {
      width: 28px;
      height: 28px;
      color: var(--primary);
    }

    .cat-title h3 {
      font-size: 2rem;
      color: var(--text-main);
      margin: 0;
    }

    .cat-badge {
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--primary);
      padding: 0.35rem 0.9rem;
      background: rgba(56, 189, 248, 0.1);
      border-radius: 100px;
      border: 1px solid rgba(56, 189, 248, 0.2);
    }

    /* Technical Skills Grid - Clean 4 columns x 2 rows on desktop */
    .tech-skills-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }

    .tech-card {
      padding: 2rem 1.8rem;
      border-radius: 24px;
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(30, 41, 59, 0.3) 100%);
      border: 1px solid var(--glass-border);
      transition: var(--transition);
      display: flex;
      flex-direction: column;
    }

    .tech-card:hover {
      background: rgba(56, 189, 248, 0.05);
      border-color: var(--primary);
      transform: translateY(-8px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.3), var(--shadow-glow);
    }

    .tech-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }

    .tech-icon-box {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
      transition: var(--transition);
    }

    .tech-card:hover .tech-icon-box {
      background: var(--primary);
      color: white;
      transform: scale(1.08);
    }

    .tech-icon-box i { width: 22px; height: 22px; }

    .tech-category-pill {
      font-size: 0.7rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--text-muted);
      padding: 0.25rem 0.7rem;
      background: rgba(255, 255, 255, 0.04);
      border-radius: 100px;
    }

    .tech-card h4 {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 0.8rem;
    }

    .tech-desc {
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.65;
      margin: 0;
      flex-grow: 1;
    }

    /* Tools Grid - Symmetrical Centered Flex Layout */
    .tools-grid-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .tools-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      max-width: 1100px;
      width: 100%;
    }

    .tool-card {
      width: 245px;
      height: 84px;
      padding: 1rem 1.4rem;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--glass-border);
      transition: var(--transition);
      display: flex;
      align-items: center;
      gap: 1.2rem;
      flex-shrink: 0;
    }

    .tool-card:hover {
      background: rgba(56, 189, 248, 0.06);
      border-color: var(--primary);
      transform: translateY(-6px);
      box-shadow: 0 12px 25px rgba(0,0,0,0.3), var(--shadow-glow);
    }

    .tool-icon-wrap {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
      flex-shrink: 0;
      transition: var(--transition);
    }

    .tool-card:hover .tool-icon-wrap {
      background: var(--primary);
      color: white;
    }

    .tool-icon-wrap i { width: 20px; height: 20px; }

    .tool-info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      overflow: hidden;
    }

    .tool-name {
      font-size: 1rem;
      font-weight: 700;
      color: var(--text-main);
      white-space: nowrap;
    }

    .tool-role {
      font-size: 0.72rem;
      color: var(--primary);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      white-space: nowrap;
    }

    @media (max-width: 1200px) {
      .tech-skills-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 768px) {
      .tech-skills-grid { grid-template-columns: 1fr; }
      .tools-grid { gap: 1rem; }
      .tool-card { width: calc(50% - 0.5rem); min-width: 150px; }
      .section-header h2 { font-size: 2.5rem; }
    }

    @media (max-width: 480px) {
      .tool-card { width: 100%; }
    }
  `]
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  technicalSkills = [
    {
      name: 'Angular',
      category: 'Frontend',
      icon: 'layers',
      description: 'Component-based architecture, services, routing, RxJS, HTTP client, interceptors, reactive forms, and reusable components.'
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'Language',
      icon: 'braces',
      description: 'Advanced proficiency in modern JavaScript with ES6+ features, promises, async/await, and array methods.'
    },
    {
      name: 'TypeScript',
      category: 'Language',
      icon: 'code-2',
      description: 'Strong typing, interfaces, classes, generics, and advanced TypeScript patterns.'
    },
    {
      name: 'HTML5 & CSS3',
      category: 'Frontend',
      icon: 'layout',
      description: 'Semantic HTML, responsive layouts, Flexbox, Grid, and CSS styling.'
    },
    {
      name: 'ASP.NET Core',
      category: 'Backend',
      icon: 'server',
      description: 'Web API development, controllers, services, middleware, dependency injection, routing, and request handling.'
    },
    {
      name: 'C#',
      category: 'Language / Backend',
      icon: 'terminal',
      description: 'Object-oriented programming, classes, interfaces, exception handling, LINQ, and asynchronous programming.'
    },
    {
      name: 'Backend Architecture',
      category: 'Architecture',
      icon: 'network',
      description: 'Controllers, services, repositories, business logic implementation, and API development.'
    },
    {
      name: 'Database (MySQL)',
      category: 'Database',
      icon: 'database',
      description: 'MySQL, database connectivity, SQL queries, CRUD operations, and data handling.'
    }
  ];

  tools = [
    { name: 'Azure DevOps', icon: 'cloud', role: 'PRs & Azure Repos' },
    { name: 'Git', icon: 'git-branch', role: 'Version Control' },
    { name: 'GitHub', icon: 'git-pull-request', role: 'Code Hosting' },
    { name: 'Postman', icon: 'send', role: 'API Testing' },
    { name: 'VS Code', icon: 'laptop', role: 'Development IDE' },
    { name: 'Jira', icon: 'layout-grid', role: 'Project Tracking' },
    { name: 'Swagger', icon: 'file-text', role: 'API Documentation' }
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
    if (typeof IntersectionObserver === 'undefined') {
      const categories = document.querySelectorAll('.skill-category');
      categories.forEach(cat => cat.classList.add('active'));
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

    const categories = document.querySelectorAll('.skill-category');
    categories.forEach(cat => this.observer?.observe(cat));
  }
}
