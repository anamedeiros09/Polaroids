// ─── RENDER COMBOS ───────────────────────────────────────────
const unitPrices = { postal: 4.00, oficial: 3.50, media: 3.00, pequena: 2.50, mini: 2.00 };

const combos = [
  // ── Âncora Oficial ──────────────────────────────────────────
  {
    name: 'Oficial + Média',
    ideal: 'Álbuns de fotos, presentes clássicos',
    disc: 0.15,
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
