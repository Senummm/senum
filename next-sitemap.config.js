module.exports = {
  siteUrl: process.env.SITE_URL || 'https://senum.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
