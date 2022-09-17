import React, { useState, useEffect } from 'react'
import './styles/main.css'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { Input } from './components/Form/Input'
import logoImg from './assets/logo-nlw-esports.png'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'

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

    const handleButtonClick = () => {
        console.log('clicked')
    }
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
                {/*
        <GameBanner bannerUrl='/game-1.png'
          title='League of Legends'
          adsCount={4} />
        <GameBanner bannerUrl='/game-1.png'
          title='League of Legends'
          adsCount={4} />
        <GameBanner bannerUrl='/game-2.png'
          title='Dota 2'
          adsCount={4} />
        <GameBanner bannerUrl='/game-3.png'
          title='Counter Strike'
          adsCount={4} />
        <GameBanner bannerUrl='/game-4.png'
          title='Apex Legends'
          adsCount={4} />
        <GameBanner bannerUrl='/game-5.png'
          title='Fortnite'
          adsCount={4} />
        <GameBanner bannerUrl='/game-6.png'
          title='World of warcraft'
          adsCount={4} /> */}
            </div>
            <Dialog.Root>
                <CreateAdBanner />
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-black/60 inset-0 fixed">
                        <Dialog.Content className="shadow-lg shadow-black/25 fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480]">
                            <Dialog.Title className="text-3xl font-black">
                                Publique um anuncio
                            </Dialog.Title>
                            <form className="mt-8 flex flex-col gap-4 max-h-[50vh]">
                                <div className="flex-col gap-2 flex ">
                                    <label
                                        id="game"
                                        className="font-semibold"
                                        htmlFor="game"
                                    >
                                        Qual o game?
                                    </label>
                                    <Input id="game" name="game" type="text" />
                                </div>
                                <div className="flex-col gap-2 flex">
                                    <label htmlFor="name">
                                        Seu nome ou nickname
                                    </label>
                                    <Input
                                        id="name"
                                        placeholder="Como te chamam no game?"
                                    />
                                </div>

                                <div className="flex-col gap-2 flex">
                                    <label htmlFor="yearsPlaying">
                                        Joga a quantos anos?
                                    </label>
                                    <Input
                                        id="yearsPlaying"
                                        type="number"
                                        placeholder="Tudo bem ser Zero"
                                    />
                                </div>
                                <div className="flex-col gap-2 flex">
                                    <label htmlFor="discord">
                                        Qual seu Discord
                                    </label>
                                    <Input
                                        id="discord"
                                        type="text"
                                        placeholder="Usuário#0000"
                                    />
                                </div>
                                <div className="gap-6 flex">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="weekDays">
                                            Quando costuma jogar
                                        </label>
                                        <div className="grid grid-cols-4">
                                            <button
                                                className="w-8 h-8 rounded bg-zinc-900"
                                                title="Domingo"
                                            >
                                                D
                                            </button>
                                            <button
                                                className="w-8 h-8 rounded bg-zinc-900"
                                                title="Segunda"
                                            >
                                                S
                                            </button>
                                            <button
                                                className="w-8 h-8 rounded bg-zinc-900"
                                                title="Terça"
                                            >
                                                T
                                            </button>
                                            <button
                                                className="w-8 h-8 rounded bg-zinc-900"
                                                title="Quarta"
                                            >
                                                Q
                                            </button>
                                            <button
                                                className="w-8 h-8 rounded bg-zinc-900"
                                                title="Quinta"
                                            >
                                                Q
                                            </button>
                                            <button
                                                className="w-8 h-8 rounded bg-zinc-900"
                                                title="Sexta"
                                            >
                                                S
                                            </button>
                                            <button
                                                className="w-8 h-8 rounded bg-zinc-900"
                                                title="Sábado"
                                            >
                                                S
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label htmlFor="hourStart">
                                            Quando horário costuma jogar?
                                        </label>
                                        <div className="grid grid-cols-2 gap-2">
                                            <Input
                                                id="hourStart"
                                                type="time"
                                                placeholder="De"
                                            />
                                            <Input
                                                id="hourEnd"
                                                type="time"
                                                placeholder="Até"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2 flex gap-2 text-sm">
                                    <input type="checkbox" />
                                    Costumo me conectar ao chat de voz
                                </div>

                                <footer className="mt-4 flex justify-end gap-4">
                                    <Dialog.Close
                                        type="button"
                                        className="bg-zinc-500 px-5 h-12 rounded-md font-semibold"
                                    >
                                        Cancelar
                                    </Dialog.Close>
                                    <button
                                        type="submit"
                                        className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3"
                                    >
                                        <GameController size={24} />
                                        Encontrar duo
                                    </button>
                                </footer>
                            </form>
                        </Dialog.Content>
                    </Dialog.Overlay>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}

export default App
