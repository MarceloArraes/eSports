import React, { FormEvent, useEffect, useState } from 'react'
import { Input } from './Form/Input'
import { Check, GameController } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import * as CheckBox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import axios from 'axios'
const SERVER_ADDRESS = 'https://cute-jade-caiman-sock.cyclic.app'

interface Game {
    id: string
    title: string
}

export function CreateAdModal() {
    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)

    useEffect(() => {
        axios(SERVER_ADDRESS + '/games')
            .then((res) => {
                setGames(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log('ERROR', err)
            })
    }, [])

    const handleCreateAd = async (event: FormEvent) => {
        event.preventDefault()
        console.log('enviou o form')
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        console.log('data', data)
        console.log('weekdays', weekDays)
        console.log('usevoicechanne', useVoiceChannel)
        if (!data.name) return
        try {
            await axios.post(SERVER_ADDRESS + `/games/${data.game}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: useVoiceChannel,
            })
        } catch (error) {
            console.log('erro', error)
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed">
                <Dialog.Content className="shadow-lg shadow-black/25 fixed bg-[#2A2634] py-3 px-8 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-1/2">
                    <Dialog.Title className="text-xl font-black">
                        Publique um anuncio
                    </Dialog.Title>
                    <form
                        onSubmit={handleCreateAd}
                        className="mt-2 flex flex-col gap-2 max-h-fit text-sm"
                    >
                        <div className="flex-col gap-1 flex ">
                            <label
                                id="game"
                                className="font-semibold"
                                htmlFor="game"
                            >
                                Qual o game?
                            </label>
                            <select
                                id="game"
                                name="game"
                                defaultValue={''}
                                className="bg-zinc-900 py-2 px-4 rouded text-sm text-zinc-500 appearance-none"
                            >
                                <option key={12312} value={''} disabled>
                                    Selectione o game que deseja jogar
                                </option>
                                {games.map((game) => {
                                    return (
                                        <option key={game.id} value={game.id}>
                                            {game.title}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="flex-col gap-1 flex">
                            <label htmlFor="name">Seu nome ou nickname</label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Como te chamam no game?"
                            />
                        </div>

                        <div className="flex-col gap-1 flex">
                            <label htmlFor="yearsPlaying">
                                Joga a quantos anos?
                            </label>
                            <Input
                                id="yearsPlaying"
                                name="yearsPlaying"
                                type="number"
                                placeholder="Tudo bem ser Zero"
                            />
                        </div>
                        <div className="flex-col gap-1 flex">
                            <label htmlFor="discord">Qual seu Discord</label>
                            <Input
                                id="discord"
                                name="discord"
                                type="text"
                                placeholder="Usuário#0000"
                            />
                        </div>
                        <div className="gap-3 flex">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="weekDays">
                                    Quando costuma jogar
                                </label>
                                <div>
                                    <ToggleGroup.Root
                                        type="multiple"
                                        className="grid grid-cols-4"
                                        onValueChange={setWeekDays}
                                        value={weekDays}
                                    >
                                        <ToggleGroup.Item
                                            value="1"
                                            className={`w-8 h-8 rounded  ${
                                                weekDays.includes('1')
                                                    ? 'bg-violet-500'
                                                    : 'bg-zinc-900'
                                            }`}
                                            title="Domingo"
                                        >
                                            D
                                        </ToggleGroup.Item>
                                        <ToggleGroup.Item
                                            value="2"
                                            className={`w-8 h-8 rounded  ${
                                                weekDays.includes('2')
                                                    ? 'bg-violet-500'
                                                    : 'bg-zinc-900'
                                            }`}
                                            title="Segunda"
                                        >
                                            S
                                        </ToggleGroup.Item>
                                        <ToggleGroup.Item
                                            value="3"
                                            className={`w-8 h-8 rounded  ${
                                                weekDays.includes('3')
                                                    ? 'bg-violet-500'
                                                    : 'bg-zinc-900'
                                            }`}
                                            title="Terça"
                                        >
                                            T
                                        </ToggleGroup.Item>
                                        <ToggleGroup.Item
                                            value="4"
                                            className={`w-8 h-8 rounded  ${
                                                weekDays.includes('4')
                                                    ? 'bg-violet-500'
                                                    : 'bg-zinc-900'
                                            }`}
                                            title="Quarta"
                                        >
                                            Q
                                        </ToggleGroup.Item>
                                        <ToggleGroup.Item
                                            value="5"
                                            className={`w-8 h-8 rounded  ${
                                                weekDays.includes('5')
                                                    ? 'bg-violet-500'
                                                    : 'bg-zinc-900'
                                            }`}
                                            title="Quinta"
                                        >
                                            Q
                                        </ToggleGroup.Item>
                                        <ToggleGroup.Item
                                            value="6"
                                            className={`w-8 h-8 rounded  ${
                                                weekDays.includes('6')
                                                    ? 'bg-violet-500'
                                                    : 'bg-zinc-900'
                                            }`}
                                            title="Sexta"
                                        >
                                            S
                                        </ToggleGroup.Item>
                                        <ToggleGroup.Item
                                            value="7"
                                            className={`w-8 h-8 rounded  ${
                                                weekDays.includes('7')
                                                    ? 'bg-violet-500'
                                                    : 'bg-zinc-900'
                                            }`}
                                            title="Sábado"
                                        >
                                            S
                                        </ToggleGroup.Item>
                                    </ToggleGroup.Root>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 flex-1">
                                <label htmlFor="hourStart">
                                    Quando horário costuma jogar?
                                </label>
                                <div className="grid grid-cols-2 gap-1">
                                    <Input
                                        id="hourStart"
                                        name="hourStart"
                                        type="time"
                                        placeholder="De"
                                    />
                                    <Input
                                        id="hourEnd"
                                        name="hourEnd"
                                        type="time"
                                        placeholder="Até"
                                    />
                                </div>
                            </div>
                        </div>

                        <label className="mt-2 flex gap-1 text-sm">
                            <CheckBox.Root
                                onCheckedChange={(checked) => {
                                    setUseVoiceChannel(checked as boolean)
                                }}
                                className="w-6 h-6 p-1 rounded bg-zinc-900"
                            >
                                <CheckBox.Indicator>
                                    <Check className="w-4 h-4 text-emerald-400" />
                                </CheckBox.Indicator>
                            </CheckBox.Root>
                            Costumo me conectar ao chat de voz
                        </label>

                        <footer className="mt-2 flex justify-end gap-2">
                            <Dialog.Close
                                type="button"
                                className="bg-zinc-500 px-5 h-12 rounded-md font-semibold text-sm"
                            >
                                Cancelar
                            </Dialog.Close>
                            <button
                                type="submit"
                                className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-1 text-sm"
                            >
                                <GameController size={24} />
                                Encontrar duo
                            </button>
                        </footer>
                    </form>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    )
}
