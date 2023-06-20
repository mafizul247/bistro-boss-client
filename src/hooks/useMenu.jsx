import { useQuery } from '@tanstack/react-query';
// import React, { useEffect, useState } from 'react';

const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://bistro-boss-server-gilt-gamma.vercel.app/menus')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         })
    // }, [])

    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menus'],
        queryFn: async() => {
            const res = await fetch('https://bistro-boss-server-gilt-gamma.vercel.app/menus');
            return res.json();
        }
    })

    return [menu, loading, refetch];
};

export default useMenu;