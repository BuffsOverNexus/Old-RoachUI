import { getServerSession } from "next-auth/next"
import  authOptions from "./auth/[...nextauth]"
import { IncomingMessage, ServerResponse } from "http"
import { NextApiRequest, NextApiResponse } from "next"
export default async (req: any | NextApiRequest | (IncomingMessage & { cookies: Partial<{ [key: string]: string }> }), res: any | ServerResponse<IncomingMessage> | NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  } else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}