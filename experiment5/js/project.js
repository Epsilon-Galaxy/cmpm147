// project.js - purpose and description here
// Author: Your Name
// Date:

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class
class MyProjectClass {
  // constructor function
  constructor(param1, param2) {
    // set properties using 'this' keyword
    this.property1 = param1;
    this.property2 = param2;
  }
  
  // define a method
  myMethod() {
    // code to run when method is called
  }
}

function main() {
  // create an instance of the class
  let myInstance = new MyProjectClass("value1", "value2");

  // call a method on the instance
  myInstance.myMethod();
}


function getInspirations() {
  return [
    {
      name: "Lunch atop a Skyscraper", 
      assetUrl: "https://cdn.glitch.global/3abd0223-86fb-43ce-a00a-fde12615bcd5/lunch-on-a-skyscraper.jpg?v=1714798266994",
      credit: "Lunch atop a Skyscraper, Charles Clyde Ebbets, 1932"
    },
    {
      name: "Train Wreck", 
      assetUrl: "https://cdn.glitch.global/3abd0223-86fb-43ce-a00a-fde12615bcd5/train-wreck.jpg?v=1714798264965",
      credit: "Train Wreck At Monteparnasse, Levy & fils, 1895"
    },
    {
      name: "Migrant mother", 
      assetUrl: "https://cdn.glitch.global/3abd0223-86fb-43ce-a00a-fde12615bcd5/migrant-mother.jpg?v=1714778906791",
      credit: "Migrant Mother near Nipomo, California, Dorothea Lange, 1936"
    },
    {
      name: "Disaster Girl", 
      assetUrl: "https://cdn.glitch.global/3abd0223-86fb-43ce-a00a-fde12615bcd5/girl-with-fire.jpg?v=1714778905663",
      credit: "Four-year-old Zoë Roth, 2005"
    },
  ];
}

function initDesign(inspiration) {
  resizeCanvas(inspiration.image.width / 4, inspiration.image.height / 4);
  
  let design = {
    bg: 128,
    fg: []
  }
  
  for(let i = 0; i < 300; i++){
    design.fg.push({x1: random(width/3), y1: random(height), x2: random(width/2), y2: random(height/3), x3: random(width), y3: random(height), fill: random(255)})
  }
  console.log("Width: " + width);
  console.log("Height: " + height);
  return design;
}

function renderDesign(design, inspiration) {
  background(design.bg);
  noStroke();
  for(let box of design.fg){
    fill(box.fill, 128);
    triangle(box.x1, box.y1, box.x2, box.y2, box.x3, box.y3)
  }
}


function mutateDesign(design, inspiration, rate) {
  design.bg = mut(design.bg, 0, 255, rate);
  for(let box of design.fg){
    box.fill = mut(box.fill, 0, 255, rate);
    box.x1 = mut(box.x1, 0, width/3, rate);
    box.y1 = mut(box.y1, 0, height, rate);
    box.x2 = mut(box.x2, 0, width/2, rate);
    box.y2 = mut(box.x2, 0, height/3, rate);
    box.x3 = mut(box.x3, 0, width, rate);
    box.y3 = mut(box.y3, 0, height, rate);
  }
}

function mut(num, min, max, rate){
  return constrain(randomGaussian(num, (rate * (max - min)) / 10), min, max);
}

// let's get this party started - uncomment me
//main();