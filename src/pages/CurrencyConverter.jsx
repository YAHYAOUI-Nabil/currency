import { Box, Button, FormControl, IconButton, InputLabel, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Container } from '@mui/system'
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import React, { useEffect, useState } from 'react'
import { getCurrencyConverter } from '../utils/fetchData';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a146e',
    width: "100vw",
    height:"90.12vh",
  },
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'white',
    width: "70vw",
    height:"60vh",
    borderRadius: "20px",
  },
  form: {
    position: 'absolute',
    top: 0,
    bottom:0,
    margin: 'auto',
  },
}))

const CurrencyConverter = () => {
  const classes = useStyle();
  const [base, setBase] = useState("")
  const [date, setDate] = useState("")
  const [currencies, setCurrencies] = useState({})
  useEffect(() => {
    getCurrencyConverter()
    .then((data) => {
      setBase(data.base);
      setDate(data.date);
      setCurrencies(data.rates);
    })
  }, [])

  return (
    <Box className={ classes.root }>
      <Container className={ classes.container }>
        <Box
          className={ classes.form }
          component="form"
          noValidate
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">Amount</InputLabel>
            <TextField type='number'/>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">From</InputLabel>
            <TextField placeholder={base}/>
          </FormControl>
          <FormControl variant="standard">
            <IconButton color='primary' sx={{border:'1px solid blue'}}>
              <SyncAltIcon />
            </IconButton>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">To</InputLabel>
            <TextField/>
          </FormControl>
          <FormControl variant="standard">
            <Button>Convert</Button>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">Result</InputLabel>
            <TextField/>
          </FormControl>
        </Box>
      </Container>
    </Box>
  )
}

export default CurrencyConverter