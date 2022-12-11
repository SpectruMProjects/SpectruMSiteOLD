import { CardProps } from "./Card.props";

export function Card({ children, className }: CardProps): JSX.Element {
  return (
    <div className={(className ?? "") + " bg-base m-4 p-4 rounded-lg"}>
      {children}
    </div>
  );
}
