
export function TrustedBy() {
  const clients = [
    { name: "Palm HR", logo: "/lovable-uploads/6b1d392d-f7ac-4dfd-92d6-8948b64a26d7.png" },
    { name: "Deliveroo", logo: "/lovable-uploads/5ba411f0-4b0d-43ee-ae41-c39fb7123540.png" },
    { name: "LiveEG", logo: "/lovable-uploads/ec095f99-f59b-43ad-87fd-30872c62aa43.png" },
    { name: "BBC Scotland", logo: "/lovable-uploads/e31ee468-f989-4004-a1c4-93491d00a3ef.png" },
    { name: "Brighton & Hove Albion", logo: "/lovable-uploads/a9da50a1-8518-4d0f-9a1f-751018bb9ae4.png" },
    { name: "Camunda", logo: "/lovable-uploads/2e98eb3a-dba5-4243-8558-8498f1e7ba44.png" },
    { name: "Babbel", logo: "/lovable-uploads/0f212955-d29f-460f-b31b-673d4aec2274.png" },
    { name: "Li", logo: "/lovable-uploads/6b8f6ec9-02aa-4ae2-b699-d9d846f44a1d.png" },
    { name: "Uncut", logo: "/lovable-uploads/4b50ed90-f4f2-4f0c-a293-5a157c4c8c2c.png" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-10">Trusted by Industry Leaders</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
