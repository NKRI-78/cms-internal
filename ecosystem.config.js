module.exports = {
  apps: [
    {
      name: "nextjs-report-internal",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 5809,
      },
    },
  ],
};
  