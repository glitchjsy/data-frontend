// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").Config} */
const config = {
    title: "Glitch Open Data",
    tagline: "Jersey open data, made easy.",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://data.glitch.je",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often "/<projectName>/"
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren"t using GitHub pages, you don"t need these.
    organizationName: "glitchjsy", // Usually your GitHub org/user name.
    projectName: "data-frontend", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don"t use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import("@docusaurus/preset-classic").Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/glitchjsy/data-frontend/tree/master/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
        ({
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "Open Data",
                logo: {
                    alt: "Logo",
                    src: "img/logo.png",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "mainSidebar",
                        position: "left",
                        label: "API Documentation",
                    },
                    {
                        href: "/examples",
                        position: "left",
                        label: "Examples",
                    },
                    {
                        href: "/map",
                        position: "left",
                        label: "Map",
                    },
                    {
                        href: "/about",
                        position: "left",
                        label: "About",
                    }
                ]
            },
            footer: {
                style: "dark",
                copyright: `Copyright © ${new Date().getFullYear()} Luke Wyatt`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
