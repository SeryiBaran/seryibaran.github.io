import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@config";
import slugify from "@utils/slugify";

export async function get() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: posts.map(({ slug, data }) => ({
      link: `posts/${slug}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.pubDatetime),
    })),
  });
}
