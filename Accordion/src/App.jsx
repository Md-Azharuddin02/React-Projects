import { AccordionContextProvider } from './components/store/SelectContext'
import  Container  from './components/Container'
import './App.css'

function App() {

  return (
    <AccordionContextProvider>
     <Container/>
     </AccordionContextProvider>
  )
}

export default App
