import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">LinkSpark</h3>
            <p className="text-slate-400">
              Empowering digital publishers to maximize their revenue through innovative affiliate marketing solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-slate-400 hover:text-white">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/affiliate-marketing-guide" className="text-slate-400 hover:text-white">
                  Affiliate Marketing Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/monetization-strategies" className="text-slate-400 hover:text-white">
                  Monetization Strategies
                </Link>
              </li>
              <li>
                <Link href="/blog/traffic-generation" className="text-slate-400 hover:text-white">
                  Traffic Generation
                </Link>
              </li>
              <li>
                <Link href="/blog/conversion-optimization" className="text-slate-400 hover:text-white">
                  Conversion Optimization
                </Link>
              </li>
              <li>
                <Link href="/blog/seo-tips" className="text-slate-400 hover:text-white">
                  SEO Tips
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Subscribe</h3>
            <p className="text-slate-400">Subscribe to our newsletter to receive updates and marketing tips.</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="bg-slate-800 border-slate-700 text-white" />
              <Button className="bg-pink-500 hover:bg-pink-600">Subscribe</Button>
            </div>
            <p className="text-xs text-slate-400">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} LinkSpark. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookie Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <p>Derech Menachem Begin 121, Tel Aviv-Yafo, 6701203, Israel</p>
            <p>info@linkspark.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
