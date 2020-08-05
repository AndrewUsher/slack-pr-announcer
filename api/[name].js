const { WebClient } = require('@slack/web-api')

const SLACK_CLIENT = new WebClient(process.env.SLACK_API_KEY)

module.exports = async (req, res) => {
  const { name } = req.query
  const { action } = req.body
  await SLACK_CLIENT.chat.postMessage({
    channel: name,
    mrkdwn: true,
    text: `
    # ${name} ${action}
    `
  })

  res.json({
    test: 'test'
  })
}
