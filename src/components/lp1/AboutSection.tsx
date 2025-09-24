type AboutSectionProps = {
  title: string;
  description: string;
  features: string[];
};

export default function AboutSection({ title, description, features }: AboutSectionProps) {
  return (
    <section id="about" className="py-12 text-center bg-white">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">{title}</h2>
      <p className="mb-6 text-gray-700">{description}</p>
      <ul className="flex flex-col items-center gap-2">
        {features.map((feature, idx) => (
          <li key={idx} className="text-blue-600">・{feature}</li>
        ))}
      </ul>
    </section>
  );
} 