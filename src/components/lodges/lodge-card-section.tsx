'use client'
import { fetchLodge, fetchSearchLodge } from '@/redux/lodgeSlice';
import { AppDispatch, RootState } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { LodgeCard, LodgeCardSkeleton } from '../lodge-card';
import { useSearchParams } from 'next/navigation';

function LodgeCardSection() {
    const dispatch = useDispatch<AppDispatch>();
    const [dataFetched, setDataFetched] = useState(false);

    const searchParams = useSearchParams()
    const search = searchParams.get('search')


    // Select lodges, loading, and error state from Redux store
    const { lodges, loading, error }: any = useSelector(
        (state: RootState) => state.lodgeData,
        shallowEqual
    );
    // console.log(lodges)

    useEffect(() => {
        if (search) {
            // console.log('asdf')
            dispatch(fetchSearchLodge(search)).finally(() => setDataFetched(true));
        } else {
            dispatch(fetchLodge()).finally(() => setDataFetched(true));
        }
    }, [dispatch]);

    return (
        <div className="sm:p-6 p-3">
            <div className="mb-6">
                <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger value="all">All Lodges</TabsTrigger>
                        <TabsTrigger value="boys">Boys</TabsTrigger>
                        <TabsTrigger value="girls">Girls</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {
                    loading ? (Array.from({ length: 4 }).map((_, index) => <LodgeCardSkeleton key={index} />)) : (
                        lodges.length === 0 ? (dataFetched ? <div className="text-zinc-500 text-center col-span-full">Lodge Not Found</div>
                            : <div className="text-gray-500 col-span-full text-center w-100">
                                <div className="flex items-center justify-center h-[70vh]">
                                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            </div>) : lodges.map((lodge: any, index: any) => (
                                <LodgeCard key={index} name={lodge?.lodgeName}
                                    price={lodge.roomPrice}
                                    location={`${lodge.place}, ${lodge.city}, ${lodge.state}`}
                                    image={lodge.images[0]}
                                    rating={3}
                                    beds={2}
                                    baths={2}
                                    id={lodge._id}
                                    lodgeType={lodge?.lodgeType} />
                            ))
                    )
                }
            </div>
        </div>
    );
}

export default LodgeCardSection;
