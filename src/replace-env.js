const fs = require('fs');

const prodFile = './src/environments/environment.prod.ts';

let content = fs.readFileSync(prodFile, 'utf-8');

content = content.replace('DUMMY_SERVICE', process.env.EMAILJS_SERVICE_ID || 'DUMMY_SERVICE')
                 .replace('DUMMY_TEMPLATE', process.env.EMAILJS_TEMPLATE_ID || 'DUMMY_TEMPLATE')
                 .replace('DUMMY_PUBLIC', process.env.EMAILJS_PUBLIC_KEY || 'DUMMY_PUBLIC')
                 .replace('DUMMY_AUTOREPLY', process.env.EMAILJS_AUTOREPLY_TEMPLATE_ID || 'DUMMY_AUTOREPLY');

fs.writeFileSync(prodFile, content);
console.log('environment.prod.ts updated with Vercel secrets ✅');