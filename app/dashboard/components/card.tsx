import { DynamicIcon } from 'lucide-react/dynamic';
import { LucideIcon } from 'lucide-react';

type CardType={
    varient: "primary" | "secondary" ,
    icon: LucideIcon,
    text:string,
    color:string
    
}
export default function Card({varient,icon:Icon,text,color}:CardType){

    return  <div className={`flex items-center gap-2 rounded-xl shadow-2xl  border border-gray-300 ${ varient === "primary" ? " flex-row p-4 " :"flex-col p-6 "}`}>
        <Icon className={ `h-9 w-9 ${color}`} />
        <h1 className='text-sm font-semibold text-gray-600'>{text}</h1>

    </div>

}