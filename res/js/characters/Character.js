export class Character {

    constructor(name, hp, dmg, speed) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.speed = speed;
        console.log(this);
    }

}
//fce - stoji sama o sobe
//metoda - taky fce, ale patri nejakymu objektu
//kopie od sablony - objekt (object) - instance
//constructor - metoda, ktera se vola kdyz vytvorime instanci od tridy - kopii od sablony
//const myCharacter = new Character("Urban", 100, 5, 0.5); 
