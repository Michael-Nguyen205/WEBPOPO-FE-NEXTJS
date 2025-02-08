export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      sitemap: 'https://your-website.com/sitemap.xml',
    }
  }
  