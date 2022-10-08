import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
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
    
    width: "98vw",
    height:"90.12vh",
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0',
    backgroundColor: 'white',
    width: "70vw",
    height:"60vh",
    borderRadius: "20px",
  },
  form: {
    width: '100%',
    padding: '20px',
    margin: '10px 0'
  },
  formControl : {
    width: '29%',
  },
  title: {
    color: '#1976D2',
    backgroundColor: '#F8FAFD',
    width: '100%',
    textAlign: 'left',
    borderRadius: "20px 20px 0 0",
    padding: '10px 20px',
    marginBottom: '20px',
  }
}))

const CurrencyConverter = () => {
  const classes = useStyle();
  const [currencyName, setCurrencyName] = useState([]);
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
    setResult(amount*(to/from))
  };
  const handleSwitch = () => {
    const aux = from;
    setFrom(to)
    setTo(aux)
    setResult(amount*(to/from))
  };

  const [currencies, setCurrencies] = useState({})
  useEffect(() => {
    getCurrencyConverter()
    .then((data) => {
      setDate(data.date);
      setCurrencies(data.rates);
      setCurrencyName(Object.keys(data.rates));
    })
    getCurrencyList()
    .then((data)=>{}) 
  }, [])


  return (
    <Box className={ classes.root }>
      <Container className={ classes.container }>
        <Box className={classes.title}>
          <Typography variant='h3'>Convert</Typography>
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
              {currencyName?.map((item) =>(
                <MenuItem key={item} value={currencies[item]}>{item}</MenuItem>
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
              {currencyName?.map((item) =>(
                <MenuItem key={item} value={currencies[item]}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
          {result>0 &&
            <Box className={classes.result}>
              <Typography>
                {amount} from = <br/> {result} to
              </Typography>
            </Box>
          }
        <Box className={classes.note}>
          <Box className={classes.note}>
            <Typography>
              Nous utilisons le taux de marché moyen pour notre convertisseur. 
              Le taux est donné à titre d'information seulement. 
              Vous ne bénéficierez pas de ce taux lors d'un envoi d'argent. 
              Vérifiez les taux d'envoi.
            </Typography>
          </Box>
          <Box>
            <Button onClick={handleResult}>Convert</Button>
          </Box>
        </Box>
        <Box>
          {result>0 && 
            <Typography>Conversion {from} vers {to} — Dernière mise à jour : {date}</Typography>
          }
        </Box>
      </Container>
    </Box>
  )
}

export default CurrencyConverter