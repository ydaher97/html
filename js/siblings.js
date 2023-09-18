const numSiblings = parseInt(prompt('How many siblings do you have?'));

//  2 and 3
if (numSiblings == 1) {
  console.log('1 sibling!');
} else if (numSiblings > 1) {
  console.log('More than 1 sibling');
} else {
  console.log('No siblings');
}

//  6
if (numSiblings === 1) {
  console.log('1 sibling!');
} else if (numSiblings > 1) {
  console.log('More than 1 sibling');
} else {
  console.log('No siblings');
}

//  7
const numSiblingsAsNumber = parseInt(numSiblings, 10);

if (numSiblingsAsNumber === 1) {
  console.log('1 sibling!');
} else if (numSiblingsAsNumber > 1) {
  console.log('More than 1 sibling');
} else {
  console.log('No siblings');
}
