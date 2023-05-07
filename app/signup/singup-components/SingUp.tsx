"use client"
import React from 'react'
import { Button, Container, Grid, Input, InputLabel } from "@mui/material"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"
import Image from "next/image"
import AppBar from "@mui/material/AppBar"
function SingUp() {
    return (
        <>

            <Container component="div">

                <Box alignItems="center" >
                    <Box display="flex" flexDirection="column" sx={{ m: 20 }} alignItems="Center">

                        <Box sx={{ m: 2 }}>
                            <section>
                                <Image className="border-slate pb-8"
                                    src="/images/AppLogo.png"
                                    width={150}
                                    height={150}
                                    alt="apppp"
                                    priority={true}
                                ></Image>
                            </section>
                        </Box>

                        <Box sx={{ m: 2 }}>

                            <Grid component="div" display="flex" columnGap={6}>

                                <Grid item>
                                    <FormControl>
                                        <InputLabel>name</InputLabel>
                                        <Input id="name" type="text"></Input>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl>
                                        <InputLabel>last name</InputLabel>
                                        <Input id="lastName" type="text"></Input>
                                    </FormControl>
                                </Grid>

                            </Grid>

                        </Box>

                        <Box sx={{ m: 2 }} >

                            <Grid component="div">

                                <Grid>
                                    <FormControl>
                                        <InputLabel>e-mail</InputLabel>
                                        <Input id="e-mail" type="email" sx={{ width: "100%" }}></Input>
                                    </FormControl>
                                </Grid>

                            </Grid>
                        </Box>

                        <Box sx={{ m: 2 }}>

                        </Box>

                    </Box>
                </Box>

            </Container>


        </>
    )
}

export default SingUp