const { WebClient } = require('@slack/web-api')

const SLACK_CLIENT = new WebClient(process.env.SLACK_API_KEY)

module.exports = async (req, res) => {
  const { name } = req.query
  const { action, pull_request: { diff_url: diffUrl, html_url: siteURL, user: { login } } } = req.body

  await SLACK_CLIENT.chat.postMessage({
    channel: name,
    mrkdwn: true,
    text: `
    PR ${action} by ${login} for ${name}

    Diff URL: ${diffUrl}
    URL: ${siteURL}
    `
  })

  res.json({
    test: 'test'
  })
}
