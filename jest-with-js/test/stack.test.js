class Stack {
	constructor() {
		this.top = -1;
		this.items = {};
	}

	push(item) {
		this.top += 1;
		this.items[this.top] = item;
	}

	get peek() {
		return this.items[this.top];
	}
}

describe('My stack', () => {
	it('should be empty when created', () => {
		// Arrange
		const stack = new Stack();

		// Act
		const actual = stack;

		// Assert
		expect(actual.top).toBe(-1);
		expect(actual.items).toEqual({});
	});

	it('should push new elements on the top of the stack', () => {
		// Arrange
		const stack = new Stack();

		// Act
		stack.push('👻');

		// Assert
		expect(stack.top).toBe(0);
		expect(stack.peek).toEqual('👻');
	});

	it.todo('should pop the last element pushed into the stack');
});
