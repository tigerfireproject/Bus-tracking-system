
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  School, 
  Bus, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Navigation
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentInfo = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const student = {
    name: 'Emma Johnson',
    grade: '5th Grade',
    school: 'Oakwood Elementary School',
    studentId: 'STU-2024-1157',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c12c?w=150&h=150&fit=crop&crop=face',
    bus: {
      number: '42',
      route: 'Route A',
      driver: 'Mike Rodriguez',
      driverPhone: '+1 (555) 123-4567',
      capacity: 25,
      currentStudents: 15
    },
    stops: {
      pickup: {
        name: 'Pine Street & 5th Avenue',
        time: '7:45 AM',
        distance: '0.2 miles from home'
      },
      dropoff: {
        name: 'Oakwood Elementary - Main Entrance',
        time: '8:15 AM',
        distance: '3.5 miles from pickup'
      }
    },
    emergencyContacts: [
      { name: 'Sarah Johnson', relation: 'Mother', phone: '+1 (555) 234-5678', primary: true },
      { name: 'David Johnson', relation: 'Father', phone: '+1 (555) 345-6789', primary: false },
      { name: 'Mary Smith', relation: 'Grandmother', phone: '+1 (555) 456-7890', primary: false }
    ]
  };

  const todayTrips = [
    {
      id: 1,
      type: 'Morning Pickup',
      time: '7:45 AM',
      status: 'completed',
      actualTime: '7:43 AM',
      location: 'Pine Street & 5th Avenue'
    },
    {
      id: 2,
      type: 'School Arrival',
      time: '8:15 AM',
      status: 'completed',
      actualTime: '8:12 AM',
      location: 'Oakwood Elementary'
    },
    {
      id: 3,
      type: 'Afternoon Pickup',
      time: '3:30 PM',
      status: 'scheduled',
      actualTime: null,
      location: 'Oakwood Elementary'
    },
    {
      id: 4,
      type: 'Home Dropoff',
      time: '4:00 PM',
      status: 'scheduled',
      actualTime: null,
      location: 'Pine Street & 5th Avenue'
    }
  ];

  const recentHistory = [
    { date: '2024-01-15', status: 'On Time', morning: '7:43 AM', afternoon: '4:02 PM' },
    { date: '2024-01-14', status: 'Delayed', morning: '7:45 AM', afternoon: '4:15 PM' },
    { date: '2024-01-13', status: 'On Time', morning: '7:44 AM', afternoon: '3:58 PM' },
    { date: '2024-01-12', status: 'On Time', morning: '7:42 AM', afternoon: '4:01 PM' },
    { date: '2024-01-11', status: 'Early', morning: '7:40 AM', afternoon: '3:55 PM' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'delayed':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Time':
        return 'bg-green-100 text-green-800';
      case 'Delayed':
        return 'bg-yellow-100 text-yellow-800';
      case 'Early':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Student Information</h1>
            <p className="text-gray-600">Track your child's bus journey and details</p>
          </div>
          <Button onClick={() => navigate('/map')} className="bg-blue-500 hover:bg-blue-600">
            <MapPin className="w-4 h-4 mr-2" />
            Track on Map
          </Button>
        </div>

        {/* Student Profile Card */}
        <Card className="border-blue-100">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-24 h-24 mx-auto md:mx-0">
                <AvatarImage src={student.avatar} />
                <AvatarFallback className="text-lg">EJ</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900">{student.name}</h2>
                <p className="text-gray-600 mb-2">{student.grade} • {student.school}</p>
                <p className="text-sm text-gray-500">Student ID: {student.studentId}</p>
                
                <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                  <Badge className="bg-blue-100 text-blue-800">Bus #{student.bus.number}</Badge>
                  <Badge className="bg-green-100 text-green-800">{student.bus.route}</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">Active</Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Bus className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                  <p className="text-sm font-medium text-blue-900">Morning</p>
                  <p className="text-xs text-blue-700">7:45 AM</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <School className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
                  <p className="text-sm font-medium text-yellow-900">Afternoon</p>
                  <p className="text-xs text-yellow-700">3:30 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Bus Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bus className="w-5 h-5 text-blue-500" />
                  <span>Bus Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Bus Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bus Number:</span>
                        <span className="font-medium">#{student.bus.number}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Route:</span>
                        <span className="font-medium">{student.bus.route}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Capacity:</span>
                        <span className="font-medium">{student.bus.capacity} students</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current Load:</span>
                        <span className="font-medium">{student.bus.currentStudents} students</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Driver Information</h4>
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                        <AvatarFallback>MR</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.bus.driver}</p>
                        <p className="text-sm text-gray-600">Bus Driver</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Driver
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stop Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <span>Stop Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Morning Pickup</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600">{student.stops.pickup.name}</p>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">{student.stops.pickup.time}</span>
                      </div>
                      <p className="text-xs text-gray-500">{student.stops.pickup.distance}</p>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">School Dropoff</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600">{student.stops.dropoff.name}</p>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-green-500" />
                        <span className="font-medium">{student.stops.dropoff.time}</span>
                      </div>
                      <p className="text-xs text-gray-500">{student.stops.dropoff.distance}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="today" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>Today's Journey</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayTrips.map((trip, index) => (
                    <div key={trip.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="flex-shrink-0">
                        {getStatusIcon(trip.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900">{trip.type}</h4>
                          <Badge variant={trip.status === 'completed' ? 'default' : 'secondary'}>
                            {trip.status === 'completed' ? 'Completed' : 'Scheduled'}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{trip.location}</p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                          <span>Scheduled: {trip.time}</span>
                          {trip.actualTime && (
                            <span>Actual: {trip.actualTime}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Trip History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentHistory.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-sm font-medium text-gray-900">
                          {new Date(day.date).toLocaleDateString('en-US', { 
                            weekday: 'short', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <Badge className={getStatusColor(day.status)}>
                          {day.status}
                        </Badge>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <div>Morning: {day.morning}</div>
                        <div>Afternoon: {day.afternoon}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Emergency Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {student.emergencyContacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <p className="font-medium text-gray-900">{contact.name}</p>
                            {contact.primary && (
                              <Badge variant="default" className="text-xs">Primary</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{contact.relation}</p>
                          <p className="text-sm text-gray-500">{contact.phone}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentInfo;
