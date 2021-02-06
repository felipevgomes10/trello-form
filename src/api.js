// aplicaçõa utilizando conta teste!
// token não deve ser revelado a menos que seja uma conta teste!

export const getApiParams = () => {
  const baseUrl = 'https://api.trello.com/1'
  const key = '5cf0af8bb4068d58772e2fa021328a01'
  const token =
    'aa8e11b82000a1c7725f950cc35b4cc95804d5b64f0c817706098d1d76ee7cbb'
  const boardId = '17IuGIwv'

  return { baseUrl, key, token, boardId }
}
