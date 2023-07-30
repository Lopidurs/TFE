import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './App.css'

import ListGames from './Pages/ListGames/ListGames.js'
import Home from './Pages/Home/Home.js'
import DetailsGames from './Pages/DetailsGames/DetailsGames'
import ListUsers from './Pages/ListUsers/ListUsers'
import DetailsUsers from './Pages/DetailsUsers/DetailsUsers'
import Rental from './Pages/Rental/Rental'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/listGames" element={<ListGames />} />
                    <Route path="/detailsGames" element={<DetailsGames />} />
                    <Route path="/detailsGames/:id" element={<DetailsGames />} />
                    <Route path="/listUsers" element={<ListUsers />} />
                    <Route path="/detailsUsers/:id" element={<DetailsUsers />} />
                    <Route path="/detailsUsers" element={<DetailsUsers />} />
                    <Route path="/rental/:id" element={<Rental />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </LocalizationProvider>
    )
}

export default App
