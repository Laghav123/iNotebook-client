import axios from "axios";

const host = 'http://localhost:5000';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiOGQwYjNkODA1OTMwOGJiYTM1ZDA5In0sImlhdCI6MTcyMzM4OTY2Nn0.H9xQvcTrjO1uWBCq4OlMpEns8WRRPmQ1_EIpTipg6GI';
    
export const deleteNote = async (id) => {
    try {
        console.log("trying to delete note with id : ", id);
        const res = await axios.delete( `${host}/api/notes/deletenote/${id}` ,{
            headers : {
                'auth-token' : authToken
            }
        });
        // console.log("Notes Fetched Successfully!!")
        return res.data;
    } catch (error) {
        console.log("error while deleting note : ", error);
    }
}
