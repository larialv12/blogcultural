function Footer() {
  return (
    <footer className='bg-brand-deep px-4 py-10 text-brand-footer md:px-8'>
      <div className='mx-auto w-full max-w-[1400px]'>
        <div className='grid gap-10 md:grid-cols-3'>
          <div>
            <h2 className='text-2xl font-extrabold text-white'>Blog Cultural</h2>
            <p className='mt-5 max-w-sm leading-relaxed'>
              Conectando artistas, eventos e oportunidades para fortalecer a
              cena cultural.
            </p>
          </div>

          <div>
            <h3 className='text-sm font-bold uppercase tracking-[0.35em] text-brand-accent'>
              Navegação
            </h3>
            <ul className='mt-5 space-y-3'>
              <li>
                <a className='transition hover:text-white' href='#divulga'>
                  Divulgar Arte
                </a>
              </li>
              <li>
                <a className='transition hover:text-white' href='#artistas'>
                  Artistas
                </a>
              </li>
              <li>
                <a className='transition hover:text-white' href='#eventos'>
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-sm font-bold uppercase tracking-[0.35em] text-brand-accent'>
              Contato
            </h3>
            <address className='mt-5 space-y-3 not-italic'>
              <p>contato@blogcultural.com</p>
              <p>+55 (11) 99999-9999</p>
              <p>São Paulo, Brasil</p>
            </address>
          </div>
        </div>

        <p className='mt-10 border-t border-brand-accent/20 pt-6 text-center'>
          © 2026 Blog Cultural. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
