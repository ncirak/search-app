import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8088/api/company',
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Search company by any given search term
export const searchCompany = async(searchTerm) => {
    try {
        const response = await apiClient.get(`/search?searchTerm=${encodeURIComponent(searchTerm)}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Create a new company
export const createCompany = async(company) => {
    try {
        const response = await apiClient.post('/create', company);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}