import React from 'react'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    if(localStorage.getItem('access_token') === null){
      window.location.href= '/'
    }
    else{
      console.log('Home Page')
    };
      }, []);

  return (
    <div
        style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Right',
        height: '100vh'
        }} 
    >
        <h1 style={{color:'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontSize:'40px'}}>
        Home
        </h1>
    </div>
  )
}

export default Home