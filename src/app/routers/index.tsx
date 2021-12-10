import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NotFoundPage } from '@components/pages/NotFound'
import { Landing } from '@components/pages/Landing'

export const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)
