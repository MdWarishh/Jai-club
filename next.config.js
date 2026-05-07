module.exports = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "jaiclub.house",
          },
        ],
        destination: "https://www.jaiclub.house/:path*",
        permanent: true,
      },
    ];
  },
};