
export class Character {
  constructor(name, hp, dmg, speed, type) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.speed = speed;
    this.img = new Image();
    this.setType(type);
    this.img.src = this.path;
    this.ratio = 0.3;
    this.size = {
      width: 600 * this.ratio,
      height: 634 * this.ratio,
    };
    this.position = {
      x: 100,
      y: 350,
    };
    this.velocity = {
      x: 1 * this.speed,
    };
    this.side = 0;
    this.frame = {
      counter: 0,
      index: 1,
      maxIndex: 11,
      width: 100,
      height: 100,
    }
  }

  setType(type) {
    const characterTypes = [
      "./res/img/characters/frafticekWalk.png",
      "./res/img/characters/unrealurbic.png",
    ];
    this.path = characterTypes[type];
  }

  animate(ctx) {
    let movementX = this.position.x;
    if (this.side === 1) {
      movementX = 0;
    }
    ctx.drawImage(
      this.img,
      this.frame.width * this.frame.index, 
      0,
      this.frame.width,
      this.frame.height,
      movementX,
      this.position.y,
      this.size.width,
      this.size.height
    );
    if (this.frame.index == this.frame.maxIndex) return this.frame.index = 0;
    this.frame.counter++;
    if (this.frame.counter % 2 == 0) {
      this.frame.index++;
    }
  }

  draw(ctx) {
    
    ctx.save();
    if (this.side === 0) {
      this.animate(ctx);
      return ctx.restore();
    }
    ctx.translate(this.position.x + this.size.width, 0);
    ctx.scale(-1, 1);
    this.animate(ctx);
    ctx.restore();
  }

  update(state) {
    switch (state) {
      case 0:
        this.move();
        break;
      case 1:
        console.log(this.name + " attacks!");
        break;
      case 2:
        console.log(this.name + " umira");
        this.position.x = 0;
        this.hp = 1000;
        break;
      default:
    }
  }

  move() {
    this.position.x += this.velocity.x;
    if (this.position.x >= 1100) {
      this.velocity.x *= -1;
      this.side = 1;
    }
    if (this.position.x <= 90) {
      this.velocity.x *= -1;
      this.side = 0;
    }
  }
}
// vlastnosti objektu - atributy
//this - slovo ktere ukazuje na dany objekt uvnitr tridy
//fce - stoji sama o sobe
//metoda - taky fce, ale patri nejakymu objektu
//kopie od sablony - objekt (object) - instance
//constructor - metoda, ktera se vola kdyz vytvorime instanci od tridy - kopii od sablony
//const myCharacter = new Character("Urban", 100, 5, 0.5);
