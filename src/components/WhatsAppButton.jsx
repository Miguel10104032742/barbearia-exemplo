import { whatsappLink } from '../config.js'
export default function WhatsAppButton({ children, className = 'btn', ...data }) {
  const href = whatsappLink(data)
  if (!href)
    return <a className={className} href="#contato" title="WhatsApp ainda não configurado (src/config.js)">{children}</a>
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}
