import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const furnituresDir = path.join(__dirname, 'static/furnitures');
const outputFile = path.join(__dirname, 'src/lib/catalog.js');

// Supported image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];

// Function to check if a file is an image
function isImage(file) {
  return imageExtensions.some(ext => file.toLowerCase().endsWith(ext));
}

// Function to clean filename to a readable title
function filenameToTitle(filename) {
  return filename
    .replace(/\.(jpg|jpeg|png|webp|gif|svg)$/i, '') // Remove extension
    .replace(/[-_]/g, ' ') // Dashes/underscores to spaces
    .replace(/\b\w/g, l => l.toUpperCase()) // Capitalize words
    .trim();
}

// Scan all subfolders and collect images
function scanFurnitures() {
  if (!fs.existsSync(furnituresDir)) {
    console.error('Error: static/furnitures/ folder not found. Create it and add subfolders like sofa/, bed/, etc.');
    process.exit(1);
  }

  const subfolders = fs.readdirSync(furnituresDir).filter(item => {
    const itemPath = path.join(furnituresDir, item);
    return fs.statSync(itemPath).isDirectory();
  });

  const categories = {};

  subfolders.forEach(folder => {
    const folderPath = path.join(furnituresDir, folder);
    const files = fs.readdirSync(folderPath);
    const images = files
      .filter(file => isImage(file))
      .map(file => {
        const name = filenameToTitle(file);
        return {
          src: `/furnitures/${folder}/${file}`, // Public path for SvelteKit
          name: name,
          alt: `${name} - Wooden furniture from Puspa Kamal`
        };
      });
    if (images.length > 0) {
      categories[folder] = images;
    }
  });

  return categories;
}

// Generate and write the JS module
function generateCatalogJS(categories) {
  const totalImages = Object.values(categories).flat().length;
  const totalCategories = Object.keys(categories).length;

  const jsContent = `// Auto-generated catalog data - Do not edit manually
// Run 'npm run generate-catalog' to regenerate after adding images

export const catalogData = {
  categories: ${JSON.stringify(categories, null, 2)}
};

export const totalImages = ${totalImages};
export const totalCategories = ${totalCategories};
`;

  fs.writeFileSync(outputFile, jsContent, 'utf8');
  console.log(`✅ Generated src/lib/catalog.js successfully!`);
  console.log(`📁 Found ${totalCategories} categories with ${totalImages} total images.`);
  if (totalImages === 0) {
    console.log('⚠️  No images found. Add .jpg/.png files to subfolders like static/furnitures/sofa/.');
  }
}

// Run the scan
const categories = scanFurnitures();
generateCatalogJS(categories);