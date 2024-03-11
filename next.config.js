/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    // Збирає standalone білд. Такі білди не містять
    // в собі повної копії node_modules і тому займають ЗНАЧНО (~в 10 разів) менше місця
    output: 'standalone',
    env: {
        API_URL: process.env.NEXT_BACKEND_URL,
    },
};
