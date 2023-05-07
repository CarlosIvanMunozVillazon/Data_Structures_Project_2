"use client"
import { Button, Grid, Input, InputLabel } from "@mui/material"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"
import Image from "next/image"
import AppBar from "@mui/material/AppBar"
import Footer from './components/Footer'

// <AppBar position="static" sx={{
//             backgroundColor: 'black',
//             alignItems: 'center',
//             height:'6vh'
//           }}>
//             <Typography variant="h3" fontFamily="fantasy"> data policy </Typography>
//           </AppBar>

{/* <Grid
          item

          alignContent="center"

          xl={4}
          xs={false}
          sm={4}
          md={4}
          lg={4}
        >
        </Grid>
        <Grid item

          alignItems="center"

          xl={4}
          xs={false}
          sm={4}
          md={4}
          lg={4} >

            <Grid container ></Grid>

          
        </Grid>

        <Grid item

          alignContent="center"

          xl={4}
          xs={false}
          sm={4}
          md={4}
          lg={4} >

        </Grid> */}

export default function Home() {
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

      <Grid container component="main" sx={{
        height: '100vh',
        bgcolor: "white"
      }} display="flex">

        <CssBaseline />

        <Grid container sx={{ height: '100vh' }}>
          <Grid

            item

            xl={4}
            xs={false}
            sm={4}
            md={4}
            lg={4}


          >
          </Grid>

          <Grid
            item

            alignContent="center"

            xl={4}
            xs={false}
            sm={4}
            md={4}
            lg={4}


          >

            <Box sx={{

              my: 8,
              mx: 6,

              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'

            }}>

              <Box component="form" alignItems="center" display="flex" flexDirection="column" sx={{

                my: 20

              }}>

                <section>
                  <Image className="border-slate pb-8"
                    src="/images/AppLogo.png"
                    width={200}
                    height={200}
                    alt="apppp"
                    priority={true}
                  ></Image>
                </section>

                <Typography component="h1" variant="h6" fontFamily="fantasy" fontWeight="bold">
                  Bienvenido
                </Typography>

                <Box alignItems="left">


                  <Box alignItems="center" sx={{ m: 2 }}>
                    <FormControl>
                      <InputLabel htmlFor="email">Correo Electronico</InputLabel>
                      <Input id="email" placeholder="e-mail"></Input>
                      <FormHelperText>name@mymail.com</FormHelperText>
                    </FormControl>
                  </Box>

                  <Box alignItems="center" sx={{ m: 2 }}>
                    <FormControl>
                      <InputLabel htmlFor="email">Contraseña</InputLabel>
                      <Input id="pwd" placeholder="password" type="password"></Input>
                      <FormHelperText>password here</FormHelperText>
                    </FormControl>
                  </Box>


                </Box>

                <Grid container display="flex" flexDirection="column" rowSpacing={2} alignItems="center" sx={{ my: 0.5 }}>

                  <Grid item>
                    <Button variant="contained" sx={{ bgcolor: "black", borderRadius: 5 }}>
                      Sign in
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button variant="contained" sx={{ bgcolor: "black", borderRadius: 5 }}>
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid
            item

            alignContent="center"

            xl={4}
            xs={false}
            sm={4}
            md={4}
            lg={4}
          >

          </Grid>
        </Grid>
      </Grid>

      <Grid component="footer" display="flex" flexDirection="column" alignItems="center" sx={{ height: '10vh', backgroundColor: "black" }}>

        <Box alignItems="center" sx = {{backgroundColor:"black", my: 4, mx:10}}>
          <Typography variant='body1' fontFamily="Roboto" color = "white" 
          
          sx = {{textDecoration : "underline"}}

          >Data Policy</Typography>
        </Box>

      </Grid>
    </>
  )
}
