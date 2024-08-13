import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export const NoteCard = ({title, description, tag}) => {
    const getDisplayDescription = (textContent) => {
        if(!textContent) return;
        const truncatedText = textContent.length > 50 ? textContent.substring(0, 50) + "..." : textContent;
        return truncatedText;
    }

    return (
    <div className='col-3 p-3'>
        <Card  className='h-100'>
            <Card.Header className="bg-primary text-white p-2">
                <div className="d-flex flex-column">
                    <div className="h6 mb-1 d-flex justify-content-center">{title}</div>
                </div>
            </Card.Header>
            
            <Card.Body>
                <Card.Text>{getDisplayDescription(description)}</Card.Text>
            </Card.Body>

            <Card.Footer className="bg-tertiary text-white p-1">
                    <div className="d-flex justify-content-center">
                        <Button variant="" size="sm" className="mx-2">
                            <FaEdit className="mx-1" />
                        </Button>
                        <Button variant="" size="sm">
                            <FaTrashAlt className="mx-1" />
                        </Button>
                    </div>
            </Card.Footer>
        </Card>
    </div>
  )
}
