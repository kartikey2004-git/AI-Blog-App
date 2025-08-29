import React from "react";

const footerData = [
  {
    title: "Features",
    links: [
      "AI Blog Generator",
      "Content Suggestions",
      "Smart Search",
      "Comment System",
    ],
  },
  {
    title: "Resources",
    links: ["Docs", "API Reference", "Guides", "Community"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Support", "Feedback", "System Status"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Security"],
  },
];


const Footer = () => {
  return (
    <div className="bg-white text-gray-700 py-12 px-6 border-t border-gray-200">
      <div
        className="
      hidden lg:grid  lg:col-span-4 

      max-w-6xl mx-auto  md:grid-cols-2 lg:grid-cols-6 gap-10"
      >
        {/* Brand / Intro */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900">AI BlogX</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            AI BlogX is your personal AI-powered blogging platform. Write
            smarter, publish faster, and connect with readers through
            intelligent tools made for creators.
          </p>
        </div>

        {/* Footer Links */}
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
        © 2025 AI BlogX — All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
