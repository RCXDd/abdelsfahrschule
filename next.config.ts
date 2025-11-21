import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/fahrschule-duesseldorf-:stadtteil",
        destination: "/fahrschule/:stadtteil",
      },
    ];
  },
};

export default nextConfig;
