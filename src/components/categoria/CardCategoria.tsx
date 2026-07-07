import { Link } from 'react-router-dom'
import type Categoria from '../../models/categoria/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className='border border-slate-700 bg-slate-800 text-slate-100 flex flex-col rounded-xl overflow-hidden justify-between shadow-lg p-6'>
      <div>
        <p className='text-xs text-emerald-400 font-semibold uppercase mb-1'>ID: {categoria.id}</p>
        <h3 className='text-2xl font-bold mb-2'>{categoria.nome}</h3>
        <p className='text-slate-300 mb-4'>{categoria.descricao}</p>
      </div>
      <div className="flex border-t border-slate-700 pt-4 gap-2">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-1/2 py-2 text-center bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold transition-colors'>
          Editar
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='w-1/2 py-2 text-center bg-rose-600 hover:bg-rose-700 rounded-lg font-semibold transition-colors'>
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria