import { Link } from 'react-router-dom';
import CreateNewCompany from '../components/createCompany';

const CreateNewCompanyPage = () => {
    return (
        <div className="container mx-auto p-4">
            <nav className="mb-4">
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-blue-500 hover:underline">Search Companies</Link></li>
                    <li><Link to="/create" className="text-blue-500 hover:underline">Create Company</Link></li>
                </ul>
            </nav>
            <h1 className="text-3xl font-bold mb-4">Add New Company</h1>
            <CreateNewCompany />
        </div>
    );
};

export default CreateNewCompanyPage;