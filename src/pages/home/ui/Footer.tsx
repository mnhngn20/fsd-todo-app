import { Link } from '@tanstack/react-router';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="hover:text-blue-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-blue-300">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="hover:text-blue-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-blue-300">
                  System Status
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-blue-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-blue-300">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 TaskMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
