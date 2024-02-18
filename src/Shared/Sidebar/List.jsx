import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const List = ({ name, data }) => {
    const { pathname } = useLocation()

    return (
        <div className='pl-8'>
            <div>
                <h3 className={`my-2 text-sm`}>
                    {name}

                </h3>
                <ul className='text-gray-500  '>
                    {data.map(d => (
                        <Link to={d.path} className={`py-2 flex items-center hover:text-[#0ff] justify-start gap-2 ${pathname === d.path && 'text-[#0ff]'}`}>
                            <span className='pr-2'>{d.icon}</span>
                            <span className={`${pathname === d.path && 'text-[#0ff]'} text-sm`}>{d.name}</span>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default List