import { VscFiles, VscSearch, VscExtensions, VscDebugAlt2, VscSourceControl } from "react-icons/vsc";

const sideBarContents = [
    {
        id:1,
        title:"Explorer",
        icon:<VscFiles style={{fontSize:24, color:"white"}}/>
    },
    {
        id:2,
        title:"Search",
        icon:<VscSearch style={{fontSize:24, color:"white"}}/>
    },
    {
        id:3,
        title:"Source Control",
        icon:<VscSourceControl style={{fontSize:24, color:"white"}}/>
    },
    {
        id:4,
        title:"Run/Debug",
        icon:<VscDebugAlt2 style={{fontSize:24, color:"white"}}/>
    },
    {
        id:5,
        title:"Extensions",
        icon:<VscExtensions style={{fontSize:24, color:"white"}}/>
    },
]

export default sideBarContents