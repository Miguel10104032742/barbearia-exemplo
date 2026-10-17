// Quebra o texto em palavras (efeitos 04 e 16)
export default function Words({ text, cls = 'w' }) {
  return text.split(' ').map((t, i) => <span key={i} className={cls} style={{ '--i': i }}>{t}{' '}</span>)
}
