import { getCollection } from "astro:content";
import generateOgImage from "@utils/generateOgImage";
import type { APIRoute } from "astro";

const postImportResult = await getCollection(
  "posts",
  ({ data }) => !data.draft
);
const posts = Object.values(postImportResult);

export function getStaticPaths() {
  return posts
    .filter(({ data }) => !data.ogImage)
    .map(({ slug }) => ({
      params: { ogSlug: slug },
    }));
}

async function generate(slug) {
  const post = posts.find(post => post.slug === slug);

  return await generateOgImage(post.data.title);
}

export const get: APIRoute = async ({ params }) => ({
  body: await generate(params.ogSlug),
});
