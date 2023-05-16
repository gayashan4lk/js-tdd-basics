class Stack {
	constructor() {
		this.top = -1;
		this.items = {};
	}

	get peek() {
		return this.items[this.top];
	}

	push(item) {
		this.top += 1;
		this.items[this.top] = item;
	}

	pop() {
		const item = this.items[this.top];
		delete this.items[this.top];
		this.top -= 1;
		return item;
	}
}

describe('My stack', () => {
	let stack;

	beforeEach(() => {
		stack = new Stack();
	});

	it('should be empty when created', () => {
		// Arrange

		// Act

		// Assert
		expect(stack.top).toBe(-1);
		expect(stack.items).toEqual({});
	});

	it('should push new elements on the top of the stack', () => {
		// Arrange

		// Act
		stack.push('👻');

		// Assert
		expect(stack.top).toBe(0);
		expect(stack.peek).toEqual('👻');
	});

	it('should pop the last element pushed into the stack', () => {
		// Arrange
		stack.push('👻');

		// Act
		const actual = stack.pop();

		// Assert
		expect(actual).toEqual('👻');
		expect(stack.top).toBe(-1);
	});
});
