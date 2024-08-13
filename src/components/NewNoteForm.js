import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './NewNoteForm.css'
import { FaPlus } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export const NewNoteForm = () => {
    
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiOGQwYjNkODA1OTMwOGJiYTM1ZDA5In0sImlhdCI6MTcyMzM4OTY2Nn0.H9xQvcTrjO1uWBCq4OlMpEns8WRRPmQ1_EIpTipg6GI';
    
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [desc, setDesc] = useState("");

    const addNoteBtnHandler = async () => {
        try {
            await axios.post("http://localhost:5000/api/notes/addNote", 
                {
                    title : title,
                    description : desc,
                    tag : tag
                },
                { headers : { 'auth-token' : authToken } }
            );
            console.log("NOTE ADDED SUCCESSFULLY");
            
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
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <Form.Control as="textarea" placeholder='Type your note content here' onChange={ descriptionInputHandler }/>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>Note Tag</InputGroup.Text>
                <Form.Select  onChange={tagSelectHandler}>
                    <option value="0">General</option>
                    <option value="1">Diary</option>
                    <option value="2">Todo</option>
                    <option value="3">Random Thoughts</option>
                </Form.Select>
            </InputGroup>

            <Button variant="primary" size="sm" className="" id="addBtn" onClick={addNoteBtnHandler}>
                <FaPlus className="mx-1 mb-1" /> Add
            </Button>

        </div>
    )
}
