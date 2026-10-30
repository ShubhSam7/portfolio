// Illustrative demo clips, not recordings of the live products.
// Run: node scripts/generate-demo-previews.mjs
import sharp from 'sharp';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const directory = fileURLToPath(new URL('../public/demo/', import.meta.url));
await mkdir(directory, { recursive: true });
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const rect = (x, y, w, h, fill, radius = 0, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" rx="${radius}" ${extra}/>`;
const text = (x, y, value, size = 16, color = '#dce4e1', weight = 400) => `<text x="${x}" y="${y}" fill="${color}" font-family="Arial,sans-serif" font-size="${size}" font-weight="${weight}">${escape(value)}</text>`;
const circle = (x, y, r, fill, extra = '') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" ${extra}/>`;
const wrap = content => `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">${content}</svg>`;
const cursor = (x,y) => `<path d="m${x} ${y} 0 25 7-7 5 11 5-3-5-10 11 0z" fill="#fafaf8" stroke="#233239" stroke-width="2"/>`;

function cipher(t) {
  const showReply = t > 2.1;
  const progress = Math.min(1, t / 1.8);
  const x = 830 - progress * 100, y = 215 + progress * 155;
  return wrap(
    rect(0,0,960,540,'#e1e7d8') + text(36,38,'CIPHER / CAMPUS COMMONS',13,'#66745f',600) +
    rect(42,65,876,510,'#142025',14) + rect(42,65,876,32,'#1b2b30',14) +
    circle(61,81,3,'#81928e') + circle(73,81,3,'#81928e') + circle(85,81,3,'#81928e') +
    text(434,85,'cipher.app',10,'#a7b3ac') +
    text(64,138,'c/ cipher',23,'#ecf0e7',700) + rect(56,169,166,35,'#2e453a',5) +
    text(70,192,'#  Commons',13,'#d7e5c6') + text(70,229,'#  Your rooms',12,'#93a5a5') + text(70,263,'⌕  Discover',12,'#93a5a5') +
    text(68,337,'YOUR SPACES',9,'#809493',600) + text(70,369,'#  the-builders',12,'#a3b1ad') + text(70,401,'#  campus-life',12,'#a3b1ad') +
    `<path d="M238 97V540" stroke="#334347"/>` +
    text(271,144,'The campus, unfiltered.',27,'#f0f2eb',600) + text(271,172,'Good conversations start with a little curiosity.',12,'#9aadaa') +
    rect(270,199,607,194,'#1d2e34',9,'stroke="#35464b"') + rect(289,218,34,34,'#bbd19c',9) + text(299,242,'✳',22,'#49643b') +
    text(335,231,'curious_otter',12,'#e1e9e1',600) + text(335,250,'in the-builders · just now',10,'#8fa5a7') +
    text(290,286,'What’s one thing you built just because',17) + text(290,312,'you wanted to see if you could?',17) +
    `<path d="M290 338H856" stroke="#344a4f"/>` + text(291,364,showReply ? '♡ 25     ◌ 9 replies' : '♡ 24     ◌ 8 replies',11,'#aec5b0') + text(797,364,'↗ Share',10,'#91a5a4') +
    (showReply ? `<g opacity="${Math.min(1,(t-2.1)*2)}">${rect(270,409,607,90,'#223c35',9)}${text(290,435,'you',12,'#c7d9af',600)}${text(290,463,'A tiny idea that turned into a whole weekend project.',14,'#dce5dc')}</g>` : rect(270,409,607,54,'#1a2a2f',7) + text(291,442,'Join the conversation…',13,'#82979b')) +
    (t < 2.4 ? cursor(x,y) : '')
  );
}

function brain(t) {
  const term = 'database'.slice(0,Math.max(0,Math.min(8,Math.floor((t-.6)*5))));
  const searching = term.length > 3;
  let nodes = '';
  const points = [[537,165,'Notes'],[768,174,'Research'],[480,374,'Projects'],[765,383,'Learning']];
  for (const [x,y,label] of points) {
    nodes += `<path d="M637 279 ${x} ${y}" stroke="#bab8da" stroke-width="2"/>`;
    nodes += circle(x,y,40,'#fff','stroke="#cbc8e1" stroke-width="2"') + text(x-label.length*3.4,y+5,label,13,'#49475f');
  }
  const pulse = 60 + Math.sin(t * 3) * 5;
  return wrap(rect(0,0,960,540,'#e9e7f6') + text(35,38,'SECOND BRAIN / CONNECT THE DOTS',13,'#7c7795',600) +
    rect(30,65,900,445,'#f7f6fc',16) + rect(30,65,294,445,'#eeedf7',16) +
    text(53,106,'Second Brain',23,'#363249',700) + text(53,132,'A little room for everything you save.',11,'#8b849c') +
    rect(51,155,251,39,'#fff',7,'stroke="#dad6eb"') + text(64,181,term || 'Find something you saved…',13,term ? '#4e4770' : '#a8a0b8') +
    (searching ? rect(51,216,251,87,'#dfdcfa',8) + text(66,242,'Database notes',15,'#5148aa',600) + text(66,266,'Connections worth keeping.',11,'#777086') + text(66,287,'NOTES  ·  3 CONNECTIONS',9,'#8d85a3') :
      rect(51,216,251,87,'#fff',8) + text(66,242,'That idea from yesterday',15,'#514b68',600) + text(66,267,'Notes, links, and little discoveries.',11,'#91879f')) +
    rect(51,320,251,79,'#fff',8) + text(66,347,'Things I’m learning',14,'#514b68',600) + text(66,374,'A few dots waiting to connect.',11,'#91879f') +
    nodes + circle(637,279,pulse,'#d8d3fb','opacity=".7"') + circle(637,279,53,'#5350de') + text(604,274,'Your next',14,'#fff',600) + text(608,296,'big idea',14,'#fff',600) +
    text(487,473,searching ? 'Found it. Everything is connected.' : 'A home for connected thinking.',12,'#9990ad') +
    (t < 2.8 ? cursor(248,175) : cursor(552 + Math.sin(t)*18,280)));
}

function visitor(t) {
  const approved = t > 2.4;
  const progress = Math.min(1,t/2.4);
  return wrap(rect(0,0,960,540,'#e9e4d7') + text(34,38,'VISITOR MANAGEMENT / A BETTER WELCOME',13,'#827864',600) +
    rect(41,66,878,437,'#fffdf6',15) + text(74,111,'↳ Campus pass',24,'#343e31',700) + text(74,139,'A warm welcome. One simple check-in.',13,'#8b8f7a') +
    text(75,194,'VISITOR NAME',10,'#7f8974',600) + rect(74,207,395,44,'#f4f4eb',7) + text(91,235,progress > .3 ? 'Alex Morgan' : '',15,'#4e5845') +
    text(75,285,'VISITING',10,'#7f8974',600) + rect(74,297,395,44,'#f4f4eb',7) + text(91,326,progress > .65 ? 'Computer Science Department' : '',15,'#4e5845') +
    rect(74,373,395,48,approved ? '#e5edda' : '#60734c',7) + text(approved ? 219 : 203,403,approved ? 'Checked in ✓' : 'Check in →',14,approved ? '#52673d' : '#fff',600) +
    rect(541,151,319,291,approved ? '#edf3e7' : '#f4f2e8',12,'stroke="#e2e5d8"') + circle(701,206,27,approved ? '#c6dba8' : '#e5e4d5') + text(690,215,approved ? '✓' : '☺',26,'#6c8257') +
    text(approved ? 608 : 625,272,approved ? 'You’re good to go.' : 'Almost there.',23,'#415137',600) +
    text(595,304,approved ? 'Your visitor pass is ready.' : 'Fill in your details to get started.',13,'#92977e') +
    (approved ? `<g>${Array.from({length:7},(_,row)=>Array.from({length:7},(_,col)=>(row*3+col*5)%4!==0 ? rect(669+col*9,330+row*9,7,7,'#405532') : '').join('')).join('')}</g>` + text(627,416,'● ACCESS APPROVED',11,'#6a8253',600) : text(631,373,'A BETTER ARRIVAL',11,'#a4a58d',600)) +
    (t < 2.7 ? cursor(426,218+progress*173) : ''));
}

for (const [id,render] of [['cipher',cipher],['second-brain',brain],['visitor-management',visitor]]) {
  await sharp(Buffer.from(render(0))).jpeg({quality:88}).toFile(`${directory}${id}.jpg`);
  const ffmpeg = spawn('ffmpeg',['-hide_banner','-loglevel','error','-y','-f','image2pipe','-framerate','20','-i','pipe:0','-an','-c:v','libx264','-preset','fast','-crf','25','-pix_fmt','yuv420p','-movflags','+faststart',`${directory}${id}.mp4`],{stdio:['pipe','ignore','inherit']});
  const completion = once(ffmpeg,'close');
  for (let frame=0;frame<120;frame++) {
    const png = await sharp(Buffer.from(render(frame/20))).png().toBuffer();
    if (!ffmpeg.stdin.write(png)) await once(ffmpeg.stdin,'drain');
  }
  ffmpeg.stdin.end();
  const [code] = await completion;
  if (code !== 0) throw new Error(`ffmpeg failed for ${id} (${code})`);
  console.log(`Generated ${id}: 6-second illustrative demo and poster.`);
}
