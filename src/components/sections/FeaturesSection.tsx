import type { FeatureCardProps } from "./_static/types";
import MainLayout from "../MainLayout";

const FeaturesSection = ({
  title,
  features,
}: {
  title?: React.ReactNode;
  features: FeatureCardProps[];
}) => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <h2 className="text-h1 text-center font-serif font-bold text-black">
          {title ?? (
            <>
              Explore, Earn, and <span className="text-primary">Belong</span>
            </>
          )}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
export default FeaturesSection;

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="border-primary/20 hover:bg-primary/10 flex flex-col items-center justify-start gap-4 rounded-2xl border bg-white p-6 text-center transition-colors duration-200 ease-out md:p-8">
    <div className="h-16 w-16">{icon}</div>
    <div className="flex flex-col gap-2">
      <h3 className="text-h2 font-semibold text-black">{title}</h3>
      <p className="text-h3 leading-relaxed text-balance text-black/60">
        {description}
      </p>
    </div>
  </div>
);
