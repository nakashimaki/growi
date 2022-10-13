const fs = require('fs');
const path = require('path');

// export to app as string
export const styles = fs.readFileSync(path.resolve(__dirname, '../dist/assets/styles_bundle.js'));
export const agent = fs.readFileSync(path.resolve(__dirname, '../dist/assets/agent_bundle.js'));
export const stylesCSS = fs.readFileSync(path.resolve(__dirname, '../dist/assets/styles_bundle.css'));
