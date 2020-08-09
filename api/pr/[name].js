import { WebClient } from '@slack/web-api'
import { shouldPostMessage } from '../../utils/shouldPostMessage'

const SLACK_CLIENT = new WebClient(process.env.SLACK_API_KEY)

export default async (req, res) => {
  const { name } = req.query
  const { action, pull_request: { diff_url: diffUrl, html_url: siteURL, title, user: { login } } } = req.body

  if (!shouldPostMessage) {
    res.status(200).send('Not Applicable')
  }

  await SLACK_CLIENT.chat.postMessage({
    channel: name,
    mrkdwn: true,
    text: `
    PR ${action} by ${login} for ${name}

    ${title}

    Diff URL: ${diffUrl}
    URL: ${siteURL}
    `
  })

  res.status(200).send('Okay')
}
