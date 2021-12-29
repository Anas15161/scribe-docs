// Manually build version dropdowns, because we need to change the label
const laravelVersions = ['3.x'];
const nodejsVersions = ['2.x'];
const laravelVersionDropdown = laravelVersions.map((version, idx) => ({
    to: `laravel/${idx === 0 ? '' : version}`,
    label: `Laravel: ${version}${idx === 0 ? ' (current)' : ''}`,
}));
laravelVersionDropdown.push({
    to: 'https://scribe.rtfd.io',
    label: 'Laravel: 2.x',
});
const nodejsVersionDropdown = nodejsVersions.map((version, idx) => ({
    to: `nodejs/${idx === 0 ? '' : version}`,
    label: `Node.js: ${version}${idx === 0 ? ' (current)' : ''}`,
}));
nodejsVersionDropdown.push({
    to: 'https://scribe-js.rtfd.io',
    label: 'Node.js: 1.x',
});
const versionDropdown = {
    label: 'Switch version',
    position: 'right',
    items: [...laravelVersionDropdown, ...nodejsVersionDropdown],
};


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Scribe',
    tagline: 'Generate API documentation for humans from your codebase.',
    url: 'https://scribe.knuckles.wtf',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'knuckleswtf',
    projectName: 'scribe-docs',
    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
        },
        image: 'img/og-image-scribe.png',
        navbar: {
            hideOnScroll: true,
            style: 'dark',
            title: 'Scribe',
            logo: {
                alt: 'Scribe Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    to: '/laravel',
                    label: 'Laravel',
                },
                {
                    to: '/nodejs',
                    label: 'Node.js',
                },
                versionDropdown,
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'right',
                },
                {
                    href: 'https://github.com/knuckleswtf/',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Laravel',
                            to: '/laravel',
                        },
                        {
                            label: 'Node.js',
                            to: '/nodejs',
                        },
                    ],
                },
                {
                    title: 'GitHub',
                    items: [
                        {
                            label: 'Scribe for Laravel',
                            href: 'https://github.com/knuckleswtf/scribe',
                        },
                        {
                            label: 'Scribe for JS',
                            href: 'https://github.com/knuckleswtf/scribe-js',
                        },
                        {
                            label: 'Scribe Docs',
                            href: 'https://github.com/knuckleswtf/scribe-docs',
                        },
                    ],
                },
                {
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Shalvah. Built with Docusaurus.`,
        },
        prism: {
            additionalLanguages: ['php'],
        },
        algolia: {
            appId: 'WMFPPEFVT6',
            apiKey: '6fc653b221399821574f6c08538d0ab7',
            indexName: 'scribe',
            contextualSearch: true,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebarsLaravel.js'),
                    id: 'laravel',
                    path: 'laravel',
                    routeBasePath: 'laravel',
                    editUrl: ({locale, versionDocsDirPath, docPath}) =>
                        `https://github.com/knuckleswtf/scribe-docs/edit/master/${versionDocsDirPath}/${docPath}`,
                    lastVersion: "current",
                    versions: {
                        current: {
                            label: "Laravel 3.x (current)",
                            badge: true,
                        }
                    },
                    onlyIncludeVersions: ["current"],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                sidebarPath: require.resolve('./sidebarsNodejs.js'),
                id: 'nodejs',
                path: 'nodejs',
                routeBasePath: 'nodejs',
                editUrl: ({locale, versionDocsDirPath, docPath}) =>
                    `https://github.com/knuckleswtf/scribe-docs/edit/master/${versionDocsDirPath}/${docPath}`,
                lastVersion: "current",
                versions: {
                    current: {
                        label: "Node.js 2.x (current)",
                        badge: true,
                    }
                },
                onlyIncludeVersions: ["current"],
            },
        ],
    ],
};
