import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const SideItem = ({ item, pathname, open }) => {
	return (
		<>
			<Link
				to={item.path}
				className={`flex items-center px-4 py-4  my-1 rounded-md hover:bg-darkBlue ${
					item.path === pathname && 'bg-darkBlue'
				}`}
			>
				<FontAwesomeIcon icon={item.icon} className='w-5 h-5' />
				{open && (
					<div className='mx-5'>
						<span className='mx-4 text-white'>{item.name}</span>
					</div>
				)}
			</Link>
		</>
	);
};

export default SideItem;
