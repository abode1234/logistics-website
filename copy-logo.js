const fs = require('fs');
const path = require('path');

console.log('Copying logo image...');

try {
  // Ensure public directory exists
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
    console.log('Created public directory');
  }

  // Copy the logo
  const sourcePath = 'images/photo_2025-10-03_19-10-54.jpg';
  const destPath = 'public/logo.jpg';
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log('✅ Logo copied successfully!');
  } else {
    console.log('❌ Source file not found:', sourcePath);
  }
} catch (error) {
  console.error('❌ Error:', error.message);
}
