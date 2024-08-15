import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { EditNoteForm } from './EditNoteForm';
import { useNotes } from '../context/notes/NotesContext';

export const NoteCard = (
    {
        title, 
        description, 
        tag, 
        id,
        handleDeleteBtn,
        handleEditBtn
    }) => {
    
    const getDisplayDescription = (textContent) => {
        if(!textContent) return;
        const truncatedText = textContent.length > 50 ? textContent.substring(0, 50) + "..." : textContent;
        return truncatedText;
    }

    
    const [showEditCard, setShowEditCard] = useState(false);

    return (
    <div className='col-3 p-3'>
        {showEditCard && (
                <EditNoteForm
                    currentTitle={title}
                    currentDescription={description}
                    currentTag={tag}
                    note_id={id}
                    setShowEditCard={setShowEditCard}
                />
            )}
        <Card  className='h-100'>
            <Card.Header className="bg-tertiary text-black p-2" aria-label="Note Title">
                <div className="d-flex flex-column">
                    <div className="h6 mb-1 d-flex justify-content-center">{title}</div>
                </div>
            </Card.Header>
            
            <Card.Body  aria-label="Note Content">
                <Card.Text>{getDisplayDescription(description)}</Card.Text>
            </Card.Body>
            
            <Card.Footer className="bg-transparent text-white p-1">
                    <div className="d-flex justify-content-center">
                        <Button variant="outline-secondary" size="sm" className="mx-2" id={id} aria-label="Edit Note" onClick={() => setShowEditCard(true)}>
                            <FaEdit className="mx-1" id={id}/>
                        </Button>
                        <Button variant="outline-danger" size="sm" className="mx-2" id={id} aria-label="Delete Note" onClick={handleDeleteBtn}>
                            <FaTrashAlt className="mx-1" id={id} />
                        </Button>
                    </div>
            </Card.Footer>

        </Card>
    </div>
  )
}
