import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prabhanshu Sharma :: Web Designer',
  description:
    'Experienced Web Designer with 11+ years of expertise in creating user-centric, responsive digital experiences. Initially focused on web design, I have evolved to specialize in both UI Design (Figma, Photoshop, Illustrator, and UX principles) and UI Development (HTML5, CSS3, JavaScript, React.js). I bridge the gap between design and development, transforming ideas into visually appealing and interactive websites. Continuously learning and growing, I am currently expanding my front-end development skills with React.js to build dynamic, high-performance web applications.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-50 font-poppins">
          <div className="wraper">
            <div className="relative z-10">
              <Header/>
              <main>{children}</main>
              <Footer/>
            </div>
          </div>
      </body>
    </html>
  );
}
