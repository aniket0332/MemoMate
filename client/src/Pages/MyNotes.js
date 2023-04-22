import React, { useEffect, useState } from 'react'
import MainScreen from './../components/MainScreen';
import { Button, Grid, Container, Accordion, AccordionDetails, AccordionSummary, Badge } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNoteAction, listNotes } from '../actions/noteActions';
import Loading from './../components/Loading';
import ErrorMessage from './../components/ErrorMessage';


const MyNotes = ({ history, search }) => {

    const dispatch = useDispatch();

    const noteList = useSelector((state) => state.noteList);
    const { loading, error, notes } = noteList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const noteDelete = useSelector((state) => state.noteDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = noteDelete;

    const noteCreate = useSelector((state) => state.noteCreate);
    const { success: successCreate } = noteCreate;

    const noteUpdate = useSelector((state) => state.noteUpdate);
    const { success: successUpdate } = noteUpdate;
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(listNotes());
        if (!userInfo) {
            navigate("/");
        }
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
        successCreate,
        successUpdate,
    ]);

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
            dispatch(deleteNoteAction(id));
        }
    };
    return (
        <Container>
            <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`} />
            {/* {console.log(notes)} */}
            <div style={{ paddingLeft: "1.5rem" }}>
                <Link to="createNote">
                    <Button variant="contained">create new Note</Button>
                </Link>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {errorDelete && (
                    <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
                )}
                {loading && <Loading />}
                {loadingDelete && <Loading />}
            </div>
            {notes &&
                notes
                    .filter((filteredNote) =>
                        filteredNote.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .reverse()
                    .map((note) => (
                        <Container key={note._id}
                            sx={{ padding: "1rem" }}>
                            <Accordion>
                                <AccordionSummary
                                    sx={{ boxShadow: "4" }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Grid container spacing={2} sx={{}}>
                                        <Grid item xs={8}>
                                            <Typography>{note.title}</Typography>
                                        </Grid>
                                        <Grid item xs={2} >
                                            <Button href={`/note/${note._id}`} color='success' size='small' variant="contained">edit</Button>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Button onClick={() => deleteHandler(note._id)} color='error' size='small' variant="contained">delete</Button>
                                        </Grid>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <h4>
                                        <Badge variant="success">
                                            Category - {note.category}
                                        </Badge>
                                    </h4>
                                    <Typography variant="body2" color="text.secondary">
                                        {note.content}
                                    </Typography>
                                    <footer className="blockquote-footer">
                                        Created on{" "}
                                        <cite title="Source Title">
                                            {note.createdAt.substring(0, 10)}
                                        </cite>
                                    </footer>
                                </AccordionDetails>
                            </Accordion>
                        </Container>
                    ))
            }

        </Container>
    )
}

export default MyNotes
