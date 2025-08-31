import React from 'react'

const Curleybas = () => {
    const userDat={
        name:'Asish kumar Bera',
        Father:'Ajoy Bera',
        Mother:'Rebati Bera',
        collage:'Siliguri Institute of Technology',
        dept:'CSE-AIML'
    }

    function sum(a,b){
        return a+b;
    }
  return (
    <div>
        <h1>Curley Braces concept</h1>
        <p>Name:- {userDat.name}</p>
        <p>Father's Name:- {userDat.Father}</p>
        <p>Mother's Name:- {userDat.Mother}</p>
        <p>Collage Name:- {userDat.collage}</p>
        <p>Department:- {userDat.dept}</p>
        <p>Addition:- {sum(10,12)}</p>
    </div>
  )
}

export default Curleybas