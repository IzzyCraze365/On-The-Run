/* Add code here */

/* This is our Dice Rolling function */
function randomNum(min: number, max: number) {
    let range: number = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  }