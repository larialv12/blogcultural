import { useState } from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import FormEvento from '../FormEvento/FormEvento'
import type { EventItem } from '../../App'

interface ModalEventoProps {
  onAddEvent: (event: EventItem) => void
}

function ModalEvento({ onAddEvent }: ModalEventoProps) {
  const [open, setOpen] = useState(false)

  function handleAddEvent(event: EventItem) {
    onAddEvent(event)
    setOpen(false)
  }

  return (
    <Popup
      open={open}
      onClose={() => setOpen(false)}
      modal
      trigger={
        <button
          type='button'
          onClick={() => setOpen(true)}
          className='rounded-md border border-brand-accent px-5 py-2 text-xs font-semibold text-white transition hover:bg-brand-accent'
        >
          Evento
        </button>
      }
      contentStyle={{
        background: 'transparent',
        border: 'none',
        padding: '0',
        width: 'auto',
        boxShadow: 'none',
        borderRadius: '1rem',
      }}
    >
      <FormEvento onAddEvent={handleAddEvent} />
    </Popup>
  )
}

export default ModalEvento