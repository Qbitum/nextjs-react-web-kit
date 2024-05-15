'use client'
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input
} from "@material-tailwind/react";
import { AllowedTo } from "@/context/react-abac/src";
import { AccessDeniedPage } from "QComponents/access-denied-component/access-denied";
import { Permission } from "@/models/User";



export type StatusCardProps = {
  jobStatus: string;
  totalNoOfJobs: number;
};

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const route = useRouter();

  const auth = useContext<IAuthContext>(AuthContext);
  const [age, setAge] = useState(0);

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <AllowedTo
        perform={Permission.SHOW_DASHBOARD}
        no={() => (
          <AccessDeniedPage page={"dashboard"} />
        )}
      >
        <div className="flex p-32 justify-center h-screen">
          <Card className="mt-6 w-96">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                UI/UX Review Check,
              </Typography>
              <Typography>
                Welcome  to Next.js React Template
              </Typography>
              <div>{t('language')}</div>
              <div className="w-72">
                <Input label="Username" crossOrigin={undefined} />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
      </AllowedTo>
    </>
  );
}

