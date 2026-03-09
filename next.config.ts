import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

const version = fs
  .readFileSync(path.join(process.cwd(), "VERSION"), "utf-8")
  .trim();

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
  },
};

export default nextConfig;
