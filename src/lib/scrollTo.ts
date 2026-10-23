import type { MouseEvent } from 'react'

export function scrollToSection(e: MouseEvent, id: string) {
  e.preventDefault()
  if (id === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
