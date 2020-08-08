const { WebClient } = require('@slack/web-api')
const { stripMarkdown } = require('../../utils/stripMarkdown')

const SLACK_CLIENT = new WebClient(process.env.SLACK_API_KEY)

module.exports = async (req, res) => {
  const { name } = req.query
  const { action, pull_request: { html_url: siteURL, body } } = req.body

  // Slack doesn't support markdown
  const sanitizedMarkdownBody = stripMarkdown(body)

  await SLACK_CLIENT.chat.postMessage({
    channel: name,
    mrkdwn: true,
    text: `
    PR ${action} for ${name}

    ${sanitizedMarkdownBody}

    URL: ${siteURL}
    `
  })

  res.json({
    test: 'test'
  })
}
