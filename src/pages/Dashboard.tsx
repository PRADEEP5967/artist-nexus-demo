
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Calendar, 
  DollarSign, 
  Star, 
  TrendingUp, 
  Users, 
  MessageCircle, 
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';

interface Booking {
  id: string;
  artistName: string;
  eventDate: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  amount: number;
  eventType: string;
}

interface Artist {
  id: string;
  name: string;
  category: string;
  status: 'pending' | 'verified' | 'rejected';
  joinDate: string;
  totalBookings: number;
  rating: number;
}

const Dashboard = () => {
  const [userType] = useState<'client' | 'artist' | 'admin'>('admin'); // This would come from auth context
  
  const mockBookings: Booking[] = [
    { id: '1', artistName: 'Sarah Johnson', eventDate: '2024-07-15', status: 'confirmed', amount: 500, eventType: 'Wedding' },
    { id: '2', artistName: 'Mike Chen', eventDate: '2024-07-20', status: 'pending', amount: 300, eventType: 'Corporate Event' },
    { id: '3', artistName: 'Lisa Rodriguez', eventDate: '2024-07-25', status: 'completed', amount: 800, eventType: 'Concert' },
  ];

  const mockArtists: Artist[] = [
    { id: '1', name: 'Sarah Johnson', category: 'Musician', status: 'verified', joinDate: '2024-06-01', totalBookings: 15, rating: 4.8 },
    { id: '2', name: 'Mike Chen', category: 'DJ', status: 'pending', joinDate: '2024-06-15', totalBookings: 0, rating: 0 },
    { id: '3', name: 'Lisa Rodriguez', category: 'Dancer', status: 'verified', joinDate: '2024-05-20', totalBookings: 23, rating: 4.9 },
    { id: '4', name: 'David Wilson', category: 'Speaker', status: 'rejected', joinDate: '2024-06-10', totalBookings: 0, rating: 0 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': case 'verified': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': case 'verified': return <CheckCircle2 className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'completed': return <CheckCircle2 className="h-4 w-4" />;
      case 'cancelled': case 'rejected': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const StatCard = ({ title, value, icon: Icon, trend }: { title: string; value: string; icon: any; trend?: string }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {trend && (
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                {trend}
              </p>
            )}
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {userType === 'admin' ? 'Admin Dashboard' : userType === 'artist' ? 'Artist Dashboard' : 'Client Dashboard'}
          </h1>
          <p className="text-xl text-purple-100">
            {userType === 'admin' ? 'Manage your platform and users' : userType === 'artist' ? 'Track your bookings and performance' : 'Manage your bookings and events'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Artists"
            value="1,247"
            icon={Users}
            trend="+12% this month"
          />
          <StatCard
            title="Active Bookings"
            value="89"
            icon={Calendar}
            trend="+5% this week"
          />
          <StatCard
            title="Revenue"
            value="$24,580"
            icon={DollarSign}
            trend="+18% this month"
          />
          <StatCard
            title="Avg Rating"
            value="4.8"
            icon={Star}
            trend="+0.2 this month"
          />
        </div>

        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="bookings" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Bookings</span>
            </TabsTrigger>
            <TabsTrigger value="artists" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Artists</span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>Messages</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Bookings
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Artist</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Event</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockBookings.map((booking) => (
                        <tr key={booking.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{booking.artistName}</td>
                          <td className="py-3 px-4 text-gray-600">{booking.eventType}</td>
                          <td className="py-3 px-4 text-gray-600">{booking.eventDate}</td>
                          <td className="py-3 px-4 font-medium">${booking.amount}</td>
                          <td className="py-3 px-4">
                            <Badge className={`${getStatusColor(booking.status)} flex items-center space-x-1`}>
                              {getStatusIcon(booking.status)}
                              <span className="capitalize">{booking.status}</span>
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="artists" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Artist Management
                  <div className="flex space-x-2">
                    <Button variant="outline">Export</Button>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                      Add Artist
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Name</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Join Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Bookings</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Rating</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockArtists.map((artist) => (
                        <tr key={artist.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{artist.name}</td>
                          <td className="py-3 px-4 text-gray-600">{artist.category}</td>
                          <td className="py-3 px-4 text-gray-600">{artist.joinDate}</td>
                          <td className="py-3 px-4 text-gray-600">{artist.totalBookings}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                              <span>{artist.rating || 'N/A'}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={`${getStatusColor(artist.status)} flex items-center space-x-1`}>
                              {getStatusIcon(artist.status)}
                              <span className="capitalize">{artist.status}</span>
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                              {artist.status === 'pending' && (
                                <>
                                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                    Approve
                                  </Button>
                                  <Button variant="destructive" size="sm">
                                    Reject
                                  </Button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Message Center</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                  <p className="text-gray-600">Messages from artists and clients will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
