import { useContext, useEffect, useState } from "react";
import {
  Page,
  PageWrapper,
  SubHeader,
  SubHeaderLeft
} from "@qbitum/react-flat-ui";
import { useRouter } from "next/router";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";

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

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (

    <PageWrapper>
      <SubHeader>
        <SubHeaderLeft heading="Home"></SubHeaderLeft>
      </SubHeader>

      <Page>
        <div className="bg-white rounded-2xl">
          <div className="text-blue-900 text-md font-bold p-2">Banking</div>
        </div>
      </Page>

    </PageWrapper>

  );
}
