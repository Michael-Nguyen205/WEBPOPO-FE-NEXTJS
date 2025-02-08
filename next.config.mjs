/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
import withBundleAnalyzer from '@next/bundle-analyzer';

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // Sử dụng AVIF và WebP nếu trình duyệt hỗ trợ
    minimumCacheTTL: 600, // Thời gian lưu cache tối thiểu là 600 giây (10 phút)
  },
};

// Kết hợp các plugin
export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(withNextIntl(nextConfig));
