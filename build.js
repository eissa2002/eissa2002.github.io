// Pre-compiles the .jsx sources into build/*.js so browsers don't run Babel.
// Run after editing any .jsx file:  node build.js   (needs: npm i @babel/standalone)
const fs = require('fs');
const Babel = require('@babel/standalone');
const files = ['Icons', 'tweaks-panel', 'boot', 'components', 'terminal', 'app'];
for (const f of files) {
  const src = fs.readFileSync(f + '.jsx', 'utf8');
  const out = Babel.transform(src, { presets: [['react', { runtime: 'classic' }]], sourceType: 'script', compact: false, comments: false }).code;
  fs.writeFileSync('build/' + f + '.js', out);
  console.log('built', f);
}
