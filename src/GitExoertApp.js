import React, { Fragment, useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

export const GitExoertApp = () => {


    // const categoria = ['Anime', 'Series', 'Peliculas'];
    const [categoria, setCategorias] = useState(['Anime', 'Series', 'Peliculas'])

    // const handleAdd = (newData) => {
    //     setCategorias(cats => [...categoria, newData])
    // }

    return (
        <Fragment>
            <h2>GitExoertApp</h2>
            <AddCategory setCategorias={setCategorias} ></AddCategory>
            <hr />
            {/* <button onClick={handleAdd} >Agregar</button> */}
            <ol>
                {
                    categoria.map((data) =>
                        <GifGrid
                            key={data}
                            category={data}>
                        </GifGrid>
                    )
                }
            </ol>

        </Fragment>
    )
}
