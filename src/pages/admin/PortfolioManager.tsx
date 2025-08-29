import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, Trash, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { axiosInstance } from '../../api/apiClient';
import { z } from 'zod';

// Portfolio Type and Validator
interface Portfolio {
    _id: string;
    title: string;
    subTitle: string;
    tags: string;
    image: {
        secure_url: string;
        public_id: string;
    };
}

const PortfolioValidator = z.object({
    title: z.string().min(1, 'Title is required'),
    subTitle: z.string().min(1, 'Subtitle is required'),
    tags: z.string().min(1, 'Tags are required'),
});

type PortfolioType = z.infer<typeof PortfolioValidator>;

const PortfolioManager = () => {
    const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isTableLoading, setIsTableLoading] = useState(false);
    const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<PortfolioType>({
        resolver: zodResolver(PortfolioValidator) as Resolver<PortfolioType>,
        defaultValues: {
            title: '',
            subTitle: '',
            tags: '',
        },
    });

    useEffect(() => {
        const fetchPortfolios = async () => {
            setIsTableLoading(true);
            try {
                const response = await axiosInstance.get('/portfolio/all');
                setPortfolios(response.data.data);
            } catch (err: any) {
                toast.error(err.response?.data?.message || 'Failed to fetch portfolios');
            } finally {
                setIsTableLoading(false);
            }
        };
        fetchPortfolios();
    }, []);

    const onSubmit = async (data: PortfolioType) => {
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('subTitle', data.subTitle);
            formData.append('tags', data.tags);
            const imageInput = (document.getElementById('image') as HTMLInputElement)?.files?.[0];
            if (imageInput) {
                formData.append('image', imageInput);
            }

            const response = await axiosInstance.post('/portfolio/create', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            toast.success(response.data.message || 'Portfolio created successfully');
            setPortfolios([...portfolios, response.data.data]);
            setIsModalOpen(false);
            reset();
        } catch (err: any) {
            toast.error(err.response?.data?.message || 'Failed to create portfolio');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this portfolio?')) return;
        try {
            const response = await axiosInstance.delete(`/portfolio/${id}`);
            toast.success(response.data.message || 'Portfolio deleted successfully');
            setPortfolios(portfolios.filter(portfolio => portfolio._id !== id));
        } catch (err: any) {
            toast.error(err.response?.data?.message || 'Failed to delete portfolio');
        }
    };

    const handleView = async (id: string) => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.get(`/portfolio/${id}`);
            setSelectedPortfolio(response.data.data);
            setIsViewModalOpen(true);
        } catch (err: any) {
            toast.error(err.response?.data?.message || 'Failed to fetch portfolio details');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-16 sm:pt-20 pb-12 sm:pb-16">
            {/* Header Section */}
            <section className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 font-montserrat">Manage Portfolios</h1>
                <div className="flex justify-end">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-500 text-white font-semibold py-2 px-6 sm:px-8 rounded-md hover:bg-blue-600 text-sm sm:text-base"
                    >
                        Create Portfolio
                    </button>
                </div>
            </section>

            {/* Portfolios Table */}
            <section className="container mx-auto px-4 sm:px-6">
                {isTableLoading ? (
                    <div className="text-center">
                        <span className="animate-spin inline-block w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full"></span>
                        <p className="mt-2 text-gray-700">Loading portfolios...</p>
                    </div>
                ) : portfolios.length === 0 ? (
                    <p className="text-center text-gray-700">No portfolios found.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Image</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Title</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Tags</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {portfolios.map(portfolio => (
                                    <tr key={portfolio._id} className="border-b">
                                        <td className="px-4 py-3">
                                            <img src={portfolio.image.secure_url} alt={portfolio.title} className="w-16 h-16 object-cover rounded" />
                                        </td>
                                        <td className="px-4 py-3 text-sm sm:text-base text-gray-900">{portfolio.title}</td>
                                        <td className="px-4 py-3 text-sm sm:text-base text-gray-900">{portfolio.tags}</td>
                                        <td className="px-4 py-3 flex space-x-2">
                                            <button
                                                onClick={() => handleView(portfolio._id)}
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                <Eye size={20} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(portfolio._id)}
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                <Trash size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>

            {/* Create Portfolio Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 sm:p-8 w-full max-w-md mx-4 sm:mx-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-montserrat">Create Portfolio</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                                <X size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                                    Title
                                </label>
                                <input
                                    id="title"
                                    {...register('title')}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Portfolio Title"
                                />
                                {errors.title && (
                                    <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="subTitle" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                                    Subtitle
                                </label>
                                <input
                                    id="subTitle"
                                    {...register('subTitle')}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.subTitle ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Portfolio Subtitle"
                                />
                                {errors.subTitle && (
                                    <p className="mt-1 text-sm text-red-600">{errors.subTitle.message}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="tags" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                                    Tags
                                </label>
                                <input
                                    id="tags"
                                    {...register('tags')}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.tags ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="e.g., design, development"
                                />
                                {errors.tags && (
                                    <p className="mt-1 text-sm text-red-600">{errors.tags.message}</p>
                                )}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="image" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                                    Image
                                </label>
                                <input
                                    id="image"
                                    type="file"
                                    accept="image/*"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                                />
                            </div>

                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-300 text-gray-700 font-semibold py-2 px-6 sm:px-8 rounded-md hover:bg-gray-400 text-sm sm:text-base"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white font-semibold py-2 px-6 sm:px-8 rounded-md hover:bg-blue-600 flex items-center justify-center text-sm sm:text-base"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="animate-spin inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full mr-2"></span>
                                            Creating...
                                        </>
                                    ) : (
                                        'Create Portfolio'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* View Portfolio Modal */}
            {isViewModalOpen && selectedPortfolio && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 sm:p-8 w-full max-w-md mx-4 sm:mx-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-montserrat">Portfolio Details</h2>
                            <button onClick={() => setIsViewModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Image</label>
                                <img src={selectedPortfolio.image.secure_url} alt={selectedPortfolio.title} className="w-full h-48 object-cover rounded" />
                            </div>
                            <div>
                                <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Title</label>
                                <p className="text-sm sm:text-base text-gray-900">{selectedPortfolio.title}</p>
                            </div>
                            <div>
                                <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Subtitle</label>
                                <p className="text-sm sm:text-base text-gray-900">{selectedPortfolio.subTitle}</p>
                            </div>
                            <div>
                                <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Tags</label>
                                <p className="text-sm sm:text-base text-gray-900">{selectedPortfolio.tags}</p>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setIsViewModalOpen(false)}
                                    className="bg-gray-300 text-gray-700 font-semibold py-2 px-6 sm:px-8 rounded-md hover:bg-gray-400 text-sm sm:text-base"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioManager;