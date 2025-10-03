// Simple script to copy logo image
const fs = require('fs');
const path = require('path');

console.log('Current directory:', process.cwd());
console.log('Files in current directory:', fs.readdirSync('.'));

// Check if images directory exists
if (fs.existsSync('images')) {
  console.log('Images directory exists');
  console.log('Files in images:', fs.readdirSync('images'));
} else {
  console.log('Images directory does not exist');
}

// Check if public directory exists
if (fs.existsSync('public')) {
  console.log('Public directory exists');
  console.log('Files in public:', fs.readdirSync('public'));
} else {
  console.log('Public directory does not exist');
}

// Try to copy the file
try {
  const sourcePath = path.join('images', 'photo_2025-10-03_19-10-54.jpg');
  const destPath = path.join('public', 'logo.jpg');
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log('✅ Logo copied successfully!');
  } else {
    console.log('❌ Source file not found:', sourcePath);
  }
} catch (error) {
  console.error('❌ Error copying logo:', error.message);
}
