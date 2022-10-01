import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles(()=>({
  container: {
    position: 'fixed',
    top:0,
    left:0,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100vw',
    height:'100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex:9999999,
  },
  content: {
    width: '20vw',
    backgroundColor: 'white',
    opacity:1,
  }
}))

const Theme = () => {
  const classes = useStyle()
  return (
    <div className={classes.container}>
      <div className={classes.content}>theme1</div>
    </div>
  )
}

export default Theme