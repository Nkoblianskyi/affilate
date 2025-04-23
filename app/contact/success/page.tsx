import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ContactSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="text-3xl font-bold">Message Sent!</h1>
        <p className="text-lg text-muted-foreground">Thank you for contacting LinkSpark!</p>
        <p className="text-muted-foreground">
          We've received your message and will get back to you as soon as possible. Our team typically responds within
          24-48 business hours.
        </p>
        <div className="pt-4 space-y-4">
          <Button asChild className="w-full bg-pink-500 hover:bg-pink-600">
            <Link href="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/blog">Browse Our Blog</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
