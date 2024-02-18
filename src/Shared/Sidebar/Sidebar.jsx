import React from "react";
import defaultUser from "../../assets/Image/default_user.svg";
import { GiBoombox } from "react-icons/gi";
import { FaFire, FaYoutube } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa6";
import { GiMusicSpell } from "react-icons/gi";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { SiVlcmediaplayer } from "react-icons/si";
import List from "./List";

const sidebarList =
{
    category: [
        {
            name: "Music",
            list: [
                {
                    name: "Home",
                    icon: <GiBoombox />,
                    path: "/",
                },
                {
                    name: "Trending",
                    icon: <FaFire />,
                    path: "/trending-songs",
                },
                {
                    name: "Artists",
                    icon: <FaFire />,
                    path: "/artists",
                },
                {
                    name: "New",
                    icon: <GiMusicSpell />,
                    path: "/new-songs",
                },
                {
                    name: "Videos",
                    icon: <FaYoutube />,
                    path: "/videos",
                },
                {
                    name: "Playlists",
                    icon: <MdOutlineLibraryMusic />,
                    path: "/playlists",
                },
                {
                    name: "Charts",
                    icon: <IoStatsChartSharp />,
                    path: "/charts",
                },
                {
                    name: "Genres",
                    icon: <SiVlcmediaplayer />,
                    path: "/genres",
                },
            ],
        },
        {
            name: "Library",
            list: [
                {
                    name: "Add Playlist",
                    icon: <FaHotdog />,
                    path: "/album",
                },
                {
                    name: "Favourites",
                    icon: <FaHotdog />,
                    path: "/album",
                },
                {
                    name: "MyPlaylists",
                    icon: <FaHotdog />,
                    path: "/album",
                },
            ],
        },
        {
            name: "Buzz",
            list: [
                {
                    name: "Recommended",
                    icon: <FaHotdog />,
                    path: "/album",
                },
            ],
        },
        {
            name: "Podcast",
            list: [
                {
                    name: "Recommended",
                    icon: <FaHotdog />,
                    path: "/album",
                },
            ],
        },
    ],
};


const Sidebar = () => {
    return (
        <div className="relative hidden md:block">

            <div className="fixed top-[58px] left-0  h-full min-w-[214px] bg-[#0D0D0D] overflow-y-auto">
                <div className=" pb-14">



                    {/* Default user */}
                    <div className="flex items-center gap-3 pl-6 pt-4">
                        {/* user img */}
                        <div>
                            <img src={defaultUser} alt="" className="w-10" />
                        </div>
                        <h2 className="text-white">Log in / Sign up</h2>
                    </div>
                    <div className="text-white mt-4 pl-2">
                        {
                            sidebarList.category.map((sidebar, index) => (
                                <List key={index} name={sidebar.name} data={sidebar.list} />
                            ))
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Sidebar;
