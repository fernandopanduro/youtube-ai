import "../app/css/prices.css";
import Price from "./price";
import PriceBenefits from "./price-benefits";

const prices = [
  {
    title: "Starter",
    description:
      "Perfect for individuals looking to enhance their online presence.",
    price: 9,
    tokens: 30,
    isPopular: false,
  },
  {
    title: "Basic",
    description:
      "Ideal for professionals requiring frequent updates to their profiles.",
    price: 19,
    tokens: 100,
    isPopular: true,
  },
  {
    title: "Premium",
    description: "The best value with unlimited possibilities.",
    price: 29,
    tokens: 200,
    isPopular: false,
  },
];

type Props = {};

const Prices = (props: Props) => {
  return (
    <div className="pb-16 mx-auto max-w-7xl px-6 lg:px-8 relative">
      <div
        className="absolute inset-x-0 -top-40 -rotate-90 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 mb-0 bg-transparent">
        <div className="mx-auto max-w-7xl">
          <h2 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl">
            Buy <span className="text-primary-700">AI</span> Credits
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-700 leading-7">
          You have{" "}
          <span className="font-semibold text-blue-500">3 credits</span>. Join
          thousands of happy customers by buying more below.
        </p>
      </main>
      <div className="cards flex flex-col md:flex-row justify-center items-center gap-5 pb-10 mt-16">
        {prices.map((price, index) => (
          <Price
            key={index}
            price={price.price}
            tokens={price.tokens}
            title={price.title}
            isPopular={price.isPopular}
            description={price.description}
          />
        ))}
      </div>
      <PriceBenefits />
    </div>
  );
};

export default Prices;
