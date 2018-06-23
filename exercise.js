class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    };

    plus(vector) {
        let valueX = this.x + vector.x;
        let valueY = this.y + vector.y;
        return new Vec(valueX, valueY);
    };

    minus(vector) {
        let valueX = this.x - vector.x;
        let valueY = this.y - vector.y;
        return new Vec(valueX, valueY);
    };

    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

};

