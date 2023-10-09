import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corpo02',
  templateUrl: './corpo02.component.html',
  styleUrls: ['./corpo02.component.css']
})
export class Corpo02Component implements OnInit {
  selectedContent: number = 1;
  botaoAtivo: number = 1; // Inicialmente, o botão 1 está ativo

  ngOnInit() {
    // Chama a função showContent com o conteúdo 1 ao iniciar
    this.showContent(1);
  }

  showContent(contentId: number) {
    this.selectedContent = contentId;
    this.botaoAtivo = contentId; // Define o botão ativo para o botão clicado
  }

  scrollToCrypto() {
    // Encontre o elemento com a âncora "crypto" usando JavaScript puro
    const element = document.getElementById('crypto');
    if (element) {
      // Role até o elemento
      element.scrollIntoView({ behavior: 'smooth' }); // A animação suave é opcional
    }
  }
}
