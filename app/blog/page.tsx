import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | LinkSpark Affiliate Marketing",
  description:
    "Discover the latest insights, tips, and strategies for affiliate marketing success on the LinkSpark blog.",
  openGraph: {
    title: "Blog | LinkSpark Affiliate Marketing",
    description:
      "Discover the latest insights, tips, and strategies for affiliate marketing success on the LinkSpark blog.",
    type: "website",
  },
}

export default function BlogPage() {
  // Shuffle the blog posts for a more chaotic layout
  const shuffledPosts = [...blogPosts].sort(() => Math.random() - 0.5)

  // Create featured post (first post) and remaining posts
  const featuredPost = shuffledPosts[0]
  const remainingPosts = shuffledPosts.slice(1)

  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">LinkSpark Blog</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Insights, tips, and strategies to help you succeed in affiliate marketing.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="relative w-full md:w-1/2 pt-[56.25%] md:pt-0 md:h-auto">
                  <Image
                    src={featuredPost.coverImage || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <CardTitle className="mb-2 text-2xl md:text-3xl">
                    <Link href={`/blog/${featuredPost.slug}`} className="hover:underline">
                      {featuredPost.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mb-4 text-sm text-muted-foreground">
                    {featuredPost.date} • {featuredPost.readingTime} min read
                  </CardDescription>
                  <p className="mb-6 text-muted-foreground">{featuredPost.excerpt}</p>
                  <Button asChild variant="outline" className="w-fit">
                    <Link href={`/blog/${featuredPost.slug}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Chaotic Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
            {remainingPosts.map((post, index) => {
              // Create different sized cards for a more chaotic layout
              const isWide = index % 5 === 0
              const isTall = index % 7 === 0
              const colSpan = isWide ? "md:col-span-8" : "md:col-span-4"
              const rowSpan = isTall ? "md:row-span-2" : ""

              return (
                <Card
                  key={post.slug}
                  className={`flex flex-col h-full ${colSpan} ${rowSpan}`}
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <CardHeader className={`p-0 ${isTall ? "h-64" : "h-48"}`}>
                    <div className="relative w-full h-full">
                      <Image
                        src={post.coverImage || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover rounded-t-lg"
                        itemProp="image"
                      />
                      <meta itemProp="datePublished" content={post.date} />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="mb-2 line-clamp-2" itemProp="headline">
                      <Link href={`/blog/${post.slug}`} className="hover:underline" itemProp="url">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="mb-4 text-sm text-muted-foreground">
                      <span itemProp="datePublished">{post.date}</span> • {post.readingTime} min read
                    </CardDescription>
                    <p className="line-clamp-3 text-muted-foreground" itemProp="description">
                      {post.excerpt}
                    </p>
                    <div className="hidden" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <meta itemProp="name" content="LinkSpark Team" />
                    </div>
                    <div className="hidden" itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                      <meta itemProp="name" content="LinkSpark" />
                      <meta itemProp="logo" content="/placeholder.svg" />
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
