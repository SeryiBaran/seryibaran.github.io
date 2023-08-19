import 'dotenv/config'
import { Bot } from 'grammy'

if (
  !process.env.CREATED_FILE ||
  !process.env.TG_CHANNEL_ID ||
  !process.env.TG_BOT_APIKEY
)
  throw new Error(
    'no created file or CREATED_FILE or TG_CHANNEL_ID or TG_BOT_APIKEY is not defined!',
  )

const CREATED_FILE = process.env.CREATED_FILE
const TG_CHANNEL_ID = process.env.TG_CHANNEL_ID
const TG_BOT_APIKEY = process.env.TG_BOT_APIKEY

const postSlugs = CREATED_FILE.split(' ')
  .filter((file) => /.+\.md$/gi.test(file) || /.+\.mdx/gi.test(file))
  .join('__DELIMETEER__1__')
  .replaceAll(/^src\/content\/blog\//gi, '')
  .replaceAll(/\.mdx$/gi, '')
  .replaceAll(/\.md$/gi, '')

if (!postSlugs.length) {
  console.log('No posts created!')
  process.exit(0)
}

const bot = new Bot(TG_BOT_APIKEY)

async function sendMessage(slug: string) {
  const postUrl = `https://seryibaran.github.io/posts/${slug}`
  await bot.api.sendMessage(
    TG_CHANNEL_ID,
    `🔔 На сайте вышел новый пост!
  <a href="postUrl">${postUrl}</a>`,
    {
      parse_mode: 'HTML',
    },
  )
}

postSlugs.split('__DELIMETEER__1__').forEach(sendMessage)
