class movie {
    constructor(title, studio, rating="PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
}

let movie1 = new movie("Casino Royale","Eon Productions", "PG­13");
console.log(movie1);

let getPG = function() {
    let  arr = [];
    for (let i = 0; i >= 0 ; i++) {
        if (movie1.rating == "PG") {
            arr[i] = movie1.title;
            console.log(arr);
        }
    }
}

class Circle {
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
}



function circle() {
    var radius = parseInt(prompt("Please enter the radius"));
    var color = prompt("Please enter the color");
  let circle = new Circle(radius,color);
  let str = circle.toString();
  let area = (22/7)*(radius*radius);
  let circum = 2*(22/7)*(radius);
  console.log(circle);
  console.log("circumference is",circum);
  console.log("area is",area);
 
}
circle();

class person {
    constructor(firstname,lastname,DOB,age,place) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.DOB = DOB;
      this.age = age;
      this.place = place;
    }
}

let person1 = new person("dhanya", "dintakurhty","8th nov 1998", "22","proddatur");
console.log(person1);

class uber {
    constructor(kmtravelled,type1,type2,type3,type4) {
      this.kmtravelled = kmtravelled;
      this.type1 = type1;
      this.type2 = type2;
      this.type3 = type3;
      this.type4 = type4;
    }
}

let uber1 = new uber(20, 4,6, 8,10);
console.log(uber1);
let fare = uber1.kmtravelled*uber1.type2;
console.log(fare);


