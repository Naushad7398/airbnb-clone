import { LuGlobe } from "react-icons/lu";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#f7f7f7] border-t mt-20">
            <div className="border-t border-gray-200">

                <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

                    <h2 className="mb-8 text-2xl font-semibold">
                        Inspiration for future getaways
                    </h2>

                    <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">

                        {/* Goa */}
                        <div className="text-center lg:text-left">
                            <h3 className="font-medium">
                                Goa
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Beach Villas
                            </p>
                        </div>

                        {/* Mumbai */}
                        <div className="text-center lg:text-left">
                            <h3 className="font-medium">
                                Mumbai
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Luxury Apartments
                            </p>
                        </div>

                        {/* Delhi */}
                        <div className="text-center lg:text-left">
                            <h3 className="font-medium">
                                Delhi
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                City Homes
                            </p>
                        </div>

                        {/* Pune */}
                        <div className="text-center lg:text-left">
                            <h3 className="font-medium">
                                Pune
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Business Stays
                            </p>
                        </div>

                        {/* Lonavala */}
                        <div className="text-center lg:text-left">
                            <h3 className="font-medium">
                                Lonavala
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Hill Villas
                            </p>
                        </div>

                        {/* Jaipur */}
                        <div className="text-center lg:text-left">
                            <h3 className="font-medium">
                                Jaipur
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Royal Heritage
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="max-w-7xl mx-auto px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Support */}
                    <div>
                        <h2 className="font-semibold mb-4">Support</h2>

                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="cursor-pointer hover:underline hover:text-black transition">Help Center</li>
                            <li className="cursor-pointer hover:underline hover:text-black transition">AirCover</li>
                            <li className="cursor-pointer hover:underline hover:text-black transition">Safety information</li>
                            <li className="cursor-pointer hover:underline hover:text-black transition">Cancellation options</li>
                            <li className="cursor-pointer hover:underline hover:text-black transition">Report concern</li>
                        </ul>
                    </div>

                    {/* Hosting */}
                    <div>
                        <h2 className="font-semibold mb-4">Hosting</h2>

                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="cursor-pointer hover:underline hover:text-black transition">Airbnb your home</li>
                            <li className="cursor-pointer hover:underline hover:text-black transition">Host resources</li>
                            <li className="cursor-pointer hover:underline hover:text-black transition">Community forum</li>
                            <li className="cursor-pointer hover:underline hover:text-black transition">Hosting responsibly</li>
                        </ul>
                    </div>

                    {/* Airbnb */}
                    <div>
                        <h2 className="font-semibold mb-4">Airbnb Clone</h2>

                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="cursor-pointer hover:underline hover:text-black transition">Newsroom</li>
                            <li className="cursor-pointer hover:underline hover:text-black transition">New features</li>
                            <li className="cursor-pointer hover:underline hover:text-black transition">Careers</li>
                            <li className="cursor-pointer hover:underline hover:text-black transition">Investors</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>

                        <h2 className="font-semibold mb-4">Follow Us</h2>

                        <div className="flex gap-5 text-2xl">

                            <FaFacebook className="cursor-pointer transition duration-300 hover:scale-110 hover:-translate-y-1" />

                            <FaInstagram className="cursor-pointer transition duration-300 hover:scale-110 hover:-translate-y-1" />

                            <FaTwitter className="cursor-pointer transition duration-300 hover:scale-110 hover:-translate-y-1" />

                            <FaLinkedin className="cursor-pointer transition duration-300 hover:scale-110 hover:-translate-y-1" />

                        </div>

                    </div>

                </div>

                <hr className="my-8" />

                <div className="flex flex-col lg:flex-row justify-between gap-4 text-sm text-gray-600">

                    <div className="flex flex-wrap gap-4">
                        <span>© 2026 Airbnb Clone</span>
                        <span>Privacy</span>
                        <span>Terms</span>
                        <span>Sitemap</span>
                        <span>Company Details</span>
                    </div>

                    <div className="flex items-center gap-5">

                        <span className="flex items-center gap-2">
                            <LuGlobe className="h-4 w-4" />
                            English (IN)
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="font-medium">₹</span>
                            INR
                        </span>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;