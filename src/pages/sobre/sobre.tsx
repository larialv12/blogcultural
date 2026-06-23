import heroImage from '../../assets/hero.jpg'

const highlights = [
  {
    title: 'Diversidade',
    text: 'Mostramos manifestações artísticas de diferentes estilos, regiões e gerações.',
  },
  {
    title: 'Comunidade',
    text: 'Unimos artistas, público e organizadores em uma mesma agenda cultural.',
  },
  {
    title: 'Conexão',
    text: 'Facilitamos o encontro entre quem cria, quem participa e quem divulga.',
  },
  {
    title: 'Eventos',
    text: 'Reunimos programações culturais dos mais variados formatos e estilos.',
  },
  {
    title: 'Artistas',
    text: 'Apresentamos perfis para descobrir novas referências da cena local.',
  },
  {
    title: 'Divulgação',
    text: 'Criamos espaço para fortalecer a produção cultural independente.',
  },
]

function Sobre() {
  return (
    <section
      id='sobre'
      className='w-full bg-brand-dark px-4 pb-12 pt-4 text-white md:px-8 md:pt-6 lg:pb-16 lg:pt-8'
    >
      <div className='mx-auto grid min-h-[70vh] w-full max-w-[1500px] items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]'>
        <div className='max-w-2xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent'>
            Sobre nós
          </p>
          <h2 className='mt-3 text-4xl font-extrabold leading-tight text-white md:text-5xl'>
            Conectando cultura, arte e comunidade
          </h2>
          <p className='mt-6 text-lg leading-8 text-slate-300'>
            O Blog Cultural é um espaço criado para reunir artistas, eventos e ideias
            que valorizam a cultura em todas as suas formas. Nossa missão é tornar mais
            fácil descobrir experiências inspiradoras e apoiar quem faz a diferença na
            cena local.
          </p>
        </div>

        <div className='flex items-center justify-center rounded-3xl border border-brand-accent/15 bg-brand-deep p-4 shadow-sm sm:p-6'>
          <img
            src={heroImage}
            alt='Imagem cultural'
            className='h-full w-full max-w-[520px] rounded-3xl object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default Sobre
