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
        </div>

        <div class="timeline">
          <div class="timeline-item glass-card" *ngFor="let exp of experiences">
            <div class="timeline-dot"></div>
            <div class="exp-date">{{ exp.date }}</div>
            <div class="exp-content">
              <h3>{{ exp.role }}</h3>
              <p class="company">{{ exp.company }}</p>
              <ul>
                <li *ngFor="let bullet of exp.bullets">
                  <i data-lucide="check-circle-2"></i>
                  {{ bullet }}
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
      position: relative;
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
      transform: translateY(-5px); /* Only move up, not sideways to keep timeline aligned */
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

    .exp-date {
      color: var(--primary);
      font-weight: 800;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 1rem;
      display: inline-block;
      padding: 0.4rem 1rem;
      background: rgba(56, 189, 248, 0.1);
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
      font-size: 1.1rem;
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
      gap: 1rem; 
      color: var(--text-muted);
      font-size: 1.05rem;
      line-height: 1.6;
    }
    
    ul li i { 
      color: var(--primary); 
      width: 20px; 
      height: 20px;
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
      date: 'Jan 2025 - Current',
      role: 'Front-end Developer',
      company: 'Logicfocus Technology Solutions India, Coimbatore',
      bullets: [
        'Started as a Frontend Developer Intern (3 months) and transitioned to a full-time Frontend Developer based on performance.',
        'Worked on an ongoing production project using Angular to build responsive UI components.',
        'Implementing clean code practices and collaborating with the backend team for API integration.'
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
