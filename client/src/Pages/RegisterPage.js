import React, { useEffect, useState, useDispatch, useSelector } from 'react'
import { Container, Card, Button, Grid, Link } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(""); 
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async(e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage(null);

      try {
        const config = {
          headers: {
            "Content-type":"application/json"
          },
        };
        
        setLoading(true)
        
        const { data } = await axios.post('/api/users',{
          name,
          email,
          password,
        },config
        ); 
        console.log(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        setLoading(false);
  
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    }
  };
  return (
    <Container>
    <Grid sx={{ padding: "5rem" }}>
    {message && <ErrorMessage>{message}</ErrorMessage>}
    {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && <Loading />}
      <Card raised={true} sx={{
        maxWidth: 345, textAlign: "center", marginLeft: "auto",
        marginRight: "auto"
      }}>
        <CardMedia
          component="img"
          height="140"
          image="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
          alt="loading"
        />
        <CardContent>
          <form onSubmit={submitHandler}>
          <div>
              <label>
                name:
                <input type="name"
                  value={name}
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)} />
              </label>
            </div>
            <div>
              <label>
                email:
                <input type="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)} />
              </label>
            </div>
            <div>
              <label>
                password:
                <input type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)} />
              </label>
            </div>
            <div>
              <label>
                password:
                <input type="password"
                  value={confirmpassword}
                  placeholder="confirm password"
                  onChange={(e) => setConfirmPassword(e.target.value)} />
              </label>
            </div>
            <Button type="submit" value="Submit" variant="outlined">Register</Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  </Container>
  )
}

export default RegisterPage
