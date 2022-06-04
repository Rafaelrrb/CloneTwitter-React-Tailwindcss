import { Home } from './Home'
import { Login } from './Login'
import { Signup } from './Signup'

import { useState } from 'react'

export function App() {
  const [user, setUser] = useState()

  if (user) {
    return <Home />
  }

  return window.location.pathname === '/signup' ? (
    <Signup signInUser={setUser} />
  ) : (
    <Login signInUser={setUser} />
  )
}
