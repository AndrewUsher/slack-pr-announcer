const { WebClient } = require('@slack/web-api')

const SLACK_CLIENT = new WebClient(process.env.SLACK_API_KEY)

module.exports = async (req, res) => {
  await SLACK_CLIENT.chat.postMessage({
    channel: 'casual-cognitions', text: JSON.stringify(req.body || '')
  })

  res.json({
    test: 'test'
  })
}
