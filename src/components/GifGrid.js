import React from 'react';

import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            { loading && <div className="animate__animated animate__flash">Cargando...</div> }

            <div className="card-grid">
                {
                    images.map( gif => (
                        <GifGridItem key={gif.id} {...gif} />
                    ))
                }
            </div>
        </>
    )
}
