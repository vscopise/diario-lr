'use client'

import { useEffect } from "react"


export const SideBanner = () => {
  
  //const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      const { googletag } = window
  
      googletag.cmd.push(() => {
        googletag.display('div-gpt-ad-1736688216002-0')
      })
  
      //setLoading(false)
    }, 3000)
  }, [])

  return (
    <div id="div-gpt-ad-1736688216002-0">
        
    </div>
  )
}
