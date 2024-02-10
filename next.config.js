const path = require('path');
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    output: 'standalone',
};

module.exports = withNextIntl(nextConfig);
