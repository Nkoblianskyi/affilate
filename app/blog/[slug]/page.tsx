import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Calendar, Clock } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | LinkSpark Blog",
      description: "The blog post you're looking for could not be found.",
    }
  }

  return {
    title: `${post.title} | LinkSpark Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["LinkSpark Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <Button asChild variant="ghost" className="mb-6 p-0 h-auto">
                <Link href="/blog" className="flex items-center text-muted-foreground hover:text-foreground">
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>

              <article itemScope itemType="https://schema.org/BlogPosting">
                <meta itemProp="publisher" content="LinkSpark" />
                <meta itemProp="datePublished" content={post.date} />
                <meta itemProp="author" content="LinkSpark Team" />

                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4" itemProp="headline">
                  {post.title}
                </h1>

                <div className="flex items-center space-x-4 text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span itemProp="datePublished">{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>

                <div className="relative w-full aspect-video mb-8">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                    itemProp="image"
                  />
                </div>

                <div className="prose prose-lg max-w-none" itemProp="articleBody">
                  {post.content.map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </div>

            <div className="mt-12 border-t pt-8">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts
                  .filter((relatedPost) => relatedPost.slug !== post.slug)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Card key={relatedPost.slug}>
                      <CardContent className="p-4">
                        <div className="relative w-full pt-[56.25%] mb-4">
                          <Image
                            src={relatedPost.coverImage || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <h3 className="font-bold mb-2 line-clamp-2">
                          <Link href={`/blog/${relatedPost.slug}`} className="hover:underline">
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
