/*
Write a class TempTracker with these methods:

insert()—records a new temperature
getMax()—returns the highest temp we've seen so far
getMin()—returns the lowest temp we've seen so far
getMean()—returns the mean ↴ of all temps we've seen so far
getMode()—returns a mode ↴ of all temps we've seen so far

Optimize for space and time. Favor speeding up the getter methods getMax(), getMin(), getMean(), and getMode() over speeding up the insert() method.

Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.
*/

class TempTracker {
  constructor() {
    this.temps = [];
    this.mean = {
      total: 0
    };
    this.mode = {
    };
  }

  insert(temp) {
    if (this.temps.length === 0) {
      this.temps.push(temp);
      this.mean.total += temp;
    } else {
      for (let i = 0; i < this.temps.length ; i++) {
        if (this.temps[i] > temp || !this.temps[i]) {
          this.temps.splice(i, 0, temp);
          this.mean.total += temp;
          if (this.temps[i - 1] === temp) this.updateMode(temp);
          break;
        } else if (this.temps[i + 1] === undefined) {
          this.temps.push(temp);
          this.mean.total += temp;
          if (this.temps[i] === temp) this.updateMode(temp);
          break;
        }
      }
     }
   }

   updateMode(temp) {
    if (!this.mode[temp]) {
      this.mode[temp] = 2
    } else {
      this.mode[temp]++
    }
    let high = this.mode[temp];

    for (var prop in this.mode) {
      if (this.mode[prop] < high) delete this.mode[prop];
    }
   }

  getMax() {
    return this.temps[this.temps.length - 1];
   }

  getMin() {
    return this.temps[0];
  }

  getMean() {
    return this.mean.total / this.temps.length;
  }

  getMode() {
    return this.mode;
  }
}

const temps = new TempTracker();
temps.insert(78);
temps.insert(56);
temps.insert(58);
temps.insert(86);
temps.insert(103);
temps.insert(58);
temps.insert(103);
temps.insert(58);
temps.insert(68);
temps.insert(68);
temps.insert(68);
temps.insert(68);
temps.insert(38);
temps.insert(38);
temps.insert(38);
temps.insert(38);



console.log(temps.getMode());