import { HousePlus } from 'lucide-react';
import { UserCheck } from 'lucide-react';
import { FlaskConical } from 'lucide-react';
import LogoutButton from "./logoutBtn"
export default function Sidebar() {

    return <div className="w-[16%] m-2 rounded-lg  shadow-2xl flex flex-col">
        <div className=" flex  justify-center py-2 border-b border-gray-200 ">
            <img src="/logo.svg" width={120} height={120} alt="logo" />
        </div>
        <div className="flex flex-col">
            <p className="text-sm text-gray-500 px-4 pt-3 font-semibold">Overview</p>
            <div className='flex gap-2 items-center hover:cursor-pointer hover:bg-blue-100 p-2 rounded-lg mt-2'>
                <HousePlus className='h-4' /> <span className='text-sm font-semibold text-gray-700'>Dashboard</span>

            </div>
            <div className='flex gap-2 items-center hover:cursor-pointer hover:bg-blue-100 p-2 rounded-lg mt-2'>
                <UserCheck className='h-5' /> <span className='text-sm font-semibold text-gray-700'>Leads</span>

            </div> <div className='flex gap-2 items-center hover:cursor-pointer hover:bg-blue-100 p-2 rounded-lg mt-2'>
                <FlaskConical className='h-5 pr-2' /> <span className='text-sm font-semibold text-gray-700'>Campaign</span>

            </div>
        </div>


    </div>
}