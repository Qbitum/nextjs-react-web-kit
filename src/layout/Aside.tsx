import { FC, ReactNode, useRef } from "react";

interface IAsideHeadProps {
  children: ReactNode;
}
export const AsideHead: FC<IAsideHeadProps> = ({ children }) => {
  return <div className="aside-head">{children}</div>;
};

interface IAsideBodyProps {
  children: ReactNode;
}
export const AsideBody: FC<IAsideBodyProps> = ({ children }) => {
  return <div className="aside-body">{children}</div>;
};

interface IAsideFootProps {
  children: ReactNode;
}
export const AsideFoot: FC<IAsideFootProps> = ({ children }) => {
  return <div className="aside-foot">{children}</div>;
};

interface IAsideProps {
  children: any;
}
const Aside: FC<IAsideProps> = ({ children }) => {
  const asideStatus = true;

  // const { asideStyle, touchStatus, hasTouchButton, asideWidthWithSpace, x } = useAsideTouch();
  const asideStyle = "0rem";
  const touchStatus = false;
  const hasTouchButton = false;

  const isModernDesign = true;

  const constraintsRef = useRef(null);

  const mounted = true;

  return <div className="main_nav bg-sky-50">{children}</div>;
};

export default Aside;