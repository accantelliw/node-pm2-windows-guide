module.exports = {
  apps: [
    {
      name: "app1",
      script: "apps\\app1.js",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      },
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "app2",
      script: "apps\\app2.js",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      },
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "web",
      script: "apps\\web.js",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      },
      instances: 1,
      exec_mode: "fork"
    }
  ]
}
