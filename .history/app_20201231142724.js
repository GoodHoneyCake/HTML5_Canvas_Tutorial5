class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.isLoaded = false;
    this.imgPos = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  }
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvasWidth = this.stageWidth * this.pixelRatio;
    this.canvasHeight = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }
}

window.onload = () => {
  new App();
};
