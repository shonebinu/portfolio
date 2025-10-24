import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { meta } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: meta.about.title,
    description: meta.about.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
