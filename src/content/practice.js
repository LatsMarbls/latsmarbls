export const practices = [
  {
    title: "Security by default",
    body: "Security is part of my definition of done, not a separate pass at the end.",
    evidence:
      "Hardened input handling, permissions and data exposure on every feature and module shipped since a security case hit one of our client projects.",
  },
  {
    title: "Vulnerability testing",
    body: "Independent on routine testing, notably faster with AI-assisted tooling.",
    evidence:
      "Ran vulnerability assessment and penetration testing on a client web application to verify that security fixes held.",
  },
  {
    title: "Code review",
    body: "Evaluate implementations, catch risk early, leave a recommendation instead of a complaint.",
    evidence:
      "Review backend work across modules, from data handling to permission boundaries, and flag what should change before merge.",
  },
  {
    title: "AI-assisted review",
    body: "AI review wired into the loop, not bolted on afterwards.",
    evidence:
      "Use AI review to surface high-risk implementations, bugs and alternative approaches before a change reaches production.",
  },
  {
    title: "AI quality & safety",
    body: "Configure what the model may touch, then verify what it produced.",
    evidence:
      "Define AI permissions, scope and safeguards, then validate generated output for accuracy, security and alignment with project requirements.",
  },
  {
    title: "Automated testing",
    body: "Tests are written alongside the feature, not after the bug report.",
    evidence: "Implemented PHPUnit test cases for every feature and module built.",
  },
  {
    title: "Mentoring",
    body: "Help teammates unblock on integration, troubleshooting and approach.",
    evidence:
      "Guide peers through third-party service and API integration, production troubleshooting and implementation tradeoffs.",
  },
  {
    title: "Server & deployment",
    body: "Comfortable in the environment layer, not just the application layer.",
    evidence:
      "Server configuration, patching, deployment troubleshooting, permissions, services and environment issues, including direct support on a client's production environment.",
  },
];

export const toolkit = {
  mcp: "Laravel Boost, Postman, GitLab, Playwright",
  skills: "Repeatable AI workflows for consistent delivery",
  models: [
    { name: "DeepSeek 4.1 Flash", use: "Development, debugging, analysis and review" },
    { name: "ChatGPT", use: "Research, architecture and validation" },
  ],
};
