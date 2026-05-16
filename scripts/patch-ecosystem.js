const fs = require('fs');

const src = 'c:/Users/dev/Downloads/SOFIN Ecosystem _Standalone_.html';
const dest = 'c:/Users/dev/Desktop/sofin_group/public/ecosystem-animation.html';

let html = fs.readFileSync(src, 'utf8');

const css = '.brand,.headline,.footer,.stats,.coord,.brand-name,.brand-tag,.eyebrow,h1{display:none!important}html,body{width:100%!important;height:100%!important;overflow:hidden!important;margin:0!important;background:#0C0C0C!important;background-image:none!important}#stage{position:fixed!important;inset:0!important;width:100vw!important;height:100vh!important;display:grid!important;place-items:center!important;background:#0C0C0C!important}.scene{width:100vw!important;height:100vh!important;max-width:none!important;aspect-ratio:unset!important}.orbit-wrap{width:100%!important;height:100%!important;display:flex!important;align-items:center!important;justify-content:center!important}.orbit-stage{width:96%!important;aspect-ratio:1.6/1!important}#stage::before{content:"";position:fixed;top:0;left:0;width:45%;height:45%;background:radial-gradient(ellipse at top left,#0C0C0C 0%,#0C0C0C 30%,transparent 70%);pointer-events:none;z-index:9999}#stage::after{content:"";position:fixed;bottom:0;right:0;width:45%;height:45%;background:radial-gradient(ellipse at bottom right,#0C0C0C 0%,#0C0C0C 30%,transparent 70%);pointer-events:none;z-index:9999}@media(max-width:768px){.orbit-stage{width:98%!important}.planet-orb{width:36px!important;height:36px!important}.planet-orb svg{width:16px!important;height:16px!important}.planet-name{font-size:9px!important}.planet-sub{font-size:7px!important}.planet-label{padding:2px 6px!important}.globe-wrap{width:36%!important;height:36%!important}}';

const injection = `
    // Inject CSS overrides after document replacement
    (function() {
      var st = document.createElement('style');
      st.textContent = "${css.replace(/"/g, '\\"')}";
      document.head.appendChild(st);
    })();
`;

const marker = '// Babel standalone auto-transforms';
if (!html.includes(marker)) {
  console.error('Marker not found!');
  process.exit(1);
}

html = html.replace(marker, injection + '\n    ' + marker);
fs.writeFileSync(dest, html, 'utf8');
console.log('Patched successfully. Output size:', fs.statSync(dest).size, 'bytes');
