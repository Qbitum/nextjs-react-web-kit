import { useContext, useEffect, useState, useTransition } from "react";
import {
  Page,
  PageWrapper,
  Select,
  SubHeader,
  SubHeaderLeft,
  TextInput
} from "@qbitum/react-flat-ui";
import { useRouter } from "next/router";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import { Button, Radio } from "flowbite-react";
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
  

  const {t} = useTranslation();

  const [locale, setLocale] = useState(i18n.language)

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  const handleChange = (event : any) => {
      i18n.changeLanguage(event.target.value);

  }

  return (

    <PageWrapper>
      <SubHeader>
        <SubHeaderLeft heading="Home"></SubHeaderLeft>
      <div>
              <label>Select Language</label>
              <Select value = {locale}  onChange={handleChange}>
                <option value="en">English</option>
                <option value="hn">हिंदी</option>
                <option value="sn">සිංහල</option>
              </Select>
              </div>
      </SubHeader>

      <Page>
        <div className="bg-white rounded-2xl">
          <div className="text-blue-900 text-md font-bold p-2">Banking</div>

              <h1>{t('welcome')}</h1>
              <div>{t('language')}</div>
              <div>
              <TextInput
              id="jobNumber"
              type="jobNumber"
              placeholder={t('place holder')}
            />
              </div>
        </div>
      </Page>

    </PageWrapper>

  );
}

