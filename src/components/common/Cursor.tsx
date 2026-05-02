import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const handleMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a') || target.closest('button') || target.closest('[data-cursor]')
      
      if (isInteractive) {
        cursor.classList.add('hover')
      } else {
        cursor.classList.remove('hover')
      }
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return <div ref={cursorRef} className="cursor-dot" />
}
