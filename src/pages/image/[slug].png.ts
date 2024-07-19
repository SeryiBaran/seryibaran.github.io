import { Buffer } from 'node:buffer'
import satori from 'satori'
import { html } from 'satori-html'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'
import sharp from 'sharp'

// https://www.1001fonts.com/download/font/roboto.regular.ttf
import fontFileRegular from '@/fonts/roboto.regular.ttf'
// https://www.1001fonts.com/download/font/roboto.bold.ttf
import fontFileBold from '@/fonts/roboto.bold.ttf'
import { formatPostDate } from '@/utils'
import { AUTHOR, POST_OG_COLOR, SITE_DOMAIN, pages_info } from '@/consts'

const [fontRegular, fontBold] = [
  Buffer.from(fontFileRegular),
  Buffer.from(fontFileBold),
]

const dimensions = {
  width: 1200,
  height: 630,
}

interface Props {
  title: string
  description: string
  date?: Date
  updatedDate?: Date
}

export async function GET(context: APIContext) {
  const data = context.props as Props

  const markup = html(`<div tw="flex flex-col w-full h-full" style="background: ${POST_OG_COLOR};">
    <div tw="bg-zinc-900/90 flex flex-col w-full h-full">
      <div tw="flex flex-col w-full h-5/6 p-10 pt-12">
        <div tw="text-zinc-400 text-3xl mb-6 flex flex-row">
          ${data.date ? `<time class="flex flex-row items-center mr-6"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" tw="h-8 w-8 mr-2"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12-4v4M8 3v4m-4 4h16m-9 4h1m0 0v3"/></svg>${formatPostDate(data.date)}</time>` : ''}
          ${data.updatedDate ? `<time class="flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" tw="h-8 w-8 mr-2"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h4L18.5 9.5a2.828 2.828 0 1 0-4-4L4 16zm9.5-13.5l4 4"/></svg>${formatPostDate(data.updatedDate)}</time>` : ''}
        </div>
        <div
          tw="flex text-6xl w-full font-bold leading-snug tracking-tight text-transparent mb-6"
          style="color: ${POST_OG_COLOR};"
        >
          ${data.title}
        </div>
        <div tw="flex text-4xl w-full text-zinc-400">${data.description}</div>
      </div>
      <div
        tw="w-full h-1/6 border-t border-zinc-700/50 flex p-10 items-center justify-between text-3xl"
      >
        <div tw="flex items-center">
          <img
            src="${new URL('/favicons/icons/icon-72x72.png', context.url)}"
            tw="w-15 h-15 rounded-full"
          />
          <div tw="flex flex-col ml-4">
            <span tw="text-zinc-400">${AUTHOR}</span>
          </div>
        </div>
        <span tw="text-zinc-400 flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" tw="h-8 w-8 mr-2"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18"/></g></svg>${SITE_DOMAIN}</span>
      </div>
    </div>
  </div>`)

  const svg = await satori(markup, {
    fonts: [
      {
        name: 'Roboto',
        data: fontRegular,
        weight: 400,
      },
      {
        name: 'Roboto',
        data: fontBold,
        weight: 700,
      },
    ],
    height: dimensions.height,
    width: dimensions.width,
  })

  const image = await sharp(Buffer.from(svg)).toFormat('png').toBuffer()

  return new Response(image)
}

export async function getStaticPaths() {
  const posts = await getCollection('blog')
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
      props: {
        title: post.data.title,
        description: post.data.description,
        date: post.data.date,
        updatedDate: post.data.updatedDate,
      },
    }
  })
  return [...paths, ...pages_info]
}
