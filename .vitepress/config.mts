import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "坦克世界闪击战：百科",
  description: "由中文社区协作构建的《坦克世界闪击战》百科全书。",
  // base: "/", // always ends with slash
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "https://play-lh.googleusercontent.com/lKul9YKVt5iCq0FchXmZUDaIQuyYxUq5DUO1Ttp_k4ND7Ox4kRENUHlluvzIWIT9PhEgZlWAvAIfIpHaSZl3PrQ" }],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "主页", link: "/" }],

    sidebar: {
      ["/"]: [
        { text: "回到主页", link: "/" },
        {
          text: "示例文档",
          items: [
            { text: "Markdown 示例", link: "/markdown-examples" },
            { text: "关于 | 共同完善", link: "/关于" },
          ],
        },
        { text: "外链示例", link: "https://not-exist.wss.moe/outlink-zh" },
      ],
      ["/en_us/"]: [
        { text: "Back to homepage", link: "/en_us/" },
        {
          text: "Example docs",
          items: [
            { text: "Markdown Examples", link: "/en_us/md" },
            { text: "About | Contribute", link: "/en_us/about" },
          ],
        },
        { text: "Outlink Test", link: "https://not-exist.wss.moe/outlink-en" },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/WorldOfTanksBlitz/Wiki/" },
      { icon: "discord", link: "https://discord.gg/8WVUvqPrrk" },
    ],

    editLink: {
      pattern: "https://github.com/WorldOfTanksBlitz/Wiki/edit/main/:path",
      text: "在 GitHub 上编辑本页",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "full",
      },
    },
  },

  locales: {
    root: {
      label: "简体中文",
      lang: "zh",
    },
    en_us: {
      label: "English",
      lang: "en",
      link: "/en_us/",

      title: "World Of Tanks Blitz Wiki",
      description: "A World of Tanks Blitz encyclopedia built by the Chinese community.",

      themeConfig: {
        nav: [{ text: "Home", link: "/en_us/" }],

        socialLinks: [
          { icon: "github", link: "https://github.com/WorldOfTanksBlitz/Wiki/" },
          { icon: "discord", link: "https://discord.gg/8WVUvqPrrk" },
        ],

        editLink: {
          pattern: "https://github.com/WorldOfTanksBlitz/Wiki/edit/main/:path",
          text: "Edit this page on GitHub",
        },

        lastUpdated: {
          text: "Last updated at",
          formatOptions: {
            dateStyle: "full",
            timeStyle: "full",
          },
        },
      },
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
});
