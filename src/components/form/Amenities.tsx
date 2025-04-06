'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";
function Amenities() {
    return (
        <>
            <div className="w-full">
                <Card className="border shadow-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Available Facilities</CardTitle>
                        <CardDescription>Check the amenities available at your property</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="wifi" name="facilities.wifi" />
                                <Label htmlFor="wifi" className="flex items-center gap-2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi"><path d="M5 13a10 10 0 0 1 14 0" /><path d="M8.5 16.5a5 5 0 0 1 7 0" /><path d="M2 8.82a15 15 0 0 1 20 0" /><line x1="12" x2="12" y1="20" y2="20" /></svg>
                                    Wi-Fi
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox id="parking" name="facilities.parking" />
                                <Label htmlFor="parking" className="flex items-center gap-2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-parking-square"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></svg>
                                    Parking
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox id="foodAvailable" name="facilities.foodAvailable" />
                                <Label htmlFor="foodAvailable" className="flex items-center gap-2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
                                    Food Available
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox id="airConditioning" name="facilities.airConditioning" />
                                <Label htmlFor="airConditioning" className="flex items-center gap-2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fan"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" /><path d="M12 12v.01" /></svg>
                                    Air Conditioning
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox id="laundryService" name="facilities.laundryService" />
                                <Label htmlFor="laundryService" className="flex items-center gap-2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shirt"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" /></svg>
                                    Laundry Service
                                </Label>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Amenities