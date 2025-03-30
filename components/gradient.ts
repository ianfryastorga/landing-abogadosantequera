// El siguiente código es para la animación de gradiente fluido

/**
 * Clase Gradient que maneja la animación de gradiente fluido
 */
export class Gradient {
  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  activeColors: number[];
  amp: number;
  seed: number;
  freqX: number;
  freqY: number;
  freqDelta: number;
  width: number;
  height: number;
  isRunning: boolean;
  rafID: number | null;
  isInit: boolean;
  timeStart: number;

  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.activeColors = [1, 1, 1, 1];
    this.amp = 500;
    this.seed = 8;
    this.freqX = 4e-5;
    this.freqY = 6e-5;
    this.freqDelta = 0.5e-5;
    this.width = 0;
    this.height = 0;
    this.isRunning = false;
    this.rafID = null;
    this.isInit = false;
    this.timeStart = 0;
  }

  reset() {
    if (!this.canvas || !this.ctx) return;
    
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  initGradient(selector: string) {
    this.canvas = document.querySelector(selector);
    if (!this.canvas) return;
    
    const ctx = this.canvas.getContext("2d");
    if (!ctx) return;
    
    this.ctx = ctx;
    
    this.reset();
    this.connect();
    
    this.isInit = true;
    this.isRunning = true;
    
    window.addEventListener("resize", this.reset.bind(this));
    
    this.timeStart = Date.now();
    
    this.renderGradient();
  }
  
  renderGradient() {
    if (!this.isRunning || !this.ctx || !this.canvas) return;

    const cols = this.getColorArray();
    const yBase = this.height * 0.6;
    const t = (Date.now() - this.timeStart) * this.freqDelta;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Background fill
    const bgGradient = this.ctx.createLinearGradient(0, 0, 0, this.height);
    bgGradient.addColorStop(0, cols[0]);
    bgGradient.addColorStop(0.5, cols[1]);
    bgGradient.addColorStop(1, cols[2]);
    this.ctx.fillStyle = bgGradient;
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.fillStyle = "#000";

    // Draw waves
    this.ctx.beginPath();
    let ptx = 0;
    let pty = yBase;
    this.ctx.moveTo(ptx, pty);

    for (let x = 0; x <= this.width; x++) {
      const y = yBase + Math.sin(x * this.freqX + t) * Math.cos(x * this.freqX * 0.3 + t) * this.amp;
      this.ctx.lineTo(x, y);
    }

    this.ctx.lineTo(this.width, this.height);
    this.ctx.lineTo(0, this.height);
    this.ctx.closePath();

    const fluidGradient = this.ctx.createLinearGradient(0, yBase - this.amp, 0, this.height);
    fluidGradient.addColorStop(0, cols[2]);
    fluidGradient.addColorStop(0.5, cols[3]);
    fluidGradient.addColorStop(1, cols[3]);
    this.ctx.fillStyle = fluidGradient;
    this.ctx.fill();

    this.rafID = window.requestAnimationFrame(this.renderGradient.bind(this));
  }
  
  getColorArray(): string[] {
    if (!this.canvas) return ['#000000', '#000000', '#000000', '#000000'];
    
    const colors = [
      getComputedStyle(this.canvas).getPropertyValue('--gradient-color-1').trim(),
      getComputedStyle(this.canvas).getPropertyValue('--gradient-color-2').trim(),
      getComputedStyle(this.canvas).getPropertyValue('--gradient-color-3').trim(),
      getComputedStyle(this.canvas).getPropertyValue('--gradient-color-4').trim()
    ];
    
    return colors.map((color, i) => {
      if (!this.activeColors[i]) return 'transparent';
      return color;
    });
  }
  
  connect() {
    this.rafID = window.requestAnimationFrame(this.renderGradient.bind(this));
    this.isRunning = true;
  }
  
  disconnect() {
    if (this.rafID !== null) {
      window.cancelAnimationFrame(this.rafID);
      this.isRunning = false;
    }
  }
} 