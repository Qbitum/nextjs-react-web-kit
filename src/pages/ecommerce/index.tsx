import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input
} from "@material-tailwind/react";

export default function Ecommerce() {
  return(
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
  )
}