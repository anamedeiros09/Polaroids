// ─── TABS ────────────────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ─── POLAROID DATA ───────────────────────────────────────────
const polaroids = [
  {
    id: 'oficial', emoji: '📷', name: 'Oficial', subtitle: 'Polaroid Original',
    wMM: 88, hMM: 107, pWmm: 79, pHmm: 72, bLat: 4.5, bBot: 23, seed: 17,
    usage: 'O formato clássico e mais reconhecido. Perfeito para porta-retratos, presentes e coleções pessoais. Cabe em qualquer moldura padrão.',
    usageImgs: [
      { src: 'Img/6.png', label: 'Álbum de fotos' },
      { src: 'Img/7.png', label: 'Presente personalizado' },
      { src: 'Img/8.png', label: 'Quadro de fotos' }
    ]
  },
  {
    id: 'media', emoji: '📱', name: 'Média', subtitle: 'Para cases com bolso',
    wMM: 65, hMM: 79, pWmm: 58, pHmm: 53, bLat: 3.5, bBot: 17, seed: 42,
    usage: 'Encaixa perfeitamente em capas de celular com bolso transparente. Presente moderno e personalizável — a sua foto sempre com você.',
    usageImgs: [
      { src: 'Img/9.png', label: 'Capa de celular' },
      { src: 'Img/10.png', label: 'Presente' },
      { src: 'Img/11.png', label: 'Coleção de fotos' }
    ]
  },
  {
    id: 'pequena', emoji: '💳', name: 'Pequena', subtitle: 'Para levar sempre consigo',
    wMM: 50, hMM: 61, pWmm: 44, pHmm: 40, bLat: 3, bBot: 13, seed: 63,
    usage: 'Cabe em qualquer carteira ou porta-retrato pequeno. Ótimo para lembrancinhas de aniversário, festas e souvenirs.',
    usageImgs: [
      { src: 'Img/12.png', label: 'Planner ou Agenda' },
      { src: 'Img/13.png', label: 'Mural de fotos' },
      { src: 'Img/14.png', label: 'Espelho do carro' }
    ]
  },
  {
    id: 'mini', emoji: '🎨', name: 'Mini Decorativa', subtitle: 'Delicada e charmosa',
    wMM: 40, hMM: 49, pWmm: 35, pHmm: 31, bLat: 2.5, bBot: 10, seed: 85,
    usage: 'Perfeita para varais decorativos, scrapbooks, enfeites de mesa e composições de parede. Alta quantidade por folha reduz o custo.',
    usageImgs: [
      { src: 'Img/15.png', label: 'Scrapbook' },
      { src: 'Img/16.png', label: 'Marca-página' },
      { src: 'Img/17.png', label: 'Carteira' }
    ]
  },
  {
    id: 'postal', emoji: '📬', name: 'Postal', subtitle: 'Grande e impactante',
    wMM: 105, hMM: 128, pWmm: 94, pHmm: 86, bLat: 5.5, bBot: 28, seed: 110,
    usage: 'O maior formato. Ideal para presentes premium, álbuns de viagem e decoração de ambientes. Impacto visual garantido.',
    usageImgs: [
      { src: 'Img/18.png', label: 'Porta-retratos' },
      { src: 'Img/19.png', label: 'Cartão-postal' },
      { src: 'Img/20.png', label: 'Cartão presente' }
    ]
  }
];

// ─── SVG POLAROID WITH RULERS ────────────────────────────────
function fmt(mm) { return (mm/10).toFixed(1).replace('.', ',') + ' cm'; }

