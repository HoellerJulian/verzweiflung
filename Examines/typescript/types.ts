  //basic obj
const user = {
    name: "Hayes",
    id: 0,
  };

  //interface
  interface User {
    name: string;
    id: number;
  }

//implements
  const user2: User = {
    name: "Hayes",
    id: 0,
  };

//class with constructor
  class UserAccount {
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
   
  const user3: User = new UserAccount("Murphy", 1);
  //                  name  type   returntype
  function deleteUser(user: User): boolean {
    // ...
    return true;
  }

  //new type
  type MyBool = true | false;
  type WindowStates = "open" | "closed" | "minimized";
  type nullable = "open" | "closed" | "minimized" | null;

  //array types!
  type StringArray = Array<string>;

  /*
    string 	typeof thing === "string"
    number 	typeof thing === "number"
    boolean 	typeof thing === "boolean"
    undefined 	typeof thing === "undefined"
    function 	typeof thing === "function"
    array 	Array.isArray(thing)
  */

 //One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.

 //In a structural type system, if two objects have the same shape, they are considered to be of the same type.

 interface Point {
    x: number;
    y: number;
  }
   
  function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }
   
  // logs "12, 26"
  const point = { x: 12, y: 26 };
  logPoint(point);

  //The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check.