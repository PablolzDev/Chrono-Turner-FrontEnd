/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
      includePaths: ['./src/app/Styles'], // ajusta esto a la ubicación de tus archivos SCSS
      styledComponents: true,
    },
  }
  
  export default nextConfig;