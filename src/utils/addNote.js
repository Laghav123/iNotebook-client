import axios from "axios";

const host = 'http://localhost:5000';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiOGQwYjNkODA1OTMwOGJiYTM1ZDA5In0sImlhdCI6MTcyMzM4OTY2Nn0.H9xQvcTrjO1uWBCq4OlMpEns8WRRPmQ1_EIpTipg6GI';
    
export const addNote = async ({title, desc, tag}) => {
    try {
        await axios.post("http://localhost:5000/api/notes/addNote", 
            {
                title : title,
                description : desc,
                tag : tag
            },
            { headers : { 'auth-token' : authToken } }
        );
        console.log("NOTE ADDED SUCCESSFULLY");
        
    } catch (error) {
        console.log("error while adding note : " , error);
    }
}
