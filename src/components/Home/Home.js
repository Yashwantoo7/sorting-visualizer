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
                <Link to='/quicksort' style={{textDecoration:'none'}}>
                    <div className='card-body'>
                        <h2 className='text'>Quick Sort</h2>
                    </div>
                </Link>
            </div>
            <div className='card'>
                <Link to='/insertionsort' style={{textDecoration:'none'}}>
                    <div className='card-body'>
                        <h2 className='text'>Insertion Sort</h2>
                    </div>
                </Link>
            </div>

            <div className='card'>
                <Link to='/bubblesort' style={{textDecoration:'none'}}>
                    <div className='card-body'>
                        <h2 className='text'>Bubble Sort</h2>
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
