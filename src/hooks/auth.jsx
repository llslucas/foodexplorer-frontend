import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }){
    const [data, setData] = useState({});
    const [userValidated, setUserValidated] = useState(true);

    async function signIn({ email, password }){
        try{
            const response = await api.post(
                "/sessions", 
                { email, password }                
            );

            const { user } = response.data;           

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));         

            setData({ user });     

        }catch(e){
            if(e.response){
                alert(e.response.data.message);
            }else{
                alert("Não foi possível entrar.");
            }
        }        
    }

    function signOut(){                      
        localStorage.removeItem("@foodexplorer:user");        
        setData({});                
    }   

    useEffect(() => {        
        const user = localStorage.getItem("@foodexplorer:user");                
        
        async function validateUser(){
            await api.get("/users/validate").catch(e => {
                if(e.response?.status === 401) {
                    console.log("Usuário inválido");
                    setUserValidated(false);
                    signOut();
                }
            });
        }

        if(user){
            validateUser();
        }                

        if(user && userValidated){            
            setData({                
                user: JSON.parse(user)                
            });  
        }
    }, []);

    return (
        <AuthContext.Provider value={{ 
            signIn, 
            signOut,
            user: data.user,   
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}