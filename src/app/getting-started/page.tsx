import { MDXRemote } from "next-mdx-remote/rsc"
import fs from "node:fs"
import path from "node:path"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Quick start, running the node, RPC, development workflow, and resources for Peanut Butter AND JAM (JAM protocol).",
}

export default function GettingStartedPage() {
  const contentPath = path.join(
    process.cwd(),
    "src/content/getting-started.mdx",
  )
  const source = fs.readFileSync(contentPath, "utf-8")

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 getting-started-content">
      <MDXRemote source={source} />
    </article>
  )
}
