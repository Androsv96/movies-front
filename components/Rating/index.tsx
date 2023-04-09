import { twMerge } from "tailwind-merge";

interface Props {
  rating: number;
  className: string;
}

export const Rating = ({ rating, className }: Props) => {
  return (
    <p
      className={twMerge(
        `absolute font-bold p-2 rounded-lg w-8 h-8 flex text-white justify-center items-center bg-yellow-500 md:w-10 md:h-10 ${className}`
      )}
    >
      {rating}
    </p>
  );
};
