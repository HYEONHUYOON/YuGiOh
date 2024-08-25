"use strict";

/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/media/', // 파일이 저장될 경로
          publicPath: '/_next/static/media/', // Next.js가 접근할 수 있는 경로
        },
      },
    });

    return config;
  },
  images: {
    domains: ['images.ygoprodeck.com'],
  },
};
  
