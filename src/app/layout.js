import './globals.css';
import { Navbar } from '../components';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Blog App',
    description: 'This is a simple Blog App',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-[#333]`}>
              <Navbar />
              {children}
            </body>
        </html>
    );
}
