import { useState } from 'react';
import { searchCompany } from '../service/search-api';

const CompanySearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [companies, setCompanies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const [showHelp, setShowHelp] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const companies = await searchCompany(searchTerm);
            setCompanies(companies);
            setLoading(false);
        } catch (error) {
            setErrorMessage(error.response.data.message);
            console.log("errorMessage" + errorMessage);
            console.log(errorMessage);
        }
    };


    return (
        <div className="container mx-auto px-4">
            <form onSubmit={handleSearch} className="mb-6">
                <div className="flex items-center">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter search term"
                        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500  text-white p-2 rounded-md ml-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={loading}
                    >
                        {loading ? 'Searching...' : 'Search'}
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowHelp(!showHelp)}
                        className="bg-gray-100 text-blue-500 p-2 rounded-md ml-4 hover:text-blue-700 text-sm font-medium focus:outline-none "
                    >
                        {showHelp ? 'Hide Hints' : 'Show Hints'}
                    </button>
                </div>
            </form>

            {showHelp && (
                <div className="bg-gray-100 p-4 rounded-md mb-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Search Help</h3>
                    <p className="mb-2">You can use the following operators in your search:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li><span className="font-mono bg-gray-200 px-1 rounded">OR</span> : Search for either term. Example: <span className="font-mono bg-gray-200 px-1 rounded">apple or orange</span></li>
                        <li><span className="font-mono bg-gray-200 px-1 rounded">&apos;&apos;</span> : Search for terms in given order. Example: <span className="font-mono bg-gray-200 px-1 rounded">&apos;apple  orange&apos;</span></li>
                        <li><span className="font-mono bg-gray-200 px-1 rounded">-</span> : Exclude a term. Example: <span className="font-mono bg-gray-200 px-1 rounded"> apple -orange </span></li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-600">You can combine these operators for more complex searches.</p>
                </div>
            )}
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

            {companies != null && companies.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {companies.map((company, index) => (
                                <tr key={company.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{company.name}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-500">{company.description}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-500">{company.address}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {!loading && !errorMessage && companies.length === 0 && (
                <p className="text-gray-500 text-center">No company found. Try a different search term.</p>
            )}
        </div>
    );
};

export default CompanySearch;