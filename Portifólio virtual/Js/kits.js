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

// ─── RENDER KITS ─────────────────────────────────────────────
const kitsSection = document.getElementById('kits-section');
kitTiers.forEach((tier, i) => {
  const pct = Math.round(tier.disc * 100);
  const discLabel = pct === 0 ? 'sem desconto' : pct + '% de desconto';
  const isZero = pct === 0;
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
