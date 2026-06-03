import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Anthropic SDK はネイティブ Node.js モジュールを使用するため
  // Next.js のバンドルから除外してサーバーサイドでそのまま実行させる
  serverExternalPackages: ["@anthropic-ai/sdk"],
};

export default nextConfig;
