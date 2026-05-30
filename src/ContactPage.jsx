import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { ScrollIndicator } from './HeroSection';

const ContactPage = () => {
  



  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "ptitiya@asu.edu",
      link: "mailto:ptitiya@asu.edu"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+1 (480) 764 9256",
      link: "tel:+14807649256"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Tempe, AZ, USA",
      link: null
    }
    ,
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "LinkedIn.com/in/prasham-titiya",
      link: "https://www.linkedin.com/in/prasham-titiya"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "github.com/prasham1515",
      link: "https://github.com/prasham1515"
    }
  ];

  

  return (
    <div className="bg-black text-white flex items-start px-4 sm:px-8 py-8 relative">

      {/* Max-width container with flex layout */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-36">

        {/* Left Label: "CONTACT /" */}
        <div className="pt-1.5 hidden lg:block">
          <p
            className="text-m font-semibold text-[#8A8A8A] tracking-[0.2em] uppercase whitespace-nowrap"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            CONTACT /
          </p>
        </div>

        {/* Main Content Area - Scrollable */}
        <div className="flex-1 pr-0 lg:pr-4">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-0">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center border border-white">
                    <span className="text-white">{info.icon}</span>
                  </div>
                  <div>
                    <p
                      className="text-xs text-[#8A8A8A] uppercase tracking-wider"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-white hover:text-black hover:bg-white transition-colors px-2 py-1 rounded"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className="text-sm text-white"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action - right column, nudged left on large screens */}
            <div className="mt-0 p-6 bg-black rounded-lg border border-white flex flex-col justify-center lg:-translate-x-[6.75rem] transform">
              <h3
                className="text-lg font-bold mb-2 text-white"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Still have questions?
              </h3>
              <p
                className="text-sm text-[#8A8A8A] mb-4"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Can't find the answer you're looking for? Feel free to reach out directly.
              </p>
              <a
                href="mailto:ptitiya@asu.edu"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black border-2 border-white text-white text-sm font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Email Me
                <Mail size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollIndicator targetId="hero-section" label="Top" />
    </div>
  );
};
export default ContactPage;