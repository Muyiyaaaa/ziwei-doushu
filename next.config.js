/** @type {import('next').NextConfig} */
// GitHub Pages 项目页部署：workflow 里注入 NEXT_PUBLIC_BASE_PATH=/<仓库名>；
// 本地不设该变量时为空串，dev 与本地 build 行为不变。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  transpilePackages: ['lunar-javascript'],
};

module.exports = nextConfig;
