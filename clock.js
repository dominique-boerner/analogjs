/**
 * AnalogJS
 * @author Dominique Börner
 */
class AnalogJS {
  config = {
    selector: "#analogjds",
    backgroundColor: "transparent",
    color: "#252623",
    borderWidth: 5,
  };

  canvas = null;
  context = null;

  time = null;
  radius = 0;

  constructor(config) {
    this.config = { ...this.config, ...config };
    console.log(this.config);
    this.canvas = document.querySelector(this.config.selector);

    if (this.canvas) {
      this.context = this.canvas.getContext("2d");
      this.radius = this.canvas.height / 2;
      this._drawClock();
    }
  }

  setTime(time) {
    this.time = time;
    this._drawClock();
  }

  _drawClock() {
    if (!this.canvas) {
      console.error("Canvas could not be found. Please check the selector of the AnalogJS configuration.")
    } else {
      this._clearCanvas();
      this._drawClockRing();
      this._drawClockFace();
      this._drawClockNumbers();
      this._drawClockHands();
    }
  }

  _drawClockRing() {
    const radiusWithoutBorderWidth =
      this.canvas.height / 2 - this.config.borderWidth * 2;

    this.context.beginPath();
    this.context.translate(this.radius, this.radius);

    this.context.arc(0, 0, radiusWithoutBorderWidth, 0, 2 * Math.PI, false);
    this.context.fillStyle = this.config.backgroundColor;
    this.context.fill();
    this.context.lineWidth = this.config.borderWidth;
    this.context.strokeStyle = this.config.color;
    this.context.stroke();
  }

  _drawClockFace() {
    this.context.beginPath();
    this.context.arc(0, 0, this.radius * 0.1, 0, 2 * Math.PI);
    this.context.fillStyle = this.config.color;
    this.context.fill();
  }

  _drawClockNumbers() {
    let angle = 0;
    let number = 0;

    this.context.beginPath();
    this.context.font = this.radius * 0.15 + "px arial";
    this.context.textBaseline = "middle";
    this.context.textAlign = "center";
    for (number = 1; number < 13; number++) {
      angle = (number * Math.PI) / 6;
      this.context.rotate(angle);
      this.context.translate(0, -this.radius * 0.7);
      this.context.rotate(-angle);
      this.context.fillText(number.toString(), 0, 0);
      this.context.rotate(angle);
      this.context.translate(0, this.radius * 0.7);
      this.context.rotate(-angle);
    }
  }

  _drawClockHands() {
    if (this.time) {
      let hour = this.time.getHours();
      let minute = this.time.getMinutes();
      let second = this.time.getSeconds();
      //hour
      hour = hour % 12;
      hour =
        (hour * Math.PI) / 6 +
        (minute * Math.PI) / (6 * 60) +
        (second * Math.PI) / (360 * 60);
      this._drawHand(this.context, hour, this.radius * 0.5, this.radius * 0.07);
      //minute
      minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
      this._drawHand(
        this.context,
        minute,
        this.radius * 0.8,
        this.radius * 0.07
      );
      // second
      second = (second * Math.PI) / 30;
      this._drawHand(
        this.context,
        second,
        this.radius * 0.9,
        this.radius * 0.02
      );
    }
  }

  _drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }

  _clearCanvas() {
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}