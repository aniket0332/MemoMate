import React, { useEffect, useState } from 'react'
import { Container, Card, Button, Grid, Link } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { login } from "../actions/userActions";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ history }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    // console.log(email, password);

  };

  return (
    <Container>
      <Grid sx={{ padding: "5rem" }}>
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
                New Customer ? <Link href="/register">Register Here</Link>
              </div>
              <Button type="submit" value="Submit" variant="outlined">Login</Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  )
}

export default LoginPage
