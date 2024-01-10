import { NextResponse } from "next/server"
import { Client } from "@triveria/wallet"
import { env } from "../../../../env"
import * as z from "zod"

const walletClient = new Client(env.NEXT_WALLET_CLIENT_ID, env.NEXT_WALLET_CLIENT_SECRET);

export async function GET(req: Request, res: Response) {
  try {
    const list = await walletClient.credentialList()

    return NextResponse.json(list.data.list);
  } catch (error) {
    let status = 500
    if (error instanceof z.ZodError) {
      status = 400
    }
    return NextResponse.json({ error }, { status });
  }
}