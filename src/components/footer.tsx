import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">About LodgeFinder</h3>
            <p className="text-sm text-muted-foreground">
              Discover the perfect mountain getaway with LodgeFinder. We offer a curated selection of luxury lodges and
              cozy cabins across the most stunning locations.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Find a Lodge
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Popular Destinations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Safety Information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <div className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="w-full" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 LodgeFinder. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

