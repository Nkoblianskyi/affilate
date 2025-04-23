import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-9xl font-bold text-pink-500">404</h1>
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <p className="text-lg text-muted-foreground">The page you are looking for doesn't exist or has been moved.</p>
        <div className="pt-6 space-y-4">
          <Button asChild className="w-full bg-pink-500 hover:bg-pink-600">
            <Link href="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
