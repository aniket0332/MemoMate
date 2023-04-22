import React, { useEffect, useState } from 'react'
import { Container, Card, Button, Grid, Link } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(""); 

 
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password));
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
            <div>
            Have an Account ? <Link to="/login">Login</Link>
          </div>
          </form>
        </CardContent>
      </Card>
    </Grid>
  </Container>
  )
}

export default RegisterPage
