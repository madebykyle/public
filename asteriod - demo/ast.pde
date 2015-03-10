// Nature of Code 2011
// Daniel Shiffman
// Chapter 3: Asteroids exercise
// http://www.shiffman.net
// Nature of Code 2011
// Daniel Shiffman
// Chapter 3: Asteroids

import processing.serial.*;

import cc.arduino.*;

Arduino arduino;

Button whiteA;
Button whiteB;
Button blackHome;
Joystick joyUp;
Joystick joyDown;
Joystick joyLeft;
Joystick joyRight;

class Button {
  color c;
  float xpos;
  float ypos;
  int pin;

  Button(float tempXpos, float tempYpos, int tempPin) {

    xpos = tempXpos;
    ypos = tempYpos;
    pin = tempPin;
  }
  void pinStateChecker () {
    if (arduino.digitalRead(pin) == Arduino.LOW) {
      colorChange(color(0, 255, 0));
    }
    else { 
      colorChange(color(255, 0, 0));
    }
  }

  void colorChange(color tempC) {
    c = tempC;
  }

  void display() {
    fill(c);
    rect(xpos, ypos, 100, 100);
  }
}

class Joystick {
  color c;
  float xpos;
  float ypos;
  int pin;

  Joystick(float tempXpos, float tempYpos, int tempPin) {

    xpos = tempXpos;
    ypos = tempYpos;
    pin = tempPin;
  }

  void colorChange(color tempC) {
    c = tempC;
  }
  void pinStateChecker () {
    if (arduino.digitalRead(pin) == Arduino.LOW) {
      colorChange(color(0, 0, 255));
    }
    else { 
      colorChange(color(0, 0, 0));
    }
  }

  void display() {
    stroke(0);
    fill(c);
    rect(xpos, ypos, 50, 50);
  }
}


class Spaceship { 
  // All of our regular motion stuff
  PVector location;
  PVector velocity;
  PVector acceleration;

  // Arbitrary damping to slow down ship
  float damping = 0.995;
  float topspeed = 200;

  // Variable for heading!
  float heading = 0;

  // Size
  float r = 45;

  // Are we thrusting (to color boosters)
  boolean thrusting = false;
  boolean thrusting2 = false;

  Spaceship() {
    location = new PVector(width/2,height/2);
    velocity = new PVector();
    acceleration = new PVector();
  } 

  // Standard Euler integration
  void update() { 
    velocity.add(acceleration);
    velocity.mult(damping);
    velocity.limit(topspeed);
    location.add(velocity);
    acceleration.mult(0);
  }

  // Newton's law: F = M * A
  void applyForce(PVector force) {
    PVector f = force.get();
    //f.div(mass); // ignoring mass right now
    acceleration.add(f);
  }

  // Turn changes angle
  void turn(float a) {
    heading += a;
  }
  
  // Apply a thrust force
  void thrust() {
    // Offset the angle since we drew the ship vertically
    float angle = heading - PI/2;
    // Polar to cartesian for force vector!
    PVector force = new PVector(cos(angle),sin(angle));
    force.mult(0.1);
    applyForce(force); 
    // To draw booster
    thrusting = true;
  }
  
    void negativeThrust() {
    // Offset the angle since we drew the ship vertically
    float angle = heading - PI/2;
    // Polar to cartesian for force vector!
    PVector force = new PVector(cos(angle),sin(angle));
    force.mult(-0.1);
    applyForce(force); 
    // To draw booster
    thrusting2 = true;
  }

  void wrapEdges() {
    float buffer = r*2;
    if (location.x > width +  buffer) location.x = -buffer;
    else if (location.x <    -buffer) location.x = width+buffer;
    if (location.y > height + buffer) location.y = -buffer;
    else if (location.y <    -buffer) location.y = height+buffer;
  }


  // Draw the ship
  void display() { 
    stroke(0);
    strokeWeight(2);
    pushMatrix();
    translate(location.x,location.y+r);
    rotate(heading);
    fill(175);
    if (thrusting) fill(255,0,0);
    if(thrusting2) fill(0,0,0);
    // Booster rockets
    rect(-r/2,r,r/3,r/2);
    rect(r/2,r,r/3,r/2);
    fill(175);
    // A triangle
    beginShape();
    vertex(-r,r);
    vertex(0,-r);
    vertex(r,r);
    endShape(CLOSE);
    rectMode(CENTER);
    popMatrix();
    
    thrusting = false;
    thrusting2= false;
  }
}


// Mover object
Spaceship ship;

void setup() {
  size(1080, 1900);
  smooth();
  whiteA = new Button(750, 1800, 2);
  whiteB = new Button(900, 1750, 3);
  blackHome = new Button (550, 1700, 5);
  joyUp = new Joystick (250, 1700, 11);
  joyDown = new Joystick (250, 1800, 9);
  joyLeft = new Joystick (200, 1750, 7);
  joyRight = new Joystick (300, 1750, 12);
  ship = new Spaceship();
  println(Arduino.list());
  arduino = new Arduino(this, Arduino.list()[9]);
  for (int i = 0; i <= 13; i++){
    arduino.pinMode(i, Arduino.INPUT); 
    arduino.digitalWrite(i,Arduino.HIGH);  
  }
}

void draw() {
  background(131,153,143); 
  
    whiteA.display();
  whiteA.pinStateChecker();
  whiteB.display();
  whiteB.pinStateChecker();
  blackHome.display();
  blackHome.pinStateChecker();
  joyUp.display();
  joyUp.pinStateChecker();
  joyDown.display();
  joyDown.pinStateChecker();
  joyLeft.display();
  joyLeft.pinStateChecker();
  joyRight.display();
  joyRight.pinStateChecker();
  // Update location
  ship.update();
  // Wrape edges
  ship.wrapEdges();
  // Draw ship
  ship.display();
   

  fill(0);


  // Turn or thrust the ship depending on what key is pressed
  
    if (arduino.digitalRead(7) == Arduino.LOW) {
      ship.turn(-0.03);
    }  if (arduino.digitalRead(12) == Arduino.LOW) {
      ship.turn(0.03);
    }  if (arduino.digitalRead(2) == Arduino.LOW) {
      ship.thrust(); 
    } if (arduino.digitalRead(3) == Arduino.LOW) {
      ship.negativeThrust(); 
    } 
  
}


