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
  };
  
  module.exports = nextConfig;
  