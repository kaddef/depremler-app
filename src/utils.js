import { useState, useEffect } from "react";
import axios from 'axios';

export function calculateDistance(coord1, coord2) {
    const earthRadiusKm = 6371;

    const lat1 = parseFloat(coord1.latitude);
    const lon1 = parseFloat(coord1.longitude);
    const lat2 = parseFloat(coord2.latitude);
    const lon2 = parseFloat(coord2.longitude);

    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadiusKm * c;

    return distance.toFixed(2);
}

export function getElapsedTime(fromDate) {
    const currentDate = new Date();
    const fromDateObj = new Date(fromDate);
    
    const elapsedTime = currentDate - fromDateObj; // Milisaniye cinsinden fark
    
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor((elapsedTime / (1000 * 60 * 60 * 24)) % 30);
    const months = Math.floor((elapsedTime / (1000 * 60 * 60 * 24 * 30)) % 12);
    const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365));
    
    if (years > 0) return `${years} yıl`;
    if (months > 0) return `${months} ay`;
    if (days > 0) return `${days} gün`;
    if (hours > 0) return `${hours} saat`;
    if (minutes > 0) return `${minutes} dakika`;
    if (seconds > 0) return `${seconds} saniye`;

    return 'Şimdi';
}

export function getClassByMagnitude(mag) {
    if (mag < 4) return 'notfelt';
    if (mag < 5) return 'light';
    if (mag < 6) return 'moderate';
    if (mag < 7) return 'strong';
    if (mag < 8) return 'major';
    return 'great';
}

export function getLocation(setLocation, setAuthorized) {
    if (navigator.permissions) {
        navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
            if (permissionStatus.state === 'granted') {
                navigator.geolocation.getCurrentPosition(
                    (position) => successFunction(position, setLocation, setAuthorized),
                    (error) => errorFunction(error, setAuthorized)
                );
            } else {
                navigator.geolocation.getCurrentPosition(
                    (position) => successFunction(position, setLocation, setAuthorized),
                    (error) => errorFunction(error, setAuthorized)
                );
            }
        }).catch((error) => {
            console.error('Error checking geolocation permission:', error);
            setAuthorized(false);
        });
    } else {
        console.log('Geolocation permissions API is not supported by this browser.');
        setAuthorized(false);
    }
}

function successFunction(position, setLocation, setAuthorized) {
    setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
    });
    setAuthorized(true);
}

function errorFunction(error, setAuthorized) {
    console.error('Error retrieving geolocation:', error.message);
    setAuthorized(false);
}

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        (async function () {
            try {
                const response = await axios.get(url)
                setData(response.data)
            } catch (error) {
                console.log("HATA VAR")
                console.log(error.request)
                setError('Cant get data from KOERI')
            } finally {
                setLoading(false);
            }
        })()
    }, [url]);
    return [data, loading, error];
}

export function useFetch2(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                if(error.code === "ERR_NETWORK") {
                    setError('Server Is Down');
                } else if(error.response.status === 404) {
                    setError('Cant get data from KOERI');
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return [data, loading, error];
}