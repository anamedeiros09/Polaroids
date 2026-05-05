// ─── KITS DATA ───────────────────────────────────────────────
const kitSizes = [
  { emoji:'📬', name:'Postal',          id:'postal',  perSheet:2,
    prices:[7.00, 13.50, 19.50, 26.50, 33.00] },
  { emoji:'📷', name:'Oficial',         id:'oficial', perSheet:4,
    prices:[10.00, 19.50, 29.00, 39.00, 48.50] },
  { emoji:'📱', name:'Média',           id:'media',   perSheet:9,
    prices:[18.00, 35.50, 53.00, 71.00, 88.00] },
  { emoji:'💳', name:'Pequena',         id:'pequena', perSheet:12,
    prices:[23.00, 45.00, 67.00, 89.50, 112.00] },
  { emoji:'🎨', name:'Mini Decorativa', id:'mini',    perSheet:20,
    prices:[35.50, 70.00, 105.00, 140.00, 175.00] },
];

const kitTiers = [
  { icon:'🎁', name:'Mini',    sheets:1, disc:0.00, ideal:'Presente pequeno, teste' },
  { icon:'🥳', name:'Starter', sheets:2, disc:0.05, ideal:'Lembrancinha de aniversário' },
  { icon:'👨‍👩‍👧‍👦', name:'Família', sheets:3, disc:0.10, ideal:'Churrasco, festas, viagens' },
  { icon:'📚', name:'Álbum',   sheets:4, disc:0.15, ideal:'Recordações, decor de quarto' },
  { icon:'💍', name:'Full',    sheets:5, disc:0.20, ideal:'Casamentos, formaturas' },
];

// ─── RENDER KITS ─────────────────────────────────────────────
const kitsSection = document.getElementById('kits-section');
kitsSection.innerHTML = `
  <p style="font-size:14px; color:#2e7d32; margin:-14px 0 38px 0;
            letter-spacing:0.02em; text-align:left;">
    🔑 5% off no Pix
  </p>`;
kitTiers.forEach((tier, i) => {
  const pct = Math.round(tier.disc * 100);
  const discLabel = pct === 0 ? 'sem desconto' : pct + '% de desconto';
  const isZero = pct === 0;
  const rowCards = kitSizes.map(sz => {
    const qty = sz.perSheet * tier.sheets;
    const finalPrice = sz.prices[i];
    const totalFmt = 'R$' + finalPrice.toFixed(2).replace('.', ',');
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
