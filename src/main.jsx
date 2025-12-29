import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar></NavBar>
    <main className="body container my-5">
      <App />
    </main>
    <Footer></Footer>
  </StrictMode>,
)
