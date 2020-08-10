import { WebClient } from '@slack/web-api'
import { shouldPostMessage } from '../../utils/shouldPostMessage'

const SLACK_CLIENT = new WebClient(process.env.SLACK_API_KEY)

export default async (req, res) => {
  const { name } = req.query
  const { action, pull_request: { diff_url: diffUrl, html_url: siteURL, patch_url: patchURL, title, user: { login } }, head: { ref }, repository: { clone_url: cloneURL } } = req.body

  if (!shouldPostMessage(action)) {
    res.status(200).send('Not Applicable')
    return
  }

  await SLACK_CLIENT.chat.postMessage({
    channel: name,
    mrkdwn: true,
    text: `
    PR ${action} by ${login} for ${name}

    ${title}

    To checkout locally:

    \`\`\`
    git clone ${cloneURL}
    cd ${name}
    git checkout -b "${ref}" "origin/${ref}"
    \`\`\`

    Diff URL: ${diffUrl}
    Patch URL: ${patchURL}
    URL: ${siteURL}
    `
  })

  res.status(200).send('Okay')
}
