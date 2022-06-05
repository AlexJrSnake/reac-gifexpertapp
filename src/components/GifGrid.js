import React, { } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export default function GifGrid({ category }) {

    // const [images, setImages] = useState([]);

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn' >{category}</h3>
            {loading && <p> Cargando..</p>}


            <div className='card-grid'>
                <ol>
                    {
                        images.map((img) => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />

                        ))
                    }
                </ol>
            </div>
        </>

    )
}