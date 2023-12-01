import React from 'react'

function TopButtons() {
    const cities = [
        {
            id: 1,
            title: 'Sydney'
        },
        {
            id: 2,
            title: 'London'
        },
        {
            id: 3,
            title: 'New York'
        },
        {
            id: 4,
            title: 'Dubai'
        },
        {
            id: 5,
            title: 'Tokyo'
        }
    ]
    return <div className="flex items-center justify-around my-6">
        {cities.map((city) => (
            <button key={city.id} className="text-white text-lo font-medium">{city.title}</button>

        ))}
    </div>
}

export default TopButtons