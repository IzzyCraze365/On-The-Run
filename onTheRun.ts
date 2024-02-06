/* Add code here */

/* I need to build out a table for the rolls */

/* This is our Dice Rolling function */
function randomNum(min: number, max: number) {
    let range: number = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  }