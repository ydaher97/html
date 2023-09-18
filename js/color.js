const color = prompt('Enter a color name:').toLowerCase();

function getColorType(color) {
  switch (color) {
    case 'yellow':
    case 'pink':
    case 'orange':
      return 'light color';
    case 'blue':
    case 'purple':
    case 'brown':
      return 'dark color';
    default:
      return 'Unknown color';
  }
}

const colorType = getColorType(color);
console.log(`The color "${color}" is a ${colorType}.`);
