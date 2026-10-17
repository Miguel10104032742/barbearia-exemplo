// ===== TUDO QUE PRECISA SER PREENCHIDO FICA AQUI =====
export const site = {
  name: 'Tiago Sant Ana | Barbeiro CMS',
  short: 'Tiago Sant Ana',
  whatsapp: '', // ex.: '5519999999999' (formato internacional, só dígitos)
  instagram: 'tiago.barbearia_',
  address: '', // ex.: 'Rua Exemplo, 123 - Bairro, Cidade/UF'
  mapsUrl: '', // link do Google Maps (opcional; se vazio, é gerado a partir do endereço)
  hours: [], // ex.: [{ dia: 'Seg a Sex', horas: '09h às 19h' }, { dia: 'Sábado', horas: '09h às 17h' }]
  about: [
    'Cada corte é uma oportunidade de destacar sua personalidade. Nosso compromisso é oferecer um atendimento cuidadoso, com atenção aos detalhes e foco no estilo de cada cliente.',
    // Adicione aqui a história real do profissional.
  ],
  aboutImage: '', // ex.: '/img/tiago.jpg' (arquivo dentro de /public/img)
  heroImage: '', // foto de fundo do hero (opcional)
  // Preços e durações DEMONSTRATIVOS: substitua pelos reais.
  services: [
    { id: 'corte', name: 'Corte masculino', desc: 'Corte clássico ou moderno, do seu jeito.', price: 'R$ 00 (demo)', duration: '00 min (demo)', icon: '✂' },
    { id: 'fade', name: 'Corte degradê (fade)', desc: 'Transições precisas e acabamento limpo.', price: 'R$ 00 (demo)', duration: '00 min (demo)', icon: '◢' },
    { id: 'barba', name: 'Barba', desc: 'Modelagem e cuidado para a barba.', price: 'R$ 00 (demo)', duration: '00 min (demo)', icon: '❖' },
    { id: 'combo', name: 'Corte + barba', desc: 'O visual completo em um só atendimento.', price: 'R$ 00 (demo)', duration: '00 min (demo)', icon: '✦' },
    { id: 'acabamento', name: 'Acabamento e sobrancelha', desc: 'Detalhes que fazem diferença.', price: 'R$ 00 (demo)', duration: '00 min (demo)', icon: '◆' },
  ],
  // Troque src por fotos reais (ex.: '/img/corte1.jpg'). Sem src = placeholder demonstrativo.
  gallery: [1, 2, 3, 4, 5, 6].map((n) => ({ src: '', alt: `Corte masculino ${n} (imagem demonstrativa)` })),
  differentials: [
    { icon: '☰', title: 'Atendimento personalizado', text: 'Cada cliente é único e merece atenção individual.' },
    { icon: '◎', title: 'Atenção aos detalhes', text: 'Do corte ao acabamento, cuidado em cada etapa.' },
    { icon: '★', title: 'Estilo com personalidade', text: 'Um visual alinhado a quem você é.' },
  ],
}

export function whatsappLink({ service = '', date = '', time = '' } = {}) {
  if (!site.whatsapp) return null
  const msg = `Olá! Encontrei a barbearia pelo site e gostaria de agendar um horário.\n\nServiço: ${service || '[informar]'}\nData desejada: ${date || '[informar]'}\nHorário desejado: ${time || '[informar]'}\n\nPoderia verificar a disponibilidade?`
  return `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`
}
export const mapsHref = () => site.mapsUrl || (site.address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}` : '')
