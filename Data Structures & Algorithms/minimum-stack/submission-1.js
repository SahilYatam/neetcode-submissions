class MinStack {
    constructor() {
        this.valStack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.valStack.push(val)

        if(this.minStack.length === 0){
            this.minStack.push(val)
        }
        else if(val < this.minStack.at(-1)){
            this.minStack.push(val)
        }
        else{
            let topVal = this.minStack.at(-1)
            this.minStack.push(topVal)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.valStack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.valStack.at(-1)
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.at(-1)
    }
}
