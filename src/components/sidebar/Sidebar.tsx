import Image from "next/image";
import { IoLogoReact, IoFootball, IoCalculator, IoHeartHalfOutline } from "react-icons/io5";
import { SidebarMenuItem } from "../SidebarMenuItem";

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoLogoReact size={40} />,
        title: 'Main',
        subTitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={40} />,
        title: 'Pokemon',
        subTitle: 'Pokemon Client Side'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartHalfOutline size={40} />,
        title: 'Favoritos',
        subTitle: 'Global State'
    },
];

export const Sidebar = () => {
    return (
        <div id="menu"
            style={{ width: '400px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">

            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="inline-block w-6 h-6 mr-2" />
                    <span>BI</span>
                    <span className="text-blue-500">LITE</span>
                </h1>
            </div>

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            alt="User avatar"
                            width={50}
                            height={50}
                            priority
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Guillermo Olvera
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full">
                {
                    menuItems.map((item) => (
                        <SidebarMenuItem key={item.path} {...item} />
                    ))
                }
            </div>
        </div>
    )
}
