import Link from 'next/link';

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
};

type PricingSectionProps = {
  title: string;
  plans: Plan[];
};

export default function PricingSection({ title, plans }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-12 text-center bg-blue-50">
      <h2 className="text-2xl font-bold mb-8 text-blue-700">{title}</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {plans.map((plan, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white rounded-lg shadow p-6 w-full md:w-64">
            <h3 className="text-lg font-bold mb-2 text-blue-700">{plan.name}</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
            <p className="mb-4 text-gray-600">{plan.description}</p>
            <ul className="mb-4 text-gray-700 text-sm text-left">
              {plan.features.map((f, i) => (
                <li key={i}>・{f}</li>
              ))}
            </ul>
            <Link
              href="/apply"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition w-full text-center mt-auto"
            >
              申し込む
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
} 