import 'dotenv/config'
import { Bot } from 'grammy'

const postSlugs = process.env.CREATED_FILE.split(' ')
  .filter((file) => /.+\.md$/gi.test(file) || /.+\.mdx/gi.test(file))
  .join('__DELIMETEER__1__')
  .replaceAll(/^src\/content\/blog\//gi, '')
  .replaceAll(/\.mdx$/gi, '')
  .replaceAll(/\.md$/gi, '')

if (postSlugs.length === '') {
  console.log('No posts created!')
  process.exit(0)
}

const bot = new Bot(process.env.TG_BOT_APIKEY)

postSlugs.split('__DELIMETEER__1__').forEach(async (element) => {
  const postUrl = `https://seryibaran.github.io/posts/${element}`

  await bot.api.sendMessage(
    process.env.TG_CHANNEL_ID,
    `🔔 На сайте вышел новый пост!
  <a href="postUrl">${postUrl}</a>`,
    {
      parse_mode: 'HTML',
    },
  )
})
