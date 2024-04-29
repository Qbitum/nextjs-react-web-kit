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
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { Button } from "flowbite-react";

export type StatusCardProps = {
  jobStatus: string;
  totalNoOfJobs: number;
};

export default function DashboardPage(locale: any) {
  // console.log("Acess token : ", auth.token);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const route = useRouter();

  const auth = useContext<IAuthContext>(AuthContext);
  const [age, setAge] = useState(0);
  const {push} = useRouter();

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  
  const { t : translate } = useTranslation('dashboard')
  const handleClick = ()  => {
    push('/dashboard')
  }
  return (

    <PageWrapper>
      <SubHeader>
        <SubHeaderLeft heading="Home"></SubHeaderLeft>
      </SubHeader>

      <Page>
        <div className="bg-white rounded-2xl">
          <div className="text-blue-900 text-md font-bold p-2">Banking page 2</div>
          <h2>{locale}</h2>
          <h2>{translate('hello world')}</h2>

          <Button onClick={handleClick}>
            Go to Dashboard
          </Button>

        </div>
      </Page>

    </PageWrapper>

  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dashboard'])), // Correct the function name
    },
  };
}
