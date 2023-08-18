// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "youniaogu",
  tagline: "学习三部曲：WHAT、HOW、WHY",
  favicon: "img/takodachi-eat-cookies.gif",

  // Set the production url of your site here
  url: "https://youniaogu.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "youniaogu", // Usually your GitHub org/user name.
  projectName: "youniaogu.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/youniaogu/youniaogu.github.io/",

          blogSidebarTitle: "所有的文章",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "youniaogu",
        logo: {
          alt: "Logo",
          src: "img/takodachi-eat-cookies.gif",
        },
        items: [
          { to: "/blog", label: "博客", position: "left" },
          {
            href: "https://github.com/youniaogu",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "更多",
            items: [
              {
                label: "博客",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/youniaogu",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} youniaogu`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
