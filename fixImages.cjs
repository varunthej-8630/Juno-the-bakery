const fs = require('fs');
let code = fs.readFileSync('js/menuData.js', 'utf8');

const goodImages = [
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1414235077428-338988a2e8c0?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80'
];

let globalIndex = 0;
// Using [\s\S]*? to handle any missing formatting issues, wait, no: image: "..."
code = code.replace(/image\s*:\s*["'][^"']*["']/g, (match) => {
  const url = goodImages[globalIndex % goodImages.length];
  globalIndex++;
  return 'image: "' + url + '"';
});

fs.writeFileSync('js/menuData.js', code);
console.log('Images replaced: ' + globalIndex);
