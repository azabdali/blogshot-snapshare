import React, { useState } from 'react';
import { useBlog } from '../contexts/BlogContext';
import { format } from 'date-fns';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from './ui/alert-dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface CardDetailsTableProps {
  page: 'statistics' | 'profits';
}

interface CountryData {
  country: string;
  views: number;
}

const CardDetailsTable: React.FC<CardDetailsTableProps> = ({ page }) => {
  const { posts } = useBlog();
  const [open, setOpen] = useState(false);
  const [countryData, setCountryData] = useState<CountryData[]>([]);

  const getColumnHeaders = () => {
    if (page === 'profits') {
      return ['Thumbnail', 'Title & Description', 'Views', 'Profits', 'Audience'];
    }
    return ['Thumbnail', 'Title & Description', 'Views', 'Reads', 'Audience'];
  };

  const handleAudienceClick = () => {
    // Mocked data for demonstration
    setCountryData([
      { country: 'United States', views: 1500 },
      { country: 'Canada', views: 500 },
      { country: 'United Kingdom', views: 300 },
    ]);
    setOpen(true);
  };

  const columnHeaders = getColumnHeaders();

  return (
    <div>
      <table className="min-w-full w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columnHeaders.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/post/${post.id}`}>
                  <div className="overflow-hidden rounded-md w-32 h-20 cursor-pointer">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 cursor-pointer">
                <Link to={`/post/${post.id}`} className="font-semibold text-gray-900">
                  {post.title}
                </Link>
                <div>{post.description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{post.views}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {page === 'profits' ? post.estimatedProfits : post.shares}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {page === 'profits' ? (
                  <AlertDialog open={open} onOpenChange={setOpen}>
                    <AlertDialogTrigger asChild>
                      <Globe className="inline-block h-4 w-4 cursor-pointer" onClick={handleAudienceClick} />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogTitle className="flex items-center space-x-2">
                        Audience by Country
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Country</TableHead>
                              <TableHead>Views</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {countryData.map((data) => (
                              <TableRow key={data.country}>
                                <TableCell>
                                  {data.country === 'United States' && '🇺🇸 '}
                                  {data.country === 'Canada' && '🇨🇦 '}
                                  {data.country === 'United Kingdom' && '🇬🇧 '}
                                  {data.country}
                                </TableCell>
                                <TableCell>{data.views}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </AlertDialogDescription>
                      <AlertDialogCancel>Close</AlertDialogCancel>
                    </AlertDialogContent>
                  </AlertDialog>
                ) : (
                  post.reads
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardDetailsTable;
