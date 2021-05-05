import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='row center'>
            <div className='card'>
                <Link to='/mergesort' style={{textDecoration:'none'}}>
                    <div className='card-body'>
                        <h2 className='text'>Merge Sort</h2>
                    </div>
                </Link>
            </div>
            <div className='card'>
                <Link to='/mergesort' style={{textDecoration:'none'}}>
                    <div className='card-body'>
                        <h2 className='text'>Merge Sort</h2>
                    </div>
                </Link>
            </div>
            <div className='card'>
                <Link to='/mergesort' style={{textDecoration:'none'}}>
                    <div className='card-body'>
                        <h2 className='text'>Merge Sort</h2>
                    </div>
                </Link>
            </div>

            <div className='card'>
                <Link to='/mergesort' style={{textDecoration:'none'}}>
                    <div className='card-body'>
                        <h2 className='text'>Merge Sort</h2>
                    </div>
                </Link>
            </div>
            <div className='card'>
                <Link to='/mergesort' style={{textDecoration:'none'}}>
                    <div className='card-body'>
                        <h2 className='text'>Merge Sort</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home
