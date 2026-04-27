/** @type {import('next').NextConfig} */

// FIX: real HTTP security headers — critical for a security-focused portfolio
const securityHeaders = [
  // Prevents clickjacking attacks
  { key: "X-Frame-Options", value: "DENY" },
  // Prevents MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Controls referrer information
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disables browser features not needed for a portfolio
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Enables XSS protection in older browsers
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // HSTS — force HTTPS (enable only after confirming HTTPS works)
  // { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
]

const nextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  },

  // FIX: compress responses
  compress: true,

  // FIX: generate source maps only in development
  productionBrowserSourceMaps: false,

  images: {
    // FIX: allow optimized images — next/image will use these
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
}

module.exports = nextConfig
