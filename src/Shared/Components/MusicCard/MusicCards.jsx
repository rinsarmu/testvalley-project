import React from 'react'
import MusicCard from './MusicCard'
import { Link } from 'react-router-dom'

const MusicCards = ({ data }) => {
    return (
        <div>
            <Link to='/playlist/34'>
                <MusicCard body={data.body} />
                {/* Music name */}
                <h3 className='text-sm mt-2'>{data && data.name ? data.name : 'Zimbabwe hip hop'}</h3>
            </Link>
        </div>
    )
}

export default MusicCards