import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// 静态导出（output: export）必需：声明该路由为纯静态生成
export const dynamic = 'force-static';

const BASE_URL = SITE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/preview-versions/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
