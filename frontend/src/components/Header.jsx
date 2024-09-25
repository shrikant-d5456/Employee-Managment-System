import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = () => {


    let login = window.localStorage.getItem("login");


    


    return (<>
        <div className='bg-white w-full flex justify-center shadow-md shadow-blue-100'
        >
            <div className='w-11/12 flex items-center justify-between py-[8px] text-sm font-medium text-color-blue'
            >
                <div className='flex text-lg items-center justify-center gap-2'
                >
                    <div className='flex justify-start items-center gap-2 w-full text-sm font-serif'>
                        <span className='flex w-8 h-8 rounded-full' title='Edit Profile'>
                            <img className='w-full h-full object-cover rounded-full' src="https://www.protonshub.com/assets/mern-developers-5ee5b60873a35bcb5253e3d61df96d129e1d9a52686417bc3e24100ac6c0a550.png" alt="admin" />
                        </span>
                        Mern Project
                    </div>
                </div>


                <div className='md:flex hidden gap-8 justify-center items-center'
                >
                    <ul className='flex gap-8 justify-center items-center'
                    >
                        
                            {
                            login ? (
                                <>

                                    <Link to="/home">
                                        <li>
                                         Home
                                        </li>
                                    </Link>
                                    <Link to="/home/list">
                                        <li>
                                            Employee List
                                        </li>
                                    </Link>
                                    <Link to="/home/create">
                                        <li>
                                            Add Employee
                                        </li>
                                    </Link>
                                    <Link to="/" onClick={window.localStorage.removeItem("login",false)}>
                                        <li >
                                            Logout
                                        </li>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/">
                                        <li className="px-4 py-1 bg-color-blue text-white">
                                            Login
                                        </li>
                                    </Link>
                                    <Link to="/signup">
                                        <li className="px-4 py-1 bg-color-blue text-white">
                                            Sign Up
                                        </li>
                                    </Link>
                                </>
                            )} 

                    </ul>
                </div>

            </div>
        </div>


    </>
    );
}

export default Header;
