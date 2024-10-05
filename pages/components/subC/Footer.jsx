import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left section: Company Info */}
          <div className="mb-8 md:mb-0">
            <Image src="/images/logo.png" alt="Pitchhme" width={112} height={60} className="mb-4" />
            <p>205 W 28th St<br />New York, NY 10001</p>
          </div>

          {/* Center sections: Links */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="text-white font-semibold mb-2">Services</h3>
              <ul>
                <li><Link href="/paidSocial" className="hover:text-white">Paid Social</Link></li>
                <li><Link href="/paidSearch" className="hover:text-white">Paid Search</Link></li>
                <li><Link href="/socialMedia" className="hover:text-white">Social Media</Link></li>
                <li><Link href="/webDevelopment" className="hover:text-white">Web Development</Link></li>
                <li><Link href="/influencerMarketing" className="hover:text-white">Influencer Marketing</Link></li>
                <li><Link href="/communityManagement" className="hover:text-white">Community Management</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Others</h3>
              <ul>
                <li><Link href="/work" className="hover:text-white">Work</Link></li>
                <li><Link href="/blogs" className="hover:text-white">Blogs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Company</h3>
              <ul>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/partners" className="hover:text-white">Partners</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Right section: Social Icons */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="https://www.linkedin.com/company/pitchhme" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Image src="/images/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://twitter.com/pitchhme" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Image src="/images/x-icon.png" alt="Twitter" width={24} height={24} />
            </a>
            <a href="https://github.com/pitchhme" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Image src="/images/github-icon.png" alt="GitHub" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Bottom section: Legal */}
        <div className="flex flex-col md:flex-row justify-between mt-8 text-sm">
          <p className="text-gray-500">© {new Date().getFullYear()} Pitchhme Inc.</p>
          <div className="space-x-4">
            <Link href="/privacy" className="text-gray-500 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white">Terms of Service</Link>
          </div>
        </div>

        {/* Operational Status */}
        <div className="mt-8">
          <span className="flex items-center space-x-2 text-sm text-gray-500">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span>All systems operational</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;