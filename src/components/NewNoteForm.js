import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './NewNoteForm.css'
import { FaPlus } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import axios from 'axios';
// import {addNote} from '../utils/addNote'
import { useNotes } from '../context/notes/NotesContext';

export const NewNoteForm = () => {
    
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiOGQwYjNkODA1OTMwOGJiYTM1ZDA5In0sImlhdCI6MTcyMzM4OTY2Nn0.H9xQvcTrjO1uWBCq4OlMpEns8WRRPmQ1_EIpTipg6GI';
    
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [desc, setDesc] = useState("");
    const {allNotes, setAllNotes, tagOptions} = useNotes();

    const addNoteBtnHandler = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/notes/addNote", 
                {
                    title : title,
                    description : desc,
                    tag : tag
                },
                { headers : { 'auth-token' : authToken } }
            );
            console.log("NOTE ADDED SUCCESSFULLY");
            
            const newAllNotes = [...allNotes, res.data];
            setAllNotes(newAllNotes);
            setTag("General");
            setTitle("");
            setDesc("");
            console.log("newAllNotes : ", newAllNotes)
        } catch (error) {
            console.log("error while adding note : " , error);
        }
    }

    const titleInputHandler = (e) => {
        setTitle(e.target.value);
    }

    const tagSelectHandler = (e) => {
        setTag(e.target.value);
    }

    const descriptionInputHandler = (e) => {
        setDesc(e.target.value);
    }

    return (
        <div id="newNoteDiv">
            <h3 className='my-3'> Add Note </h3>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Note Title"
                    onChange={titleInputHandler}
                    value={title}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <Form.Control 
                    as="textarea" 
                    placeholder='Type your note content here' 
                    onChange={ descriptionInputHandler }
                    value={desc}
                />
                    
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>Note Tag</InputGroup.Text>
                <Form.Select  onChange={tagSelectHandler} value={tag}>
                    {tagOptions.map((t) => (
                        <option value={t}>
                        {t}
                        </option>
                    ))}
                </Form.Select>
            </InputGroup>

            <Button variant="primary" size="sm" className="" id="addBtn" onClick={addNoteBtnHandler}>
                <FaPlus className="mx-1 mb-1" /> Add
            </Button>

        </div>
    )
}
