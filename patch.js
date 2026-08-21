const fs = require('fs');
const path = '/Users/aesendev/Documents/Workspace/morning-house/booking.html';
let content = fs.readFileSync(path, 'utf8');

// Replace items-stretch with items-stretch content-center
// This ensures the grid row doesn't stretch to the full height of the viewport,
// but the cards inside the row will still stretch to match each other's height perfectly.
content = content.replace(
  'grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch flex-grow pt-28 md:pt-32 pb-16',
  'grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch content-center flex-grow pt-28 md:pt-32 pb-16'
);

fs.writeFileSync(path, content, 'utf8');
console.log('patched');
