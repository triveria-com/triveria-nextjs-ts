import { SSTConfig } from "sst";
import { NextjsSite, Config } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "triveria-nextjs-ts",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const NEXT_WALLET_CLIENT_ID = new Config.Secret(stack, "NEXT_WALLET_CLIENT_ID");
      const NEXT_WALLET_CLIENT_SECRET = new Config.Secret(stack, "NEXT_WALLET_CLIENT_SECRET");

      const site = new NextjsSite(stack, "site", {
        bind: [NEXT_WALLET_CLIENT_ID, NEXT_WALLET_CLIENT_SECRET]
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
