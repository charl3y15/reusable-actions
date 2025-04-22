module.exports = {
  // ...existing config...
  automerge: true,
  extends: ["config:recommended", ":dependencyDashboard"],
  major: { automerge: true },
  minor: { automerge: true },
  patch: { automerge: true },
  // Dynamically use GITHUB_REPOSITORY or default to a fallback value
  repositories: [
    process.env.GITHUB_REPOSITORY ||
      "Estes-Forwarding-Worldwide/freshservice-offboarding-assets",
  ],
  packageRules: [
    {
      matchUpdateTypes: ["major", "minor", "patch", "pin", "digest"],
      automerge: true,
    },
  ],
};
