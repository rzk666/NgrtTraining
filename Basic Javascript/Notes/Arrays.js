const test = [1, "test", 3, x => x + 1 ];

// *** We know test is an array: *** //

test 
// typeof test = "array"
// test.length = 4
// etc..

// The addressed element in the array is standing on its own

test[0];
// typeof test[0] = "number"
// test[0] - 3 = -2
// test[0] * 3 = 3

const i = 1;

test[i];
// typeof test[i] = "string"
// test[i] + "test" = "testtest"
// test[i].length = 4