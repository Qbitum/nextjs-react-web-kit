import { AllowedTo } from "@/context/react-abac/src";
import { Permission } from "@/models/User";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input
} from "@material-tailwind/react";
import { AccessDeniedPage } from "QComponents/access-denied-component/access-denied";

export default function Ecommerce() {
  return (
    <AllowedTo
      perform={Permission.SHOW_ECOMMERCE}
      no={() => (
        <AccessDeniedPage page={"ecommerce"} />
      )}
    >
      <div className="flex p-32 justify-center h-screen">
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check,
            </Typography>
            <Typography>
              Welcome  to Ecommerce Page  React Template
            </Typography>
            {/* <div>{t('language')}</div> */}
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
  )
}