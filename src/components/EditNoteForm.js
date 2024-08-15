import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import './EditNoteForm.css'; // Import the CSS file
import { useNotes } from '../context/notes/NotesContext';
import { editNote } from '../utils/editNote';

export const EditNoteForm = ({
  note_id,
  currentTitle,
  currentDescription,
  currentTag,
  setShowEditCard
}) => {

  // console.log(note_id)

  const [title, setTitle] = useState(currentTitle);
  const [description, setDescription] = useState(currentDescription);
  const [tag, setTag] = useState(currentTag);
  const { tagOptions, allNotes, setAllNotes } = useNotes();

  const titleInputHandler = (e) => {
    setTitle(e.target.value);
  }

  const tagSelectHandler = (e) => {
    setTag(e.target.value);
  }

  const descriptionInputHandler = (e) => {
    setDescription(e.target.value);
  }

  const submitEditedNote = async (e) => {
    e.preventDefault();
    const res = await editNote({ note_id, title, description, tag });
    let newAllNotes = allNotes.map(note =>
      note._id === note_id ? { ...note, ...res.updatedNote } : note
    );
    setShowEditCard(false);
    setAllNotes(newAllNotes);
  }

  return (
    <>
      <div className="edit-note-overlay"></div>

      <div className="edit-note-form-container">
        <Form className="edit-note-form" onSubmit={submitEditedNote}>
          <Form.Group className="mb-3" controlId="formNoteTitle">
            <Form.Label>Note Title</Form.Label>
            <Form.Control type="text" value={title} onChange={titleInputHandler} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNoteDescription">
            <Form.Label>Note Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={descriptionInputHandler} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNoteTag">
            <Form.Label>Note Tag</Form.Label>
            <Form.Select value={tag} onChange={tagSelectHandler}>
              {tagOptions.map((t) => (
                <option value={t}>
                  {t}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Row>
            <Col className="d-grid">
              <Button variant="primary" type="submit" className="edit-note-button">
                <FaEdit className="edit-note-icon" />
                Edit Note
              </Button>
            </Col>
            <Col className="d-grid">
              <Button variant="secondary" onClick={() => setShowEditCard(false)} className="edit-note-button">
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};