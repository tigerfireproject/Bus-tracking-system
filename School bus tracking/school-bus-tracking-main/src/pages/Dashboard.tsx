
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Bus, 
  MapPin, 
  Clock, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Navigation,
  School
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const ParentDashboard = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="text-gray-600">Track your child's school bus and get real-time updates</p>
      </div>

      {/* Quick Status Card */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Emma is Safe</h3>
                <p className="text-green-700">Currently at school - picked up at 8:15 AM</p>
              </div>
            </div>
            <Badge className="bg-green-500 text-white">On Time</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Student Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <School className="w-5 h-5 text-blue-500" />
            <span>Student Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b332c12c?w=150&h=150&fit=crop&crop=face" />
              <AvatarFallback>EJ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">Emma Johnson</h3>
              <p className="text-gray-600">Grade 5 • Oakwood Elementary</p>
              <p className="text-sm text-gray-500">Bus #42 • Stop: Pine Street</p>
            </div>
            <Button onClick={() => navigate('/student-info')} variant="outline">
              View Details
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-blue-900">Morning Pickup</span>
              </div>
              <p className="text-blue-700">7:45 AM (in 8 hours)</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Bus className="w-4 h-4 text-yellow-600" />
                <span className="font-medium text-yellow-900">Afternoon Drop</span>
              </div>
              <p className="text-yellow-700">3:30 PM (expected)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Button 
          onClick={() => navigate('/map')} 
          className="h-20 bg-blue-500 hover:bg-blue-600"
        >
          <div className="text-center">
            <MapPin className="w-6 h-6 mx-auto mb-1" />
            <span>Track Bus</span>
          </div>
        </Button>
        <Button 
          onClick={() => navigate('/notifications')} 
          variant="outline" 
          className="h-20"
        >
          <div className="text-center">
            <AlertTriangle className="w-6 h-6 mx-auto mb-1" />
            <span>Alerts</span>
          </div>
        </Button>
        <Button 
          onClick={() => navigate('/routes')} 
          variant="outline" 
          className="h-20"
        >
          <div className="text-center">
            <Navigation className="w-6 h-6 mx-auto mb-1" />
            <span>Route Info</span>
          </div>
        </Button>
      </div>
    </div>
  );

  const DriverDashboard = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Good morning, {user?.name}!</h1>
        <p className="text-gray-600">Ready for today's route? Here's your schedule</p>
      </div>

      {/* Route Status */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">Bus #42 - Route A</h3>
                <p className="text-blue-700">Next pickup: Pine Street (7:45 AM)</p>
              </div>
            </div>
            <Badge className="bg-blue-500 text-white">Active</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Schedule</CardTitle>
          <CardDescription>Morning and afternoon routes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <h4 className="font-medium text-green-900">Morning Route</h4>
                <p className="text-green-700">15 students • 8 stops</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-green-900">7:30 - 8:30 AM</p>
                <Badge className="bg-green-500 text-white">Completed</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div>
                <h4 className="font-medium text-yellow-900">Afternoon Route</h4>
                <p className="text-yellow-700">15 students • 8 stops</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-yellow-900">3:15 - 4:15 PM</p>
                <Badge variant="outline">Scheduled</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <Button onClick={() => navigate('/routes')} className="h-20 bg-blue-500 hover:bg-blue-600">
          <div className="text-center">
            <Navigation className="w-6 h-6 mx-auto mb-1" />
            <span>View Route</span>
          </div>
        </Button>
        <Button onClick={() => navigate('/map')} variant="outline" className="h-20">
          <div className="text-center">
            <MapPin className="w-6 h-6 mx-auto mb-1" />
            <span>Live Map</span>
          </div>
        </Button>
      </div>
    </div>
  );

  const AdminDashboard = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Monitor all buses and manage the fleet</p>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Bus className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-gray-600">Active Buses</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">245</p>
                <p className="text-sm text-gray-600">Students</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-gray-600">Routes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-gray-600">Alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fleet Status */}
      <Card>
        <CardHeader>
          <CardTitle>Fleet Status</CardTitle>
          <CardDescription>Real-time status of all buses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { bus: 'Bus #42', route: 'Route A', status: 'On Route', students: 15, color: 'green' },
              { bus: 'Bus #35', route: 'Route B', status: 'At School', students: 18, color: 'blue' },
              { bus: 'Bus #28', route: 'Route C', status: 'Delayed', students: 12, color: 'yellow' },
              { bus: 'Bus #19', route: 'Route D', status: 'Maintenance', students: 0, color: 'red' },
            ].map((bus) => (
              <div key={bus.bus} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    bus.color === 'green' ? 'bg-green-500' :
                    bus.color === 'blue' ? 'bg-blue-500' :
                    bus.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <div>
                    <p className="font-medium">{bus.bus}</p>
                    <p className="text-sm text-gray-600">{bus.route}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={bus.color === 'green' ? 'default' : 'secondary'}>
                    {bus.status}
                  </Badge>
                  <p className="text-sm text-gray-600 mt-1">{bus.students} students</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Button onClick={() => navigate('/map')} className="h-20 bg-blue-500 hover:bg-blue-600">
          <div className="text-center">
            <MapPin className="w-6 h-6 mx-auto mb-1" />
            <span>Fleet Map</span>
          </div>
        </Button>
        <Button onClick={() => navigate('/routes')} variant="outline" className="h-20">
          <div className="text-center">
            <Navigation className="w-6 h-6 mx-auto mb-1" />
            <span>Manage Routes</span>
          </div>
        </Button>
        <Button onClick={() => navigate('/notifications')} variant="outline" className="h-20">
          <div className="text-center">
            <AlertTriangle className="w-6 h-6 mx-auto mb-1" />
            <span>View Alerts</span>
          </div>
        </Button>
      </div>
    </div>
  );

  const renderDashboard = () => {
    switch (user?.role) {
      case 'parent':
        return <ParentDashboard />;
      case 'driver':
        return <DriverDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <ParentDashboard />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderDashboard()}
    </div>
  );
};

export default Dashboard;
