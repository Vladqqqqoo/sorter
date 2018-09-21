class Sorter {
  constructor() {
		// your implementation
		this.arr=[];
  }

  add(element) {
		// your implementation
		this.arr.push(element);
  }

  at(index) {
		// your implementation
		return this.arr[index];
  }

  get length() {
		// your implementation
		return this.arr.length;
  }

  toArray() {
		// your implementation
		return this.arr;
  }

  sort(indices) {
		// your implementation
		function compareNumeric(a, b) {
			return a - b;
		}

		indices.sort(compareNumeric);

		var tmpMass = [];

		for(var i=0;i<indices.length;i++){
			tmpMass[i]=this.arr[indices[i]];
		}

		if(this.compareFunction!=null)
			tmpMass.sort(this.compareFunction)
		else
			tmpMass.sort(compareNumeric);

		for(var i=0;i<indices.length;i++){
			this.arr[indices[i]]=tmpMass[i];
		}
  }

  setComparator(compareFunction) {
		// your implementation
		this.compareFunction=compareFunction;
  }
}

module.exports = Sorter;