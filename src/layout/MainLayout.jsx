// src/layout/MainLayout.jsx
import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-4">
          <h1 className="text-xl font-bold">Selamat datang di Dawnlessday</h1>
        </main>
      </div>
    </div>
  )
}

export default MainLayout

