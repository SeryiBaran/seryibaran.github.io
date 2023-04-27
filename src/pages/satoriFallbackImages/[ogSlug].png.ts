import { getCollection } from "astro:content";
import generateOgImage from "@utils/generateOgImage";
import { SITE } from "@config";
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

async function generate(slug: string | undefined) {
  const post = posts.find(post => post.slug === slug);

  return await generateOgImage(!!post ? post.data.title : SITE.title);
}

// TODO: пофиксить ошибку TS в VSCode
// @ts-ignore
export const get: APIRoute = async ({ params }) => {
  const generatedImage = await generate(params.ogSlug);
  return {
    body: generatedImage,
    encoding: "binary",
  };
};
