const acceptedActions = ['closed', 'opened']

const shouldPostMessage = (status) => {
  return acceptedActions.includes(status)
}

export {
  shouldPostMessage
}
