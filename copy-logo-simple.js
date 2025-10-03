const fs = require('fs');
const path = require('path');

console.log('Starting logo copy process...');

// Ensure public directory exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
  console.log('Created public directory');
}

// Copy the logo
try {
  const sourceFile = 'images/photo_2025-10-03_19-10-54.jpg';
  const destFile = 'public/logo.jpg';
  
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile);
    console.log('✅ Logo copied successfully from', sourceFile, 'to', destFile);
  } else {
    console.log('❌ Source file not found:', sourceFile);
  }
} catch (error) {
  console.error('❌ Error:', error.message);
}
