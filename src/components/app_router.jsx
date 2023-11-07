import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from '../pages/login'
import LoginAuth from '../pages/login_auth'
import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import { ProfilePage } from '../pages/profile'
import * as profileData from './profile_data'
import INF134P from '../pages/INF134P'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} /> 
        <Route path='/login_auth' element={<LoginAuth />} /> 
        <Route path='/' element={<HomePage/>} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/profile-AnaMaria' element={<ProfilePage {...profileData.anaMariaData} />} />
        <Route path='/profile-Adolfo' element={<ProfilePage {...profileData.adolfoData} />} />
        <Route path='/profile-Sofia' element={<ProfilePage {...profileData.sofiaData} />} />
        <Route path='/profile-Jose' element={<ProfilePage {...profileData.joseData} />} />
        <Route path='/profile-Marta' element={<ProfilePage {...profileData.martaData} />} />
        <Route path='/profile-Manuela' element={<ProfilePage {...profileData.manuelaData} />} />
        <Route path='/profile-Patricia' element={<ProfilePage {...profileData.patriciaData} />} />
        <Route path='/profile-Guillermo' element={<ProfilePage {...profileData.guillermoData} />} />

        <Route path='/INF134' element={<INF134P/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
