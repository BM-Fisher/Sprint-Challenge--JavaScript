// 1. Copy and paste your prototype in here and refactor into class syntax.
// function Cuboid(props) {
//     this.length = props.length;
//     this.width = props.width;
//     this.height = props.height;
//   }

//   Cuboid.prototype.volume = function() {
//     return this.length * this.width * this.height;
//   };

//   Cuboid.prototype.surfaceArea = function() {
//     return (
//       2 *
//       (this.length * this.width +
//         this.length * this.height +
//         this.width * this.height)
//     );
//   };

class Cuboid2 {
    constructor(props){
        this.length = props.length;
        this.width = props.width;
        this.height = props.height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return (
            2 *
            (this.length * this.width +
              this.length * this.height +
              this.width * this.height)
          );
    }
}


  const cuboid = new Cuboid2({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(`Refactored syntax: ${cuboid.volume()}`); // 100
console.log(`Refactored syntax: ${cuboid.surfaceArea()}`); // 130

/* Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
Test your work by logging out your volume and surface area. */
class CubeMaker extends Cuboid2 {
    constructor(cubeProps){
        super(cubeProps);
    }
    cubeVolume(){
        return this.length * this.width * this.height;
    }
    cubeSurfaceArea(){
        return Math.pow(this.length, 2) * 6
    }
}

const boxy = new CubeMaker({
    length: 5,
    width: 5,
    height: 5
});

console.log(boxy.cubeVolume());
console.log(boxy.cubeSurfaceArea());