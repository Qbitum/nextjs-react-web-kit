import { useContext, type ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import i18n from '@/i18n';
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
  Menu,
  MenuList,
  MenuItem,
  MenuHandler,
} from "@material-tailwind/react";
import { FaBell, FaGear, FaGlobe } from 'react-icons/fa6';

export type HeaderProps = {
  children?: ReactNode;
  logOutEvent?: (e: any) => void;
};

export function Header({ children, logOutEvent }: HeaderProps) {
  const auth = useContext<IAuthContext>(AuthContext)

  const handleLogout = () => {
    auth.logOut();
  }

  const router = useRouter();
  // TODO : get the client infomation and user details from session hook

  // i18n integration
  const [locale, setLocale] = useState(i18n.language)
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  const switchLanguage = (value: any) => {
    i18n.changeLanguage(value);
  }

  // language menu component
  const languages = [
    {
      label: "English",
      code: 'en'
    },
    {
      label: "हिंदी",
      code: 'hn'
    },
    {
      label: "සිංහල",
      code: 'sn'
    }
  ];

  function LanguageMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <IconButton variant="text" color="white">
            <FaGlobe
              className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                }`}
            />
          </IconButton>
        </MenuHandler>
        <MenuList className="p-1">
          {languages.map(({ label, code }, key) => {
            const isLastItem = key === languages.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={() => {
                  switchLanguage(code)
                  closeMenu()
                }}
                className={`flex items-center gap-2 rounded ${isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
                  }`}
              ><Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }

  return (
    < Navbar
      variant="gradient"
      color="teal"
      className="mx-auto px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>

        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="white"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }} crossOrigin={undefined} />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="white">
            <FaGear className="h-4 w-4" />
          </IconButton>
          <LanguageMenu />
          <IconButton variant="text" color="white">
            <FaBell className="h-4 w-4" />
          </IconButton>
        </div>
      </div>
    </Navbar >);
}

Header.defaultProps = {
  children: '',
  logOutEvent: (e: any) => {
    console.warn('Header:logOutEvent -> not implemented', e);
  },
};
