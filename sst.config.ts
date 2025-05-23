/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "aws-personal-static-site",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          profile: "production"
        }
      }
    };
  },
  async run() {
    new sst.aws.StaticSite("Site", {
      build: {
        command: "npm run build",
        output: "build",
      },
      domain: {
        name: "migpalg.com",
        redirects: [
          "www.migpalg.com",
        ],
        dns: sst.aws.dns()
      }
    });
  },
});
