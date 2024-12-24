import type { RefObject } from 'react'

import { useEffect, useState } from 'react'

export function useActiveIndicator(containerRef: RefObject<HTMLElement>) {
  const [indicatorPosition, setIndicatorPosition] = useState<null | number>(null)

  useEffect(() => {
    const updateIndicator = () => {
      const activeLink = containerRef.current?.querySelector('[data-status="active"]')
      if (activeLink) {
        const rect = activeLink.getBoundingClientRect()
        const containerRect = containerRef.current?.getBoundingClientRect()
        if (containerRect) {
          setIndicatorPosition(rect.top - containerRect.top + (rect.height - 16) / 2)
        }
      }
    }

    // Create a MutationObserver to watch for changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-status') {
          updateIndicator()
        }
      })
    })

    // Start observing the container
    if (containerRef.current) {
      observer.observe(containerRef.current, {
        attributeFilter: ['data-status'],
        attributes: true,
        subtree: true,
      })
    }

    // Initial update
    updateIndicator()

    // Update on resize
    window.addEventListener('resize', updateIndicator)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateIndicator)
    }
  }, [containerRef])

  return indicatorPosition
}
