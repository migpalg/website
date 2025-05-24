/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "aws-personal-static-site",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          profile: "production"
        }
      }
    };
  },
  async run() {
    new sst.aws.SvelteKit("SvelteSite", {
      domain: {
        name: "migpalg.com",
        redirects: ["www.migpalg.com"],
        dns: sst.aws.dns()
      }
    });
  },
});
