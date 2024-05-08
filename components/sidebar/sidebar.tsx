import React, { FC, ReactNode,  useContext,  useState } from "react";
import { useRouter } from "next/router";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import { FaChartSimple, FaRightFromBracket, FaUser } from "react-icons/fa6";
import {Sidebar, SidebarItem } from "flowbite-react";

export type SidebarProps = {
  menu: {
    [key: string]: MenuItemModel;
  };
  horizontal?: boolean;
  id: string;
  className?: string;
};


interface ItemProps {
  children?: ReactNode;
  to?: string;
  as?: string;
  title?: string;
  id?: string;
  icon: any;
  activeItem?: string;
  isHorizontal?: boolean | undefined;
  isMore?: boolean | undefined;
  setActiveItem?(...args: unknown[]): unknown;
}

export const Item: FC<ItemProps> = ({
  to,
  as,
  id,
  title,
  icon,
  isMore,
  isHorizontal,
}) => {
  // For top menu
  const router = useRouter();
  // For aside menu
  const here =
    typeof to === "string" && to !== "/" && router.pathname.includes(to);
  const match = to !== "/" && router.pathname === to;

  function changePage(path: string) {
    if (path) {
      router.push(path, undefined, { shallow: true });
    }
  }
  return (
    <React.Fragment>
      {to ? (
        <SidebarItem
          active={match}
          href="#"
          onClick={() => {
            changePage(to);
          }}
          icon={icon}
        >
          {title}
        </SidebarItem>
      ) : (
        !isMore && !isHorizontal && <h2 key={id}>{title}</h2>
      )}
    </React.Fragment>
  );
};

export interface MenuItemModel {
  id?: string | number;
  text?: string;
  path?: string;
  icon?: any;
  isDisable?: boolean;
  subMenu?:
    | {
        id?: string | number;
        text?: string;
        path?: string;
        icon?: any;
        isDisable?: boolean;
      }[]
    | undefined;
}

export function SidebarComponent({
  menu,
  horizontal,
  id,
  className,
  ...props
}: SidebarProps) {
  const auth = useContext<IAuthContext>(AuthContext);
  const [isClosed, setClose] = useState(true);
  const handleLogout = () => {
    auth.logOut();
  };

  function fillMenu(
    data: MenuItemModel[] | any,
    parentId: string,
    rootId: string,
    isHorizontal: boolean | undefined,
    isMore: boolean | undefined
  ) {
    return Object.keys(data).map((item) => (
      <Item
        key={data[item].id}
        title={data[item].text}
        to={data[item].path}
        icon={data[item].icon}
      />
    ));
  }

  const menu2 = { ...menu };
  const menuOperator = { ...menu };
  delete menu2.approvedJobList;
  delete menuOperator.dashboard;
  delete menuOperator.jobList;

  
  return (
    <>
      <Sidebar aria-label="Sidebar with content separator example" className="bg-gray-200 rounded-xl p-4 m-4">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Logo href="#" 
          img="favicon.svg"
                    imgAlt="logo"
                    onClick={() => {
                      setClose(!isClosed);
                    }}>
          </Sidebar.Logo>

          <Sidebar.Item href="#" icon={FaChartSimple}>
            Dashboard
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={FaUser}>
            Profile
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={FaRightFromBracket}
                          onClick={handleLogout}>
            Log out
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </>
  );
}

