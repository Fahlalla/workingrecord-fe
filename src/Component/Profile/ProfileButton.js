import React from 'react'

export default function ProfileButton({children , color}) {
    return (
        <button className={`font-bold shadow shadow-2xl border border-gray-200 w-56 h-10 text-white ${color} rounded-full`}>
          {children}
        </button>
    )
}