function makeSVG(p) {
  const sc = 2.05;
  const W = Math.round(p.wMM * sc), H = Math.round(p.hMM * sc);
  const pW = Math.round(p.pWmm * sc), pH = Math.round(p.pHmm * sc);
  const bL = Math.round(p.bLat * sc), bT = bL;
  const pH2 = p.padH || 80, pV2 = p.padV || 48;
  const svgW = W + pH2*2, svgH = H + pV2*2;
  const ox = pH2, oy = pV2;
  const RC = '#C17F54', RI = 'rgba(120,100,85,0.5)', FS = 9.5;
  return `<svg width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="ps-${p.id}"><feDropShadow dx="0" dy="5" stdDeviation="10" flood-color="rgba(44,33,24,0.18)"/></filter>
    <clipPath id="pc-${p.id}"><rect x="${ox+bL}" y="${oy+bT}" width="${pW}" height="${pH}" rx="1"/></clipPath>
  </defs>
  <rect x="${ox}" y="${oy}" width="${W}" height="${H}" rx="3" fill="white" filter="url(#ps-${p.id})"/>
  <image href="https://picsum.photos/seed/${p.seed}/${pW*2}/${pH*2}" x="${ox+bL}" y="${oy+bT}" width="${pW}" height="${pH}" clip-path="url(#pc-${p.id})" preserveAspectRatio="xMidYMid slice"/>
  <rect x="${ox+bL}" y="${oy+bT}" width="${pW}" height="${pH}" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="1"/>
  <!-- width ruler -->
  <line x1="${ox}" y1="${oy-18}" x2="${ox+W}" y2="${oy-18}" stroke="${RC}" stroke-width="1.3"/>
  <line x1="${ox}" y1="${oy-24}" x2="${ox}" y2="${oy-12}" stroke="${RC}" stroke-width="1.3"/>
  <line x1="${ox+W}" y1="${oy-24}" x2="${ox+W}" y2="${oy-12}" stroke="${RC}" stroke-width="1.3"/>
  <text x="${ox+W/2}" y="${oy-28}" text-anchor="middle" font-size="${FS}" font-family="Jost,sans-serif" font-weight="600" fill="${RC}">${fmt(p.wMM)}</text>
  <!-- height ruler -->
  <line x1="${ox+W+18}" y1="${oy}" x2="${ox+W+18}" y2="${oy+H}" stroke="${RC}" stroke-width="1.3"/>
  <line x1="${ox+W+12}" y1="${oy}" x2="${ox+W+24}" y2="${oy}" stroke="${RC}" stroke-width="1.3"/>
  <line x1="${ox+W+12}" y1="${oy+H}" x2="${ox+W+24}" y2="${oy+H}" stroke="${RC}" stroke-width="1.3"/>
  <text x="${ox+W+32}" y="${oy+H/2}" text-anchor="start" dominant-baseline="middle" font-size="${FS}" font-family="Jost,sans-serif" font-weight="600" fill="${RC}">${fmt(p.hMM)}</text>
  <!-- photo width -->
  <line x1="${ox+bL}" y1="${oy+bT+pH+10}" x2="${ox+bL+pW}" y2="${oy+bT+pH+10}" stroke="${RI}" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="${ox+bL}" y1="${oy+bT+pH+6}" x2="${ox+bL}" y2="${oy+bT+pH+14}" stroke="${RI}" stroke-width="1"/>
  <line x1="${ox+bL+pW}" y1="${oy+bT+pH+6}" x2="${ox+bL+pW}" y2="${oy+bT+pH+14}" stroke="${RI}" stroke-width="1"/>
  <text x="${ox+bL+pW/2}" y="${oy+bT+pH+26}" text-anchor="middle" font-size="8.5" font-family="Jost,sans-serif" fill="${RI}">foto: ${fmt(p.pWmm)}</text>
  <!-- photo height -->
  <line x1="${ox+bL-10}" y1="${oy+bT}" x2="${ox+bL-10}" y2="${oy+bT+pH}" stroke="${RI}" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="${ox+bL-6}" y1="${oy+bT}" x2="${ox+bL-14}" y2="${oy+bT}" stroke="${RI}" stroke-width="1"/>
  <line x1="${ox+bL-6}" y1="${oy+bT+pH}" x2="${ox+bL-14}" y2="${oy+bT+pH}" stroke="${RI}" stroke-width="1"/>
  <text x="${ox+bL-18}" y="${oy+bT+pH/2}" text-anchor="end" dominant-baseline="middle" font-size="8.5" font-family="Jost,sans-serif" fill="${RI}">${fmt(p.pHmm)}</text>
</svg>`;
}

// ─── RENDER TAMANHOS ─────────────────────────────────────────
const polCards = document.getElementById('polaroid-cards');
polaroids.forEach(p => {
  const d = document.createElement('div');
  d.className = 'pol-card';
  d.innerHTML = `
    <div class="pol-svg-wrap">${makeSVG(p)}</div>
    <div class="pol-info">
      <div class="pol-info-tag">${p.emoji} ${p.subtitle}</div>
      <h3>${p.name}</h3>
      <div class="specs-grid">
        <div class="spec-box">
          <div class="spec-lbl">Dimensão total</div>
          <div class="spec-val">${fmt(p.wMM)} × ${fmt(p.hMM)}</div>
        </div>
        <div class="spec-box">
          <div class="spec-lbl">Área da foto</div>
          <div class="spec-val">${fmt(p.pWmm)} × ${fmt(p.pHmm)}</div>
        </div>
      </div>
      <div class="usage-imgs">
        ${p.usageImgs.map(img => `
          <div class="usage-img-item">
            <img src="${img.src}" alt="${img.label}" loading="lazy">
            <div class="usage-img-label">${img.label}</div>
          </div>`).join('')}
      </div>
      <p class="pol-usage">${p.usage}</p>
    </div>`;
  polCards.appendChild(d);
});

