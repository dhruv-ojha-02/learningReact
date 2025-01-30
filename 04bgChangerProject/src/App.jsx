import { useState } from 'react'
import './App.css'
import BgButton from './components/BgButton';

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 shadow-lg rounded-3xl'>
          <BgButton bgColor= "red" btnText="Red" setColor={setColor} />
          <BgButton bgColor= "green" btnText="Green" setColor={setColor}/>
          <BgButton bgColor= "blue" btnText="Blue" setColor={setColor}/>
          <BgButton bgColor= "black" btnText="Black" setColor={setColor} />
          <BgButton bgColor= "purple" btnText="Purple" setColor={setColor}/>
          <BgButton bgColor= "gray" btnText="Gray" setColor={setColor}/>
        </div>
      </div>
    </div>
  )
}

export default App