"use client";
import { fetchLodge } from "@/redux/lodgeSlice";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store"; // Ensure these are correctly defined

const UserList = () => {
    // Use the correct typed dispatch
    const dispatch = useDispatch<AppDispatch>();
    
    // Select the correct state slice
    const { lodges, loading, error }:any = useSelector((state: RootState) => state.lodge, shallowEqual);
    console.log(lodges?.lodges)

    useEffect(() => {
        dispatch(fetchLodge());
    }, [dispatch]);

    return (
        <div>
            <h2>Lodge List</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {lodges?.lodges?.map((lodge: any, index: any) => (
                    <li key={index}>{lodge._id}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
