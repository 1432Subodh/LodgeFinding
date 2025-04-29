"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Api_logout } from "../../../helper/helper";
import Cookies from "js-cookie";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchUser } from "@/redux/userSlice";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";

function UserData() {
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const { user, loading }: any = useSelector(
        (state: RootState) => state.user,
        shallowEqual
    );

    const token = Cookies.get("token");

    useEffect(() => {
        if (!token) {
            dispatch(fetchUser());
            return;
        } else {
            dispatch(fetchUser());
            setIsLogin(false);
        }
    }, []);

    const logout = () => {
        axios.get(Api_logout).then(() => {
            setIsLogin(true);
        });
    };

    /** ✅ Memoize the entire UI to prevent unnecessary re-renders */
    const userDropdown = useMemo(() => {
        if (isLogin) {
            return loading ? (
                <Avatar className="w-9 h-9">
                    <AvatarFallback className="uppercase bg-transparent">
                        <div className="w-6 h-6 border-[2px] border-primary border-t-transparent rounded-full animate-spin"></div>
                    </AvatarFallback>
                </Avatar>
                // <Skeleton className="h-[36px] w-[63px] " />

            ) : (
                <Link href={"/login"}>
                    <Button variant={'default'} className="rounded-full px-6 py-4" size={"sm"}>
                        Login
                    </Button>
                </Link>
            );
        } else {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative w-9 h-9 rounded-full">
                            <Avatar className="w-9 h-9 ">
                                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                <AvatarFallback className="uppercase bg-primary text-white">
                                    {user?.firstname?.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48 relative right-4">
                        <DropdownMenuLabel className="font-bold">My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href={`user/profile/${user?._id}`}>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" /> Profile
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" /> Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500" onClick={logout}>
                            <LogOut className="mr-2 h-4 w-4" /> Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
    }, [isLogin, loading, user]); // ✅ Recomputes only when these dependencies change

    return <>{userDropdown}</>;
}

export default UserData;
