import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import { Card, TextInput } from "flowbite-react";
import { useTranslation } from "react-i18next";



export type StatusCardProps = {
  jobStatus: string;
  totalNoOfJobs: number;
};

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const route = useRouter();

  const auth = useContext<IAuthContext>(AuthContext);
  const [age, setAge] = useState(0);
  // const {locale, locales, push} = useRouter();

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);


  const { t } = useTranslation();

  return (
    <>
      <Card href="#" className="max-w-sm center flex items-center">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Welcome  to Next.js React Template
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <div className="bg-white rounded-2xl">
            <div className="text-blue-900 text-md font-bold p-2">Welcome message</div>

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
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>


    </>
  );
}

