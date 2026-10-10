import type { NextConfig } from "next";
import { PROJECTS } from "./projects";

const nextConfig: NextConfig = {
  // 각 경로를 해당 프로젝트의 Vercel 배포로 넘긴다 (Next.js multi-zones)
  async rewrites() {
    return PROJECTS.flatMap(({ path, origin }) => [
      { source: path, destination: `${origin}${path}` },
      { source: `${path}/:path+`, destination: `${origin}${path}/:path+` },
    ]);
  },
};

export default nextConfig;
