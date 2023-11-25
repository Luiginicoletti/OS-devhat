import React, { useRef, useState, useEffect } from 'react'
import { state, subscribeToState } from './state'
export default function Overlay() {
  const [isBrocheHovered, setBrocheHovered] = useState(state.isBrocheHovered)

  useEffect(() => {
    const unsubscribe = subscribeToState(() => {
      setBrocheHovered(state.isBrocheHovered)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className="wrapper">
      <header>
        <h2 className="text-white/80">DEVHAT</h2>
        <ul className="menu text-white/80">
          <li>ABOUT US</li>
          <li>PROJECTS</li>
          <li>GET IN TOUCH</li>
        </ul>
      </header>
      <div
        className="
        flex 
        justify-center
        items-center
        h-screen
        bg-red-500/10
        
      ">
        {isBrocheHovered && (
          <div className="bg-white w-[250px] h-[250px] p-2 rounded-lg mb-[600px]">
            <div className="p-2 bg-emerald-500/5  h-full rounded-md">
              <h1 className="text-2xl text-emerald-900">Tribute to the best zac da bolha dev</h1>

              <img src="zac.gif" alt="zac" className=" rounded-md" />
              <p className="text-emerald-900/40 mt-2 text-sm">@alecell</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
