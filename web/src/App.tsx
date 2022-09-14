import React from 'react'
import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.png'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col'>
      <img src={logoImg} alt="logo nlw sports" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-duo-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>
      <div className='grid grid-cols-6 gap-6'>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
          <strong className='font-bold text-white'>League of Legends</strong>
          <span className='text-zinc-300 text-sm block '>4 anúncios</span>
      </div>

        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
          <strong className='font-bold text-white'>Dota 2</strong>
          <span className='text-zinc-300 text-sm block '>4 anúncios</span>
        </div>

        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white'>World of warcraft</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
      </div>
      <div className='pt-1 mt-8 bg-duo-gradient self-stretch rounded-lg overflow-hidden '>
        <div className='bg-[#2A2634] px-8 py-6 rounded-lg self-stretch flex justify-between'>
          <div>
            <strong className='text-2xl text-white font-black'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block '>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600'>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App