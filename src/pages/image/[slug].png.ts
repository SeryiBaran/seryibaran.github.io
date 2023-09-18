import satori from 'satori'
import { html } from 'satori-html'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

// https://www.1001fonts.com/download/font/roboto.regular.ttf
import fontFileRegular from '@/fonts/roboto.regular.ttf'
// https://www.1001fonts.com/download/font/roboto.bold.ttf
import fontFileBold from '@/fonts/roboto.bold.ttf'
import { formatPostDate } from '@/utils'
import sharp from 'sharp'

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
  pubDate: Date
}

export async function GET(context: APIContext) {
  const data = context.props as Props

  const date = formatPostDate(data.pubDate)

  const markup = html`<div tw="bg-zinc-900 flex flex-col w-full h-full">
    <div tw="flex flex-col w-full h-5/6 p-10 pt-30">
      <div tw="text-zinc-400 text-2xl mb-6">${date}</div>
      <div
        tw="flex text-6xl w-full font-bold leading-snug tracking-tight text-transparent bg-red-400 mb-6"
        style="background-clip: text; -webkit-background-clip: text; background: linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216));"
      >
        ${data.title}
      </div>
      <div tw="flex text-4xl w-full text-zinc-400">${data.description}</div>
    </div>
    <div
      tw="w-full h-1/6 border-t border-zinc-700/50 flex p-10 items-center justify-between text-2xl"
    >
      <span tw="ml-3 text-zinc-400">seryibaran.github.io</span>
      <div tw="flex items-center">
        <img
          src="${new URL('/favicons/icons/icon-72x72.png', context.url)}"
          tw="w-15 h-15 rounded-full"
        />
        <div tw="flex flex-col ml-4">
          <span tw="text-zinc-400">Иван Музыка</span>
        </div>
      </div>
    </div>
  </div>`

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
        pubDate: post.data.updatedDate ?? post.data.date,
      },
    }
  })
  return paths
}
