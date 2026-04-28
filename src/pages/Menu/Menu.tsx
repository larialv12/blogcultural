function Menu() {
  return (
    <header className='  w-fullbg-#023535 px-4 py-3 shadow-sm md:px-8'>
      <div className='flex w-full items-center justify-between'>
        <a href='#' className='flex items-center gap-2 text-[#4c5160]'>
        
              <p className='text-sm font-bold uppercase tracking-[0.2em] text-white md:text-base'>
            Agenda cultural
          </p>        </a>

        <nav className='hidden items-center gap-8 text-xs font-semibold text-white md:flex'>
          <a href='#' className='transition hover:text-[#2e3340]'>
            Eventos
          </a>
          <a href='#' className='transition hover:text-[#2e3340]'>
            Artistas
          </a>
          <a href='#' className='transition hover:text-[#2e3340]'>
            Locais
          </a>
          <a href='#' className='transition hover:text-[#2e3340]'>
            Blog
          </a>
        </nav>

        <a
          href='#divulga'
          className='rounded-md bg-[#0CABA8] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#4a38d4]'
        >
          Cadastre-se
        </a>
      </div>
    </header>
  )
}

export default Menu
