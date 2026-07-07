function Home() {
  return (
    <div className='flex flex-col items-center justify-center bg-slate-900 text-slate-100 min-h-[calc(100vh-8rem)] py-12 px-4'>
      <h1 className='text-4xl font-extrabold mb-4 text-emerald-400'>Bem-vindo à Farmácia!</h1>
      <p className='text-lg text-slate-300 max-w-xl text-center leading-relaxed'>
        Aqui você encontra os melhores produtos e medicamentos com rapidez, segurança e praticidade. Navegue pelas nossas categorias para começar.
      </p>
    </div>
  )
}

export default Home