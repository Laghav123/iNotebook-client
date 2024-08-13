import React from "react";
import NoteContext from "./NoteContext"

const NoteState = () => {
    const state = {};
    return (
        <NoteContext.provider value="state">
            {props.children}
        </NoteContext.provider>
    )
}

export default NoteState;