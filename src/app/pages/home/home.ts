import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

interface SkillGroup {
  readonly label: string;
  readonly items: readonly string[];
}

interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly icon: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      display: block;
    }

    .app-shell {
      min-height: 100vh;
      background:
        radial-gradient(circle at top left, rgba(13, 110, 253, 0.14), transparent 32rem),
        var(--bs-body-bg);
    }

    .app-brand {
      letter-spacing: 0;
    }

    .nav-link {
      color: var(--bs-secondary-color);
    }

    .nav-link:hover,
    .nav-link:focus-visible {
      color: var(--bs-body-color);
    }

    .bg-hero {
      position: absolute;
      inset: 0;
      opacity: 0.08;
      z-index: -1;
      background-image:
        linear-gradient(to right, #808080 1px, transparent 1px),
        linear-gradient(to bottom, #808080 1px, transparent 1px);
      background-size: 40px 40px;
    }

    .eyebrow {
      color: var(--bs-primary);
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .section-kicker {
      color: var(--bs-secondary-color);
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .code-window {
      overflow: hidden;
      border-color: var(--bs-border-color);
    }

    .code-window pre {
      margin: 0;
      white-space: pre-wrap;
    }

    .metric {
      border-left: 2px solid var(--bs-primary);
    }

    .skill-pill {
      border: 1px solid var(--bs-border-color);
      background: var(--bs-tertiary-bg);
      color: var(--bs-body-color);
    }

    .focus-card {
      height: 100%;
      border: 1px solid var(--bs-border-color);
      background: var(--bs-body-bg);
    }

    .contact-link {
      min-height: 3.25rem;
    }

    @media (max-width: 767.98px) {
      .hero-actions .btn {
        width: 100%;
      }
    }
  `,
})
export class Home {
  protected readonly themeService = inject(ThemeService);

  protected readonly skillGroups: readonly SkillGroup[] = [
    {
      label: 'Frontend',
      items: ['Angular', 'TypeScript', 'Signals', 'RxJS', 'Bootstrap'],
    },
    {
      label: 'MERN Stack',
      items: ['MongoDB', 'Express', 'React', 'Node.js'],
    },
    {
      label: 'Workflow',
      items: ['Responsive UI', 'Accessibility', 'Git', 'REST APIs'],
    },
  ];

  protected readonly focusAreas = [
    {
      icon: 'bi bi-window-sidebar',
      title: 'Angular interfaces',
      description:
        'Building structured, maintainable frontend experiences with standalone components and clear state boundaries.',
    },
    {
      icon: 'bi bi-braces',
      title: 'Typed application logic',
      description:
        'Using TypeScript to keep UI behavior predictable, readable, and easier to evolve over time.',
    },
    {
      icon: 'bi bi-universal-access',
      title: 'Accessible web details',
      description:
        'Designing responsive layouts with usable focus states, readable contrast, and practical interaction patterns.',
    },
  ] as const;

  protected readonly contactLinks: readonly ContactLink[] = [
    {
      label: 'Email',
      href: 'mailto:kraiwithkamchu@gmail.com',
      icon: 'bi bi-envelope',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kraiwith-kamchu/',
      icon: 'bi bi-linkedin',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/kraiwith',
      icon: 'bi bi-github',
    },
  ];
}
