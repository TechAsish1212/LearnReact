import React from 'react'
import '../App.css';

function Photo() {
    return (
        <img src="https://cdn.pixabay.com/photo/2021/04/05/08/35/dummy-6152641_1280.jpg" alt="Dummy Image" className='photo' />
    )
}

// const Gallery = () => {
//     return (
//         <div>
//             <h1>Amazing Photo(import and export concept with default)</h1>
//             <div className='photo-container'>
//                 <Photo />
//                 <Photo />
//                 <Photo />
//             </div>
//         </div>
//     )
// }

// export default Gallery

export const Gallery = () => {
    return (
        <div>
            <h1>Amazing Photo(import and export concept without default)</h1>
            <div className='photo-container'>
                <Photo />
                <Photo />
                <Photo />
            </div>
        </div>
    )
}

