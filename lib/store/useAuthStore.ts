
import {create} from "zustand"

type Step =  "choose" | "login" | "register"

interface AuthState{
    step:Step,
    name:string,
    email:string,
    password:string,
    loading:boolean,
    setStep:(step:Step) => void,
    setName:(name:string)=>void,
    setEmail:(email:string) => void,
    setPassword:(password:string)=>void,
    setLoading:(loading:boolean)=>void,
    reset:()=>void
}
export const useAuthStore = create<AuthState>((set)=>({
    step: "choose",
    name:"",
    email:"",
    password:"",
    loading:false, 
    setStep:(step)=>set({step}),
    setName:(name)=>set({name}),
    setEmail:(email)=>set({email}),
    setPassword: (password)=>set({password}),
    setLoading:(loading)=>set({loading}),
    reset:()=>set({step: "choose" as Step, name:"", email:"", password:"",loading:false})
}))