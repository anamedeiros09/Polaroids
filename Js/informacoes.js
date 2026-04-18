// ─── RENDER INFORMAÇÕES ──────────────────────────────────────
const infoSteps = [
  {
    num: '01', icon: '🖼️',
    title: 'Escolha o tamanho',
    desc: 'Selecione entre os 5 formatos disponíveis — do Mini ao Postal. Cada um tem sua proporção clássica de Polaroid.'
  },
  {
    num: '02', icon: '📲',
    title: 'Envie suas fotos',
    desc: 'Mande as imagens pelo WhatsApp em boa resolução. Fotos com no mínimo 800×600 px garantem um resultado nítido.'
  },
  {
    num: '03', icon: '✂️',
    title: 'Produção cuidadosa',
    desc: 'Cada Polaroid é impressa em papel fotográfico premium e cortada com precisão, respeitando todas as bordas do formato.'
  },
  {
    num: '04', icon: '📦',
    title: 'Retirada ou entrega',
    desc: 'Combine a retirada ou receba em casa. As Polaroids são embaladas com carinho para chegarem perfeitas até você.'
  }
];

const infoQuality = [
  { icon: '🖨️', label: 'Impressão profissional' },
  { icon: '📄', label: 'Papel fotográfico' },
  { icon: '✨', label: 'Brilhante ou Fosco' },
  { icon: '💧', label: 'Tinta resistente' },
  { icon: '✂️', label: 'Corte preciso' },
  { icon: '🎨', label: 'Cores vibrantes' },
];

const infoFaq = [
  {
    q: 'Qual tamanho escolher?',
    a: 'Depende do uso! Oficial e Postal são ótimos para presentear e decorar. Média encaixa em capas de celular. Pequena e Mini são perfeitas para varais e scrapbooks.'
  },
  {
    q: 'Como enviar as fotos?',
    a: 'Via WhatsApp, em boa qualidade (evite capturas de tela). Envie a foto original diretamente da galeria para melhor resultado.'
  },
  {
    q: 'Posso pedir fotos diferentes no mesmo pedido?',
    a: 'Sim! Cada Polaroid pode ter uma foto diferente. Basta enviar todas as imagens numeradas na ordem que deseja.'
  },
  {
    q: 'Minha foto ficará borrada?',
    a: 'Para garantir nitidez, envie fotos com boa resolução e bem iluminadas. Fotos muito escuras ou comprimidas podem perder qualidade na impressão.'
  },
  {
    q: 'Posso escrever na borda inferior?',
    a: 'Sim! Todos os formatos têm a borda inferior larga, característica da Polaroid, com espaço para escrever uma mensagem ou legenda.'
  },
  {
    q: 'Brilhante ou fosco — qual escolher?',
    a: 'O brilhante realça as cores e é o mais pedido. O fosco tem um acabamento mais suave, sem reflexos, ótimo para ambientes claros ou para um visual mais delicado. Os dois têm a mesma qualidade e preço.'
  },
  {
    q: 'Como funciona a legenda impressa?',
    a: 'Por + R$0,50 por unidade, imprimimos um texto na borda inferior antes do corte. Pode ser uma data (12.03.2024), nomes (Ana & João), uma palavra curta (saudade, forever) ou uma mensagem maior. Informe o texto ao enviar as fotos.'
  },
  {
    q: 'Qual o prazo para ficar pronto?',
    a: 'Em geral, pedidos ficam prontos em até 2 dias úteis após a confirmação das fotos e do pagamento.'
  }
];

const infoSection = document.getElementById('info-section');

infoSection.innerHTML = `
  <!-- Como funciona -->
  <div class="info-block">
    <div class="info-block-eyebrow">Passo a passo</div>
    <h3 class="info-block-title">Como funciona</h3>
    <div class="info-steps-grid">
      ${infoSteps.map(s => `
        <div class="info-step">
          <div class="info-step-top">
            <span class="info-step-num">${s.num}</span>
            <span class="info-step-icon">${s.icon}</span>
          </div>
          <h4 class="info-step-title">${s.title}</h4>
          <p class="info-step-desc">${s.desc}</p>
        </div>`).join('')}
    </div>
  </div>

  <!-- Qualidade -->
  <div class="info-block info-block-dark">
    <div class="info-block-eyebrow" style="color:var(--amber)">Material</div>
    <h3 class="info-block-title" style="color:white">Qualidade premium</h3>
    <div class="info-quality-grid">
      ${infoQuality.map(q => `
        <div class="info-quality-item">
          <span class="info-quality-icon">${q.icon}</span>
          <span class="info-quality-label">${q.label}</span>
        </div>`).join('')}
    </div>
  </div>

  <!-- Embalagem -->
  <div class="info-block">
    <div class="info-block-eyebrow">Embalagem</div>
    <h3 class="info-block-title">Cuidado do começo ao fim</h3>
    <div class="packaging-options">
      <div class="packaging-card">
        <div class="packaging-icon">📨</div>
        <div class="packaging-info">
          <div class="packaging-name">Envelope padrão</div>
          <div class="packaging-desc">Todo pedido já vem embalado em envelope padrão, protegendo suas Polaroids com segurança.</div>
          <div class="packaging-price">incluso em todos os pedidos</div>
        </div>
      </div>
      <div class="packaging-card packaging-card-gift">
        <div class="packaging-icon">🎁</div>
        <div class="packaging-info">
          <div class="packaging-name">Envelope de presente decorado</div>
          <div class="packaging-desc">Envelope especial com acabamento decorado, perfeito para presentear com muito charme.</div>
          <div class="packaging-price">+ R$2,50</div>
        </div>
      </div>
    </div>
  </div>

  <!-- FAQ -->
  <div class="info-block">
    <div class="info-block-eyebrow">Dúvidas</div>
    <h3 class="info-block-title">Perguntas frequentes</h3>
    <div class="faq-list">
      ${infoFaq.map(f => `
        <div class="faq-item">
          <div class="faq-q">${f.q}</div>
          <div class="faq-a">${f.a}</div>
        </div>`).join('')}
    </div>
  </div>
`;
