import { useContext, useEffect, useState, useTransition } from "react";
import { useRouter } from "next/router";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import { Select, Navbar,TextInput } from "flowbite-react";
import { useTranslation } from "react-i18next";
import i18n from '../../i18n';



export type StatusCardProps = {
  jobStatus: string;
  totalNoOfJobs: number;
};

export default function DashboardPage() {
  // console.log("Acess token : ", auth.token);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const route = useRouter();

  const auth = useContext<IAuthContext>(AuthContext);
  const [age, setAge] = useState(0);
  // const {locale, locales, push} = useRouter();

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  
  // const handleClick = (l: string) => () => {
  //   push('/language', undefined, {locale: l})
  // }
  // const { t : translate } = useTranslation('dashboard')
  const {t} = useTranslation();

  const [locale, setLocale] = useState(i18n.language)

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  const handleChange = (event : any) => {
      i18n.changeLanguage(event.target.value);

  }

  return (
<>
      <Navbar className="flex w-full bg-gray-200 rounded-lg">
<div className="flex mr-96 ml-2">
        <h1>Home</h1>
        </div>
      <div className=" ml-96 text-right">
              <label>Select Language</label>
              <Select value = {locale}  onChange={handleChange}>
                <option value="en">English</option>
                <option value="hn">हिंदी</option>
                <option value="sn">සිංහල</option>
              </Select>
              </div>
      </Navbar>

        <div className="bg-white rounded-2xl">
          <div className="text-blue-900 text-md font-bold p-2">Banking</div>
          {/* <h2>{locale}</h2>
          {locales?.map(l => (
            <button key={l} onClick={handleClick(l)}>
              {l}
            </button>
          ))

          } */}
              <h1>{t('welcome')}</h1>
              <div>{t('language')}</div>
              <div>
              <TextInput
              id="jobNumber"
              type="jobNumber"
              className="bg-gray-100 rounded-xl border-gray-800 border-2"
              placeholder={t('place holder')}
            />
              </div>
        </div>
    
    </>
  );
}

