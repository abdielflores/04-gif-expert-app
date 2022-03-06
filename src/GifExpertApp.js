import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = props => { 
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
    // const handleAdd = category => {
    //     if (category) {
    //         setCategories([...categories, category]);
    //     } else {
    //         setCategories([...categories, 'category']);
    //     }
    // }
    return (
    <>
        <h2>GifExpertApp</h2>
        <CategoryAdd setCategories={setCategories} />
        <hr />
        <ol>
            {categories.map((category, index) => <GifGrid key={category} category={category} />)}
        </ol>
    </>
)
}