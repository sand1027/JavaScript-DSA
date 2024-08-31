class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    console.log(this.color);
  }
  setColor(newColor) {
    this.color = newColor;
  }
}
let cookieOne = new Cookie("Red");
let cookieTwo = new Cookie("Blue");
cookieOne.setColor("Yellow");
cookieOne.getColor();
