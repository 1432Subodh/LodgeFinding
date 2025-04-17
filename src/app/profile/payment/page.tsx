import { CreditCard, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Mock data
const paymentMethods = [
  {
    id: 1,
    cardNumber: "•••• •••• •••• 4242",
    expiryDate: "12/25",
    cardholderName: "John Doe",
    isDefault: true,
  },
  {
    id: 2,
    cardNumber: "•••• •••• •••• 5678",
    expiryDate: "09/24",
    cardholderName: "John Doe",
    isDefault: false,
  },
]

export default function PaymentPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Payment Methods</h1>
        <p className="text-muted-foreground">Manage your payment options for bookings</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Saved Payment Methods</CardTitle>
              <CardDescription>Your cards on file for booking lodges</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">{method.cardNumber}</p>
                      <p className="text-sm text-muted-foreground">Expires {method.expiryDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {method.isDefault && (
                      <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Default
                      </span>
                    )}
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Recent transactions for your bookings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-8 text-center">
                <p className="text-muted-foreground">No recent transactions</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Add New Payment Method</CardTitle>
            <CardDescription>Add a new card for future bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="0000 0000 0000 0000" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="CVC" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Cardholder Name</Label>
                <Input id="name" placeholder="Name on card" />
              </div>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

