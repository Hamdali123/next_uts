import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const portfolioData = {
  name: 'Muhamad Hamdali',
  title: 'Spesialis Jaringan',
  bio: "Saya adalah seorang spesialis jaringan yang bersemangat dalam merancang, mengimplementasikan, dan mengelola infrastruktur jaringan yang andal dan aman. Dengan pemahaman mendalam tentang protokol jaringan, keamanan, dan teknologi terkini, saya berfokus pada menciptakan solusi jaringan yang efisien dan skalabel untuk memenuhi kebutuhan bisnis modern.",
  contact: {
    email: 'hamdali.dev@example.com',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com/in',
    },
  },
  skills: [
    { name: 'Routing & Switching', level: 95 },
    { name: 'Cisco & Mikrotik', level: 90 },
    { name: 'Network Security', level: 85 },
    { name: 'TCP/IP Suite', level: 95 },
    { name: 'Firewall & VPN', level: 80 },
    { name: 'Python (Automasi)', level: 75 },
    { name: 'Monitoring Jaringan', level: 85 },
    { name: 'Wireless Networking', level: 80 },
  ],
  projects: [
    {
      title: 'Desain & Implementasi Jaringan Kantor',
      description: 'Merancang dan mengimplementasikan infrastruktur jaringan untuk kantor cabang baru, mencakup konfigurasi router, switch, dan access point untuk memastikan konektivitas yang optimal dan aman bagi seluruh karyawan.',
      tags: ['Cisco', 'Routing', 'Switching', 'VLAN', 'Network Design'],
      image: PlaceHolderImages.find(img => img.id === 'project-1') as ImagePlaceholder,
      links: {
        github: 'https://github.com',
        live: '#',
      },
    },
    {
      title: 'Konfigurasi Jaringan Nirkabel Skala Besar',
      description: 'Menerapkan solusi jaringan nirkabel terpusat untuk area publik, mengelola ratusan access point menggunakan wireless controller untuk menyediakan cakupan Wi-Fi yang handal dan manajemen yang mudah.',
      tags: ['Mikrotik', 'Wireless', 'CAPsMAN', 'Hotspot', 'Network Management'],
      image: PlaceHolderImages.find(img => img.id === 'project-2') as ImagePlaceholder,
      links: {
        github: 'https://github.com',
        live: '#',
      },
    },
    {
      title: 'Analisis dan Keamanan Jaringan',
      description: 'Melakukan analisis keamanan jaringan menggunakan tools seperti Wireshark dan Nmap untuk mendeteksi anomali. Mengimplementasikan kebijakan firewall dan VPN untuk melindungi data dan sumber daya perusahaan.',
      tags: ['Network Security', 'Firewall', 'VPN', 'Wireshark', 'Intrusion Detection'],
      image: PlaceHolderImages.find(img => img.id === 'project-3') as ImagePlaceholder,
      links: {
        github: 'https://github.com',
        live: '#',
      },
    },
  ],
};

export type PortfolioData = typeof portfolioData;
