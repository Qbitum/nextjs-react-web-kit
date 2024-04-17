import React from 'react';
import dynamic from 'next/dynamic';
import { appPagesMenu } from '../menu';

const DefaultAside = dynamic(() => import('../layout/DefaultAside'));

const asides = [
	{ path: appPagesMenu.dashboard.path, element: null, exact: true },
	// { path: appPagesMenu.jobList.path, element: null, exact: true }, 
	{ path: '/', element: null, exact: true },
	{ path: '/*', element: <DefaultAside />, exact: true },
];

export default asides;
