import { useState } from 'react'
import DashboardSidebar, { SidebarItem } from '../Components/DashboardSidebar'
import { useNavigate } from 'react-router-dom'
import { AudioLines, BellDot, Blend, Calendar, Cog, Handshake, Home, LogOut, MessageCircleQuestionMark, NotebookPen, PhoneCall, PhoneIncoming, UserRoundPen, Users } from 'lucide-react'

const Dashboard = () => {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState("dashboard")
  return (
    <div className='flex '>
      <DashboardSidebar>
        <SidebarItem
          active={activeItem === "dashboard"}
          onClick={() =>{
            navigate("/dashboard")
            setActiveItem("dashboard")}
          }
          icon={<Home size={20} />} text='Dashboard' />
        <SidebarItem
          active={activeItem === "meetings"}
          onClick={() => {
            navigate("/dashboard/meetings")
            setActiveItem("meetings")
          }}
          icon={<PhoneIncoming size={20} />} text='Meetings' />
        <SidebarItem
         active={activeItem === "notes"}
          onClick={() => {
            navigate("/dashboard/notes")
            setActiveItem("notes")
          }}
         icon={<NotebookPen size={20} />} text='Notes' />
        <SidebarItem
         active={activeItem === "teams"}
          onClick={() => {
            navigate("/dashboard/teams")
            setActiveItem("teams")
          }}
         icon={<Users size={20} />} text='Teams' />
        <SidebarItem
         active={activeItem === "settings"}
          onClick={() => {
            navigate("/dashboard/settings")
            setActiveItem("settings")
          }}
         icon={<Cog size={20} />} text='Settings' />
        <hr className='my-3' />
        <SidebarItem icon={<MessageCircleQuestionMark size={20} />} text="Help" />
        <SidebarItem icon={<LogOut size={20} />} text='LogOut' />
      </DashboardSidebar>


      
    </div>
  )
}

export default Dashboard
