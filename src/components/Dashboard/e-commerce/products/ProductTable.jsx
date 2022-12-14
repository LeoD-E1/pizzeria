import ProductTableItem from './ProductTableItem';
import { useModalStore } from '../../../../store/modalStore';

const ProductTable = ({ products, category }) => {
	const updateVisibility = useModalStore(state => state.updateVisibility);
	const updateModalType = useModalStore(state => state.updateModalType);

	const EditProduct = id => {
		console.log('Edit Product', id);
	};
	const DeleteProduct = id => {
		console.log('Delete Product', id);
	};

	const actions = {
		Edit: EditProduct,
		Delete: DeleteProduct,
	};

	return (
		<div className='rounded-lg bg-white p-5 shadow-lg'>
			<div className='flex justify-between items-center mb-1'>
				<h3 className='text-lg text-gray font-semibold'>{category}</h3>
				<button
					className='p-2 text-white rounded-md bg-accent font-kanit text-md font-semibold'
					onClick={() => {
						updateVisibility(true);
						updateModalType('create-product');
					}}
				>
					+ Add new
				</button>
			</div>
			<div className='overflow-auto lg:overflow-visible w-full'>
				<table className=' text-gray border-separate space-y-6 text-sm w-full'>
					<thead className='bg-lightGrey text-gray'>
						<tr>
							<th className='p-3'>Product</th>
							<th className='p-3'>Pricing</th>
							<th className='p-3'>Quantity</th>
							<th className='p-3'>Status</th>
							<th className='p-3'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{products.map(product => (
							<ProductTableItem
								key={product.id}
								product={product}
								actions={actions}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductTable;
