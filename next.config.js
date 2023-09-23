/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Rule for handling binary files like canvas.node
    config.module.rules.push({
      test: /\.(node)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]', // You can adjust the output filename if needed
        },
      },
    });

    return config;
  },
  images: {
    domains: [ 's3-us-west-2.amazonaws.com', // Add your previous domain
    'www.tycoonstory.com',
    'images.inc.com',
    'helpdeskgeek.com',
    'blogassets.airtel.in',
    'www.pdfmate.com',
    'i0.wp.com',
    'www.talkhelper.com',
    'static.diffen.com',
    'lh3.googleusercontent.com',
    'encrypted-tbn0.gstatic.com',
  ],
    // Add your hostname here
    // You can add more domains if needed, e.g., ['s3-us-west-2.amazonaws.com', 'example.com']
  },
  // Your other Next.js configuration options go here
};

module.exports = nextConfig;
