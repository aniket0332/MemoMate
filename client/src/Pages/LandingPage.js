import React from 'react'
import { Container, Card, Button, Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Item = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));
const LandingPage = () => {
    return (
        <Container>
            <Grid sx={{padding: "5rem"}}>
            <Card raised={true} sx={{ maxWidth: 345, textAlign: "center", marginLeft: "auto",
            marginRight: "auto" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
                        alt="loading"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Welcome, Please Login or register it you haven't.
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Item><Link to="/login"><Button variant="outlined">Login</Button></Link></Item>
                            </Grid>
                            <Grid item xs>
                                <Item><Link to="/register"><Button variant="outlined">SignUp</Button></Link></Item>
                            </Grid>
                        </Grid>
                    </CardContent>
            </Card>
            </Grid>
        </Container>
    )
}

export default LandingPage
