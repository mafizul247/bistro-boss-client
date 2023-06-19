import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
// import useTitle from '../hooks/useTitle';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [carts] = useCart();
    // useTitle('Dashboard');

    //TODO
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 ">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"><FaUtensils />Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"><FaWallet />Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook />Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers />All Users</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashboard/userhome"><FaHome />User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt />Reservation</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet />Payment Histroy</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/mycart'><FaShoppingCart />My Cart
                                    <span className="badge badge-secondary">+{carts?.length || 0}</span>
                                </NavLink>
                            </li>
                        </>
                    }

                    <div className='divider'></div>

                    <li><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li><NavLink to='/menu'><AiOutlineMenu />Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><AiOutlineShoppingCart />Order</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;