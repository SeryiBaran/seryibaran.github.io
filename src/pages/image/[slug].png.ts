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
          ${data.date ? `<time class="flex flex-row items-center mr-10"><img src="${new URL('/favicons/icons/og_image_icon_date.png', context.url)}" tw="mr-2 h-8 w-8" />${formatPostDate(data.date)}</time>` : ''}
          ${data.updatedDate ? `<time class="flex flex-row items-center"><img src="${new URL('/favicons/icons/og_image_icon_updatedDate.png', context.url)}" tw="mr-2 h-8 w-8" />${formatPostDate(data.updatedDate)}</time>` : ''}
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
        <span tw="text-zinc-400 flex flex-row items-center"><img src="${new URL('/favicons/icons/og_image_icon_www.png', context.url)}" tw="mr-2 h-10 w-10" />${SITE_DOMAIN}</span>
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
