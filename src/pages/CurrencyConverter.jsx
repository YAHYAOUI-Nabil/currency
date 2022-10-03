import { Box, Button, FormControl, IconButton, InputLabel, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Container } from '@mui/system'
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import React from 'react'

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
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'white',
    width: "70vw",
    height:"60vh",
    borderRadius: "20px",
  },
}))

const CurrencyConverter = () => {
  const classes = useStyle();
  return (
    <Box className={ classes.root }>
      <Container className={ classes.container }>
        <Box
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
            <TextField/>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">From</InputLabel>
            <TextField/>
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
        </Box>
      </Container>
    </Box>
  )
}

export default CurrencyConverter