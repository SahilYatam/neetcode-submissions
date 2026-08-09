class MinStack:

    def __init__(self):
        self.valStack = []
        self.minStack = []

    def push(self, val: int) -> None:
        self.valStack.append(val)

        if len(self.minStack) == 0:
            self.minStack.append(val)
        elif val < self.minStack[-1]:
            self.minStack.append(val)
        else:
            topVal = self.minStack[-1]
            self.minStack.append(topVal)

    def pop(self) -> None:
        self.valStack.pop()
        self.minStack.pop()

    def top(self) -> int:
        return self.valStack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]
