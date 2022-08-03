/* eslint-disable jsx-a11y/alt-text */

import {
    Avatar,
    Box,
    Button,
    Grid,
    Link,
    Paper,
    TextField,
    Typography
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Image from 'next/image'
import { FC } from 'react'
import { TLoginV } from './types'

export const LoginV: FC<TLoginV> = ({ onSubmit, ToastContainer }) => {
    return (
        <Grid
            container
            spacing={2}
            style={{ maxHeight: '100vh', overflow: 'hidden' }}
        >
            <Grid item xs={false} sm={4} md={7}>
                <Image
                    src={'/img/cat.jpg'}
                    width={0}
                    height={0}
                    layout="responsive"
                    priority={true}
                />
            </Grid>
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar Sesion
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={onSubmit}
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Iniciar Sesion
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2"></Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {'No tienes una cuenta? Registrate'}
                                </Link>
                            </Grid>
                        </Grid>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
