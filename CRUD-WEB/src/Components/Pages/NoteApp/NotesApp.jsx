import React, { useState } from 'react';
import styles from './NotesApp.module.css';
import 'animate.css';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../../FireBase/firbase';
import { doc, deleteDoc } from "firebase/firestore";


const NotesApp = () => {
  const [noteValue, setNoteValue] = useState('');
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState('');

  // Add or Update user input
const addorUpdateNote = async () => {
  if (noteValue.trim() === '') {
    alert('Please Enter your Note📕');
  } else {
    try {
      const res = await addDoc(collection(db , "Note"), {
        value: noteValue,
        createdAt: new Date(),
      });
      console.log(res.id);

      setNotes([...notes, noteValue]);
    } catch (error) {
      console.error("Error adding Note" , error);
    }
  }

  setNoteValue('');
};


  // Delete Note
  const deleteNote = async (id) => {
    try {
         await deleteDoc(doc(db , "Notes" , id));
         setNotes(notes((notes) => notes.id !== id ))
         console.log("Deleted");
         
    } catch (error) {
      console.error("Deleted Error :" , error);
      
    }
    // const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const editNote = (index) => {
    let edit = prompt('Edit your Value', notes[index]);
    if (edit !== null && edit.trim() !== '') {
      const updatedNotes = [...notes];
      updatedNotes[index] = edit;
      setNotes(updatedNotes);
      setEditIndex(null);
    }
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1 className={`${styles.heading} animate__animated animate__lightSpeedInLeft`}>
            Note App
          </h1>

          {/* Input Row */}

          <div className={styles.inputRow}>
            <input
              type="text"
              className={styles.input}
              value={noteValue}
              onChange={(e) => setNoteValue(e.target.value)}
            />
            <button className={styles.addBtn} onClick={addorUpdateNote}>
              Add
            </button>
          </div>

          {/* Notes List */}

          <ul className={styles.list}>
            {notes.map((note, index) => (
              <li key={index} className={styles.listItem}>
                <span>{note}</span>
                <div className={styles.actions}>
                  <button
                    className={styles.editBtn}
                    onClick={() => editNote(index)}
                  >
                    ✏️
                  </button>

                  <button
                    className={styles.deleteBtn}
                    onClick={() => deleteNote(index)}
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NotesApp;
