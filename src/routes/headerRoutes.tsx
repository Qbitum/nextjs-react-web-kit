import { Header } from '../../saastack-react/common/header';
import { appPagesMenu } from '../menu';

const headers = [
	{ path: appPagesMenu.dashboard.path, element: <Header /> },
	// { path: appPagesMenu.jobList.path, element: <Header /> },
	{ path: '/', element: null, exact: true },
	{
		path: `/*`,
		element: <Header />,
	},
];
export default headers;
