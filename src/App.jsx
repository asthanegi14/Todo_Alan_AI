import React from 'react'
import Navbar from './components/navbar';
import Lists from './components/Lists';

const App = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='py-6 bg-gray-200'>
                <Lists />
            </div>
        </div>
    )
}

export default App