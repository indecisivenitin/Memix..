import React from 'react'
import DashboardSidebar, { SidebarItem } from '../Components/DashboardSidebar'
import { AudioLines, BellDot, Blend, Calendar, Cog, Handshake, Home, LogOut, MessageCircleQuestionMark, NotebookPen, PhoneCall, PhoneIncoming, UserRoundPen, Users } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className='flex '>
      <DashboardSidebar>
        <SidebarItem icon={<Home size={20} />} text='Dashboard' active />
        <SidebarItem icon={<PhoneIncoming size={20} />} text='Meetings' alert />
        <SidebarItem icon={<NotebookPen size={20} />} text='Notes' />
        <SidebarItem icon={<Users size={20} />} text='Teams' />
        <SidebarItem icon={<Cog size={20} />} text='Settings' />
        <hr className='my-3' />
        <SidebarItem icon={<MessageCircleQuestionMark size={20} />} text="Help" />
        <SidebarItem icon={<LogOut size={20} />} text='LogOut' />
      </DashboardSidebar>


      <div className='layout h-screen w-full'>
        <div className='main-content w-full h-full'>
          <div className='upper-part border-b-2 h-20  px-4 py-2 flex justify-around items-center'>
            <div className='text-2xl font-medium'>Dashboard</div>
            <div className='px-3 py-2 border rounded-xl w-2/5'>
              <input className=' ml-20 outline-none' type="text" placeholder='Search notes, tags, people...' />
            </div>
            <div><BellDot size={20} /></div>
            <div className='flex gap-4 items-center'>
              <UserRoundPen size={20} />
              <div className='flex flex-col  items-center gap-2 leading-2'>
                <h4 className='-ml-24'>user</h4>
                <h4>user@gmail.com</h4>
              </div>
            </div>
          </div>
          <div className='lower-part-1 flex items-center justify-around mt-4'>
            <div>
              <h2>Good Morning, user!</h2>
              <p>Here's whats's happening woth your notes today</p>
            </div>
            <div>
              <button className='flex items-center justify-center gap-2 bg-secondary text-white px-3 py-1 text-sm rounded-md'><PhoneCall size={18} /> Start New Meeting</button>
            </div>
            <div>
              <button className='flex items-center justify-center gap-2  text-gray-700 px-3 py-1 text-sm border-gray-700 border rounded-md'><AudioLines size={18} />Import Audio</button>
            </div>
            <div>
              <button className='flex items-center justify-center gap-2 text-gray-700 px-3 py-1 text-sm border-gray-700 border  rounded-md'><NotebookPen size={18} />Create Note</button>
            </div>
          </div>
          <div className="lower-part-2 flex items-center justify-around mt-14">
            <div className='flex items-center justify-around border-gray-700 border rounded-md px-8 py-3 gap-10'>
              <div className='flex flex-col items-center justify-center gap-'>
                <h3>Total Meetings</h3>
                <h3>data</h3>
                <h3>+data%</h3>
              </div>
              <div><Calendar size={20} /></div>
            </div>
            <div className='flex items-center justify-around border-gray-700 border rounded-md px-8 py-3 gap-10'>
              <div className='flex flex-col items-center justify-center gap-'>
                <h3>AI Summaries</h3>
                <h3>data</h3>
                <h3>+data%</h3>
              </div>
              <div><Handshake size={20} /></div>
            </div>
            <div className='flex items-center justify-around border-gray-700 border rounded-md px-8 py-3 gap-10'>
              <div className='flex flex-col items-center justify-center gap-'>
                <h3>Action Items</h3>
                <h3>data</h3>
                <h3>+data%</h3>
              </div>
              <div><Blend size={20} /></div>
            </div>
            <div className='flex items-center justify-around border-gray-700 border rounded-md px-8 py-3 gap-10'>
              <div className='flex flex-col items-center justify-center gap-'>
                <h3>Team Members</h3>
                <h3>data</h3>
                <h3>+data%</h3>
              </div>
              <div><Users size={20} /><div>
              </div>
              </div>
            </div>
          </div>
          <div className="bottom-part flex items-center justify-around mt-14 w-full h-[60%] px-16 gap-8">
            <div className='bg-accent/30 w-1/2 h-full'></div>
            <div className='bg-accent/30 w-1/2 h-full'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
