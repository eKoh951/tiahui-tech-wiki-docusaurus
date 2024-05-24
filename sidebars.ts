import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
      type: 'category',
      label: 'Sobre nosotros',
      link: { type: 'doc', id: 'intro' },
      items: ['about', 'strategy', {
        type: 'category',
        label: 'OKRs y KPIs 2024',
        link: { type: 'doc', id: 'okrs-kpis/index'},
        items: ['okrs-kpis/q2', 'okrs-kpis/q3'],
      }, 'long-term-goals', 'foda-analysis', 'resources-and-capabilities', 'organizational-structure'],
    },
  ],
};

export default sidebars;
