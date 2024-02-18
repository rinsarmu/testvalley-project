import React, { useEffect, useState } from 'react'
import { getCategory } from '../../../../assets/Js/api';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const response = await getCategory();
            setCategory(response.data)
        };
        fetchData();

    }, [])
    return (
        <div>
            <div className='flex gap-3 justify-between flex-wrap mt-6 mb-8'>
                {category && category.length > 0 && category.map((cat, _) => (<CategoryCard data={cat} key={cat.mainShortcutId} />))}
            </div>
        </div>
    )
}

export default Category