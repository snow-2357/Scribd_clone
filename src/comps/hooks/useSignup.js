import { useState } from "react"

import { projectAuth } from "../firebase/config"

export const useSignup=()=>{
    
    const [error, setError]=useState(null);
    const [isPending, setIsPending]=useState(false);

    const signup= async (name,email,password)=>{

        setError(null);
        setIsPending(true);

        try{
            const res = await projectAuth.createUserWithEmailAndPassword(email,password);
            console.log(res.user);
            if(!res){
                console.log("error no auth");
            }
            // nameset
            await res.user.updateProfile({displayName:name})
            setIsPending(false);
            setError(null);
        }catch (e){
            console.log(e);
            setError(e.message);
            setIsPending(false);
        }
    }

    return{ error , isPending , signup }

}