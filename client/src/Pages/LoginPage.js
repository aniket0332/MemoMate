import React from 'react'
import { Container, Card, Button, Grid, Link } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const LoginPage = () => {
  return (
    <Container>
    <Grid sx={{padding: "5rem"}}>
    <Card raised='true' sx={{ maxWidth: 345, textAlign: "center", marginLeft: "auto",
    marginRight: "auto" }}>
            <CardMedia
                component="img"
                height="140"
                image="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
                alt="loading"
            />
            <CardContent>
            <form>
  <div>
  <label>
    email:
    <input type="text" name="name" />
  </label>
  </div>
  <div>
  <label>
    password:
    <input type="text" name="name" />
  </label>
  </div>
  <div>
  New Customer ? <Link to="/register">Register Here</Link>
  </div>
</form>

                <Button type="submit" value="Submit" variant="outlined">Login</Button>
            </CardContent>
    </Card>
    </Grid>
</Container>
  )
}

export default LoginPage
