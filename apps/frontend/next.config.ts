import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "1337",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "projet-site-web-asselda-production.up.railway.app",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
