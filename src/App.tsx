import './App.css'
import { meny } from "./components/Meny/menydata.ts"
import Meny from './components/Meny/Meny.tsx'

function App() {

  return (
    <>
      <h1>Meny</h1>
      <Meny data={meny}/>
    </>
  )
}

export default App
