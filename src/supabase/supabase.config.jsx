import { createContext, useState } from "react";

const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState([]);
    async function signInWithGoogle(){
        try {
            const{data, error}=await Supabase.AuthClient.auth.signInWithOAuth({
                provider: "google",
            });
            if(error) throw new Error("Ha ocurrido un error durante la 
            autenticación");
            return data;
        }catch (error) {}
    }
};