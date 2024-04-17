import React from 'react';
import { useRouter } from 'next/router';
import Mounted from '../../saastack-react/ui/mounted/Mounted';
import { pathToRoute } from '@/helpers/helpers';
import headers from '@/routes/headerRoutes';

const HeaderRoutes = () => {
	const router = useRouter();

	const PAGE = headers.find((key) => {
		return key.path.substring(key.path?.length - 2) === '/*'
			? router.pathname.includes(key.path.substring(0, key.path?.length - 2))
			: key.path === pathToRoute(router.pathname);
	});

	if (PAGE) return <Mounted>{PAGE?.element}</Mounted>;
	return null;
};

export default HeaderRoutes;
