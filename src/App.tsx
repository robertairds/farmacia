import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import './App.css'
import DeletarCategoria from './components/categoria/DeletarCategoria'
import FormCategoria from './components/categoria/FormCategoria'
import ListarCategorias from './components/categoria/ListarCategoria'
import ListarProdutos from './components/produto/ListarProdutos'
import FormProduto from './components/produto/FormProduto'
import DeletarProduto from './components/produto/DeletarProduto'

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen bg-slate-900'>
        <Navbar />
        <div className='flex-1'>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/cadastrarproduto" element={<FormProduto />} />
            <Route path="/editarProduto/:id" element={<FormProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App