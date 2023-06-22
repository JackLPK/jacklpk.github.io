/* 
  Utilities for server side
*/

import fs from "fs"
import path from "path"

import matter from "gray-matter"

import { Blog } from "../models"

/* 
  PUBLIC_BLOG_IMAGES_DIR and LOCAL_BLOG_IMAGAES_DIR need "blogs" for namespacing.
  Maybe even move to per blog folder namespacing later.
*/
export const LOCAL_BLOGS_DIR = path.resolve(process.env.NEXT_PUBLIC_BLOG_DIR2 as string) // prettier-ignore
export const LOCAL_BLOG_IMAGAES_DIR = path.join(LOCAL_BLOGS_DIR, "images", "blogs") // prettier-ignore
export const PUBLIC_BLOG_IMAGES_DIR = path.resolve("public", "images", "blogs")

/* Check directories */
if (!fs.existsSync(LOCAL_BLOG_IMAGAES_DIR)) {
  throw new Error(`Local Images Directory Not Found: ${LOCAL_BLOG_IMAGAES_DIR}`)
}

if (!fs.existsSync(PUBLIC_BLOG_IMAGES_DIR)) {
  throw new Error(`Public Images Directory Not Found: ${PUBLIC_BLOG_IMAGES_DIR}`) // prettier-ignore
}

/** Sychronize local images to public images. */
export function syncImages() {
  const localImages: string[] = fs.readdirSync(LOCAL_BLOG_IMAGAES_DIR)
  const publicImages: string[] = fs.readdirSync(PUBLIC_BLOG_IMAGES_DIR)

  const newImages = localImages.filter((value) => !publicImages.includes(value))
  console.log("\nNew Images to copy:")
  console.table(newImages)

  newImages.forEach((filename) => {
    console.log(`Copying ${filename}`)
    const srcFile = path.join(LOCAL_BLOG_IMAGAES_DIR, filename)
    const destFile = path.join(PUBLIC_BLOG_IMAGES_DIR, filename)
    console.log(`${srcFile} => \n  ${destFile}`)
    fs.copyFileSync(srcFile, destFile)
  })

  return {
    newImages,
    localImages,
    publicImages,
  }
}
/**
 * Returns array of filenames of blogs, including date string and slug.
 * E.g. ["20XX-XX-XX a-new-blog", "20XX-XX-XX another-blog"]
 * */
export function getBlogNames(): string[] {
  const blogNames = fs
    .readdirSync(LOCAL_BLOGS_DIR)
    .filter((filename) => path.extname(filename) === ".md")
    .map((filename) => filename.replace(".md", ""))

  return blogNames
}

/**
 * Returns array of slugs from blogs.
 *
 * E.g. ["a-new-blog", "another-blog"]
 * */
export function getBlogSlugs(): string[] {
  const blogs = getBlogNames().map((blogname) => {
    // 20XX-XX-XX some-slug.md -> ['20XX-XX-XX', 'some-slug.md']
    const [dateString, slug] = blogname.split(" ")
    return slug
  })

  return blogs
}

/**
 * Returns an array of blogs
 * */
export function getBlogs(): Blog[] {
  const fileNames = fs.readdirSync(LOCAL_BLOGS_DIR)

  const blogs = fileNames
    .filter((filename) => path.extname(filename) === ".md")
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join(LOCAL_BLOGS_DIR, filename),
        "utf-8"
      )
      const { data: frontmatter, content } = matter(markdownWithMeta)

      return {
        frontmatter,
        content,
      }
    })

  return blogs as Blog[]
}
