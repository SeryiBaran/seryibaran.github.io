import 'dotenv/config'
import { Bot } from 'grammy'

const bot = new Bot(process.env.TG_BOT_APIKEY)

const postSlug = process.env.CREATED_FILE.replaceAll(
  /^src\/content\/blog\//gi,
  ''
).replaceAll(/\.mdx$/gi, '')

const postUrl = `https://seryibaran.github.io/posts/${postSlug}`

await bot.api.sendMessage(
  process.env.TG_CHANNEL_ID,
  `На сайте вышел новый пост!
<a href="postUrl">${postUrl}</a>
`,
  {
    parse_mode: 'HTML',
  }
)
