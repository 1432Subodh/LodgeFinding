'use client'
import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

function Location() {
    return (
        <>
            <div className="space-y-1">
                <Label htmlFor="place">Location/Area <span className="text-red-500">*</span></Label>
                <Input id="place" name="place" placeholder="Specific location or area" required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" defaultValue="Hazaribagh" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" name="state" defaultValue="Jharkhand" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input id="pincode" name="pincode" defaultValue="825312" />
                </div>
            </div>

            <div className="space-y-1">
                <Label htmlFor="maplink">Google Maps Link <span className="text-red-500">*</span></Label>
                <Input id="maplink" name="maplink" placeholder="Google Maps URL" required />
            </div>

            <div className="space-y-1">
                <Label htmlFor="htmlMapLink">Embeddable Map Link (Latitude & Longitude) <span className="text-red-500">*</span></Label>
                <Input id="htmlMapLink" name="htmlMapLink" placeholder="HTML iframe embed code from Google Maps" required />
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <Label htmlFor="coordinates.lat">Latitude</Label>
                    <Input id="coordinates.lat" name="coordinates.lat" type="number" step="0.000001" placeholder="Latitude coordinate" defaultValue="0" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="coordinates.lng">Longitude</Label>
                    <Input id="coordinates.lng" name="coordinates.lng" type="number" step="0.000001" placeholder="Longitude coordinate" defaultValue="0" />
                </div>
            </div> */}
        </>
    )
}

export default Location