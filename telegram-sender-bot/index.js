import 'dotenv/config'
import { Bot } from 'grammy'

if (/\s/.test(process.env.CREATED_FILE)) {
  throw new Error('Added many files or file name has space!')
} else if (!process.env.CREATED_FILE) {
  console.log('No files created!')
} else {
  const postSlug = process.env.CREATED_FILE.replaceAll(
    /^src\/content\/blog\//gi,
    ''
  ).replaceAll(/\.mdx$/gi, '')

  const postUrl = `https://seryibaran.github.io/posts/${postSlug}`

  const bot = new Bot(process.env.TG_BOT_APIKEY)

  await bot.api.sendMessage(
    process.env.TG_CHANNEL_ID,
    `На сайте вышел новый пост!
  <a href="postUrl">${postUrl}</a>
  `,
    {
      parse_mode: 'HTML',
    }
  )
}
