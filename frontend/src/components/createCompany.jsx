import { useState } from 'react';
import { createCompany } from '../service/search-api';

const CreateNewCompany = () => {

    const emptyCompanyData = {
        name: '',
        description: '',
        address: ''
    };
    const [companyData, setCompanyData] = useState(emptyCompanyData);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCompanyData({ ...companyData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = createCompany(companyData);
            setMessage('New Company added successfully!');
            console.log(response);
            setLoading(false);
        } catch (error) {
            setError(error.response.data.error);;
            setMessage(error.response.data.message);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Company Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter company name.."
                        name="name"
                        value={companyData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        placeholder="Enter company description.."
                        name="description"
                        value={companyData.description}
                        onChange={handleInputChange}
                        rows="3"
                        required
                    ></textarea>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                        Address
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="address"
                        type="text"
                        placeholder="Enter company address.."
                        name="address"
                        value={companyData.address}
                        onChange={handleInputChange}
                    
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Adding...' : 'Add Company'}
                    </button>
                </div>
            </form>
            {message && <p className="text-green-500 text-xs italic">{message}</p>}
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
    );
};

export default CreateNewCompany;