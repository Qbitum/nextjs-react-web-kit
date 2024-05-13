import React, { FC, ReactNode, useContext, useState } from "react";
import router, { useRouter } from "next/router";
import { FaCartShopping, FaChartBar, FaGear, FaInbox, FaPowerOff, FaUser } from "react-icons/fa6";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";

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
        <ListItem onClick={() => {
          changePage(to);
        }}>
          <ListItemPrefix>
            {icon}
          </ListItemPrefix>
          {title}
        </ListItem>
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

  const handleDashboard = () => {
    router.push('/dashboard')
  }

  const handleMyjobs = () => {
    router.push('/myjobs')
  }

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

  const { t } = useTranslation();

  return (
    <>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 flex items-center gap-4 p-4">
          <img src="favicon.svg" alt="brand" className="h-8 w-8" />
          <Typography variant="h5" color="blue-gray">
            Next React template
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <FaChartBar className="h-5 w-5" onClick={handleDashboard} />
            </ListItemPrefix>
            {t('Dashboard')}
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FaCartShopping className="h-5 w-5" />
            </ListItemPrefix>
            E-Commerce
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FaInbox className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FaUser className="h-5 w-5" />
            </ListItemPrefix>
            {t('User')}
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FaGear className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FaPowerOff className="h-5 w-5" />
            </ListItemPrefix>
            {t('Sign Out')}
          </ListItem>
        </List>
      </Card>

    </>
  );
}