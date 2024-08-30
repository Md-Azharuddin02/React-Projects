import './App.css'
import Display from './components/Display'
import {ColorContextProvider} from './store/ColorContext'

function App() {

  return (
    <>
    <ColorContextProvider>
    <Display/>
    </ColorContextProvider>
    </>
  )
}

export default App
