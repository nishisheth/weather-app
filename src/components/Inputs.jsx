import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-left space-x-4'>
                <input type='text' className='text-xl font-light p-2 focus:outline-none shadow-xl capitalize'
                    placeholder='Search for city'
                />
                <UilSearch size={20} className='text-white cursor-pointer transition ease-out hover:scale-125' />
                <UilLocationPoint size={20} className='text-white cursor-pointer transition ease-out hover:scale-125' />
            </div>
        </div>

    )
}

export default Inputs