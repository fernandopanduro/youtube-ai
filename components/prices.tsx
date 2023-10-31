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
    <div className="bg-white pb-16 mx-auto max-w-7xl px-6 lg:px-8">
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 mb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            Buy <span className="text-primary-700">AI</span> Credits
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-500 sm:mb-10">
          You have{" "}
          <span className="font-semibold text-blue-500">3 credits</span>. Join
          thousands of happy customers by buying more below.
        </p>
      </main>
      <div className="cards">
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
