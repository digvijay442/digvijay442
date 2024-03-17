const id = "how-to-configure-astropaper-theme.md";
						const collection = "blog";
						const slug = "how-to-configure-astropaper-theme";
						const body = "\nAstroPaper is a highly customizable Astro blog theme. With AstroPaper, you can customize everything according to your personal taste. This article will explain how you can make some customizations easily in the config file.\n\n## Table of contents\n\n## Configuring SITE\n\nThe important configurations lies in `src/config.ts` file. Within that file, you'll see the `SITE` object where you can specify your website's main configurations.\n\nDuring deveopment, it's okay to leave `SITE.website` empty. But in production mode, you should specify your deployed url in `SITE.website` option since this will be used for canonical URL, social card URL etc.. which are important for SEO.\n\n```js\n// file: src/config.ts\nexport const SITE = {\n  website: \"https://astro-paper.pages.dev/\",\n  author: \"Sat Naing\",\n  desc: \"A minimal, responsive and SEO-friendly Astro blog theme.\",\n  title: \"AstroPaper\",\n  ogImage: \"astropaper-og.jpg\",\n  lightAndDarkMode: true,\n  postPerPage: 3,\n  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes\n};\n```\n\nHere are SITE configuration options\n\n| Options               | Description                                                                                                                                                                                                                                         |\n| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `website`             | Your deployed website url                                                                                                                                                                                                                           |\n| `author`              | Your name                                                                                                                                                                                                                                           |\n| `desc`                | Your site description. Useful for SEO and social media sharing.                                                                                                                                                                                     |\n| `title`               | Your site name                                                                                                                                                                                                                                      |\n| `ogImage`             | Your default OG image for the site. Useful for social media sharing. OG images can be an external image url or they can be placed under `/public` directory.                                                                                        |\n| `lightAndDarkMode`    | Enable or disable `light & dark mode` for the website. If disabled, primary color scheme will be used. This option is enabled by default.                                                                                                           |\n| `postPerPage`         | You can specify how many posts will be displayed in each posts page. (eg: if you set SITE.postPerPage to 3, each page will only show 3 posts per page)                                                                                              |\n| `scheduledPostMargin` | In Production mode, posts with a future `pubDatetime` will not be visible. However, if a post's `pubDatetime` is within the next 15 minutes, it will be visible. You can set `scheduledPostMargin` if you don't like the default 15 minutes margin. |\n\n## Configuring locale\n\nYou can configure the default locale used for the build (e.g., date format in the post page), and for the rendering in browsers (e.g., date format in the search page)\n\n```js\n// file: src/config.ts\nexport const LOCALE = {\n  lang: \"en\", // html lang code. Set this empty and default will be \"en\"\n  langTag: [\"en-EN\"], // BCP 47 Language Tags. Set this empty [] to use the environment default\n} as const;\n```\n\n`LOCALE.lang` will be used as HTML ISO Language code in `<html lang=\"en\">`. If you don't specify this, default fallback will be set to `en`.\n`LOCALE.langTag` is used as [datetime locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString#locales). For this, you can specify an array of locales for fallback languages. Leave `LOCALE.langTag` empty `[]` to use the environment default at _build-_ and _run-time_.\n\n## Configuring logo or title\n\nYou can specify site's title or logo image in `src/config.ts` file.\n\n![An arrow pointing at the website logo](https://res.cloudinary.com/noezectz/v1663911318/astro-paper/AstroPaper-logo-config_goff5l.png)\n\n```js\n// file: src/config.ts\nexport const LOGO_IMAGE = {\n  enable: false,\n  svg: true,\n  width: 216,\n  height: 46,\n};\n```\n\nIf you specify `LOGO_IMAGE.enable` => `false`, AstroPaper will automatically convert `SITE.title` to the main site text logo.\n\nIf you specify `LOGO_IMAGE.enable` => `true`, AstroPaper will use the logo image as the site's main logo.\n\nYou have to specify `logo.png` or `logo.svg` under `/public/assets` directory. Currently, only svg and png image file formats are supported. (**_Important!_** _logo name has to be logo.png or logo.svg)_\n\nIf your logo image is png file format, you have to set `LOGO_IMAGE.svg` => `false`.\n\nIt is recommended that you specify width and height of your logo image. You can do that by setting `LOGO_IMAGE.width` _and_ `LOGO_IMAGE.height`\n\n## Configuring social links\n\nYou can configure your own social links along with its icons.\n\n![An arrow pointing at social link icons](https://res.cloudinary.com/noezectz/v1663914759/astro-paper/astro-paper-socials_tkcjgq.png)\n\nCurrently 20 social icons are supported. (Github, LinkedIn, Facebook etc.)\n\nYou can specify and enable certain social links in hero section and footer. To do this, go to `/src/config.ts` and then you'll find `SOCIALS` array of object.\n\n```js\n// file: src/config.ts\nexport const SOCIALS: SocialObjects = [\n  {\n    name: \"Github\",\n    href: \"https://github.com/satnaing/astro-paper\",\n    linkTitle: ` ${SITE.title} on Github`,\n    active: true,\n  },\n  {\n    name: \"Facebook\",\n    href: \"https://github.com/satnaing/astro-paper\",\n    linkTitle: `${SITE.title} on Facebook`,\n    active: true,\n  },\n  {\n    name: \"Instagram\",\n    href: \"https://github.com/satnaing/astro-paper\",\n    linkTitle: `${SITE.title} on Instagram`,\n    active: true,\n  },\n  ...\n]\n```\n\nYou have to set specific social link to `active: true` in order to appear your social links in hero and footer section. Then, you also have to specify your social link in `href` property.\n\nFor instance, if I want to make my Github appear, I'll make it like this.\n\n```js\nexport const SOCIALS: SocialObjects = [\n  {\n    name: \"Github\",\n    href: \"https://github.com/satnaing\", // update account link\n    linkTitle: `${SITE.title} on Github`, // this text will appear on hover and VoiceOver\n    active: true, // makre sure to set active to true\n  }\n  ...\n]\n```\n\nAnother thing to note is that you can specify the `linkTitle` in the object. This text will display when hovering on the social icon link. Besides, this will improve accessibility and SEO. AstroPaper provides default link title values; but you can replace them with your own texts.\n\nFor example,\n\n```js\nlinkTitle: `${SITE.title} on Twitter`,\n```\n\nto\n\n```js\nlinkTitle: `Follow ${SITE.title} on Twitter`;\n```\n\n## Conclusion\n\nThis is the brief specification of how you can customize this theme. You can customize more if you know some coding. For customizing styles, please read [this article](https://astro-paper.pages.dev/posts/customizing-astropaper-theme-color-schemes/). Thanks for reading.✌🏻\n";
						const data = {author:"Sat Naing",pubDatetime:new Date(1663909133000),modDatetime:new Date(1705323956066),title:"How to configure AstroPaper theme",featured:true,draft:false,tags:["configuration","docs"],description:"How you can make AstroPaper theme absolutely yours."};
						const _internal = {
							type: 'content',
							filePath: "/Users/dshar168/Projects/pf/pf/src/content/blog/how-to-configure-astropaper-theme.md",
							rawData: "\nauthor: Sat Naing\npubDatetime: 2022-09-23T04:58:53Z\nmodDatetime: 2024-01-15T13:05:56.066Z\ntitle: How to configure AstroPaper theme\nslug: how-to-configure-astropaper-theme\nfeatured: true\ndraft: false\ntags:\n  - configuration\n  - docs\ndescription: How you can make AstroPaper theme absolutely yours.",
						};

export { _internal, body, collection, data, id, slug };
