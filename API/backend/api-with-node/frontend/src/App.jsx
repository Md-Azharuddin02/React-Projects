import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {

  const [product, setProduct] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products')
        console.log(response.data)
        setProduct(response.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    })()
  }, [search])

  console.log(search)
  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>something went wrong</h1>
  }
  return (
    <>
      <h1>Axios and API in React</h1>
      <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
      <p>Number of producs are : {product.length}</p>
    </>
  )
}

export default App
