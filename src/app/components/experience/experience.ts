import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var lucide: any;

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding bg-accent-soft" id="experience">
      <div class="container">
        <div class="section-header text-center">
          <p class="subtitle">My Journey</p>
          <h2>Work <span>Experience</span></h2>
          <p class="section-tagline">Around 2 years of industry experience engineering production web platforms</p>
        </div>

        <div class="timeline">
          <div class="timeline-item glass-card" *ngFor="let exp of experiences">
            <div class="timeline-dot"></div>
            <div class="exp-header">
              <span class="exp-date">{{ exp.date }}</span>
              <span class="exp-type">{{ exp.type }}</span>
            </div>
            <div class="exp-content">
              <h3>{{ exp.role }}</h3>
              <p class="company">{{ exp.company }}</p>
              <ul>
                <li *ngFor="let bullet of exp.bullets">
                  <i data-lucide="check-circle-2"></i>
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .text-center { text-align: center; margin-bottom: 4rem; }
    
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
      margin-top: 0.5rem;
      font-weight: 800;
      letter-spacing: -1px;
    }

    .section-header h2 span {
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .section-tagline {
      color: var(--text-muted);
      font-size: 1.1rem;
      margin-top: 0.8rem;
    }

    .timeline {
      max-width: 900px;
      margin: 0 auto;
      position: relative;
      padding: 3rem 0;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(to bottom, transparent, var(--primary), var(--secondary), transparent);
      opacity: 0.3;
    }

    .timeline-item {
      margin-left: 3rem;
      margin-bottom: 4rem;
      padding: 3rem;
      position: relative;
      border-radius: 24px;
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.4) 100%);
      border: 1px solid var(--glass-border);
      transition: var(--transition);
      opacity: 0;
      transform: translateX(-30px);
    }

    .timeline-item.active {
      opacity: 1;
      transform: translateX(0);
    }

    .timeline-item:hover {
      transform: translateY(-5px);
      border-color: var(--primary);
      box-shadow: 0 20px 40px rgba(0,0,0,0.4), var(--shadow-glow);
    }

    .timeline-dot {
      position: absolute;
      left: -3.4rem;
      top: 3.5rem;
      width: 16px;
      height: 16px;
      background: var(--bg-dark);
      border: 3px solid var(--primary);
      border-radius: 50%;
      z-index: 2;
      box-shadow: 0 0 15px var(--primary);
      transition: var(--transition);
    }

    .timeline-item:hover .timeline-dot {
      background: var(--primary);
      box-shadow: 0 0 25px var(--primary);
    }

    .exp-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }

    .exp-date {
      color: var(--primary);
      font-weight: 800;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      display: inline-block;
      padding: 0.4rem 1rem;
      background: rgba(56, 189, 248, 0.1);
      border-radius: 100px;
    }

    .exp-type {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 0.35rem 0.8rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 100px;
    }

    h3 { 
      font-size: 2rem; 
      margin-bottom: 0.5rem; 
      letter-spacing: -0.5px;
    }
    
    .company { 
      color: var(--text-main); 
      font-weight: 700; 
      font-size: 1.15rem;
      margin-bottom: 2rem; 
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
    
    .company::before {
      content: '';
      width: 20px;
      height: 2px;
      background: var(--primary);
      display: inline-block;
    }

    ul { 
      display: flex; 
      flex-direction: column; 
      gap: 1.2rem; 
    }
    
    ul li { 
      display: flex; 
      align-items: flex-start;
      gap: 1rem; 
      color: var(--text-muted);
      font-size: 1.02rem;
      line-height: 1.6;
    }
    
    ul li i { 
      color: var(--primary); 
      width: 18px; 
      height: 18px;
      flex-shrink: 0; 
      margin-top: 4px; 
    }

    @media (max-width: 768px) {
      .timeline-item { 
        padding: 2rem; 
        margin-left: 2rem;
      }
      .timeline-dot {
        left: -2.4rem;
      }
      h3 { font-size: 1.5rem; }
    }
  `]
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  experiences = [
    {
      role: 'Frontend Developer',
      company: 'Eastencher Software Private Limited',
      date: '07/2026 – Present',
      type: 'Full-Time',
      bullets: [
        'Develop healthcare application modules using Angular, TypeScript, HTML, and CSS.',
        'Implement appointment management, doctor availability, appointment queue, and walk-in consultation workflows.',
        'Integrate REST APIs using Angular services and HttpClient, handling asynchronous operations with RxJS.',
        'Implement recurring appointment functionality and patient/doctor workflows based on backend-provided statuses and business rules.',
        'Handle frontend functionality for patient and doctor modules based on application requirements.'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Logicfocus Technology Solutions',
      date: '01/2025 – 06/2026',
      type: 'Full-Time',
      bullets: [
        'Developed web application modules using Angular and TypeScript.',
        'Implemented booking management features, including creating, editing, and cancelling bookings.',
        'Integrated REST APIs to manage application data, room availability, scheduling, and booking details.',
        'Implemented application functionality based on business requirements and API responses.'
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
      const items = document.querySelectorAll('.timeline-item');
      items.forEach(item => item.classList.add('active'));
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

    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => this.observer?.observe(item));
  }
}
