const { createEnv } = require("@t3-oss/env-nextjs")
const { z } = require("zod")

const env = createEnv({
  server: {
    NEXT_WALLET_CLIENT_ID: z.string().length(),
    NEXT_WALLET_CLIENT_SECRET: z.string().length(),
  },
  client: {},
  runtimeEnv: {
    NEXT_WALLET_CLIENT_ID: process.env.NEXT_WALLET_CLIENT_ID,
    NEXT_WALLET_CLIENT_SECRET: process.env.NEXT_WALLET_CLIENT_SECRET,
  },
})

module.exports = { env };