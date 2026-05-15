import { Component, AfterViewInit } from '@angular/core';

declare var lucide: any;

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="section-padding">
      <div class="container">

        <div class="footer-top">
          <div class="footer-brand">
            <a href="#" class="logo">Sathana<span>.K.P</span></a>
            <p class="brand-desc">
              Building high-performance, visually stunning web applications with 
              a focus on user experience and technical excellence.
            </p>

            <div class="brand-tags">
              <span class="brand-tag">Angular</span>
              <span class="brand-tag">React</span>
              <span class="brand-tag">TypeScript</span>
              <span class="brand-tag">RxJS</span>
            </div>

            <div class="brand-stats">
              <div class="bstat">
                <span class="bstat-num">2</span>
                <span class="bstat-label">Live Projects</span>
              </div>
              <div class="bstat-divider"></div>
              <div class="bstat">
                <span class="bstat-num">1.4+</span>
                <span class="bstat-label">Years Exp.</span>
              </div>
              <div class="bstat-divider"></div>
              <div class="bstat">
                <span class="bstat-num">8.6</span>
                <span class="bstat-label">CGPA</span>
              </div>
            </div>
          </div>

          <div class="footer-contact" id="contact">
            <h3>Let's Connect</h3>
            <div class="contact-cards">
              <a href="mailto:sathanasana.04@gmail.com" class="contact-card">
                <div class="card-icon"><i data-lucide="mail"></i></div>
                <div class="card-info">
                  <span class="card-label">Email</span>
                  <span class="card-value">sathanasana.04@gmail.com</span>
                </div>
                <i data-lucide="arrow-up-right" class="arrow-icon"></i>
              </a>
              <a href="tel:+919791777316" class="contact-card">
                <div class="card-icon"><i data-lucide="phone"></i></div>
                <div class="card-info">
                  <span class="card-label">Phone</span>
                  <span class="card-value">+91 97917 77316</span>
                </div>
                <i data-lucide="arrow-up-right" class="arrow-icon"></i>
              </a>
              <div class="contact-card no-link">
                <div class="card-icon"><i data-lucide="map-pin"></i></div>
                <div class="card-info">
                  <span class="card-label">Location</span>
                  <span class="card-value">Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 Sathana K.P. Crafted with passion &amp; precision.</p>
          <div class="back-to-top">
            <a href="#hero" (click)="scrollToTop($event)">
              Back to Top
              <i data-lucide="arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: var(--bg-dark);
      border-top: 1px solid var(--glass-border);
      position: relative;
      overflow: hidden;
    }

    footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 1px;
      background: linear-gradient(to right, transparent, var(--primary), var(--secondary), transparent);
    }

    .footer-top {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
      margin-bottom: 4rem;
      align-items: start;
    }

    .logo {
      font-size: 2.5rem;
      font-weight: 800;
      letter-spacing: -1px;
      display: inline-block;
      margin-bottom: 1.5rem;
    }

    .logo span {
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .brand-desc {
      color: var(--text-muted);
      font-size: 1.05rem;
      line-height: 1.9;
      margin-bottom: 2rem;
    }

    .brand-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      margin-bottom: 2.5rem;
    }

    .brand-tag {
      font-size: 0.75rem;
      font-weight: 800;
      padding: 0.4rem 1rem;
      background: rgba(56, 189, 248, 0.08);
      color: var(--primary);
      border: 1px solid rgba(56, 189, 248, 0.2);
      border-radius: 100px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .brand-stats {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-top: 2rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    .social-btn {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--glass-border);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      transition: var(--transition);
    }

    .social-btn:hover {
      background: var(--primary);
      color: white;
      border-color: var(--primary);
      transform: translateY(-3px);
      box-shadow: var(--shadow-glow);
    }

    .social-btn i { width: 20px; height: 20px; }


    .bstat {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    .bstat-num {
      font-size: 1.8rem;
      font-weight: 800;
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1;
    }

    .bstat-label {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--text-muted);
    }

    .bstat-divider {
      width: 1px;
      height: 40px;
      background: var(--glass-border);
    }

    h3 {
      font-size: 1.8rem;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 2rem;
      color: var(--text-main);
    }

    .contact-cards {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .contact-card {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      padding: 1.2rem 1.5rem;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--glass-border);
      transition: var(--transition);
      color: var(--text-main);
    }

    .contact-card:not(.no-link):hover {
      background: rgba(56, 189, 248, 0.05);
      border-color: var(--primary);
      transform: translateX(6px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    }

    .card-icon {
      width: 44px;
      height: 44px;
      border-radius: 14px;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
      flex-shrink: 0;
      transition: var(--transition);
    }

    .card-icon i { width: 18px; height: 18px; }

    .contact-card:not(.no-link):hover .card-icon {
      background: var(--primary);
      color: white;
      border-color: var(--primary);
    }

    .card-info {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 0.2rem;
    }

    .card-label {
      font-size: 0.72rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--text-muted);
    }

    .card-value {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-main);
    }

    .arrow-icon {
      width: 18px;
      height: 18px;
      color: var(--text-muted);
      opacity: 0;
      transition: var(--transition);
    }

    .contact-card:not(.no-link):hover .arrow-icon {
      opacity: 1;
      color: var(--primary);
    }

    .footer-bottom {
      padding: 2.5rem 0;
      border-top: 1px solid var(--glass-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text-muted);
      font-size: 0.9rem;
      font-weight: 600;
    }

    .back-to-top a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: var(--primary);
      font-weight: 700;
      transition: var(--transition);
    }

    .back-to-top a:hover {
      opacity: 0.8;
      transform: translateY(-2px);
    }

    @media (max-width: 900px) {
      .footer-top { grid-template-columns: 1fr; gap: 3rem; }
    }

    @media (max-width: 576px) {
      .footer-bottom { flex-direction: column; gap: 1.5rem; text-align: center; }
      .logo { font-size: 2rem; }
    }
  `]
})
export class FooterComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initIcons();
  }

  private initIcons() {
    setTimeout(() => {
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }, 300);
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
