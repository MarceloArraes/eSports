import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
    return (
        <input
            {...props}
            className="bg-zinc-900 py-3 px-4 rouded text-sm placeholder:text-zinc-500"
        />
    )
}
