import { useEffect, useState } from "react"

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://682858716b7628c52912ff44.mockapi.io/pc')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong')
        }
        return res.json()
      })
      .then((result) => {
        console.log(result);
        setData(result)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Products</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1> 
          <img style={{width:300, height:300}} src={item.avatar} alt="" />         
        </div>
      ))}
    </div>
  )
}