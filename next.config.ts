import type { NextConfig } from "next"
import bundleAnalyzer from "@next/bundle-analyzer"

const withBundleAnanlyzer = bundleAnalyzer({
	  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
			  protocol: "https",
			  hostname: "**",
			},
		],
	},
}

export default withBundleAnanlyzer(nextConfig)
