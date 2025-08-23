import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Eye, Trash2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { axiosInstance } from '../../api/apiClient';

interface EnquiryType {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isSeen: boolean;
  createdAt: string;
}

const Enquiry = () => {
  const [enquiries, setEnquiries] = useState<EnquiryType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, _] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSeen, _a] = useState<boolean | undefined>(undefined);
  const [date, setDate] = useState('');
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryType | null>(null);

  const fetchEnquiries = async () => {
    const response = await axiosInstance.get('/enquiry/all', {
      params: { page: currentPage, limit, searchQuery, isSeen, date },
    });
    return response.data.data;
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['enquiries', currentPage, limit, searchQuery, isSeen, date],
    queryFn: fetchEnquiries,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  useEffect(() => {
    if (data) {
      setEnquiries(data.enquiries);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
      setTotalCount(data.totalEnquiry);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error((error as any).response?.data?.message || 'Failed to fetch enquiries');
    }
  }, [error]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      await axiosInstance.delete(`/enquiry/${id}`);
      toast.success('Enquiry deleted successfully');
      refetch();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to delete enquiry');
    }
  };

  const handleView = async (enquiry: EnquiryType) => {
    try {
      const response = await axiosInstance.get(`/enquiry/${enquiry._id}`);
      setSelectedEnquiry(response.data.data);
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to fetch enquiry details');
    }
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    refetch();
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-montserrat text-primary">Enquiries</h2>

      {/* Filters */}
      <form onSubmit={handleFilterSubmit} className="mb-4 sm:mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 sm:gap-4">
        <div>
          <input
            type="text"
            placeholder="Search by name, email, phone, subject, or message"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 text-sm sm:text-base"
          />
        </div>
        {/* <div>
          <select
            value={isSeen === undefined ? '' : isSeen.toString()}
            onChange={(e) => setIsSeen(e.target.value === '' ? undefined : e.target.value === 'true')}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 text-sm sm:text-base"
          >
            <option value="">All</option>
            <option value="true">Seen</option>
            <option value="false">Unseen</option>
          </select>
        </div> */}
        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 text-sm sm:text-base"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white font-semibold py-2 px-4 sm:px-6 rounded-md hover:bg-primary-600 text-sm sm:text-base"
        >
          Apply Filters
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 text-xs sm:text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold text-gray-600 whitespace-nowrap">Name</th>
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold text-gray-600 whitespace-nowrap">Email</th>
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold text-gray-600 whitespace-nowrap">Phone</th>
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold text-gray-600 whitespace-nowrap">Subject</th>
              {/* <th className="px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold text-gray-600 whitespace-nowrap">Seen</th> */}
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold text-gray-600 whitespace-nowrap">Created At</th>
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold text-gray-600 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={7} className="text-center py-4">Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={7} className="text-center py-4">Error loading enquiries</td>
              </tr>
            ) : enquiries.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-4">No enquiries found</td>
              </tr>
            ) : (
              enquiries.map((enquiry) => (
                <tr key={enquiry._id} className="border-t">
                  <td className="px-2 sm:px-4 py-1 sm:py-2 truncate max-w-[100px] sm:max-w-[150px]">{enquiry.fullName}</td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2 truncate max-w-[120px] sm:max-w-[200px]">{enquiry.email}</td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">{enquiry.phone}</td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2 truncate max-w-[80px] sm:max-w-[120px]">{enquiry.subject}</td>
                  {/* <td className="px-2 sm:px-4 py-1 sm:py-2">{enquiry.isSeen ? 'Yes' : 'No'}</td> */}
                  <td className="px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">{format(new Date(enquiry.createdAt), 'PP')}</td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2 flex space-x-1 sm:space-x-2">
                    <button
                      onClick={() => handleView(enquiry)}
                      className="text-primary hover:text-primary-600"
                      title="View"
                    >
                      <Eye size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </button>
                    <button
                      onClick={() => handleDelete(enquiry._id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        <p className="text-xs sm:text-sm text-gray-600">
          Showing {(currentPage - 1) * limit + 1} to {Math.min(currentPage * limit, totalCount)} of {totalCount} enquiries
        </p>
        <div className="flex flex-wrap justify-center space-x-1 sm:space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="border border-gray-300 text-gray-700 font-semibold py-1 px-2 sm:px-4 sm:py-2 rounded-md hover:bg-gray-100 text-xs sm:text-sm disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2))
            .map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                } font-semibold py-1 px-2 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm`}
              >
                {page}
              </button>
            ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border border-gray-300 text-gray-700 font-semibold py-1 px-2 sm:px-4 sm:py-2 rounded-md hover:bg-gray-100 text-xs sm:text-sm disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal for Viewing Details */}
      {selectedEnquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-0">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[90vw] sm:max-w-lg max-h-[90vh] sm:max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg sm:text-xl font-bold font-montserrat text-primary">Enquiry Details</h3>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="text-gray-600 hover:text-gray-800"
              >
                <X size={20} className="sm:w-[24px] sm:h-[24px]" />
              </button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Name</p>
                <p className="text-base sm:text-lg">{selectedEnquiry.fullName}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Email</p>
                <p className="text-base sm:text-lg">{selectedEnquiry.email}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Phone</p>
                <p className="text-base sm:text-lg">{selectedEnquiry.phone}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Subject</p>
                <p className="text-base sm:text-lg">{selectedEnquiry.subject}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Message</p>
                <p className="text-base sm:text-lg">{selectedEnquiry.message}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Seen</p>
                {/* <p className="text-base sm:text-lg">{selectedEnquiry.isSeen ? 'Yes' : 'No'}</p> */}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Created At</p>
                <p className="text-base sm:text-lg">{format(new Date(selectedEnquiry.createdAt), 'PP')}</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 flex justify-end">
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="border border-gray-300 text-gray-700 font-semibold py-1 px-3 sm:px-4 sm:py-2 rounded-md hover:bg-gray-100 text-xs sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enquiry;