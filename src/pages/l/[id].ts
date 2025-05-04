import type { APIContext } from "astro";

const links = [
  { id: "ass", url: "https://react.dev" },
  { id: "rectal.js", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

function getLinkById(id: string | undefined) {
  return id ? links.find(link => link.id === id) || null : null
}

export async function GET(context: APIContext) {
  const {id} = context.params
  const link = getLinkById(id)

  if (!link) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    })
  }

  return context.redirect(link.url, 307)
}

export async function getStaticPaths() {
  return links.map((link) => ({
    params: { id: link.id },
  }));
}
