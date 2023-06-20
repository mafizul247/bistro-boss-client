import React from 'react';
import { Helmet } from 'react-helmet';
import useCart from '../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [carts, refetch] = useCart();
    const totalPrice = carts.reduce((sum, item) => item.price + sum, 0).toFixed(2);

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-gilt-gamma.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div >
            <Helmet>
                <title>Bistro Boss || My Cart</title>
            </Helmet>
            <div className='text-uppercase font-semibold h-10 flex justify-evenly items-center'>
                <h3 className='text-3xl'>Total Items {carts?.length}</h3>
                <h3 className='text-3xl'>Total Price ${totalPrice}</h3>
                <Link to='/dashboard/payment'><button className='btn btn-warning btn-sm'>Pay</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map((item, index) => <tr key={index}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td className='text-end'>{item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt className='' /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;