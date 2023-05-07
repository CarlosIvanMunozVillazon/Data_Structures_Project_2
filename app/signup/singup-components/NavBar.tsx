import { AppBar, Box, Grid, Typography } from '@mui/material'
import React from 'react'

function NavBar() {
    return (
        <>
            <AppBar sx={{
                height: '6vh',
                bgcolor: 'black',
                alignItems: 'center'
            }}>
                <Grid item alignItems="center">
                    <Box sx={{ my: 1, mx: 1 }}>
                        <Typography component="h1" variant="h4" fontFamily="fantasy" fontWeight="bold">
                            SharpSight
                        </Typography>
                    </Box>
                </Grid>
            </AppBar>
        </>
    )
}

export default NavBar