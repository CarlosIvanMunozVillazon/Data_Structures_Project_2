"use client"
import React from 'react'
import { Button, Grid, Input, InputLabel } from "@mui/material"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"
import Image from "next/image"
import AppBar from "@mui/material/AppBar"
import SingUp from './singup-components/SingUp'
import NavBar from './singup-components/NavBar'

export default function Register() {
    return (
        <>
            <NavBar></NavBar>

            <Grid container component="main" display="flex" flexDirection="column" alignItems="center">

                <Box sx={{ m: 17 }}>
                    <SingUp></SingUp>
                </Box>

            </Grid>
            
        </>
    )
}
