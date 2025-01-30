import React from 'react'
function BgButton({bgColor,btnText,setColor}) {
   
  return (
    <button onClick={()=> setColor(bgColor)} className="outline-none px-4 flex flex-wrap justify-center rounded-xl text-white" style={{backgroundColor: bgColor}}>{btnText}</button>
  )
}

export default BgButton