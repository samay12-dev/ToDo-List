import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { index } from '@react-router/dev/routes'
function App() {
  let data=[{
    index:1,
    info:"Buy the earbuds"
  },
{
  index:2,
  info:"purchase the copy"
},
{
  index:3 ,
info:"Complete the project"
}
]
  const [count, setCount] = useState(0)
  return (
    <>
   <Header/>
   <Main listInfo={data}/>
    </>
  )
}

export default App
