import ModalArtista from "../modalArtista/modalArtista"

import ModalEvento from "../modalEvento/modalEvento"

function Divulga() {
  return (
    <section
      id='divulga'
      className='bg-brand-gradient px-4 py-16 text-white md:px-8 md:py-20'
    >
      <div className='mx-auto grid w-full max-w-[1500px] items-center gap-10 lg:grid-cols-[1.25fr_1fr]'>
        <img
          src='https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80'
          alt='Público vibrando em um evento cultural'
          className='h-[260px] w-full rounded-xl object-cover shadow-2xl shadow-black/20 md:h-[300px]'
        />

        <div className='max-w-xl'>
          <h2 className='text-3xl font-extrabold leading-tight md:text-4xl'>
            Divulga suas artes ou eventos
          </h2>
          <p className='mt-6 text-lg font-bold leading-relaxed text-brand-accent'>
            Compartilhe seu trabalho com mais pessoas e crie novas
            oportunidades para sua carreira cultural.
          </p>

          <div className='mt-9 grid gap-4 sm:grid-cols-2'>
            <ModalArtista/>
            <ModalEvento/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Divulga
