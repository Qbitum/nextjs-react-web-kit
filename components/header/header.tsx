import { useContext, type ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import i18n from '@/i18n';


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

  return (
    < Navbar fluid className='bg-primary-100 sticky top-0 z-10'>
      <div className="flex md:order-2 h-6 sm:h-9">
        <Dropdown
          inline
          arrowIcon={false}
          value={locale}
          label={<Avatar img="/imgs/translation.png" />} onChange={switchLanguage}>
          <Dropdown.Item onClick={() => {
            switchLanguage('en')
          }} value='en'>English</Dropdown.Item>
          <Dropdown.Item onClick={() => {
            switchLanguage('hn')
          }} value='hn'>हिंदी</Dropdown.Item>
          <Dropdown.Item onClick={() => {
            switchLanguage('sn')
          }} value='sn'>සිංහල</Dropdown.Item>
        </Dropdown>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar className='h-6 px-4' alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block truncate text-sm font-medium">{auth?.tokenData?.email}</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <div className='flex ml-auto'>
        {/* <HeaderText size='sm' fontWeight='normal'>{tenantName}</HeaderText>
        <Separator color='white' />
        <HeaderText size='sm' fontWeight='normal'>{userName}</HeaderText>
        <Separator color='white' /> */}
      </div>
    </ Navbar>
  );
}

Header.defaultProps = {
  children: '',
  logOutEvent: (e: any) => {
    console.warn('Header:logOutEvent -> not implemented', e);
  },
};
