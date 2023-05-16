class Stack {
	constructor() {
		this.top = -1;
		this.items = {};
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

	it.todo('should push new elements on the top of the stack');

	it.todo('should pop the last element pushed into the stack');
});
