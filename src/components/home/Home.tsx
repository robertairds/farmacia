import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex items-center justify-center bg-[#101a14] text-[#e2ede6] min-h-[calc(100vh-8rem)] py-14 px-6 md:px-14 relative overflow-hidden'>
      {/* Detalhe de fundo decorativo com clima vintage */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4e7c5d_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>

      {/* Container principal alinhado verticalmente e balanceado para telas grandes */}
      <div className='max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10 my-auto'>
        
        {/* Coluna da Esquerda: Bloco de Texto com maior contraste e respiro */}
        <div className='lg:col-span-7 flex flex-col items-start text-left gap-6 border border-[#365945] bg-gradient-to-br from-[#17271e] to-[#121f18] p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative'>
          
          <span className='text-xs uppercase tracking-[0.25em] font-serif text-[#a3c9b3] border-b border-[#365945] pb-2 font-medium'>
            Est. 2026 — Apothecary & Remedies
          </span>

          {/* Fonte serifada clássica marcante */}
          <h1 className='text-3xl md:text-5xl font-serif font-bold text-[#e8f5ec] leading-[1.15]'>
            Tradição, Cuidado e Bem-Estar
          </h1>

          {/* Maior espaçamento entre linhas */}
          <p className='text-sm md:text-base text-[#c4d6cb] font-light leading-relaxed font-sans'>
            Inspirada nas clássicas boticas seculares, nossa farmácia une o rigor técnico à nobreza do atendimento humanizado. Explore nossos produtos e categorias com a sofisticação do passado e a agilidade do presente.
          </p>

          {/* Botões de Ação com Hierarquia Visual */}
          <div className='flex flex-wrap gap-4 mt-3'>
            {/* Ação Primária */}
            <Link 
              to='/produtos' 
              className='bg-[#2c4e3b] text-[#e2ede6] hover:bg-[#38634c] border border-[#528f6f] px-8 py-3.5 rounded-xl font-serif font-semibold tracking-wide transition-all shadow-md text-sm md:text-base'
            >
              Ver Catálogo
            </Link>
            
            {/* Ação Secundária (Estilo Outline com borda nítida em tom creme/esverdeado) */}
            <Link 
              to='/cadastrarproduto' 
              className='bg-transparent text-[#d5ecdc] hover:bg-[#20382b]/60 border-2 border-[#528f6f] px-8 py-3.5 rounded-xl font-serif font-semibold tracking-wide transition-all shadow-sm text-sm md:text-base'
            >
              Novo Produto
            </Link>
          </div>

        </div>

        {/* Coluna da Direita: Imagem com Atmosfera de Palco e Glow/Brilho por trás */}
        <div className='lg:col-span-5 flex justify-center items-center relative py-6'>
          {/* Brilho radial de fundo (glow) verde-claro/dourado para efeito 3D flutuante */}
          <div className='absolute w-72 h-72 md:w-96 md:h-96 bg-[radial-gradient(circle,_rgba(95,158,124,0.18)_0%,_rgba(21,35,27,0)_70%)] rounded-full blur-2xl pointer-events-none -z-10'></div>
          
          <img 
            src='/principal.png' 
            alt='The Green Apothecary' 
            className='w-full max-w-[500px] h-[480px] md:h-[540px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] transform hover:scale-105 transition-transform duration-500'
          />
        </div>

      </div>
    </div>
  )
}

export default Home