// ─── RENDER PREÇOS ───────────────────────────────────────────
const prices = [
  { emoji:'📬', name:'Postal',          size:'10,5 × 12,8 cm', price:'R$4,00', featured:true  },
  { emoji:'📷', name:'Oficial',         size:'8,8 × 10,7 cm',  price:'R$3,50', featured:false },
  { emoji:'📱', name:'Média',           size:'6,5 × 7,9 cm',   price:'R$3,00', featured:false },
  { emoji:'💳', name:'Pequena',         size:'5,0 × 6,1 cm',   price:'R$2,50', featured:false },
  { emoji:'🎨', name:'Mini Decorativa', size:'4,0 × 4,9 cm',   price:'R$2,00', featured:false },
];
const priceGrid = document.getElementById('price-grid');
prices.forEach(p => {
  priceGrid.innerHTML += `
    <div class="price-card${p.featured ? ' featured' : ''}">
      <div class="pc-emoji">${p.emoji}</div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-size">${p.size}</div>
      <div class="pc-price">${p.price}</div>
      <div class="pc-per">por unidade</div>
    </div>`;
});

// ─── KITS DATA ───────────────────────────────────────────────
const kitSizes = [
  { emoji:'📬', name:'Postal',          unitPrice:4.00, perSheet:2  },
  { emoji:'📷', name:'Oficial',         unitPrice:3.50, perSheet:4  },
  { emoji:'📱', name:'Média',           unitPrice:3.00, perSheet:9  },
  { emoji:'💳', name:'Pequena',         unitPrice:2.50, perSheet:12 },
  { emoji:'🎨', name:'Mini Decorativa', unitPrice:2.00, perSheet:20 },
];
const kitTiers = [
  { icon:'🎁', name:'Mini',    sheets:1, disc:0.00, ideal:'Presente pequeno, teste' },
  { icon:'🥳', name:'Starter', sheets:2, disc:0.05, ideal:'Lembrancinha de aniversário' },
  { icon:'👨‍👩‍👧‍👦', name:'Família', sheets:3, disc:0.10, ideal:'Churrasco, festas, viagens' },
  { icon:'📚', name:'Álbum',   sheets:4, disc:0.15, ideal:'Recordações, decor de quarto' },
  { icon:'💍', name:'Full',    sheets:5, disc:0.20, ideal:'Casamentos, formaturas' },
];

const kitsSection = document.getElementById('kits-section');
kitTiers.forEach((tier, i) => {
  const pct = Math.round(tier.disc * 100);
  const discLabel = pct === 0 ? 'sem desconto' : pct + '% de desconto';
  const isZero = pct === 0;
  const sheetLabel = tier.sheets === 1 ? '1 folha' : `${tier.sheets} folhas`;
  const rowCards = kitSizes.map(sz => {
    const qty = sz.perSheet * tier.sheets;
    const raw = sz.unitPrice * qty * (1 - tier.disc);
    const rounded = Math.round(raw);
    const totalFmt = 'R$' + rounded + ',00';
    return `<div class="kit-card">
      <div class="kit-card-emoji">${sz.emoji}</div>
      <div class="kit-card-name">${sz.name}</div>
      <div class="kit-card-qty">${qty}<span> un</span></div>
      <div class="kit-card-price">${totalFmt}</div>
      <div class="kit-card-divider"></div>
      <div class="kit-card-uses">${tier.ideal}</div>
    </div>`;
  }).join('');
  kitsSection.innerHTML += `
    <div class="kit-tier tier-${i}">
      <div class="kit-tier-header">
        <span class="kit-tier-title">${tier.icon} Kit ${tier.name}</span>
        <span class="kit-tier-badge${isZero ? ' zero' : ''}">${discLabel}</span>
      </div>
      <div class="kit-row">${rowCards}</div>
    </div>`;
});

// ─── RENDER COMBOS ───────────────────────────────────────────
// Preços unitários (mesmos da aba Preços)
const unitPrices = { postal: 4.00, oficial: 3.50, media: 3.00, pequena: 2.50, mini: 2.00 };

