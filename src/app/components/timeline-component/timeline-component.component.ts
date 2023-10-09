import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline-component',
  templateUrl: './timeline-component.component.html',
  styleUrls: ['./timeline-component.component.css']
})
export class TimelineComponent {
  botaoAtivo: number = 1;
  timelinePosition: string = '0';
  selectedContent: number = 1;

  showContent(contentNumber: number) {
    this.botaoAtivo = contentNumber;
    const buttonWidth = 100; // Largura de cada botão
    this.timelinePosition = `${(contentNumber - 1) * buttonWidth}px`;
    this.selectedContent = contentNumber;
  }

  register() {
    window.location.href = 'https://investingain.com/register';
  }

  login() {
    window.location.href = 'https://investingain.com/login';
  }
}
