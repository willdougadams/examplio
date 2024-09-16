import React, { useState, useEffect, createContext, useContext } from 'react'

// 1. Create the context to hold scroll data.
interface ScrollContextProps {
  scrollSpeed: number
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined)

// 2. Create a hook to easily consume the context.
export const useScroll = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}

// 3. Create the ScrollProvider to provide the scroll data.
interface ScrollProviderProps {
  children: React.ReactNode
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [scrollSpeed, setScrollSpeed] = useState(0)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let lastScrollTimestamp = Date.now()

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const currentTimestamp = Date.now()

      const distanceScrolled = currentScrollY - lastScrollY
      const deltaTime = currentTimestamp - lastScrollTimestamp

      const speed = deltaTime > 0 ? distanceScrolled / deltaTime : 0
      setScrollSpeed(speed)

      lastScrollY = currentScrollY
      lastScrollTimestamp = currentTimestamp
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ScrollContext.Provider value={{ scrollSpeed }}>
      {children}
    </ScrollContext.Provider>
  )
}

// 4. Create a dynamic background component that uses the scroll data.
// const DynamicBackground: React.FC = () => {
//   const { scrollSpeed } = useScroll()

//   // Simple logic to change background color based on scroll speed.
//   const backgroundColor = scrollSpeed > 1 ? 'red' : 'blue'

//   return (
//     <div style={{ height: '200vh', backgroundColor }}>
//       Scroll up and down to change background color based on speed.
//     </div>
//   )
// }

export default ScrollProvider
