'use client'
import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Separator } from '../ui/separator'

function BasicInfo() {
    return (
        <>
            <div className="space-y-1">
                <Label htmlFor="lodgeName">Lodge Name <span className="text-red-500">*</span></Label>
                <Input id="lodgeName" name="lodgeName" placeholder="Enter lodge name" required />
            </div>

            <div className="space-y-1">
                <Label htmlFor="lodgeType">Lodge Type <span className="text-red-500">*</span></Label>
                <Select name="lodgeType">
                    <SelectTrigger>
                        <SelectValue placeholder="Select lodge type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="boys">Boys</SelectItem>
                        <SelectItem value="guest_house">Girls</SelectItem>
                        
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <Label htmlFor="roomPrice">Room Price</Label>
                    <Input id="roomPrice" name="roomPrice" type="number" placeholder="Price in INR" required />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="roomPriceText">Max People in Room</Label>
                    <Input id="roomPriceText" name="maxPeople" placeholder="e.g. Starting from" required />
                </div>
            </div>

            <div className="space-y-1">
                <Label htmlFor="availableRooms">Available Rooms</Label>
                <Input id="availableRooms" name="availableRooms" type="number" placeholder="Number of available rooms" defaultValue="0" />
            </div>

            <Separator className="my-4" />

            <div className="space-y-3">
                <h3 className="text-lg font-medium">Owner Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <Label htmlFor="owner.name">Owner Name <span className="text-red-500">*</span></Label>
                        <Input id="owner.name" name="owner.name" placeholder="Full name" required />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="owner.contact">Contact Number <span className="text-red-500">*</span></Label>
                        <Input id="owner.contact" name="owner.contact" placeholder="Phone number" />
                    </div>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="owner.email">Email Address <span className="text-red-500">*</span></Label>
                    <Input id="owner.email" name="owner.email" type="email" placeholder="Email address" />
                </div>
            </div></>
    )
}

export default BasicInfo