
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name:'Ashwin',
    age:19,
    desc:'I am A Passionate Web Developer from india.'
  }
  return (
    <>
      <h1 className='bg-red-700 font-bold font-serif p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card someObject={myObj}/>
    </>
  )
}

export default App
