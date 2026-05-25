import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../data/site";

export const prerender = true;

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: `${site.name} — ${site.author}`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? "",
      link: `/blog/${post.slug}/`,
      categories: post.data.tags ?? [],
    })),
    customData: `<language>${site.lang}</language>`,
  });
}
