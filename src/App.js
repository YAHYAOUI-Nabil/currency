import { IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrencyList from './pages/CurrencyList'
import CurrencyConverter from './pages/CurrencyConverter'
import HistoricalCurrencyData from './pages/HistoricalCurrencyData'
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Theme from './components/Theme';
import './app.css';
import { useStateContext } from './contexts/contextProvider';

const useStyle = makeStyles(() => ({
  root: { 
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },
  theme: {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    color: "white",
  },
  menu: {
    position: 'fixed',
    zIndex: 55,
  },
  content: {
    // width: '100vw',
  },
  setting: {
    color: "white",
  },
}))

const App = () => {
  const classes = useStyle()
  const { activeMenu, themeSettings, setThemeSettings } = useStateContext()
  return (
    <>
      <BrowserRouter>
        <div className={classes.root}>
          <div className={classes.theme}>
            <IconButton 
              size= 'large'
              onClick={()=>setThemeSettings(true)}
            >
              <SettingsIcon 
                className={classes.setting}
                fontSize= 'large'  
              />
            </IconButton>
          </div>
            <div className={classes.menu}>
              <Menu/>
            </div>
          {themeSettings &&
            <div>
              <Theme/>
            </div>
          }
          <div className={classes.content}>
            <Navbar/>
            <Routes>
              <Route path="/" element={<CurrencyConverter />}/>
              <Route path="/1" element={<CurrencyList />}/>
              <Route path="/2" element={<HistoricalCurrencyData />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App