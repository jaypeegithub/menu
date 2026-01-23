#!/usr/bin/env python3
from PIL import Image
import sys
import os

def remove_checkerboard(image_path):
    """Remove white and gray checkerboard background from PNG"""
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # Check if pixel is white (#FFFFFF) or light gray (#CCCCCC, #EEEEEE, etc)
        # These are common checkerboard colors
        r, g, b, a = item
        
        # If it's very light (close to white or gray checkerboard)
        if r > 200 and g > 200 and b > 200 and abs(r - g) < 20 and abs(g - b) < 20:
            # Make it transparent
            new_data.append((r, g, b, 0))
        else:
            # Keep the original pixel
            new_data.append(item)
    
    img.putdata(new_data)
    
    # Save with original filename
    img.save(image_path, "PNG")
    print(f"✓ Cleaned: {image_path}")

# Process new PNG files
png_files = [
    "banana-slug.png",
    "opal-squid.png",
    "puget-sound-king-crab.png",
    "salal.png"
]

for filename in png_files:
    if os.path.exists(filename):
        remove_checkerboard(filename)
    else:
        print(f"✗ Not found: {filename}")

print("\nDone! Checkerboard backgrounds removed from new images.")
