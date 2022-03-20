/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["placeimg.com"]

  }
  // env: {
  //   customKey: 'customValue',
  // },
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: 'https://gndx.dev',
  //       permanent: true,
  //     }
  //   ]
  // }
}

module.exports = nextConfig
