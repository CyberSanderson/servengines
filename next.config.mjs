/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.pixelchefs.com',
      'www.myresponsee.com',
      'static.wingify.com',
      'tenacity.io',
      'webfeatures.co',
      'benchmarkcrm.com',
      'www.sitecentre.com.au',
      'neilpatel.com',
      'www.flyinghippo.com',
      'public-images.interaction-design.org',
      'boagworld.sirv.com',
      'www.bigscal.com',
      'i.ytimg.com',
      'www.digitalsilk.com',
      'digitalguider.com',
      'getwpfunnels.com',
      'www.leadsquared.com',
      'content.app-sources.com',
      'textdrip.com',
      'brandlume.com',
      'semify.com',
      'images.unsplash.com', // ✅ Added Unsplash here
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
