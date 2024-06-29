import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  HostListener,
} from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate(
          '1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class SidenavComponent implements OnInit {
  fullName: string = '';
  userRole: string = '';

  constructor(private router: Router) {}

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.fullName = localStorage.getItem('userFullName') || 'User';
    this.userRole = localStorage.getItem('userRole') || 'user';
    this.assignNavDataBasedOnRole();
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  logout(): void {
    Swal.fire({
      title: 'Êtes vous sûre?',
      text: 'Voulez-vous vraiment vous déconnecter ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui',
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('userRole');
          localStorage.removeItem('userFullName');
          localStorage.removeItem('email');
          this.router.navigateByUrl('/login');
        }, 700);
      }
    });
  }

  getuserRole(role: string): string {
    switch (role) {
      case 'CONDUCTEUR':
        return 'CONDUCTEUR';
      case 'PASSAGER':
        return 'PASSAGER';
      default:
        return 'Rôle inconnu';
    }
  }

  assignNavDataBasedOnRole(): void {
    switch (this.userRole) {
      case  'CONDUCTEUR':
        this.navData = [
          { routeLink: 'home', icon: 'fal fa-home', label: 'home' },
          {
            routeLink : 'enregistrer-course',
            icon: 'fa fa-plus',
            label: 'enregistrer-course'
          },
          {
            routeLink : 'piece-identite',
            icon: 'fa fa-id-card',
            label: 'piece-identite'
          },
          {
            routeLink : 'contacter-passager',
            icon: 'fa fa-comments',
            label: 'contacter-passager'
          },
          {
            routeLink : 'gerer-reservation',
            icon: 'fa fa-calendar-alt',
            label: 'gerer-reservation'
          },
          {
            routeLink : 'liste-des-passagers',
            icon: 'fa fa-users',
            label: 'liste-des-passagers'
          },
          {
            routeLink : 'mes-courses',
            icon: 'fa fa-road',
            label: 'mes-courses'
          },
          {
            routeLink : 'avis',
            icon: 'fa fa-comment',
            label: 'avis'
          },
        ];
        break;
      case 'PASSAGER':
        this.navData = [
          { routeLink: 'home', icon: 'fal fa-home', label: 'home' },
          {
            routeLink: 'rechercher-course',
            icon: 'fal fa-route',
            label: 'Courses',
          },
          {
            routeLink: 'avis',
            icon: 'fal fa-star',
            label: 'avis',
          },
          {
            routeLink: 'mes-infos',
            icon: 'fal fa-user',
            label: 'Mes informations',
          },
          {
            routeLink: 'contacter-conducteur',
            icon: 'fal fa-comments',
            label: 'Contacter conducteur',
          }

        ];
        break;
      default:
        this.navData = [
          { routeLink: 'home', icon: 'fal fa-home', label: 'home' },
        ];
        break;
    }
  }
}
