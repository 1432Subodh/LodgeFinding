'use client';

import React, { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { motion } from "framer-motion";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const UserDropdown = () => {
    const [user, setUser] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        axios.get('/api/user/profile')
            .then((res) => {
                if (res.data?.user) {
                    setUser(res.data.user);
                }
            })
            .catch((err) => console.error("Error fetching user:", err))
            .finally(() => setLoading(false));
    }, []);

    const handleLogout = async () => {
        try {
            await axios.get('/api/user/auth/logout');
            router.push('/');
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="flex items-center gap-3">
            {loading ? (
                <Button variant="outline" size="sm" className='py-2' disabled>Loading...</Button>
            ) : user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <motion.button
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-muted uppercase text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {user.firstname[0]}
                        </motion.button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                        <Link href={`/user/profile/${user.firstname}-${user.lastname}`}>
                            <DropdownMenuItem className="flex items-center gap-2">
                                <User size={16} /> My Profile
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem
                            className="flex items-center gap-2 text-red-600 cursor-pointer"
                            onClick={handleLogout}
                        >
                            <LogOut size={16} /> Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Link href="/login">
                    <Button variant="outline" size="sm" className='py-2'>Login</Button>
                </Link>
            )}
        </div>
    );
};

export default UserDropdown;
