import React, { FC, ReactNode, useContext, useState } from "react";
import { Sidebar as FlowbiteSidebar } from "@qbitum/react-flat-ui";
import { useRouter } from "next/router";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import { FaBell, FaRightFromBracket, FaUser } from "react-icons/fa6";


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
        <FlowbiteSidebar.Item
          active={match}
          href="#"
          onClick={() => {
            changePage(to);
          }}
          icon={icon}
        >
          {title}
        </FlowbiteSidebar.Item>
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

export function Sidebar({
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
      <FlowbiteSidebar collapsed={true} className="flex-col">
        <FlowbiteSidebar.Logo
          href="#"
          img="favicon.svg"
          imgAlt="logo"
          onClick={() => {
            setClose(!isClosed);
          }}
        ></FlowbiteSidebar.Logo>
        <FlowbiteSidebar.Items className=" flex-1">
          {/* top icons */}

          {/* <AllowedTo
            perform={Permission.SHOW_ALL_ICON_OPERATOR}
            no={() => (
              null
            )}
          > */}

          <FlowbiteSidebar.ItemGroup className="flex-grow">
            {fillMenu(menuOperator, id, id, horizontal, undefined)}
          </FlowbiteSidebar.ItemGroup>
          {/* </AllowedTo> */}

          {/* <AllowedTo
            perform={Permission.SHOW_ALL_ICON_ADMIN}
            no={() => (
              null
            )}
          > */}

          {menu2 !== undefined ? (
            <FlowbiteSidebar.ItemGroup className="flex-grow">
              {fillMenu(menu2, id, id, horizontal, undefined)}
            </FlowbiteSidebar.ItemGroup>
          ) : null}
          {/* </AllowedTo> */}

          {/* bottom icons */}
          <div className="border rounded-lg bg-white bg-opacity-30 m-4 mt-64">
            <FlowbiteSidebar.BottomGroup className="p-0">
              <FlowbiteSidebar.Item
                size={2}
                href="#"
                icon={FaBell}
              ></FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={FaUser}>
                {/* {auth?.tokenData?.name} */}
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item
                href="#"
                icon={FaRightFromBracket}
                onClick={handleLogout}
              ></FlowbiteSidebar.Item>
            </FlowbiteSidebar.BottomGroup>
          </div>
        </FlowbiteSidebar.Items>
      </FlowbiteSidebar>
    </>
  );
}
