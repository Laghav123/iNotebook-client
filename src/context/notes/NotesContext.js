import React, { createContext, useState, useContext } from 'react';

// the context
const NotesContext = createContext();

// A provider component
export const NotesProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState([]);
  const tagOptions = ['Work', 'Personal', 'General', 'Important'];

  return (
    <NotesContext.Provider value={{ allNotes, setAllNotes, tagOptions }}>
      {children}
    </NotesContext.Provider>
  );
};

// Custom hook to use the NotesContext
export const useNotes = () => {
  return useContext(NotesContext);
};
