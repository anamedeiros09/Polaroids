// ─── POLAROID DATA ───────────────────────────────────────────
const polaroids = [
  {
    id: 'oficial', emoji: '📷', name: 'Oficial', subtitle: 'Polaroid Original',
    wMM: 88, hMM: 107, pWmm: 79, pHmm: 72, bLat: 4.5, bBot: 23, seed: 17, minQty: 4,
    usage: 'O formato clássico e mais reconhecido. Perfeito para porta-retratos, presentes e coleções pessoais. Cabe em qualquer moldura padrão.',
    usageImgs: [
      { src: 'Img/6.png', label: 'Álbum de fotos' },
      { src: 'Img/7.png', label: 'Presente' },
      { src: 'Img/8.png', label: 'Mural de fotos' }
    ]
  },
  {
    id: 'media', emoji: '📱', name: 'Média', subtitle: 'Para cases com bolso',
    wMM: 65, hMM: 79, pWmm: 58, pHmm: 53, bLat: 3.5, bBot: 17, seed: 42, minQty: 9,
    usage: 'Encaixa perfeitamente em capas de celular com bolso transparente. Presente moderno e personalizável — a sua foto sempre com você.',
    usageImgs: [
      { src: 'Img/9.png', label: 'Capa de celular' },
      { src: 'Img/10.png', label: 'Presente' },
      { src: 'Img/11.png', label: 'Coleção de fotos' }
    ]
  },
  {
    id: 'pequena', emoji: '💳', name: 'Pequena', subtitle: 'Para levar sempre consigo',
    wMM: 50, hMM: 61, pWmm: 44, pHmm: 40, bLat: 3, bBot: 13, seed: 63, minQty: 12,
    usage: 'Cabe em qualquer carteira ou porta-retrato pequeno. Ótimo para lembrancinhas de aniversário, festas e souvenirs.',
    usageImgs: [
      { src: 'Img/12.png', label: 'Agenda' },
      { src: 'Img/13.png', label: 'Varal de fotos' },
      { src: 'Img/14.png', label: 'Espelho do carro' }
    ]
  },
  {
    id: 'mini', emoji: '🎨', name: 'Mini Decorativa', subtitle: 'Delicada e charmosa',
    wMM: 40, hMM: 49, pWmm: 35, pHmm: 31, bLat: 2.5, bBot: 10, seed: 85, minQty: 20,
    usage: 'Perfeita para varais decorativos, scrapbooks, enfeites de mesa e composições de parede. Alta quantidade por folha reduz o custo.',
    usageImgs: [
      { src: 'Img/15.png', label: 'Scrapbook' },
      { src: 'Img/16.png', label: 'Marca-página' },
      { src: 'Img/17.png', label: 'Carteira' }
    ]
  },
  {
    id: 'postal', emoji: '📬', name: 'Postal', subtitle: 'Grande e impactante',
    wMM: 105, hMM: 128, pWmm: 94, pHmm: 86, bLat: 5.5, bBot: 28, seed: 110, minQty: 2,
    usage: 'O maior formato. Ideal para presentes premium, álbuns de viagem e decoração de ambientes. Impacto visual garantido.',
    usageImgs: [
      { src: 'Img/18.png', label: 'Porta-retrato' },
      { src: 'Img/19.png', label: 'Cartão-postal' },
      { src: 'Img/20.png', label: 'Presente' }
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
        <div class="spec-box spec-box-min">
          <div class="spec-lbl">Pedido mínimo</div>
          <div class="spec-val">${p.minQty} unidades</div>
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
