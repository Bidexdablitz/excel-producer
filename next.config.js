/** @type {import('next').NextConfig} */
const nextConfig = {};
const { withAxiom } = require("next-axiom");

module.exports = module.exports = withAxiom({
    // ... your existing config
    ...nextConfig,
});
