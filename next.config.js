/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })
        return config
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    },
    images: {
        remotePatterns: [{ hostname: "*.public.blob.vercel-storage.com" }],
    },
    reactStrictMode : false
};

module.exports = nextConfig;
