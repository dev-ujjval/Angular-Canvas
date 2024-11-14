import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvas-advanced',
  standalone: true,
  imports: [],
  templateUrl: './canvas-advanced.component.html',
  styleUrl: './canvas-advanced.component.css'
})
export class CanvasAdvancedComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    
    // Drawing all features
    this.drawShapes();
    this.drawText();
    this.drawImage();
    this.drawGradients();
    this.drawPatterns();
    this.createAnimation();
  }

  // 1. Draw Basic Shapes
  private drawShapes() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(20, 20, 100, 50); // Rectangle

    this.ctx.strokeStyle = 'green';
    this.ctx.strokeRect(150, 20, 100, 50); // Outline rectangle

    this.ctx.beginPath();
    this.ctx.arc(300, 45, 30, 0, Math.PI * 2); // Circle
    this.ctx.fillStyle = 'purple';
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(400, 20); // Triangle
    this.ctx.lineTo(450, 70);
    this.ctx.lineTo(350, 70);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  // 2. Draw Text
  private drawText() {
    this.ctx.font = '20px Arial';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText('Hello, Canvas!', 20, 120); // Filled text

    this.ctx.strokeStyle = 'red';
    this.ctx.lineWidth = 1;
    this.ctx.strokeText('Outlined Text', 20, 150); // Outlined text
  }

  // 3. Draw an Image
  private drawImage() {
    const img = new Image();
    img.src = 'https://via.placeholder.com/100'; // Sample image URL
    img.onload = () => {
      this.ctx.drawImage(img, 20, 170, 100, 100); // Drawing the image
    };
  }

  // 4. Draw Gradients
  private drawGradients() {
    // Linear Gradient
    const linearGradient = this.ctx.createLinearGradient(150, 170, 250, 270);
    linearGradient.addColorStop(0, 'pink');
    linearGradient.addColorStop(1, 'orange');
    this.ctx.fillStyle = linearGradient;
    this.ctx.fillRect(150, 170, 100, 100);

    // Radial Gradient
    const radialGradient = this.ctx.createRadialGradient(300, 220, 20, 300, 220, 50);
    radialGradient.addColorStop(0, 'yellow');
    radialGradient.addColorStop(1, 'blue');
    this.ctx.fillStyle = radialGradient;
    this.ctx.beginPath();
    this.ctx.arc(300, 220, 50, 0, Math.PI * 2);
    this.ctx.fill();
  }

  // 5. Draw Patterns
  private drawPatterns() {
    const img = new Image();
    img.src = 'https://via.placeholder.com/40'; // Sample image for pattern
    img.onload = () => {
      const pattern = this.ctx.createPattern(img, 'repeat');
      if (pattern) {
        this.ctx.fillStyle = pattern;
        this.ctx.fillRect(400, 170, 100, 100); // Applying pattern
      }
    };
  }

  // 6. Animation
  private createAnimation() {
    let posX = 20;
    const animate = () => {
      this.ctx.clearRect(0, 300, this.canvas.nativeElement.width, 100); // Clear area for animation
      this.ctx.fillStyle = 'orange';
      this.ctx.beginPath();
      this.ctx.arc(posX, 350, 20, 0, Math.PI * 2); // Moving circle
      this.ctx.fill();
      posX += 2;
      if (posX > this.canvas.nativeElement.width) {
        posX = 0;
      }
      requestAnimationFrame(animate); // Repeating animation
    };
    animate();
  }
}
