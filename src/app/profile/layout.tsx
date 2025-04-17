import type { ReactNode } from "react"
import Link from "next/link"
import {
  Building,
  CreditCard,
  Heart,
  History,
  Home,
  LayoutDashboard,
  LogOut,
  Settings,
  Star,
  User,
  Wallet,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import UserData from "@/components/user/user-data"

// This would come from your authentication system
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  image: null,
  accountType: "host", // or "guest"
}

interface ProfileLayoutProps {
  children: ReactNode
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  const isHost = user.accountType === "host"

  const navigation = [
    {
      title: "Account",
      links: [
        { href: "/profile", label: "Profile", icon: User },
        { href: "/profile/settings", label: "Settings", icon: Settings },
      ],
    },
    {
      title: isHost ? "Host" : "Guest",
      links: isHost
        ? [
          { href: "/profile/dashboard", label: "Dashboard", icon: LayoutDashboard },
          { href: "/profile/listings", label: "Listings", icon: Building },
          { href: "/profile/bookings", label: "Booking Requests", icon: History },
          { href: "/profile/earnings", label: "Earnings", icon: Wallet },
          { href: "/profile/reviews", label: "Reviews", icon: Star },
        ]
        : [
          { href: "/profile/dashboard", label: "Dashboard", icon: LayoutDashboard },
          { href: "/profile/bookings", label: "Bookings", icon: History },
          { href: "/profile/favorites", label: "Favorites", icon: Heart },
          { href: "/profile/reviews", label: "Reviews", icon: Star },
          { href: "/profile/payment", label: "Payment Methods", icon: CreditCard },
        ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <Home className="h-5 w-5" />
                  <span>Lodge Finder</span>
                </Link>
                {navigation.map((group, i) => (
                  <div key={i} className="grid gap-3">
                    <h3 className="text-xs font-medium text-muted-foreground">{group.title}</h3>
                    {group.links.map((link, j) => (
                      <Link key={j} href={link.href} className="flex items-center gap-2">
                        <link.icon className="h-4 w-4" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Home className="h-5 w-5" />
            <span className="hidden md:inline-block">Lodge Finder</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">

          <UserData />
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[240px_1fr]">
        <aside className="hidden border-r bg-muted/40 md:block">
          <nav className="grid gap-6 p-6">
            {navigation.map((group, i) => (
              <div key={i} className="grid gap-3">
                <h3 className="text-xs font-medium text-muted-foreground">{group.title}</h3>
                {group.links.map((link, j) => (
                  <Link
                    key={j}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted",
                      link.href === "/profile" && "bg-muted",
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-6 pt-0 md:p-8 md:pt-6">{children}</main>
      </div>
    </div>
  )
}

function Menu(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

