import { Button } from "@/components/ui/button";

export type FeatureContentProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const FeatureContent = ( { content }: { content : FeatureContentProps } ) => {
  return (
    <div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        {content.icon}
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {content.title}
        </h3>
        <p className="max-w-lg text-neutral-400">
          {content.description}
        </p>
      </div>
      <div className="absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Button
          size="lg"
          variant="ghost"
          className="cursor-pointer font-medium"
        >
          Get started now
        </Button>
      </div>
    </div>
  );
};
