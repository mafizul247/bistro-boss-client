import React from 'react';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_token = import.meta.env.VITE_Image_UPload_Token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?&key=${image_hosting_token}`;
    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                // console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem);
                    axiosSecure.post('/menus', newItem)
                        .then(data => {
                            console.log('Axios data', data.data);
                            if(data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'Menu Item Add Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                            }
                        })
                }
            })
    };
    console.log(errors);

    return (
        <div className='w-full px-8'>
            <Helmet>
                <title>Bistro Boss || Add Item</title>
            </Helmet>
            <SectionTitle subHeading="What's New" heading='Add An Item' />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <p className="label-text font-semibold">Recipe Name<span className='text-red-600'>*</span></p>
                    </label>
                    <input type="text" placeholder="Recipe Name" className="input input-bordered w-full " {...register("name", { required: true, maxLength: 180 })} />
                </div>
                <div className='md:flex gap-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <p className="label-text font-semibold">Category<span className='text-red-600'>*</span></p>
                        </label>
                        <select defaultValue='Category' className="select select-bordered" {...register("category", { required: true })}>
                            <option disabled>Category</option>
                            <option>salad</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>dessert</option>
                            <option>drinks</option>
                            <option>popular</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <p className="label-text font-semibold">Price<span className='text-red-600'>*</span></p>
                        </label>
                        <input type="number" placeholder="Price" className="input input-bordered w-full" {...register("price", { required: true, maxLength: 20 })} />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <p className="label-text font-semibold">Recipe Details<span className='text-red-600'>*</span></p>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details" {...register("recipe", { required: true, maxLength: 380 })}></textarea>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <p className="label-text font-semibold">Item Image<span className='text-red-600'>*</span></p>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true, maxLength: 180 })} />
                </div>
                <div className='my-4'>
                    <input type="submit" className='btn btn-warning' value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;