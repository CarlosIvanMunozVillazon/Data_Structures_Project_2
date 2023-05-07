import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

function Footer() {
    return (
        <AppBar position='static' sx={{ 
            alignItems: 'center',
            heigth: '25vh'
            }}>
            <Typography variant='h6' className='text-white'>Data Policy</Typography>
        </AppBar>
    )
}

export default Footer