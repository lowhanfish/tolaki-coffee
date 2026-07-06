import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
  /* config options here */
};

export default nextConfig;
