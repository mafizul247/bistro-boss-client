import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';


const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://bistro-boss-server-gilt-gamma.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
    };


    return (
        <div>
            <Helmet>
                <title>Sign Up || Bistro Boss</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="photoURL" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                })} placeholder="Password" name='password' className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters required</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password maximum be 20 characters required</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password have must one uppercase one lowercase one number and one special character required</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className="text-center py-4">
                            <p>Already have an account? <Link to='/login'>Please Login</Link></p>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;