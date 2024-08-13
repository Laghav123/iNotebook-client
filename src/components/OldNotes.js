import React, { useEffect, useState } from 'react';
import { NoteCard } from './NoteCard';
import { fetchNotes } from './fetchNotes';

export const OldNotes = () => {
    
    const [allNotes, setAllNotes] = useState([]);
    
    
    useEffect( () => {
        const fetchAllNotes = async () =>{
            const fetchedNotes = await fetchNotes();
            setAllNotes(fetchedNotes);
        }

        fetchAllNotes();
    }, []);

    

    return (
        <div className='oldNotesDiv'>
            <div className='row'>
            {allNotes.map(
                (note) => <NoteCard title={note.title} description={note.description} tag={note.tag} key={note._id}/>
            )}
            </div>
            
        </div>
    )
}
