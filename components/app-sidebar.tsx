import { Calendar, Home, Inbox, Search, Settings, Sparkles } from 'lucide-react';

import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, SidebarSeparator
} from '@/components/ui/sidebar';
import {ModeToggle} from '@/components/ui/ModeToogle';

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
       <div>
           {/*// @ts-ignore*/}
           <Sidebar>
               <SidebarContent className="flex flex-col justify-between">
                   <div>
                       <SidebarHeader className="flex w-full justify-end">
                            <ModeToggle/>
                       </SidebarHeader>
                       <SidebarGroup>
                           <SidebarGroupLabel>Application</SidebarGroupLabel>
                           <SidebarGroupContent>
                               <SidebarMenu>
                                   {items.map((item) => (
                                       <SidebarMenuItem key={item.title}>
                                           <SidebarMenuButton asChild>
                                               <a href={item.url}>
                                                   <item.icon />
                                                   <span>{item.title}</span>
                                               </a>
                                           </SidebarMenuButton>
                                       </SidebarMenuItem>
                                   ))}
                               </SidebarMenu>
                           </SidebarGroupContent>
                       </SidebarGroup>
                   </div>

                   <SidebarFooter>
                       <SidebarSeparator/>
                       <div className="grid grid-cols-5 grid-rows-2">
                           <div className="row-span-2 flex justify-center items-center"><Sparkles/></div>
                           <div className="col-span-4 font-bold text-sm">Update Plan</div>
                           <div className="col-span-4 text-sm">Get more features of app</div>
                       </div>
                   </SidebarFooter>
               </SidebarContent>
           </Sidebar>
       </div>
    )
}