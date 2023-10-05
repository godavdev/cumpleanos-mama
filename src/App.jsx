import React from 'react'
import image1 from './assets/images/IMG_20200510_165833.jpg'
import image2 from './assets/images/IMG_20230724_170454.jpg'
import image3 from './assets/images/SAVE_20201005_103450.jpg'
import Heart from './components/Heart/Heart'


const App = () => {
  return (
    <div className='flex justify-center flex-col items-center space-y-6 w-full p-4'>
      <Heart />
      <div className='font-bold text-4xl'>
        Feliz cumpleaños mamá!
      </div>
      <img className='h-96 border-pink-400 border-4 rounded-2xl' src={image3} />
      <p className='text-xl font-semibold'>
        Muchas gracias por todo lo que haces por nosotros, tu esfuerzo, tu dedicacion, asi como el ejemplo que nos das a seguir.
      </p>
      <img className='h-96 border-pink-400 border-4 rounded-2xl' src={image1} />
      <p className='text-xl font-semibold'>
        Eres una gran persona, me siento agradecido de tenerte como mamá, me has apoyado en mis peores momentos y me has hecho seguir adelante, para nosotros significas mucho en la vida.
      </p>
      <img className='h-96 border-pink-400 border-4 rounded-2xl' src={image2} />
      <div >
        <p className='text-4xl font-bold '>
          TE AMAMOS!
        </p>
      </div>
      <div className='pb-10'>
        <p className='text-4xl font-bold text-pink-500'>
          GRACIAS POR TODO!
        </p>
      </div>
    </div>)
}

export default App