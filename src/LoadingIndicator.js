import Spinner from 'react-bootstrap/Spinner'
import { useState, useEffect } from 'react'
import axios from 'axios'


function LoadingIndicator() {
    let [visible, setVisible] = useState(false);

    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use((config) => {
            setVisible(true);
            return config;
        });

        const responseInterceptor = axios.interceptors.response.use(
            (response) => {
                setVisible(false);
                return response;
            },
            (error) => {
                setVisible(false);
                return Promise.reject(error);
            }
        );
        
        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    if (!visible) return null;

    return <Spinner animation="grow" size="sm" variant="light" />;
}

export default LoadingIndicator