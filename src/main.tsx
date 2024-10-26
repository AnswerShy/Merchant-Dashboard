import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'

import EndPage from './pages/End.tsx';
import SignupPage from './pages/SignupPage.tsx';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" >
        <Route path='/registration' element={<SignupPage />}/>
        <Route path='/login' />
        <Route path='/' element={<EndPage />}/>
      </Route>
    </Routes>
  </Router>
)
