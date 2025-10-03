#!/bin/bash
# Script to copy the logo image to the public directory

# Create public directory if it doesn't exist
mkdir -p public

# Copy the logo image
cp images/photo_2025-10-03_19-10-54.jpg public/logo.jpg

echo "Logo copied successfully to public/logo.jpg"
