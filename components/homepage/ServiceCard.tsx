export type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const ServiceCard = ({ content }: { content: ServiceCardProps }) => {
  return (
    <div className="relative group block p-2 h-full w-full">
      <div className="rounded-xl h-full w-full p-3 overflow-hidden border border-white/5 bg-black/40 backdrop-blur-xl transition-all duration-300 ease-in-out group-hover:border-white/10 group-hover:bg-black/30 relative z-20">
        <div className="relative z-50">
          <div className="p-3">
            <div className="mb-4 flex items-center text-white transition-all duration-300 ease-in-out group-hover:text-white">
              {content.icon}
            </div>
            <h4 className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text text-xl font-medium tracking-tight text-transparent transition-all duration-300 ease-in-out group-hover:to-white/60">
              {content.title}
            </h4>
            <p className="mt-4 text-zinc-400 tracking-tight text-sm transition-all duration-300 ease-in-out group-hover:text-zinc-300">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
