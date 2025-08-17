
import React from 'react';

const ClientsMarquee = () => {
  const clients = [
    { name: "", logo: "/assets/companies/com_FomiaNaturals1.png" },
    { name: "", logo: "/assets/companies/com_TheBaseBoutique.png" },
    { name: "", logo: "/assets/companies/com_FomiaNaturals1.png" },
    { name: "", logo: "/assets/companies/com_TheBaseBoutique.png" },
    { name: "", logo: "/assets/companies/com_FomiaNaturals1.png" },
    { name: "", logo: "/assets/companies/com_TheBaseBoutique.png" },
    { name: "", logo: "/assets/companies/com_FomiaNaturals1.png" },
    { name: "", logo: "/assets/companies/com_TheBaseBoutique.png" }
  ];

  return (
    <section className="py-10 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto mb-8">
        <h2 className="text-3xl font-bold text-center mb-4">Trusted by Industry Leaders</h2>
        <p className="text-center text-muted-foreground">
          Proudly partnering with visionary brands across the globe.
        </p>
      </div>
      
      <div className="relative">
        <div className="flex space-x-16 animate-marquee hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 min-w-max group cursor-pointer"
            >
              {/* <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {client.logo}
              </div> */}

              <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-24 max-w-24 object-contain"
                />
              </div>

              <span className="text-xl font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
