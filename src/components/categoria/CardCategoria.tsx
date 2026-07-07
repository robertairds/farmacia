import { Link } from 'react-router-dom'
import type Categoria from '../../models/categoria/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className='border border-[#365945] bg-gradient-to-br from-[#17271e] to-[#121f18] text-[#e2ede6] flex flex-col rounded-2xl overflow-hidden justify-between shadow-xl p-6'>
      <div>
        <p className='text-xs text-[#a3c9b3] font-serif font-semibold uppercase mb-1 tracking-wider'>ID: {categoria.id}</p>
        <h3 className='text-2xl font-serif font-bold mb-2 text-[#e8f5ec]'>{categoria.nome}</h3>
        <p className='text-[#c4d6cb] text-sm mb-4 font-sans font-light'>{categoria.descricao}</p>
      </div>
      <div className="flex border-t border-[#365945] pt-4 gap-3">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-1/2 py-2.5 text-center bg-[#2c4e3b] hover:bg-[#38634c] border border-[#528f6f] rounded-xl font-serif font-semibold text-sm transition-colors text-[#e2ede6]'>
          Editar
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='w-1/2 py-2.5 text-center bg-transparent hover:bg-rose-950/40 border border-rose-800/80 text-rose-300 rounded-xl font-serif font-semibold text-sm transition-colors'>
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria