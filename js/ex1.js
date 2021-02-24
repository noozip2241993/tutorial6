class Square {
    constructor(side) {
      this.side = side;
      // ...
    }
    perimeter() {
        return this.side * 4;
      // ...
    }
    area() {
        return this.side * this.side;
      // ...
    }
    diagonal() {
        return Math.sqrt(this.side)* this.side;
      // ...
    }
    // ...
   }
   const my_perimeter = new Square(2);
   console.log(my_perimeter.perimeter());
   const my_area = new Square(2);
   console.log(my_area.area());
   const my_diagonal = new Square(2);
   console.log(my_diagonal.diagonal());
   