import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { AuthContext, IAuthContext } from 'react-oauth2-code-pkce';
import { AbacProvider } from "../context/react-abac/src";
import { rules } from '@/abac.config';
import { logger } from '@/helpers/logger';

interface IWrapperContainerProps {
	children: ReactNode;
	className?: string;
}
export const WrapperContainer: FC<IWrapperContainerProps> = ({ children, className, ...props }) => {
	const rightPanel = true;
	return (
		<div
			className={classNames(
				'wrapper flex-1 bg-slate-200 overscroll-none',
				{ 'wrapper-right-panel-active': rightPanel },
				className,
			)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</div>
	);
};
WrapperContainer.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
WrapperContainer.defaultProps = {
	className: undefined,
};

interface IWrapper {
	children: ReactNode;
}
const Wrapper: FC<IWrapper> = ({ children }) => {

	const auth = useContext<IAuthContext>(AuthContext);
	console.log("Wrapper token : ", auth?.tokenData);

	const [user, setUser] = useState(
		{
			id: 1,
			roles: [""],
			permissions: [],
			age: 0
		}
	)

	useEffect(() => {
		if (auth && auth.tokenData) {

			setUser(
				{
					id: 1,
					roles: auth?.tokenData?.realm_access?.roles,
					permissions: auth?.tokenData?.permissions,
					age: auth?.tokenData?.age
				}
			)
			logger.log(user)
		}
	}
		, [auth])

	return (
		<>
			<AbacProvider rules={rules} user={user} roles={user.roles} permissions={user.permissions}>
				<WrapperContainer>
					{children}
				</WrapperContainer>
			</AbacProvider>
		</>
	);
};

export default Wrapper;
