import 'dotenv/config'
import { Bot } from 'grammy'
import fs from 'fs'
import matter from 'gray-matter'

interface PostInfo {
  title: string
  slug: string
}

if (
  !process.env.CREATED_FILE ||
  !process.env.TG_CHANNEL_ID ||
  !process.env.TG_BOT_APIKEY
)
  console.log(
    'no created file or CREATED_FILE or TG_CHANNEL_ID or TG_BOT_APIKEY is not defined!',
  )
else {
  const CREATED_FILE = process.env.CREATED_FILE
  const TG_CHANNEL_ID = process.env.TG_CHANNEL_ID
  const TG_BOT_APIKEY = process.env.TG_BOT_APIKEY

  const postsPaths = CREATED_FILE.split(' ').filter(
    (file) => /.+\.md$/gi.test(file) || /.+\.mdx/gi.test(file),
  )

  const postsInfo: PostInfo[] = postsPaths.map((path) => {
    return {
      title: matter(fs.readFileSync(path)).data.title,
      slug: path
        .replaceAll(/^src\/content\/blog\//gi, '')
        .replaceAll(/\.mdx$/gi, '')
        .replaceAll(/\.md$/gi, ''),
    }
  })

  if (!postsInfo.length) {
    console.log('No posts created!')
    process.exit(0)
  }

  const bot = new Bot(TG_BOT_APIKEY)

  async function sendMessage(postInfo: PostInfo) {
    const postUrl = `https://seryibaran.github.io/posts/${postInfo.slug}`
    await bot.api.sendMessage(
      TG_CHANNEL_ID,
      `🔔 Новый пост: ${postInfo.title}
<a href="postUrl">${postUrl}</a>`,
      {
        parse_mode: 'HTML',
      },
    )
  }

  postsInfo.forEach(sendMessage)
}
