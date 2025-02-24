import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './NavigationBar';


const RootLayout = () => {
return (
    <>
        <NavigationBar/>
        <Outlet/>
    </>
)
}

export default RootLayout;

