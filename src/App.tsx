import { useState } from 'react'
import Menu from './pages/Menu/Menu'
import Banner from './pages/Banner/Banner'
import Sobre from './pages/sobre/sobre'
import Cards from './pages/Cards/Cards'
import Divulga from './pages/Divulga/Divulga'
import Artistas from './pages/Artistas/Artistas'
import Footer from './pages/Footer/Footer'

export type Artist = {
  id: number
  name: string
  role: string
  image: string
}

export type EventItem = {
  id: number
  date: string
  category: string
  title: string
  location: string
  price: string
  image: string
}

const initialArtists: Artist[] = [
  {
    id: 1,
    name: 'Emma Dorsey',
    role: 'Artista plástica',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 2,
    name: 'Alicia Bell',
    role: 'Escritora',
    image:
      'https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    role: 'Violinista',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 4,
    name: 'Anna Roberts',
    role: 'Cantora',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 5,
    name: 'Anna Roberts',
    role: 'Cantora',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 6,
    name: 'Anna Roberts',
    role: 'Cantora',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
  },
]

const initialEvents: EventItem[] = [
  {
    id: 1,
    date: '16 MAR',
    category: 'MÚSICA',
    title: 'Noite de Jazz ao Vivo',
    location: 'Teatro Bradesco, São Paulo',
    price: 'A partir de R$ 80',
    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    date: '22 MAR',
    category: 'EXPOSIÇÃO',
    title: 'Arte Imersiva: Luz e Cor',
    location: 'Pinacoteca, São Paulo',
    price: 'Ingressos R$ 55',
    image:
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    date: '04 ABR',
    category: 'GASTRONOMIA',
    title: 'Festival Sabores de Rua',
    location: 'Vila Madalena, São Paulo',
    price: 'Entrada gratuita',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    date: '10 ABR',
    category: 'TEATRO',
    title: 'Comédia em Cena',
    location: 'Teatro UOL, São Paulo',
    price: 'Ingressos R$ 60',
    image:
      'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    date: '18 ABR',
    category: 'CINEMA',
    title: 'Mostra Cinema Brasileiro',
    location: 'Centro Cultural São Paulo',
    price: 'A partir de R$ 35',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    date: '25 ABR',
    category: 'FEIRA',
    title: 'Feira de Design Independente',
    location: 'Galeria Central, São Paulo',
    price: 'Entrada gratuita',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 7,
    date: '30 ABR',
    category: 'DANÇA',
    title: 'Noite de Dança Urbana',
    location: 'Centro Cultural, São Paulo',
    price: 'A partir de R$ 45',
    image:
      'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 8,
    date: '03 MAI',
    category: 'MÚSICA',
    title: 'Festival de Rock Independente',
    location: 'Carioca Club, São Paulo',
    price: 'A partir de R$ 60',
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 9,
    date: '08 MAI',
    category: 'LITERATURA',
    title: 'Bienal do Livro São Paulo',
    location: 'Expo Center Norte, São Paulo',
    price: 'Ingressos R$ 30',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 10,
    date: '14 MAI',
    category: 'TEATRO',
    title: 'Hamlet — Companhia Nacional',
    location: 'Teatro Municipal, São Paulo',
    price: 'A partir de R$ 90',
    image:
      'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 11,
    date: '20 MAI',
    category: 'GASTRONOMIA',
    title: 'Jantar Harmonizado com Vinhos',
    location: 'Restaurante Esther Rocha, São Paulo',
    price: 'A partir de R$ 250',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 12,
    date: '25 MAI',
    category: 'EXPOSIÇÃO',
    title: 'Fotografias do Século XX',
    location: 'Instituto Moreira Salles, São Paulo',
    price: 'Entrada gratuita',
    image:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 13,
    date: '01 JUN',
    category: 'DANÇA',
    title: 'Ballet Bolshoi — Turnê Brasil',
    location: 'Theatro São Pedro, São Paulo',
    price: 'A partir de R$ 120',
    image:
      'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 14,
    date: '07 JUN',
    category: 'CINEMA',
    title: 'Festival Internacional de Curtas',
    location: 'Cinesesc, São Paulo',
    price: 'Ingressos R$ 25',
    image:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 15,
    date: '15 JUN',
    category: 'MÚSICA',
    title: 'Samba na Paulista',
    location: 'Avenida Paulista, São Paulo',
    price: 'Entrada gratuita',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
  },

]

function App() {
  const [artists, setArtists] = useState<Artist[]>(initialArtists)
  const [events, setEvents] = useState<EventItem[]>(initialEvents)

  const handleAddArtist = (newArtist: Artist) => {
    setArtists((prev) => [newArtist, ...prev])
  }

  const handleAddEvent = (newEvent: EventItem) => {
    setEvents((prev) => [newEvent, ...prev])
  }

  return (
    <>
      <Menu />
      <Banner />
      <Cards events={events} />
      <Divulga onAddArtist={handleAddArtist} onAddEvent={handleAddEvent} />
      <Artistas artists={artists} />
      <Sobre />
      <Footer />
    </>
  )
}

export default App
