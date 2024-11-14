import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasAdvancedComponent } from './canvas-advanced/canvas-advanced.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CanvasAdvancedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'canvas-advanced-demo';
}
