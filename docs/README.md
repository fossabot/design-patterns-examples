# README for GitHub Pages Website

This directory contains the GitHub Pages website for the Design Patterns Examples project.

## 🌐 Live Website

The website is automatically deployed to GitHub Pages whenever changes are pushed to the main/master branch.

Visit: `https://luizwbr.github.io/design-patterns-examples/`

## 📁 Structure

```
docs/
├── index.html       # Main landing page
├── styles.css       # Styling
├── script.js        # Interactive functionality
├── _config.yml      # Jekyll configuration
└── README.md        # This file
```

## 🚀 Features

- **Bilingual Support**: Toggle between English and Portuguese
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Pattern Catalog**: Browse all 23 design patterns organized by category
- **Language Showcase**: Highlights implementations in 7 programming languages
- **Smooth Navigation**: Smooth scrolling and intuitive user experience
- **Dark/Light Footer**: Professional design with clear navigation

## 🛠️ Local Development

To run the website locally:

1. Open `index.html` directly in a browser, or
2. Use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```
3. Navigate to `http://localhost:8000`

## 🎨 Customization

### Updating GitHub Links

Replace `luizwbr` in the following files:
- `index.html`: All GitHub repository links
- Update the repository URL throughout the page

### Changing Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #f59e0b;
    /* ... other variables */
}
```

### Adding Content

- **New Pattern**: Add a new pattern card in the appropriate category section
- **New Language**: Add a new language card in the languages section
- **Translations**: Add `data-en` and `data-pt` attributes to any new text elements

## 📝 Translation System

The website uses a simple attribute-based translation system:

```html
<p data-en="English text" data-pt="Texto em português">
    English text
</p>
```

The JavaScript automatically switches between languages when the language toggle is clicked.

## 🔄 Automatic Deployment

The website is automatically deployed using GitHub Actions:

- **Trigger**: Push to main/master branch
- **Workflow**: `.github/workflows/deploy-pages.yml`
- **Build**: Uses Jekyll for GitHub Pages compatibility
- **Deploy**: Deploys to `github-pages` environment

## 📦 Dependencies

None! This is a vanilla HTML/CSS/JavaScript website with no build dependencies.

## 🤝 Contributing

To contribute to the website:

1. Edit files in the `docs/` directory
2. Test locally
3. Submit a pull request
4. Changes will be automatically deployed after merge

## 📄 License

This website is part of the Design Patterns Examples project and is licensed under the MIT License.
