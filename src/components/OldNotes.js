import React, { useEffect, useState } from 'react';
import { NoteCard } from './NoteCard';
import { fetchNotes } from '../utils/fetchNotes';
import { deleteNote } from '../utils/deleteNote';
import { useNotes } from '../context/notes/NotesContext';
import { EditNoteForm } from './EditNoteForm';

export const OldNotes = () => {
    
    const {allNotes, setAllNotes} = useNotes();
    
    
    useEffect( () => {
        const fetchAllNotes = async () =>{
            const fetchedNotes = await fetchNotes();
            setAllNotes(fetchedNotes);
        }

        fetchAllNotes();
    }, []);

    const handleDeleteBtn = async (e) => {
        const id = e.target.id ? e.target.id : e.target.parentElement.id;
        await deleteNote(id);
        let newAllNotes = allNotes.filter(item => item._id !== id);
        setAllNotes(newAllNotes);
    }

    return (
        <div className='oldNotesDiv'>
            <div className='row'>
            {allNotes?.map(
                (note) => <NoteCard 
                            title={note.title} 
                            description={note.description} 
                            tag={note.tag} 
                            key={note._id} 
                            id={note._id}
                            handleDeleteBtn={handleDeleteBtn}
                        />
            )}
            </div>
            
        </div>
    )
}
