import { Box, Button, CssBaseline, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Container } from '@mui/system'
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import React, { useEffect, useState } from 'react'
import { getCurrencyConverter, getCurrencyList } from '../utils/fetchData';


const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height:"100vh",
    position: 'relative',
    padding:0,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: "70vw",
    height:"80vh",
    borderRadius: "20px",
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    padding: '0',
  },
  form: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  formControl : {
    width: '29%',
  },
  title: {
    color: '#1976D2',
    backgroundColor: '#F8FAFD',
    textAlign: 'left',
    borderRadius: "20px 20px 0 0",
    padding: '10px 20px', 
    marginBottom: '30px',
  },
  noteContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 30px',
    marginBottom: '30px',
  },
  note: {
    width: '40%',
    backgroundColor: '#F2F7FE',
    borderRadius: '20px',
    padding: '10px',
    fontSize: '6px'
  },
  result: {
    marginBottom: '30px',
    padding: '0 40px'
  },
  date: {
    textAlign: 'right',
    padding:'0 40px'
  },
}))

const CurrencyConverter = () => {
  const classes = useStyle();
  const [currenciesList, setCurrenciesList] = useState([]);
  const [currencies, setCurrencies] = useState({});
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(1);
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [result, setResult] = useState(0);

  const handleChangeFrom = (event) => {
    setFrom(event.target.value);
  };
  const handleChangeTo = (event) => {
    setTo(event.target.value);
  };
  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleResult = () => {
    setResult(amount*(currencies[to]/currencies[from]))
  };
  const handleSwitch = () => {
    const aux = from;
    setFrom(to)
    setTo(aux)
    setResult(amount*(currencies[to]/currencies[from]))
  };

  
  useEffect(() => {
    getCurrencyConverter()
    .then((data) => {
      console.log(data.rates)
      setDate(data.date);
      setCurrencies(data.rates);
    })
    getCurrencyList()
    .then((data)=>{
      setCurrenciesList(Object.values(data))
    }) 
  }, [])


  return (
    <Box className={ classes.root }>
      <CssBaseline/>
      <Container className={ classes.container }>
        <Box className={classes.title}>
          <Typography variant='h3'>Currency Converter</Typography>
        </Box>
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
          <FormControl variant="standard" className={classes.formControl}>
            <TextField
              id="outlined-number"
              label="amount"
              type="number"
              value={amount}
              onChange={handleChangeAmount}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">From</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={from}
              label="From"
              onChange={handleChangeFrom}
            >
              {currenciesList?.map((item) =>(
                <MenuItem sx={{width: '100%'}} key={ item.currency_code } value={item.currency_code}>{ item.currency_code }: { item.currency_name }</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <IconButton color='primary' sx={{border:'1px solid blue'}} onClick={handleSwitch}>
              <SyncAltIcon />
            </IconButton>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">To</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={to}
              label="To"
              onChange={handleChangeTo}
            >
              {currenciesList?.map((item) =>(
                <MenuItem key={ item.currency_code } value={item.currency_code}>{ item.currency_code }: { item.currency_name }</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
          {result>0 &&
            <Box className={classes.result}>
              <Typography variant='h6' sx={{marginBottom:'20px', fontWeight:'600'}}>
                {amount} {from} = <br/> {parseFloat(result).toFixed(6)} {to}
              </Typography>
              <Typography variant='body2'>
                1 {from} = {parseFloat(currencies[to]/currencies[from]).toFixed(6)} {to} 
              </Typography>
              <Typography variant='body2'>
                1 {to} = {parseFloat(currencies[from]/currencies[to]).toFixed(6)} {from} 
              </Typography>
            </Box>
          }
        <Box className={classes.noteContainer}>
          <Box className={classes.note}>
            <Typography variant='body2' sx={{fontSize: '12px'}}>
            We use the mid-market rate for our converter. The rate is given for information only. 
            You will not benefit from this rate when sending money. Check sending rates.
            </Typography>
          </Box>
          <Box sx={{display: 'flex', alignItems:'center'}}>
            <Button variant='contained' size='large' onClick={handleResult}>Convert</Button>
          </Box>
        </Box>
        <Box className={classes.date}>
          {result>0 && 
            <Typography>Conversion of 
              <span style={{color:'blue'}}> {currenciesList.filter((item)=> item.currency_code===from)[0].currency_name}</span> to 
              <span style={{color:'blue'}}> {currenciesList.filter((item)=> item.currency_code===to)[0].currency_name}</span> — last update : {date}</Typography>
          }
        </Box>
      </Container>
    </Box>
  )
}

export default CurrencyConverter