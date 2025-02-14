'use client';

import React, { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { motion } from "framer-motion";
import axios from 'axios';
import Link from 'next/link';

interface User {
    firstname: string;
    email: string;
}

const UserDropdown = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Fetch user data from API
        axios.get('/api/user/profile')
            .then((res) => {
                if (res.data?.user) {
                    console.log(res.data.user)
                    setUser(res.data.user);
                }
            })
            .catch((err) => console.error("Error fetching user:", err));
    }, []);

    const handleLogout = async () => {
        try {
            await axios.get('/api/user/auth/logout'); // Call API to log out
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="hidden sm:flex items-center gap-3">
            {user ? (
                <>
                    {/* <span className="text-sm capitalize">Hello, {user.firstname}</span> */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <motion.button
                                className="w-8 h-8 rounded-full flex items-center justify-center bg-primary uppercase text-white"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {user.firstname[0]}
                            </motion.button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40">
                            <DropdownMenuItem className="flex items-center gap-2">
                                <User size={16} /> My Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="flex items-center gap-2 text-red-600 cursor-pointer"
                                onClick={handleLogout}
                            >
                                <LogOut size={16} /> Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            ) : (
                <Link href="/login" className=''>
                    <Button variant="outline" size="sm">Login</Button>
                </Link>
            )}
        </div>
    );
};

export default UserDropdown;
