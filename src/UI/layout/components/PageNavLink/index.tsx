import { FC } from "react";

interface Props {
  navKey: string | string[];
  className?: string;
  activeClassName?: string;
  activeSubClassName?: string;
  children: JSX.Element;
  active?: boolean;
  url: string;
  sublink?: boolean;
}

export const PageNavLink: FC<Props> = (props) => {
  const { className, children } = props;

  return <div className={className}>{children}</div>;
};
