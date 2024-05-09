import React from 'react'

export const about = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 flex justify-evenly flex-col items-center'>
      <div className='w-full min-h-screen sm:w-3/4 sm:min-h-[300px]'>
        <div className='flex items-center justify-center m-10'>
          <img src='https://images-ext-1.discordapp.net/external/b88xtpwXUOtoZ2uXbYlvcGwFkQZ_IMzTfx6KC9oiuf0/https/res.cloudinary.com/dtwiog6cy/image/upload/v1715277145/Proyecto%2520FInal/ltpvsdwg7xfds7fzm1ho.png?format=webp&quality=lossless&width=705&height=258' alt="" className=' w-56 sm:w-64 xl:w-72'/>
        </div>
        <h3 className='text-center text-azul text-2xl font-semibold'>Tu puerta a soluciones confiables.</h3>
        <p className='text-center text-azul text-xl m-7 font-semibold'>Rin|Door es una plataforma intuitiva y segura, nuestra empresa facilita la búsqueda y contratación de profesionalesde distinos campos, desde reparaciones del hogar hasta proyectos de remodelación. Nuestro enfoque único permite a los usuarios publicar sus necesidades y recibir ofertas de profesionales cualificados, mientras que garantizamos transacciones seguras y satisfactorias para ambas partes. Con Rin|Door, abrir la puerta a la excelencia en servicio nunca había sido tan sencillo.</p> 
       </div>
        <div className='w-full sm:w-[70%] bg-azul h-[250px] m-10  flex flex-col items-center justify-center rounded-xl'>
          <h3 className='text-center text-yellow-300 text-2xl p-2 font-semibold'>Client</h3>
          <p className='text-white text-xl text-justify p-2 '>Regístrate gratis y accede a una amplia gama de servicios para satisfacer tus necesidades. Desde reparaciones del hogar hasta proyectos de renovación, Rin|Door es tu puerta de entrada a profesionales confiables. Publica tu solicitud de servicio hoy y comienza a recibir ofertas personalizadas de expertos en tu área. ¡Abre la puerta a soluciones confiables con Rin|Door!</p>
          <div className='w-full flex justify-center'>
            <button className='w-[100px] h-[50px] border border-amarilloBG rounded text-yellow-300'>Sign up</button>
          </div>
        </div>
        <div className='w-full sm:w-[70%] bg-azul h-[250px] mb-10 flex flex-col items-center justify-center rounded-xl'>
          <h3 className='text-center text-yellow-300 text-2xl p-2 font-semibold'>Profesional</h3>
          <p className='text-white text-xl text-justify p-2'>Suscríbete ahora y obtén acceso exclusivo a oportunidades de trabajo en tu área. Conviértete en parte de nuestra comunidad de profesionales calificados y accede a clientes que buscan tus habilidades. Construye tu reputación y cierra tratos rentables con Rin|Door. ¡Abre la puerta al éxito profesional con nosotros!</p>
          <div className='w-full flex justify-center'>
            <button className='w-[100px] h-[50px] border border-amarilloBG rounded text-yellow-300 '>Sign up</button>
          </div>
          
        </div>
       
    </div>
  )
}

export default about;