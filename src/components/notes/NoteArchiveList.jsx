import "./NoteList.css";
import NoteItem from "./NoteItem";
import FormInput from "../ui/input/Input";
import { useState } from "react";

export function NoteArchiveList({ notes, onDelete, onArchive }) {
  const [searchTerm, setSearchTerm] = useState("");
  const archivedNotes = notes.filter((note) => note.archived);

  const filteredNotes = archivedNotes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (archivedNotes.length === 0) {
    return (
      <div>
        <p>Tidak memiliki arsip catatan</p>
      </div>
    );
  }

  return (
    <>
      <FormInput
        placeholder="Cari arsip"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="note-list">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))
        ) : (
          <li>
            <p>Tidak ada catatan yang sesuai dengan pencarian "{searchTerm}"</p>
          </li>
        )}
      </ul>
    </>
  );
}
