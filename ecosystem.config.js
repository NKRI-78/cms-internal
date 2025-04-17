module.exports = {
  apps: [
    {
      name: "nextjs-report-marlinda",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 5810,
      },
    },
  ],
};
  