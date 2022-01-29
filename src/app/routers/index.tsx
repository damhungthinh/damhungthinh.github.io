import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NotFoundPage } from '@components/pages/NotFound'
import { Landing } from '@components/pages/Landing'
import { TopbarLayout } from '@components/templates/TopbarLayout'

export const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<TopbarLayout />}>
        <Route path='' element={<Landing />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)
