module.exports = class DepthCalculator {
    calculateDepth(arr,  maxdepth = 1, counter = 0) {
      for (let elem of arr) 
      {
        if (Array.isArray(elem)) {
          maxdepth = this.calculateDepth(elem);
          if (counter < maxdepth)
            counter = maxdepth;
          else
            counter = counter;
        }
      }
      return ++counter;
    }
  };