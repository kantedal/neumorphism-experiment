import React, { FC, HTMLProps, useEffect, useRef } from 'react'

interface Props extends HTMLProps<HTMLDivElement> {}

const NeuDiv: FC<Props> = ({ children, className = '', ...props }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    const updateNeuomorphism = () => {
      if (!divRef.current) {
        return
      }

      const maxDistance = 1000
      const dimensions = divRef.current.getBoundingClientRect()
      const divPos = { x: dimensions.x + dimensions.width / 2, y: dimensions.y + dimensions.height / 2 }
      const pos = {
        x: Math.min(Math.max((mousePos.current.x - divPos.x) / maxDistance, -1), 1),
        y: Math.min(Math.max((mousePos.current.y - divPos.y) / maxDistance, -1), 1),
      }

      const distance = Math.sqrt(pos.x ** 2 + pos.y ** 2)
      const normalizedPos = { x: pos.x / distance, y: pos.y / distance }

      let closeDistanceOpacityFactor = 1
      if (distance < 0.15) {
        closeDistanceOpacityFactor = distance / 0.15
      }

      const opacity = (1 - Math.min(distance / Math.sqrt(2), 0.9)) * closeDistanceOpacityFactor
      const shadowSizeFactor = (distance * 1.8 + 0.3) * 30
      // const shadowBlurFactor = Math.min(distance, 0.5) + 0.3

      divRef.current.style.boxShadow = `
        ${-Math.round(normalizedPos.x * shadowSizeFactor)}px 
        ${-Math.round(normalizedPos.y * shadowSizeFactor)}px 
        ${51}px rgba(161, 161, 161, ${opacity * 1.0}), 
        ${Math.round(normalizedPos.x * shadowSizeFactor)}px 
        ${Math.round(normalizedPos.y * shadowSizeFactor)}px 
        ${51}px rgba(255, 255, 255, ${opacity * 1.2})
      `

      const angle = Math.atan2(normalizedPos.y, normalizedPos.x) - (2 * Math.PI) / 4
      divRef.current.style.background = `linear-gradient(${angle}rad, rgba(0, 0, 0, ${opacity * 0.05}), transparent)`
    }

    window.addEventListener('mousemove', (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      updateNeuomorphism()
    })

    window.addEventListener('scroll', updateNeuomorphism)
  }, [])

  return (
    <div ref={divRef} className={className} {...props}>
      {children}
    </div>
  )
}

export default NeuDiv
