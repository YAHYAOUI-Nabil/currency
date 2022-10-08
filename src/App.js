import { makeStyles } from '@mui/styles';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrencyConverter from './pages/CurrencyConverter';
import bgImage from './assets/currency-bg.jpg'
import './app.css';
import { CssBaseline } from '@mui/material';

const useStyle = makeStyles(() => ({
  root: { 
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#0a146e',
    backgroundImage: `url(${bgImage})`,
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
      <CssBaseline/>
        <div className={classes.root}>
          <div className={classes.content}>
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