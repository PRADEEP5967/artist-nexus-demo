
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Filter, Eye, CheckCircle, XCircle, Clock, Download } from 'lucide-react';

const ManagerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const submissions = [
    {
      id: 1,
      name: "Ravi Kumar",
      email: "ravi@example.com",
      category: "Musician",
      location: "Mumbai",
      status: "pending",
      submittedAt: "2024-01-15",
      experience: "5 years",
      phone: "+91 9876543210"
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@example.com",
      category: "Dancer",
      location: "Delhi",
      status: "approved",
      submittedAt: "2024-01-14",
      experience: "8 years",
      phone: "+91 9876543211"
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit@example.com",
      category: "Speaker",
      location: "Bangalore",
      status: "rejected",
      submittedAt: "2024-01-13",
      experience: "3 years",
      phone: "+91 9876543212"
    },
    {
      id: 4,
      name: "Kavya Nair",
      email: "kavya@example.com",
      category: "DJ",
      location: "Chennai",
      status: "pending",
      submittedAt: "2024-01-12",
      experience: "6 years",
      phone: "+91 9876543213"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100"><CheckCircle className="h-3 w-3 mr-1" />Approved</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
    }
  };

  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || submission.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || submission.category.toLowerCase() === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const stats = [
    { title: "Total Submissions", value: "24", change: "+12%", color: "text-blue-600" },
    { title: "Pending Review", value: "8", change: "+3", color: "text-yellow-600" },
    { title: "Approved Artists", value: "14", change: "+7", color: "text-green-600" },
    { title: "Rejected", value: "2", change: "-1", color: "text-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Manager Dashboard</h1>
              <p className="text-xl text-purple-100">Manage artist submissions and applications</p>
            </div>
            <Button className="mt-4 md:mt-0 bg-white text-purple-600 hover:bg-gray-100">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className={`text-sm font-medium ${stat.color}`}>{stat.change}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="musician">Musician</SelectItem>
                  <SelectItem value="dancer">Dancer</SelectItem>
                  <SelectItem value="speaker">Speaker</SelectItem>
                  <SelectItem value="dj">DJ</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Submissions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Artist Submissions ({filteredSubmissions.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Artist</TableHead>
                    <TableHead className="hidden md:table-cell">Category</TableHead>
                    <TableHead className="hidden lg:table-cell">Location</TableHead>
                    <TableHead className="hidden lg:table-cell">Experience</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Submitted</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubmissions.map((submission) => (
                    <TableRow key={submission.id} className="hover:bg-gray-50">
                      <TableCell>
                        <div>
                          <div className="font-medium text-gray-900">{submission.name}</div>
                          <div className="text-sm text-gray-500">{submission.email}</div>
                          <div className="text-sm text-gray-500 md:hidden">{submission.category} • {submission.location}</div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{submission.category}</TableCell>
                      <TableCell className="hidden lg:table-cell">{submission.location}</TableCell>
                      <TableCell className="hidden lg:table-cell">{submission.experience}</TableCell>
                      <TableCell>{getStatusBadge(submission.status)}</TableCell>
                      <TableCell className="hidden md:table-cell">{submission.submittedAt}</TableCell>
                      <TableCell>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button size="sm" variant="outline" className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          {submission.status === 'pending' && (
                            <>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Approve
                              </Button>
                              <Button size="sm" variant="destructive">
                                <XCircle className="h-3 w-3 mr-1" />
                                Reject
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {filteredSubmissions.length === 0 && (
              <div className="text-center py-8">
                <div className="text-gray-500 mb-2">No submissions found</div>
                <p className="text-sm text-gray-400">Try adjusting your search or filters</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManagerDashboard;
