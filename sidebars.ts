import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Tiahui.Tech",
      link: { type: "doc", id: "intro" },
      items: [
        "about",
        "strategy",
        {
          type: "category",
          label: "Objetivos 2024",
          link: { type: "doc", id: "objectives/index" },
          items: ["objectives/q2", "objectives/q3"],
        },
        "long-term-goals",
        "foda-analysis",
        "resources-and-capabilities",
        "organizational-structure",
        {
          type: "category",
          label: "Procesos",
          link: { type: "doc", id: "processes/index" },
          items: ["processes/interviews"],
        },
        "tiers/developers",
      ],
    },
  ],
};

export default sidebars;
