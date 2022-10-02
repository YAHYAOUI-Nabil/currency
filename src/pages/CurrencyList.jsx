import { Grid, Box, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getCurrencyList } from '../utils/fetchData'





const CurrencyList = () => {
  const [currencies, setCurrencies] = useState([]) 
  useEffect(() => {
      getCurrencyList().then((data) => setCurrencies(Object?.values(data)))
  }, [])
  
  return (
    <Grid 
      container
      spacing={2}
      sx={{padding:'20px'}}
    >
      {
        currencies?.map((item)=>(
          <Grid 
            item 
            lg={4}
            key={item.currency_code}
          >
            <Box>
              <Paper
                elevation={12}
                sx={{
                  height:'10vh', 
                  textAlign:'left', 
                  padding:'20px',
                }}
              >
                {item.currency_code} : {item.currency_name}
              </Paper>
            </Box>

          </Grid>
        ))
      }
    </Grid>
  )
}

export default CurrencyList