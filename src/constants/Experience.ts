export const Experience = [
  {
    year: 2025,
    timeline: "May (Present)",
    title: {
      name: "Absinthe Labs",
      cargo: "Software Engineer",
    },
    description: [
      `Led development of [Absinthe Adapters](https://github.com/absinthelabs/absinthe-adapters), a scalable multi-chain indexing platform (Morpho V1/V2, Uniswap V2/V3, Orca) for transactions and time-weighted balances, serving live customers in production.`,
      `Optimized Orca indexer by replacing O(n×m) transfer scans with an event-driven pipeline (Mint-Tracker + Transfer-Watcher + external indexer), significantly reducing CPU usage and enabling near real-time indexing.`,
      `Built Atlas, an AI-powered support engineer integrating Slack, Linear, and GitHub to autonomously triage issues, generate fixes, and open PRs, reducing CSM/support effort by 70%.`,
      `Architected SybilGuard, a soulbound NFT-based reputation system using EIP-712 voucher signing, backend scoring (17+ signals), and full-stack minting flows with minimal on-chain state.`,
      `Worked as a Forward Deployed Engineer, partnering with customers on live campaigns; built self-serve data and campaign flows enabling teams to configure tracking without engineering support.`,
      `Built scalable identity backfill pipelines (PostgreSQL) using Union-Find for identity stitching, streaming/keyset reads, batched writes, and idempotent CLI tooling, enabling reliable large-scale backfills (incl. SybilGuard scoring).`,
    ],
    details: [
      "Typescript, Docker, Motherduck, NodeJs, Solidity, AWS",
    ],
  },
  {
    year: 2025,
    timeline: "May 2024 - April 2025",
    title: {
      name: "Filament Finance",
      cargo: "Full Stack Developer (Remote)",
    },
    description: [
      `Founding member of the team, actively shaped the product from the ground up.`,
      `Have handled the multi-cluster orderbook backend, implemented authentication flow, cache, reduced (95%) latency on
orders, from 2000ms to 84ms`,
      `Developed the client interface for [Filament Finance Perp DEX](https://filament.finance)`,
      `Built the authentication system, implementing Account Abstraction similar to Biconomy.`,
      `Designed and deployed a 7-tier microservice architecture on Kubernetes, ensuring scalability.`,
      ` Developed [Flash Duels](https://flashduels.xyz), an options betting platform, handling both frontend and backend from scratch.`,
      `Built a Telegram Mini-App for the Filament Pro application.`,
    ],
    details: [
      "NextJs, Typescript, Docker, Kubernetes, Prometheus, NodeJs, Solidity, AWS, Shell Scripting, Java",
    ],
  },
  {
    year: 2024,
    timeline: "February-April",
    title: {
      name: "Archie AI",
      cargo: "Full Stack Developer (Remote)",
    },
    description: [
      `Designed the entire system architecture, including Database Design and Vector DB mappings.
`,
      `  Developed the frontend, creating an interface similar to ChatGPT for interacting with the codebase.
`,
      `    Integrated GitHub APIs, enabling a scalable and robust chat system for code interaction.
`,
    ],
    details: ["NextJs, Typescript, Monorepo, OpenAI, GCP, NodeJs"],
  },
  {
    year: 2023,
    timeline: "August",
    title: {
      name: "VMCO",
      cargo: "Remote FullStack Developer(Intern)",
    },
    description: [
      `
    Improved and corrected existing software and system applications.`,
      `
Produced high-quality code artifacts that conformed to standards and best practices.`,
      ` Conferred with project managers and other stakeholders to fully understand software design specifications and plan optimal development approaches.`,
    ],
    details: ["ReactJs", "ExpressJs", "Typescript"],
  },
];
