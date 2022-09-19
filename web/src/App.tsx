import React, { useState, useEffect } from 'react'
import './styles/main.css'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import logoImg from './assets/logo-nlw-esports.png'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './components/CreateAdModal'

interface Game {
    id: string
    title: string
    banner: string
    _count: {
        ads: number
    }
}

function App() {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/games')
            .then((res) => res.json())
            .then((data) => {
                setGames(data)
                console.log(data)
            })
            .catch((err) => {
                console.log('ERROR', err)
            })
    }, [])

    const handleButtonClick = () => {
        console.log('clicked')
    }
    return (
        <div className="max-w-5xl my-20 mx-auto flex items-center flex-col">
            <img src={logoImg} alt="logo nlw sports" />
            <h1 className="text-6xl text-white font-black mt-20">
                Seu{' '}
                <span className="bg-duo-gradient bg-clip-text text-transparent">
                    duo
                </span>{' '}
                está aqui.
            </h1>

            <button onClick={handleButtonClick}>Clique Aqui</button>
            <div className="grid grid-cols-6 gap-6">
                {games.map((game) => {
                    return (
                        <GameBanner
                            bannerUrl={game.banner}
                            key={game.id}
                            title={game.title}
                            adsCount={game._count.ads}
                        />
                    )
                })}
            </div>
            <Dialog.Root>
                <CreateAdBanner />
                <CreateAdModal />
            </Dialog.Root>
        </div>
    )
}

export default App
