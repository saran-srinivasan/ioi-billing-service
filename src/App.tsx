import { useState } from 'react'
import MainLayout from './layout/MainLayout'
import { CartProvider } from './store/CartContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartProvider>
      <MainLayout/>
    </CartProvider>
    </>
  )
}

export default App
