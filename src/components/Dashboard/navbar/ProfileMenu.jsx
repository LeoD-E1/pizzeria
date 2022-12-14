import React from 'react';
import Profile from './Profile';
import { Link } from 'react-router-dom';

import {
	faGear,
	faQuestionCircle,
	faArrowRightFromBracket,
	faLanguage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileMenu = () => {
	const dataSrc =
		'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

	const userName = "Leonardo D'angeli";
	const userProffesion = 'Front-end Developer';

	const links = [
		{
			title: 'Settings',
			to: '/settings',
			icon: faGear,
		},
		{
			title: 'Help and Support',
			to: '/help',
			icon: faQuestionCircle,
		},
		{
			title: 'Change Language',
			to: '/language',
			icon: faLanguage,
		},
		{
			title: 'Sign Out',
			to: '/',
			icon: faArrowRightFromBracket,
		},
	];
	return (
		<>
			<div
				className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg '
				aria-orientation='vertical'
				aria-labelledby='menu-button'
			>
				<div className='flex items-center justify-center px-3 py-6'>
					<img
						className='object-cover mx-2 rounded-full h-10 w-10'
						src={dataSrc}
						alt='avatar-user'
					/>
					<div>
						<Link to={'/profile'}>
							<h6 className='font-semibold text-md hover:text-accent'>
								{userName}
							</h6>
						</Link>

						<span className='text-sm text-gray font-serif'>
							{userProffesion}
						</span>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='flex flex-col'>
						{links.map((link, index) => (
							<div key={index} className='hover:text-accent'>
								<Link
									to={link.to}
									className={`flex items-center p-2 my-1 rounded-md hover:bg-lightGrey`}
								>
									<FontAwesomeIcon icon={link.icon} className='w-5 h-5' />
									<span className='mx-4 text-sm hover:text-accent'>
										{link.title}
									</span>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileMenu;
