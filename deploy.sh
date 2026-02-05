#!/bin/bash

# GitHub Pages deployment script for handmade wreath business website

echo "Setting up GitHub Pages for Handmade Wreath Business"

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit"
fi

# Create GitHub Pages repository (this would normally be done manually on GitHub)
echo "To deploy this website to GitHub Pages:"
echo "1. Create a new repository on GitHub named 'username.github.io'"
echo "2. Add the GitHub remote:"
echo "   git remote add origin https://github.com/username/username.github.io.git"
echo "3. Push to main branch:"
echo "   git push -u origin main"
echo ""
echo "4. Enable GitHub Pages:"
echo "   - Go to Settings > Pages in your repository"
echo "   - Select 'Deploy from a branch' and choose 'main' branch"
echo "   - Save"
echo ""
echo "Your website will be live at https://username.github.io"

echo ""
echo "Website structure:"
echo "├── index.html"
echo "├── styles.css"
echo "├── script.js"
echo "├── README.md"
echo "└── CNAME (for custom domain)"

echo ""
echo "To customize:"
echo "- Replace placeholder images with your actual wreath photos"
echo "- Update contact information in index.html"
echo "- Modify colors and styling in styles.css"
echo "- Add more products to the gallery"