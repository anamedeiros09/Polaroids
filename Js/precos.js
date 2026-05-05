// ─── RENDER PREÇOS ───────────────────────────────────────────
const prices = [
  { emoji:'📬', name:'Postal',          size:'10,5 × 12,8 cm', price:'R$5,50', fullUnit:'R$3,30', featured:true  },
  { emoji:'📷', name:'Oficial',         size:'8,8 × 10,7 cm',  price:'R$3,50', fullUnit:'R$2,43', featured:false },
  { emoji:'📱', name:'Média',           size:'6,5 × 7,9 cm',   price:'R$2,50', fullUnit:'R$1,96', featured:false },
  { emoji:'💳', name:'Pequena',         size:'5,0 × 6,1 cm',   price:'R$2,25', fullUnit:'R$1,87', featured:false },
  { emoji:'🎨', name:'Mini Decorativa', size:'4,0 × 4,9 cm',   price:'R$1,95', fullUnit:'R$1,75', featured:false },
];

const priceGrid = document.getElementById('price-grid');
priceGrid.insertAdjacentHTML('beforebegin', `
  <p style="font-size:14px; color:#2e7d32; margin:-14px 0 38px 0;
            letter-spacing:0.02em; text-align:left;">
    🔑 5% off no Pix
  </p>`);
prices.forEach(p => {
  priceGrid.innerHTML += `
    <div class="price-card${p.featured ? ' featured' : ''}">
      <div class="pc-emoji">${p.emoji}</div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-size">${p.size}</div>
      <div class="pc-price">${p.price}</div>
      <div class="pc-per">por foto · pedido mínimo</div>
    </div>`;
});

priceGrid.insertAdjacentHTML('afterend', `
  <div class="price-kit-note">
    <div class="pkn-header">
      <span class="pkn-icon">📉</span>
      <div>
        <strong>Descontos progressivos em kits</strong>
        <span>Quanto mais unidades, menor o preço por foto — de Kit Mini (1 folha) até Kit Full (5 folhas)</span>
      </div>
    </div>
    <div class="pkn-sizes">
      ${prices.map(p => `
        <div class="pkn-size">
          <span class="pkn-name">${p.emoji} ${p.name}</span>
          <span class="pkn-range">${p.price} <span class="pkn-arrow">→</span> <strong>${p.fullUnit}</strong>/foto</span>
        </div>`).join('')}
    </div>
  </div>
`);

// ─── OPCIONAIS ───────────────────────────────────────────────
const priceExtras = document.getElementById('price-extras');
priceExtras.innerHTML = `

  <!-- Tipo de papel -->
  <div class="extras-block">
    <div class="extras-eyebrow">Acabamento</div>
    <h3 class="extras-title">Tipo de papel</h3>
    <p class="extras-desc">Escolha o acabamento que combina com o seu estilo — sem custo adicional.</p>
    <div class="paper-options">
      <div class="paper-card">
        <div class="paper-icon">✨</div>
        <div class="paper-name">Brilhante</div>
        <div class="paper-desc">Cores vibrantes e intensas. Ideal para fotos com muito detalhe e contraste. O mais pedido!</div>
        <div class="paper-badge paper-badge-gloss">Mais popular</div>
      </div>
      <div class="paper-card">
        <div class="paper-icon">🌫️</div>
        <div class="paper-name">Fosco</div>
        <div class="paper-desc">Acabamento suave e elegante. Sem reflexos, perfeito para ambientes iluminados e estética delicada.</div>
        <div class="paper-badge paper-badge-matte">Sem reflexo</div>
      </div>
    </div>
  </div>

  <!-- Legenda impressa -->
  <div class="extras-block">
    <div class="extras-eyebrow">Personalização</div>
    <h3 class="extras-title">Legenda impressa <span class="extras-price-tag">+ R$0,50 / un</span></h3>
    <p class="extras-desc">Adicione um texto impresso na borda inferior da Polaroid antes do corte — permanente e com muito charme.</p>
    <div class="caption-options">
      <div class="caption-card">
        <div class="caption-type">📅 Data</div>
        <div class="caption-examples">
          <span>12.03.2024</span>
          <span>Verão 2024</span>
          <span>Dez · 2023</span>
        </div>
      </div>
      <div class="caption-card">
        <div class="caption-type">💛 Nomes</div>
        <div class="caption-examples">
          <span>Maria & João</span>
          <span>Mari + Família</span>
          <span>Lú & Bê</span>
        </div>
      </div>
      <div class="caption-card">
        <div class="caption-type">✍️ Palavra curta</div>
        <div class="caption-examples">
          <span>saudade</span>
          <span>forever</span>
          <span>amor</span>
        </div>
      </div>
      <div class="caption-card">
        <div class="caption-type">💬 Mensagem</div>
        <div class="caption-examples">
          <span>Te amo para sempre ♥</span>
          <span>Obrigada por tudo!</span>
          <span>Melhores momentos</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Pagamento -->
  <div class="extras-block">
    <div class="extras-eyebrow">Pagamento</div>
    <h3 class="extras-title">Formas de pagamento</h3>
    <p class="extras-desc">
      Aceitamos Pix 🔑, débito e crédito à vista 💳 — e também
      parcelamento em 2×. Pagando no Pix, você tem
      <strong>5% de desconto</strong> automático, é só avisar na hora
      de fechar o pedido. Prefere parcelar? O crédito em
      <strong>2× está disponível a partir de R$100</strong>, com um
      pequeno acréscimo sobre o total que te informamos na hora. Após
      confirmar o pedido pelo WhatsApp, você recebe as instruções de
      pagamento — o comprovante libera a produção imediatamente.
    </p>
  </div>
`;
