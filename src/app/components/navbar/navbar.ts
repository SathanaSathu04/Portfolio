import { Component, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var lucide: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled">
      <div class="container nav-container">
        <a href="#" class="logo animate-fade-in">
          <div class="logo-letter">S</div>
          Sathana<span>.K.P</span>
        </a>
        
        <ul class="nav-links" [class.active]="isMenuOpen">
          <li *ngFor="let link of links; let i = index" 
              [style.animation-delay]="i * 0.1 + 's'"
              class="animate-slide-down">
            <a [href]="link.path" 
               [class.active]="activeSection === link.id"
               (click)="scrollTo(link.id, $event)">
              {{ link.label }}
              <span class="link-indicator"></span>
            </a>
          </li>
        </ul>

        <button class="mobile-menu-btn" (click)="toggleMenu()">
          <div class="menu-icon" [class.open]="isMenuOpen">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div class="scroll-progress" [style.width.%]="scrollProgress"></div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 1.5rem 0;
      transition: var(--transition);
      border-bottom: 1px solid transparent;
    }

    nav.scrolled {
      background: var(--glass);
      backdrop-filter: blur(15px);
      padding: 0.8rem 0;
      border-bottom: 1px solid var(--glass-border);
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-family: 'Outfit', sans-serif;
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .logo-letter {
      width: 40px;
      height: 40px;
      background: var(--gradient-1);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.4rem;
      font-weight: 900;
      box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .logo span {
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 900;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 3rem;
    }

    .nav-links a {
      position: relative;
      font-weight: 600;
      color: var(--text-muted);
      font-size: 0.95rem;
      letter-spacing: 0.5px;
      padding: 0.5rem 0;
    }

    .nav-links a:hover, .nav-links a.active {
      color: var(--text-main);
    }

    .link-indicator {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gradient-1);
      transition: var(--transition);
      border-radius: 10px;
    }

    .nav-links a.active .link-indicator {
      width: 100%;
    }


    .btn-glow {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
      opacity: 0;
      transition: var(--transition);
      pointer-events: none;
    }

    .btn-cta:hover .btn-glow {
      opacity: 1;
      transform: translate(25%, 25%);
    }

    .scroll-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background: var(--gradient-1);
      transition: width 0.1s ease;
    }

    /* Animations */
    .animate-fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }

    .animate-slide-down {
      opacity: 0;
      animation: slideDown 0.6s ease-out forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideDown {
      from { 
        opacity: 0;
        transform: translateY(-20px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Mobile Menu */
    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;
    }

    .menu-icon {
      width: 24px;
      height: 18px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .menu-icon span {
      display: block;
      width: 100%;
      height: 2px;
      background: var(--text-main);
      transition: var(--transition);
      border-radius: 10px;
    }

    .menu-icon.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    .menu-icon.open span:nth-child(2) { opacity: 0; }
    .menu-icon.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

    @media (max-width: 992px) {
      .nav-links { gap: 1.5rem; }
    }

    @media (max-width: 768px) {
      .mobile-menu-btn { display: block; }

      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        background: var(--bg-dark);
        flex-direction: column;
        justify-content: center;
        transition: 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        z-index: 999;
      }

      .nav-links.active {
        right: 0;
      }

      .nav-links li {
        margin: 1.5rem 0;
      }

      .nav-links a {
        font-size: 1.5rem;
      }
    }
  `]
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'hero';
  scrollProgress = 0;
  
  links = [
    { id: 'about', label: 'About', path: '#about' },
    { id: 'experience', label: 'Experience', path: '#experience' },
    { id: 'projects', label: 'Projects', path: '#projects' },
    { id: 'skills', label: 'Skills', path: '#skills' },
    { id: 'contact', label: 'Contact', path: '#contact' }
  ];

  private observer: IntersectionObserver | null = null;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    
    // Calculate scroll progress
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (winScroll / height) * 100;
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
    this.initIcons();
  }

  private initIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    } else {
      setTimeout(() => this.initIcons(), 100);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    // Observe sections
    const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer?.observe(el);
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  scrollTo(id: string, event: Event) {
    event.preventDefault();
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
    
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
