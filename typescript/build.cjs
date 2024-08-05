const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/main.ts'], // Replace with your entry file(s)
  bundle: true,
  outfile: 'dist/main.js',     // Output file
  minify: false,                 // Set to true if you want to minify the output
  sourcemap: true,               // Generate source maps
  platform: 'node',              // For Node.js environment
  target: 'es2020',              // Target ECMAScript version         
}).catch(() => process.exit(1));   
