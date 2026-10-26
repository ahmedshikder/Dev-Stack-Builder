
import logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
                    <div className="flex flex-col items-center text-center lg:col-span-2 lg:items-start lg:text-left">
                        <img
                            src={logo}
                            alt="Dev Stack"
                            className="mb-4 w-36"
                        />
                        <p className="max-w-sm text-sm leading-6 text-gray-600">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-5 text-sm font-medium">
                            <a href="">GitHub</a>
                            <span className='lg:hidden'>•</span>
                            <a href="">Twitter</a>
                            <span className='lg:hidden'>•</span>
                            <a href="">LinkedIn</a>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <h3 className="mb-4 font-bold text-gray-900">PRODUCT</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Technologies</a>
                            </li>
                            <li>
                                <a href="">Projects</a>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden lg:block'>
                        <h3 className="mb-4 font-bold text-gray-900">COMPANY</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                            <li>
                                <a href="">Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden lg:block'>
                        <h3 className="mb-4 font-bold text-gray-900">LEGAL</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-2 border border-gray-100 px-2 py-6 text-xs text-gray-400 sm:px-3 sm:text-sm">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-5">
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
