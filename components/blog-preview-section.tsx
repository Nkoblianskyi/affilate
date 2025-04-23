"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { blogPosts } from "@/lib/blog-data"
import AnimateInView from "@/components/animate-in-view"
import StaggerContainer from "@/components/stagger-container"
import StaggerItem from "@/components/stagger-item"

export default function BlogPreviewSection() {
  // Get only the first 3 blog posts for the preview
  const previewPosts = blogPosts.slice(0, 3)

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <AnimateInView animation="slide-up">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest from Our Blog</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Insights and strategies to help you succeed in affiliate marketing
            </p>
          </div>
        </AnimateInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" staggerDelay={0.2}>
          {previewPosts.map((post) => (
            <StaggerItem key={post.slug} animation="slide-up">
              <Card className="flex flex-col h-full">
                <CardHeader className="p-0">
                  <div className="relative w-full pt-[56.25%]">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardTitle className="mb-2 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mb-4 text-sm text-muted-foreground">
                    {post.date} • {post.readingTime} min read
                  </CardDescription>
                  <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateInView animation="fade" delay={0.5}>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}
