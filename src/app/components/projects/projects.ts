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
          <h2>Featured <span>Projects</span></h2>
          <p class="header-desc">
            Production web platforms built with Angular, TypeScript, and modern API architectures, 
            focused on reliable workflows, scalability, and seamless user experiences.
          </p>
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
      max-width: 650px;
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
      max-width: 560px;
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
      flex-wrap: wrap;
      gap: 0.6rem;
      margin-bottom: 1.5rem;
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
      title: 'Healthcare Management Platform',
      description: 'An enterprise healthcare platform managing patient consultations, clinic appointment lifecycles, and queue automation with real-time status handling.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Queue Management'],
      icon: 'activity',
      features: [
        'Implemented appointment booking, confirmation, rescheduling, and cancellation workflows.',
        'Developed doctor appointment queue management with patient check-in, call, recall, skip, and consultation status management.',
        'Implemented walk-in consultation functionality, including token generation, queue position, and estimated waiting time.',
        'Developed recurring appointment workflows with occurrence-level and series-level status handling.',
        'Integrated APIs for appointment operations, doctor availability, patient consultation data, and queue management.',
        'Implemented patient and doctor workflows based on backend-provided statuses and eligibility rules.'
      ],
      meta: [
        { icon: 'building-2', label: 'Eastencher Software' },
        { icon: 'calendar', label: '2026' },
        { icon: 'shield-check', label: 'Healthcare' }
      ]
    },
    {
      title: 'Homeplus Services',
      description: 'A modular multi-service community management web application facilitating visitor access, utility billing, payment processing, and room reservations.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'Billing & Payments', 'REST APIs'],
      icon: 'home',
      features: [
        'Implemented visitor management functionality, including visitor check-in and QR code generation.',
        'Developed partial payment functionality for managing payment transactions and outstanding balances.',
        'Implemented electricity bill management and payment-related workflows.',
        'Developed invoice creation functionality with billing details and payment information.',
        'Integrated REST APIs for visitor management, billing, payments, and invoice operations.',
        'Implemented booking management features, including booking creation, modification, cancellation, and room availability.'
      ],
      meta: [
        { icon: 'building-2', label: 'Logicfocus' },
        { icon: 'calendar', label: '2025 – 2026' },
        { icon: 'users', label: 'Community Platform' }
      ]
    },
    {
      title: 'Meetplus',
      description: 'A real-time appointment and room reservation system providing dynamic calendar availability, reservation workflows, and application data management.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Scheduling'],
      icon: 'calendar-check',
      features: [
        'Implemented booking management functionality, including creating, editing, and cancelling bookings.',
        'Integrated APIs for room availability, scheduling, and booking details.',
        'Developed booking workflows to manage reservations and related application data.'
      ],
      meta: [
        { icon: 'building-2', label: 'Logicfocus' },
        { icon: 'calendar', label: '2025' },
        { icon: 'clock', label: 'Scheduling System' }
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
    if (typeof IntersectionObserver === 'undefined') {
      const items = document.querySelectorAll('.project-item');
      items.forEach(item => item.classList.add('active'));
      return;
    }

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
