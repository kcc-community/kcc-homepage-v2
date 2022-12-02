import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { KCC } from 'constants/index'

type ResponseData = {
  message: string
}

async function subscribe(email: string) {
  const response = await axios({
    method: 'post',
    url: KCC.MAIL_SUBSCRIBE_PROXY,
    data: {
      email_address: email,
      status: 'subscribed',
    },
  })
  return response
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      const { email } = req.body
      console.log('email', email)
      const response = await subscribe(email)
      if (response.data.status === 400) {
        res.status(200).send({ errorCode: 1, detail: response.data.detail })
      } else {
        res.status(200).send({ errorCode: 0, detail: 'subscribed' })
      }
    } else {
      res.status(200).json({ message: 'Hello from mail' })
    }
  } catch (e) {
    res.status(500).json({ message: e })
  }
}
