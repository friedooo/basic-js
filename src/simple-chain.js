const chainMaker = {
    'str': [],
    getLength() {
      return this.str.length;
    },
    addLink(elem) {
        if (arguments[0] == undefined)
        this.str.push(`( ${null} )`);
        else
        this.str.push(`( ${elem} )`);
        return this;
    },
    removeLink(position) {
      if (typeof position == 'number' && position%1 == 0 && position > 0 && position <= this.getLength())
      {
          this.str.splice(position-1,1);
      return this;}
      else
      {
        this.str = [];
      throw new Error();
      }
  },
    reverseChain() {
        this.str.reverse();
        return this;
    },
    finishChain() {
        let string = this.str.join('~~');
        this.str = [];
        return string;
    }
  };

module.exports = chainMaker;
