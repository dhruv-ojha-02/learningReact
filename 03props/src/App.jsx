import './App.css'
import Card from './components/Card'

function App() {
  return(
    <>
      <h1 className='bg-red-400 font-bold underline my-4 '>Hello world</h1>
      < Card username= "Dhruv" btnText = "Visit Me" />
      < Card username= "Naman" btnText = "Click Me" />
    </>
  )
}

export default App
