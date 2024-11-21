import { useState } from 'react'
import './App.css'

function App() {
  const [img, setImg] = useState()

  const handleImgUplaod=(event)=>{
    setImg(event.target.files[0])
  }

  return (
    <>
    <input type="file" accept='image/*' onChange={handleImgUplaod} />
    {img && <img src={URL.createObjectURL(img)} alt="uplaod" />}
    </>
  )
}

export default App
