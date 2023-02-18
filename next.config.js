/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: ['./src'],
        prependData: `@import "~@styles/variables.scss"; @import "~@styles/mixins.scss";`,
    },
};

module.exports = nextConfig;
