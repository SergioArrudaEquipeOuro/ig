import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false; // Inicialmente, o menu está fechado
  isSubmenuOpen: string | null = null; // Inicialmente, nenhum submenu está aberto

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Inverte o estado do menu
    const menuItems = this.el.nativeElement.querySelectorAll('.menu-item');
    const login = this.el.nativeElement.querySelectorAll('#botao');
    
    if (this.isMenuOpen) {
      // Se o menu está aberto, definir o estilo display:block nos elementos .menu-item
      menuItems.forEach((menuItem: HTMLElement) => {
        this.renderer.setStyle(menuItem, 'display', 'block');
      });
      login.forEach((menuItem: HTMLElement) => {
        this.renderer.setStyle(menuItem, 'display', 'flex');
      });
    } else {
      // Se o menu está fechado, definir o estilo display:none nos elementos .menu-item
      menuItems.forEach((menuItem: HTMLElement) => {
        this.renderer.setStyle(menuItem, 'display', 'none');
      });
      login.forEach((menuItem: HTMLElement) => {
        this.renderer.setStyle(menuItem, 'display', 'none');
      });
    }
  }

  toggleSubmenu(submenuId: string) {
    if (this.isSubmenuOpen === submenuId) {
      // Se o submenu estiver aberto, feche-o
      this.isSubmenuOpen = null;
    } else {
      // Se o submenu estiver fechado, abra-o
      this.isSubmenuOpen = submenuId;
    }
  }

  register() {
    window.location.href = 'https://investingain.com/register';
  }

  login() {
    window.location.href = 'https://investingain.com/login';
  }
}
