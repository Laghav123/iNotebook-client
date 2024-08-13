import React from 'react';
import { NewNoteForm } from './NewNoteForm';
import { OldNotes } from './OldNotes';
import "./Home.css"

export const Home = () => {
  return (
    <div id="homeDiv">
      <NewNoteForm />
      <br />
      <OldNotes />
    </div>
  )
}
