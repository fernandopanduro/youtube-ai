import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import "../app/css/prices.css";

type Props = {
  title: string;
  description: string;
  price: number;
  tokens: number;
  isPopular: boolean;
};

const Price = ({ title, description, price, tokens, isPopular }: Props) => {
  return (
    <div
      className={`flex items-center justify-center flex-col text-center color-white w-64 p-4 shadow-lg rounded-2xl dark:bg-gray-800 card hover:scale-[1.2] ${
        isPopular ? "bg-blue-200" : "bg-white"
      }`}>
      <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
        {title}
      </p>
      <div className="flex flex-col gap-4">
        <p className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-1">
          ${price}
          <Badge>{tokens} credits</Badge>
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-100">
          {description}
        </p>
        <Button>Choose {title}</Button>
      </div>
    </div>
  );
};

export default Price;
