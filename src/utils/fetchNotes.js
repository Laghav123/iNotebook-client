import axios from "axios";

const host = 'http://localhost:5000';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiOGQwYjNkODA1OTMwOGJiYTM1ZDA5In0sImlhdCI6MTcyMzM4OTY2Nn0.H9xQvcTrjO1uWBCq4OlMpEns8WRRPmQ1_EIpTipg6GI';
    
export const fetchNotes = async () => {
    try {
        
        const res = await axios.get( `${host}/api/notes/fetchallnotes` ,{
            headers : {
                'auth-token' : authToken
            }
        });
        console.log("Notes Fetched Successfully!!")
        return res.data;
    } catch (error) {
        console.log("error while fetching notes : ", error);
    }
}
