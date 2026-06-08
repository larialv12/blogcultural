import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormEvento from '../FormEvento/FormEvento';

function ModalEvento() {
  return (
    <>
      <Popup
        trigger={
          <button
            className='  border border-brand-accent rounded-md  px-5 py-2 text-xs font-semibold text-white transition hover:bg-brand-accent'
          >
            Artista
          </button>
        }
        modal
        contentStyle={{
          borderRadius: '1rem',
          paddingBottom: '2rem',
         background: 'transparent',
         border: 'none',
                padding: '0',
                width: 'auto',
                boxShadow: 'none'
        }}
      >
        <FormEvento />
      </Popup>
    </>
  );
}

export default ModalEvento ;