const fs = require('fs');
const path = require('path');

console.log('Copying Gemini image...');

try {
  // Ensure public directory exists
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
    console.log('Created public directory');
  }

  // Copy the Gemini image
  const sourcePath = 'images/Gemini_Generated_Image_of8qv2of8qv2of8q.png';
  const destPath = 'public/gemini-image.png';
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log('✅ Gemini image copied successfully to public/gemini-image.png');
  } else {
    console.log('❌ Source file not found:', sourcePath);
  }
} catch (error) {
  console.error('❌ Error:', error.message);
}
