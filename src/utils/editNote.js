import axios from "axios";

const host = 'http://localhost:5000';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiOGQwYjNkODA1OTMwOGJiYTM1ZDA5In0sImlhdCI6MTcyMzM4OTY2Nn0.H9xQvcTrjO1uWBCq4OlMpEns8WRRPmQ1_EIpTipg6GI';

export const editNote = async ({ note_id, title, description, tag }) => {
    try {
        const res = await axios.put(`${host}/api/notes/updatenote/${note_id}`,
            {
                title: title,
                description: description,
                tag: tag
            },
            { headers: { 'auth-token': authToken } }
        );
        // console.log("NOTE EDITED SUCCESSFULLY");
        return res.data;

    } catch (error) {
        console.log("error while adding note : ", error);
    }
}
