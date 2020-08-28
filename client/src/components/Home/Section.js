import React from 'react'

const Section = () => {
    return (
        <div className='flex flex-wrap content-center justify-center p-4'>
            <div className='max-w-xs p-5 bg-gray-200 shadow mx-4'>
                <p className='text-xl text-gray-800 font-semibold'>Pregunta</p>
                <hr />
                <p className='text-gray-800 text-justify'>
                    Te haces preguntas sobre la vida y la muerte, sobre el origen de todas las cosas, o sobre Dios? 
                    Estas entre otras son las grandes preguntas que la filosofia busca contestar.
                    Participa en los debates de estas y otras preguntas en nuestro foro.
                </p>
            </div>
            <div className='max-w-xs p-5 bg-gray-200 shadow mx-4'>
                <p className='text-xl text-gray-800 font-semibold'>Comparte</p>
                <p className='text-gray-800 text-justify'>
                    Si quieres escribir sobre algun tema filosófico, sobre algun pensador de la antiguedad o sobre alguna idea nueva, 
                    puedes escribir un articulo.
                </p>
            </div>
            <div className='max-w-xs p-5 bg-gray-200 shadow mx-4'>
                <p className='text-xl text-gray-800 font-semibold'>Aprende</p>
                <p className='text-gray-800 text-justify'>
                    La filosofia es la busqueda de la sabiduria. SoyFilosofo es un espacio que busca brindar a cualquiera la posibilidad
                    de adquirir sabiduria a travez de exponer, comentar y debatir cualquier idea.
                </p>
            </div>
        </div>
    )
}

export default Section
