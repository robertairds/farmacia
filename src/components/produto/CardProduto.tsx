import { Link } from 'react-router-dom'
import type Produto from '../../models/produto/Produto'

interface CardProdutoProps {
  produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className='border border-slate-700 bg-slate-800 text-slate-100 flex flex-col rounded-xl overflow-hidden justify-between shadow-lg p-6'>
      <div>
        {produto.foto && produto.foto.trim() !== '' && (
          <img src={produto.foto} alt={produto.nome} className='w-full h-40 object-cover rounded-lg mb-4' />
        )}
        <p className='text-xs text-emerald-400 font-semibold uppercase mb-1'>Categoria: {produto.categoria?.nome || 'Geral'}</p>
        <h3 className='text-2xl font-bold mb-1'>{produto.nome}</h3>
        <p className='text-slate-300 text-sm mb-2'>{produto.descricao}</p>
        <p className='text-emerald-400 font-extrabold text-lg mb-1'>R$ {produto.preco?.toFixed(2)}</p>
        <p className='text-xs text-slate-400 mb-4'>Qtd: {produto.quantidade} | Lab: {produto.laboratorio}</p>
      </div>
      <div className="flex border-t border-slate-700 pt-4 gap-2">
        <Link to={`/editarProduto/${produto.id}`} className='w-1/2 py-2 text-center bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold transition-colors'>
          Editar
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className='w-1/2 py-2 text-center bg-rose-600 hover:bg-rose-700 rounded-lg font-semibold transition-colors'>
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardProduto