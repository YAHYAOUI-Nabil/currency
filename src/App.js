import { makeStyles } from '@mui/styles';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrencyConverter from './pages/CurrencyConverter'
import Navbar from './components/Navbar';
import './app.css';

const useStyle = makeStyles(() => ({
  root: { 
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#0a146e',
  },
  content: {
    // width: '100vw',
  },
}))

const App = () => {
  const classes = useStyle()
  return (
    <>
      <BrowserRouter>
        <div className={classes.root}>
          <div className={classes.content}>
            <Navbar/>
            <Routes>
              <Route path="/" element={<CurrencyConverter />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App