// Combos baseados em aproveitamento real de folha A4 (210×297 mm)
// Mini (40×49): 5×6 = 30 por folha → ~94%
// Pequena (50×61): 4×4 = 16 por folha + 5 Mini na faixa restante → ~94%
// Média (65×79): 3×3 = 9 por folha + 5 Mini na faixa restante → ~90%
// Postal (105×128): 2 por linha + 3×2 Média no espaço restante → ~92%
const combos = [
  // ── Âncora Oficial ──────────────────────────────────────────
  {
    name: 'Oficial + Média',
    ideal: 'Álbuns de fotos, presentes clássicos',
    disc: 0.15,
    sheets: '1 folha A4 · ~77% aproveitamento',
    items: [
      { qty: 4, key: 'oficial', label: 'Oficial (8,6×10,8 cm)' },
      { qty: 2, key: 'media',   label: 'Média (6,5×7,9 cm)' }
    ],
    img: 'https://picsum.photos/seed/ofmed/600/400'
  },
  {
    name: 'Oficial + Pequena',
    ideal: 'Mix de formatos, decoração de quadros',
    disc: 0.15,
    sheets: '1 folha A4 · ~75% aproveitamento',
    items: [
      { qty: 4, key: 'oficial',  label: 'Oficial (8,6×10,8 cm)' },
      { qty: 3, key: 'pequena',  label: 'Pequena (5,0×6,1 cm)' }
    ],
    img: 'https://picsum.photos/seed/ofpq/600/400'
  },
  {
    name: 'Oficial + Mini',
    ideal: 'Coleções variadas, scrapbook criativo',
    disc: 0.10,
    sheets: '1 folha A4 · ~73% aproveitamento',
    items: [
      { qty: 4, key: 'oficial', label: 'Oficial (8,6×10,8 cm)' },
      { qty: 4, key: 'mini',    label: 'Mini (4,0×4,9 cm)' }
    ],
    img: 'https://picsum.photos/seed/ofmini/600/400'
  },
  // ── Âncora Média ─────────────────────────────────────────────
  {
    name: 'Média + Pequena',
    ideal: 'Festas grandes, aniversários, eventos',
    disc: 0.15,
    sheets: '2 folhas A4 · ~79% aproveitamento',
    items: [
      { qty: 6, key: 'media',   label: 'Média (6,5×7,9 cm)' },
      { qty: 6, key: 'pequena', label: 'Pequena (5,0×6,1 cm)' }
    ],
    img: 'https://picsum.photos/seed/medpq/600/400'
  },
  {
    name: 'Média + Mini',
    ideal: 'Lembrancinhas de festa, decoração de mesa',
    disc: 0.10,
    sheets: '2 folhas A4 · ~75% aproveitamento',
    items: [
      { qty: 6, key: 'media', label: 'Média (6,5×7,9 cm)' },
      { qty: 8, key: 'mini',  label: 'Mini (4,0×4,9 cm)' }
    ],
    img: 'https://picsum.photos/seed/medmini/600/400'
  },
  // ── Âncora Pequena ───────────────────────────────────────────
  {
    name: 'Pequena + Mini (12+4)',
    ideal: 'Kits de scrapbook, presentes criativos',
    disc: 0.10,
    sheets: '2 folhas A4 · ~71% aproveitamento',
    items: [
      { qty: 12, key: 'pequena', label: 'Pequena (5,0×6,1 cm)' },
      { qty: 4,  key: 'mini',    label: 'Mini (4,0×4,9 cm)' }
    ],
    img: 'https://picsum.photos/seed/pq12mini4/600/400'
  },
  {
    name: 'Pequena + Mini (9+7)',
    ideal: 'Varais decorativos, quarto temático',
    disc: 0.10,
    sheets: '2 folhas A4 · ~66% aproveitamento',
    items: [
      { qty: 9, key: 'pequena', label: 'Pequena (5,0×6,1 cm)' },
      { qty: 7, key: 'mini',    label: 'Mini (4,0×4,9 cm)' }
    ],
    img: 'https://picsum.photos/seed/pq9mini7/600/400'
  },
  // ── Âncora Mini ──────────────────────────────────────────────
  {
    name: 'Mini + Pequena (10+8)',
    ideal: 'Coleções grandes, presentear em grupo',
    disc: 0.10,
    sheets: '2 folhas A4 · ~71% aproveitamento',
    items: [
      { qty: 10, key: 'mini',    label: 'Mini (4,0×4,9 cm)' },
      { qty: 8,  key: 'pequena', label: 'Pequena (5,0×6,1 cm)' }
    ],
    img: 'https://picsum.photos/seed/mini10pq8/600/400'
  },
  {
    name: 'Mini + Pequena (12+6)',
    ideal: 'Kits festa, mesa posta, enfeites',
    disc: 0.10,
    sheets: '2 folhas A4 · ~67% aproveitamento',
    items: [
      { qty: 12, key: 'mini',    label: 'Mini (4,0×4,9 cm)' },
      { qty: 6,  key: 'pequena', label: 'Pequena (5,0×6,1 cm)' }
    ],
    img: 'https://picsum.photos/seed/mini12pq6/600/400'
  },
  // ── Âncora Postal ────────────────────────────────────────────
  {
    name: 'Postal + Média',
    ideal: 'Presentes premium, álbuns de memória',
    disc: 0.10,
    sheets: '1 folha A4 · ~68% aproveitamento',
    items: [
      { qty: 2, key: 'postal', label: 'Postal (10,5×12,8 cm)' },
      { qty: 3, key: 'media',  label: 'Média (6,5×7,9 cm)' }
    ],
    img: 'https://picsum.photos/seed/postmed/600/400'
  },
  {
    name: 'Postal + Pequena',
    ideal: 'Kits de viagem, lembrança de eventos',
    disc: 0.08,
    sheets: '1 folha A4 · ~63% aproveitamento',
    items: [
      { qty: 2, key: 'postal',  label: 'Postal (10,5×12,8 cm)' },
      { qty: 4, key: 'pequena', label: 'Pequena (5,0×6,1 cm)' }
    ],
    img: 'https://picsum.photos/seed/postpq/600/400'
  },
  {
    name: 'Postal + Mini',
    ideal: 'Varal temático, decoração criativa',
    disc: 0.10,
    sheets: '1 folha A4 · ~75% aproveitamento',
    items: [
      { qty: 2,  key: 'postal', label: 'Postal (10,5×12,8 cm)' },
      { qty: 10, key: 'mini',   label: 'Mini (4,0×4,9 cm)' }
    ],
    img: 'https://picsum.photos/seed/postmini/600/400'
  },
  // ── Mix Total ────────────────────────────────────────────────
  {
    name: 'Mix Total',
    ideal: 'Um de cada! Coleção completa e variada',
    disc: 0.08,
    sheets: '1 folha A4 · ~61% aproveitamento',
    items: [
      { qty: 1, key: 'postal',  label: 'Postal (10,5×12,8 cm)' },
      { qty: 1, key: 'oficial', label: 'Oficial (8,6×10,8 cm)' },
      { qty: 1, key: 'media',   label: 'Média (6,5×7,9 cm)' },
      { qty: 2, key: 'pequena', label: 'Pequena (5,0×6,1 cm)' },
      { qty: 2, key: 'mini',    label: 'Mini (4,0×4,9 cm)' }
    ],
    img: 'https://picsum.photos/seed/mixtotal/600/400'
  }
];

