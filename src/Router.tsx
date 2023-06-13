import { Route, Routes } from 'react-router-dom'

import { Checkout } from './pages/Checkout'
import { DefaultLayout } from './Layout/DefaultLayout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success">
          <Route path=":requestId" element={<Success />} />
        </Route>
      </Route>
    </Routes>
  )
}
