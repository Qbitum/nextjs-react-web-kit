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
// import { UseTranslation, useTranslation } from "next-i18next";
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
          {/* <h2>{locale}</h2>
          {locales?.map(l => (
            <Button key={l} onClick={handleClick(l)}>
              {l}
            </Button>
          ))

          } */}
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


// export default function DashboardPage() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const route = useRouter();
//   const auth = useContext<IAuthContext>(AuthContext);
//   const [age, setAge] = useState(0);
//   const { locale, locales, push } = useRouter();

//   const lang: { [key: string]: string } = {
//     en : "English",
//     sn : "සිංහල",
//     hn : "हिंदी"
//   }

//   console.log(lang.sn)

//   const keys = Object.keys(lang);

//   useEffect(() => {
//     document.title = 'Dashboard';
//   }, []);

//   // const handleLocaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const selectedLocale = e.target.id;
//   //   // push('/language', undefined, { locale: selectedLocale });
//   //   return <Language locale: selectedLocale/>
//   // };

//   const {t} = useTranslation();

//   return (
//     <PageWrapper>
//       <SubHeader>
//         <SubHeaderLeft heading="Home"></SubHeaderLeft>
//       </SubHeader>
//       <Page>
//         {/* <div className="bg-white rounded-2xl">
//           <div className="text-blue-900 text-md font-bold p-2">Banking</div>
//           <h2>{locale}</h2>
//           <div className="flex-col">
//           {keys?.map((l) => (
//             <div key={l}>
//               <Radio 
//                 id={l}
//                 name="locale"
//                 // value="abc"
//                 // checked={locale === l}
//                 onChange={handleLocaleChange}
//               />
//               <label htmlFor={l}>{lang[l]}</label>
//             </div>
//           ))}
//           </div>
//         </div> */}
//                <h1>{t('welcome')}</h1>
//               <div>{t('language')}</div>
//       </Page>
//     </PageWrapper>
//   );
// }



