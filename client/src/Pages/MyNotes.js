import React, { useEffect, useState } from 'react'
import MainScreen from './../components/MainScreen';
import { Button, Grid, Container, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';


const MyNotes = () => {

   const [notes, setNotes] = useState([]);

    const deleteHandler = (id) => {
        // if (window.confirm("Are you sure?")) {
        //   dispatch(deleteNoteAction(id));
        // }
    };
    
    const fetchNotes = async () => {
        const { data } = await axios.get('/api/notes');
        setNotes(data);
    }; 
    
    useEffect(() => {
        fetchNotes();
    }, []);
    return (
        <Container>
            <MainScreen title="My Notes" />
            <div style={{ paddingLeft: "1.5rem" }}>
            <Link to="createNote">
                <Button variant="contained">create Note</Button>
            </Link>
            </div>
            {
                notes.map((note) => (
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
                            <Typography variant="body2" color="text.secondary">
                                {note.content}
                            </Typography>
                        </AccordionDetails>
                        </Accordion>
                    </Container>
                ))
            }

        </Container>
    )
}

export default MyNotes
