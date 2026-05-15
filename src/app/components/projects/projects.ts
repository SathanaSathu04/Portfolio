import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var lucide: any;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding" id="projects">
      <div class="container">
        <div class="section-header text-center">
          <p class="subtitle">Portfolio</p>
          <h2>My <span>Projects</span></h2>
          <p class="header-desc">Real-world applications built with a focus on performance, scalability, and beautiful user experiences.</p>
        </div>

        <div class="projects-timeline">
          <div class="timeline-track"></div>

          <div class="project-item" *ngFor="let project of projects; let i = index"
               [class.right]="i % 2 !== 0">

            <div class="project-content glass-card">
              <div class="project-number">{{ '0' + (i + 1) }}</div>

              <div class="project-tags">
                <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
              </div>

              <h3>{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>

              <ul class="project-features">
                <li *ngFor="let feature of project.features">
                  <i data-lucide="check-circle-2"></i>
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <div class="project-meta">
                <div class="meta-item" *ngFor="let meta of project.meta">
                  <i [attr.data-lucide]="meta.icon"></i>
                  <span>{{ meta.label }}</span>
                </div>
              </div>
            </div>

            <div class="timeline-dot">
              <i [attr.data-lucide]="project.icon"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .text-center { text-align: center; margin-bottom: 6rem; }

    .subtitle {
      color: var(--primary);
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 4px;
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      display: block;
    }

    .section-header h2 {
      font-size: 4rem;
      font-weight: 800;
      letter-spacing: -1px;
      margin-bottom: 1.5rem;
    }

    .section-header h2 span {
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .header-desc {
      color: var(--text-muted);
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.8;
    }

    /* --- Timeline Layout --- */
    .projects-timeline {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }

    .timeline-track {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      transform: translateX(-50%);
      background: linear-gradient(to bottom, transparent, var(--primary), var(--secondary), transparent);
      opacity: 0.25;
    }

    /* --- Each Row --- */
    .project-item {
      display: flex;
      justify-content: flex-end;
      padding-right: calc(50% + 3rem);
      position: relative;
      opacity: 0;
      transform: translateX(-50px);
      transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 1, 0.3, 1);
    }

    .project-item.right {
      justify-content: flex-start;
      padding-right: 0;
      padding-left: calc(50% + 3rem);
      transform: translateX(50px);
    }

    .project-item.active {
      opacity: 1;
      transform: translateX(0);
    }

    /* --- Timeline Dot --- */
    .timeline-dot {
      position: absolute;
      left: 50%;
      top: 3rem;
      transform: translateX(-50%);
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: var(--bg-dark);
      border: 2px solid var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
      z-index: 2;
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
      transition: var(--transition);
    }

    .timeline-dot i { width: 22px; height: 22px; }

    .project-item:hover .timeline-dot {
      background: var(--primary);
      color: white;
      box-shadow: 0 0 30px rgba(56, 189, 248, 0.6);
      transform: translateX(-50%) scale(1.1);
    }

    /* --- Card --- */
    .project-content {
      width: 100%;
      max-width: 520px;
      padding: 3rem;
      border-radius: 28px;
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.5) 100%);
      border: 1px solid var(--glass-border);
      transition: var(--transition);
      position: relative;
      overflow: hidden;
    }

    .project-content::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--gradient-1);
      opacity: 0;
      transition: var(--transition);
    }

    .project-content:hover {
      border-color: var(--primary);
      transform: translateY(-8px);
      box-shadow: 0 25px 50px rgba(0,0,0,0.4), var(--shadow-glow);
    }

    .project-content:hover::before { opacity: 1; }

    .project-number {
      font-size: 5rem;
      font-weight: 900;
      line-height: 1;
      color: rgba(56, 189, 248, 0.08);
      position: absolute;
      top: 1rem;
      right: 2rem;
      letter-spacing: -3px;
      pointer-events: none;
      font-variant-numeric: tabular-nums;
    }

    .project-tags {
      display: flex;
      flex-wrap: nowrap;
      gap: 0.6rem;
      margin-bottom: 1.5rem;
      overflow: hidden;
    }

    .tag {
      font-size: 0.72rem;
      font-weight: 800;
      padding: 0.35rem 0.9rem;
      background: rgba(56, 189, 248, 0.1);
      color: var(--primary);
      border-radius: 100px;
      text-transform: uppercase;
      letter-spacing: 1px;
      border: 1px solid rgba(56, 189, 248, 0.2);
      white-space: nowrap;
      flex-shrink: 0;
    }

    h3 {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 1rem;
      letter-spacing: -0.5px;
    }

    .project-desc {
      color: var(--text-muted);
      line-height: 1.8;
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    .project-features {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      margin-bottom: 2rem;
    }

    .project-features li {
      display: flex;
      align-items: flex-start;
      gap: 0.9rem;
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .project-features li i {
      color: var(--primary);
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      margin-top: 3px;
    }

    .project-meta {
      display: flex;
      gap: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--glass-border);
      flex-wrap: wrap;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .meta-item i { width: 16px; height: 16px; color: var(--primary); }

    /* --- Responsive --- */
    @media (max-width: 900px) {
      .timeline-track { left: 2rem; }

      .project-item,
      .project-item.right {
        justify-content: flex-start;
        padding-left: 5rem;
        padding-right: 0;
        transform: translateX(-20px);
      }

      .project-item.active { transform: translateX(0); }

      .timeline-dot {
        left: 2rem;
        transform: translateX(-50%);
      }

      .project-item:hover .timeline-dot {
        transform: translateX(-50%) scale(1.1);
      }

      .project-content { max-width: 100%; }
      .section-header h2 { font-size: 2.8rem; }
    }

    @media (max-width: 576px) {
      .project-content { padding: 2rem; }
      h3 { font-size: 1.6rem; }
      .project-number { font-size: 4rem; }
    }
  `]
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  projects = [
    {
      title: 'Homeplus Services',
      description: 'A full-featured modular Angular application for a home services platform, featuring complex state management, lazy-loaded modules, and a fully responsive UI architecture.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
      icon: 'home',
      features: [
        'Implemented reusable component library with dynamic forms and custom validators',
        'Integrated RESTful APIs with Angular HttpClient and managed app state using RxJS BehaviorSubjects',
        'Built responsive layouts using CSS Grid and Flexbox that scale across all device sizes',
        'Applied lazy-loading and route guards for improved performance and secure navigation'
      ],
      meta: [
        { icon: 'building-2', label: 'Logicfocus' },
        { icon: 'calendar', label: '2025' },
        { icon: 'users', label: 'Live Product' }
      ]
    },
    {
      title: 'Meetplus',
      description: 'A real-time meeting and appointment booking management system with interactive dashboards, role-based access control, and seamless backend API integration.',
      tags: ['Angular', 'RxJS', 'CRUD Operations', 'REST APIs'],
      icon: 'calendar-check',
      features: [
        'Developed role-based dashboards for Admin, Manager and User with distinct access controls',
        'Built real-time booking features with conflict detection and calendar view integration',
        'Implemented clean code architecture with modular services and maintainable component design',
        'Collaborated closely with backend team for smooth API integration and data flow management'
      ],
      meta: [
        { icon: 'building-2', label: 'Logicfocus' },
        { icon: 'calendar', label: '2025' },
        { icon: 'users', label: 'Live Product' }
      ]
    }
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
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.05 });

    const items = document.querySelectorAll('.project-item');
    items.forEach(item => this.observer?.observe(item));
  }
}
