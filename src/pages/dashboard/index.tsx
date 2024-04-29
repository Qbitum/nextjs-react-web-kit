import { useContext, useEffect, useState, useTransition } from "react";
import {
  Page,
  PageWrapper,
  SubHeader,
  SubHeaderLeft
} from "@qbitum/react-flat-ui";
import { useRouter } from "next/router";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import { UseTranslation, useTranslation } from "next-i18next";
import { Button, Radio } from "flowbite-react";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Language from '../language'


// export type StatusCardProps = {
//   jobStatus: string;
//   totalNoOfJobs: number;
// };

// export default function DashboardPage() {
//   // console.log("Acess token : ", auth.token);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const route = useRouter();

//   const auth = useContext<IAuthContext>(AuthContext);
//   const [age, setAge] = useState(0);
//   const {locale, locales, push} = useRouter();

//   useEffect(() => {
//     document.title = 'Dashboard';
//   }, []);
  
//   const handleClick = (l: string) => () => {
//     push('/language', undefined, {locale: l})
//   }
//   const { t : translate } = useTranslation('dashboard')
//   return (

//     <PageWrapper>
//       <SubHeader>
//         <SubHeaderLeft heading="Home"></SubHeaderLeft>
//       </SubHeader>

//       <Page>
//         <div className="bg-white rounded-2xl">
//           <div className="text-blue-900 text-md font-bold p-2">Banking</div>
//           <h2>{locale}</h2>
//           {locales?.map(l => (
//             <Button key={l} onClick={handleClick(l)}>
//               {l}
//             </Button>
//           ))

//           }
//         </div>
//       </Page>

//     </PageWrapper>

//   );
// }

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const route = useRouter();
  const auth = useContext<IAuthContext>(AuthContext);
  const [age, setAge] = useState(0);
  const { locale, locales, push } = useRouter();

  const lang: { [key: string]: string } = {
    en : "English",
    sn : "සිංහල",
    hn : "हिंदी"
  }

  console.log(lang.sn)

  const keys = Object.keys(lang);

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  const handleLocaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedLocale = e.target.id;
    // push('/language', undefined, { locale: selectedLocale });
    return <Language locale: selectedLocale/>
  };

  return (
    <PageWrapper>
      <SubHeader>
        <SubHeaderLeft heading="Home"></SubHeaderLeft>
      </SubHeader>
      <Page>
        <div className="bg-white rounded-2xl">
          <div className="text-blue-900 text-md font-bold p-2">Banking</div>
          <h2>{locale}</h2>
          <div className="flex-col">
          {keys?.map((l) => (
            <div key={l}>
              <Radio 
                id={l}
                name="locale"
                // value="abc"
                // checked={locale === l}
                onChange={handleLocaleChange}
              />
              <label htmlFor={l}>{lang[l]}</label>
            </div>
          ))}
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
}



