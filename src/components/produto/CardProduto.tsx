import { Link } from 'react-router-dom'
import type Produto from '../../models/produto/Produto'

interface CardProdutoProps {
  produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className='border border-[#365945] bg-gradient-to-br from-[#17271e] to-[#121f18] text-[#e2ede6] flex flex-col rounded-2xl overflow-hidden justify-between shadow-xl p-6'>
      <div>
        {produto.foto && produto.foto.trim() !== '' && (
          <img src={produto.foto} alt={produto.nome} className='w-full h-44 object-cover rounded-xl mb-4 border border-[#365945]' />
        )}
        <p className='text-xs text-[#a3c9b3] font-serif font-semibold uppercase mb-1 tracking-wider'>Categoria: {produto.categoria?.nome || 'Geral'}</p>
        <h3 className='text-2xl font-serif font-bold mb-1 text-[#e8f5ec]'>{produto.nome}</h3>
        <p className='text-[#c4d6cb] text-sm mb-3 font-light'>{produto.descricao}</p>
        <p className='text-[#a3c9b3] font-serif font-extrabold text-lg mb-1'>R$ {produto.preco?.toFixed(2)}</p>
        <p className='text-xs text-[#9cb5a6] mb-4 font-sans'>Qtd: {produto.quantidade} | Lab: {produto.laboratorio}</p>
      </div>
      <div className="flex border-t border-[#365945] pt-4 gap-3">
        <Link to={`/editarProduto/${produto.id}`} className='w-1/2 py-2.5 text-center bg-[#2c4e3b] hover:bg-[#38634c] border border-[#528f6f] rounded-xl font-serif font-semibold text-sm transition-colors text-[#e2ede6]'>
          Editar
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className='w-1/2 py-2.5 text-center bg-transparent hover:bg-rose-950/40 border border-rose-800/80 text-rose-300 rounded-xl font-serif font-semibold text-sm transition-colors'>
          Deletar
        </Link>
      </div>
    </div>
  )
}
export default CardProduto