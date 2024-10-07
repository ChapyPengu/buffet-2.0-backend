import jwt from 'jsonwebtoken'

const SECRET = 'abcd'

export function createAccesToken(payload: object) {
  return new Promise((res, rej) => {
    jwt.sign(
      payload,
      SECRET,
      { expiresIn: '1d' },
      (err, token) => {
        if (err) rej(err)
        res(token)
      }
    )
  })
}

export function verifyAccesToken(token: string) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET, (err, user) => {
      if (err)
        reject(err)
      resolve(user)
    })
  })
}