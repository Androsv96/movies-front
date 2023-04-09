import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({
  onClick,
  title,
  className,
  disabled = false,
}: Props) => {
  return (
    <button
      disabled={disabled}
      className={twMerge(
        `text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ${className}
        ${disabled && "bg-gray-500 cursor-not-allowed hover:bg-gray-500"}}`
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};