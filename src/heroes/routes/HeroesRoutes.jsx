import React from 'react'
import { Navbar } from '../../UI'
import {  HeroPage,DcPage, MarvelPage,SearchPage } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className='container'>
            <Routes>
                <Route path='marvel' element={<MarvelPage/>}/>
                <Route path='dc' element={<DcPage/>}/>
                <Route path='search' element={<SearchPage/>}/>
                <Route path='hero/:heroId' element={<HeroPage/>}/>

                <Route path='/' element={<Navigate to='marvel'/>}/>
            </Routes>
        </div>
    </>
  )
}
