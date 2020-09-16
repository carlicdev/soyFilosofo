import React from 'react'
import Forum from './Forum'
import LastPosts from './LastPosts'

const Main = () => {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-1'>
            <div className='col-span-3'>
                <Forum />
            </div>
            <div className='col-span-1'>
                <LastPosts />
            </div>
        </div>
    )
}

export default Main
