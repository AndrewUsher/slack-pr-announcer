import { WebClient } from '@slack/web-api'

const SLACK_CLIENT = new WebClient(process.env.SLACK_API_KEY)

export default async (req, res) => {
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

  res.status(200).send('Okay')
}