function fmtPrice(val) {
  return 'R$' + val.toFixed(2).replace('.', ',');
}

const combosGrid = document.getElementById('combos-grid');
combos.forEach(c => {
  const fullPrice = c.items.reduce((sum, it) => sum + it.qty * unitPrices[it.key], 0);
  const discPrice = Math.round(fullPrice * (1 - c.disc) * 100) / 100;
  const savingsAmt = (fullPrice - discPrice).toFixed(2).replace('.', ',');
  const discPct = Math.round(c.disc * 100);

  combosGrid.innerHTML += `
    <div class="combo-card">
      <div class="combo-img-wrap">
        <img src="${c.img}" alt="${c.name}" loading="lazy">
        <div class="combo-img-overlay"></div>
        <div class="combo-img-price">${fmtPrice(discPrice)}</div>
      </div>
      <div class="combo-body">
        <h3>Combo ${c.name}</h3>
        <div class="combo-ideal">${c.ideal}</div>
        <ul class="combo-items">
          ${c.items.map(i => `<li>${i.qty}× ${i.label}</li>`).join('')}
        </ul>
        <div class="combo-footer">
          <div>
            <div style="font-size:11px;color:var(--gray-light);text-decoration:line-through;margin-bottom:2px">${fmtPrice(fullPrice)}</div>
            <div style="font-family:'Cormorant Garamond',serif;font-size:30px;color:var(--brown)">${fmtPrice(discPrice)}</div>
          </div>
          <div class="combo-savings-pill">${discPct}% · economia R$${savingsAmt}</div>
        </div>
      </div>
    </div>`;
});