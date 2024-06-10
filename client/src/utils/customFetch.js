import axios from "axios";
import { useState, useEffect } from "react";

export const customFetch = axios.create({
    baseURL: '/api/v1',
});

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading("Loading...")
        try {
            const { data } = await customFetch.get(url);

            setLoading(false);
            setData(data);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }
    return { data, loading, error }
}
