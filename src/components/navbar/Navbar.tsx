import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full bg-[#0d1611] text-[#d5ecdc] py-5 px-8 md:px-12 flex justify-between items-center shadow-xl border-b border-[#22382c]'>
      <h2 className='text-2xl font-serif font-bold tracking-wider text-[#e2ede6]'>
        The Green Apothecary
      </h2>
      <div className='flex gap-4 md:gap-5 font-serif text-sm md:text-base items-center'>
        <Link to="/home" className='border border-[#447a5e] text-[#b8ccc0] hover:bg-[#22382c] hover:text-white px-4 py-2 rounded-xl transition-all'>Home</Link>
        <Link to="/produtos" className='border border-[#447a5e] text-[#b8ccc0] hover:bg-[#22382c] hover:text-white px-4 py-2 rounded-xl transition-all'>Produtos</Link>
        <Link to="/categorias" className='border border-[#447a5e] text-[#b8ccc0] hover:bg-[#22382c] hover:text-white px-4 py-2 rounded-xl transition-all'>Categorias</Link>
        <Link to="/cadastrarcategoria" className='border border-[#447a5e] text-[#b8ccc0] hover:bg-[#22382c] hover:text-white px-4 py-2 rounded-xl transition-all'>Cadastrar Categoria</Link>
        <Link to="/cadastrarproduto" className='border border-[#447a5e] text-[#c2dec9] hover:bg-[#22382c] hover:text-white px-4 py-2 rounded-xl transition-all'>Cadastrar Produto</Link>
      </div>
    </div>
  )
}

export default Navbar