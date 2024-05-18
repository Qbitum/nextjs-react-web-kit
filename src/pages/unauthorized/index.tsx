import { Typography, Card, CardBody, Button } from '@material-tailwind/react';
import router from 'next/router';

const UnauthorizedPage = () => {

  const redirectLogin = () => {
    router.push('/');
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-1/2 h-1/2 flex justify-center items-center">
        <CardBody className="text-center">
          <Typography variant="h2" color="blue-gray" className="mb-6">
            401 Unauthorized
          </Typography>
          <Typography className='p-8'>
            You do not have the necessary permissions to access this page. Please login with an authorized account.
          </Typography>
          <Button onClick={redirectLogin}>
            Login
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UnauthorizedPage;
