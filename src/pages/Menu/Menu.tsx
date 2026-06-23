function Menu() {
  return (
    <header className='w-full bg-brand-dark px-4 py-3 shadow-sm md:px-8'>
      <div className='mx-auto flex w-full max-w-[1500px] items-center justify-between'>
        <a href='#' className='flex items-center gap-2 text-brand-nav'>
          <p className='text-sm font-bold uppercase tracking-[0.3em] text-white md:text-base'>
            Agenda cultural
          </p>
        </a>

        <nav className='hidden items-center gap-8 text-xs font-semibold text-white md:flex'>
          <a href='#eventos' className='transition hover:text-brand-nav-hover'>
            Eventos
          </a>
          <a href='#artistas' className='transition hover:text-brand-nav-hover'>
            Artistas
          </a>
          <a href='#sobre' className='transition hover:text-brand-nav-hover'>
            Sobre
          </a>
        </nav>

        <a
          href='#divulga'
          className='rounded-md bg-brand-medium px-5 py-2 text-xs font-semibold text-white transition hover:bg-brand-accent'
        >
          Cadastre-se
        </a>
      </div>
    </header>
  )
}

export default Menu
