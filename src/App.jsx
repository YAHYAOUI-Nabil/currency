import { Box, Button, Grid } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react'
import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrencyList from './pages/CurrencyList'
import CurrencyConverter from './pages/CurrencyConverter'
import HistoricalCurrencyData from './pages/HistoricalCurrencyData'
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Theme from './components/Theme';
import './app.css';

const App = () => {
  return (
    <Box 
    sx={{ 
      padding: 0,
    }}
    >
      <BrowserRouter>
        <Box 
          sx={{ 
            position: 'relative',
            display: 'flex',
            margin: '0px',
          }}
        >
          <Container>
            <Button
              sx={{
                position: 'fixed',
                right: '20px',
                bottom: '20px',
                height: '70px',
                width: '70px',
                borderRadius: '50%',
                zIndex: 99999,
              }}
            >
              <SettingsIcon 
                fontSize= 'large'  
              />
            </Button>
          </Container>
          <Container>
            <Menu/>
          </Container>
          <Container>
            <Theme/>
          </Container>
          <Container>
            <Grid
              container
              flex
              direction='column'
            >
              <Grid
                item
              >
                <Navbar/>
              </Grid>
              <Grid
                item
              >
                <CurrencyList/>
                {/* <Routes>
                  <Route path="/" element={<CurrencyConverter />}/>
                  <Route path="/1" element={<CurrencyList />}/>
                  <Route path="/2" element={<HistoricalCurrencyData />}/>
                </Routes> */}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </BrowserRouter>
    </Box>
  )
}

export default App