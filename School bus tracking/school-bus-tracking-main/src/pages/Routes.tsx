
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Bus, 
  Clock, 
  MapPin, 
  Navigation, 
  Search,
  Users,
  Route,
  School
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Routes = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoute, setSelectedRoute] = useState<any>(null);

  const routes = [
    {
      id: 'route-a',
      name: 'Route A',
      bus: '42',
      driver: 'Mike Rodriguez',
      status: 'Active',
      students: 15,
      distance: '12.5 miles',
      duration: '45 minutes',
      stops: [
        { id: 1, name: 'Pine Street & 5th Avenue', time: '7:45 AM', students: 3, address: '123 Pine Street' },
        { id: 2, name: 'Maple Avenue & Oak Street', time: '7:52 AM', students: 2, address: '456 Maple Avenue' },
        { id: 3, name: 'Cedar Road & Elm Drive', time: '7:58 AM', students: 4, address: '789 Cedar Road' },
        { id: 4, name: 'Birch Lane & Willow Court', time: '8:05 AM', students: 3, address: '321 Birch Lane' },
        { id: 5, name: 'Cherry Street & Poplar Avenue', time: '8:12 AM', students: 3, address: '654 Cherry Street' },
        { id: 6, name: 'Oakwood Elementary School', time: '8:20 AM', students: 0, address: '100 School District Drive' }
      ]
    },
    {
      id: 'route-b',
      name: 'Route B',
      bus: '35',
      driver: 'Sarah Wilson',
      status: 'Active',
      students: 18,
      distance: '14.2 miles',
      duration: '50 minutes',
      stops: [
        { id: 1, name: 'Rose Avenue & Tulip Street', time: '7:40 AM', students: 4, address: '111 Rose Avenue' },
        { id: 2, name: 'Daisy Drive & Lily Lane', time: '7:47 AM', students: 3, address: '222 Daisy Drive' },
        { id: 3, name: 'Sunflower Road & Violet Court', time: '7:54 AM', students: 5, address: '333 Sunflower Road' },
        { id: 4, name: 'Iris Street & Jasmine Avenue', time: '8:01 AM', students: 3, address: '444 Iris Street' },
        { id: 5, name: 'Orchid Way & Peony Place', time: '8:08 AM', students: 3, address: '555 Orchid Way' },
        { id: 6, name: 'Oakwood Elementary School', time: '8:18 AM', students: 0, address: '100 School District Drive' }
      ]
    },
    {
      id: 'route-c',
      name: 'Route C',
      bus: '28',
      driver: 'John Davis',
      status: 'Delayed',
      students: 12,
      distance: '10.8 miles',
      duration: '40 minutes',
      stops: [
        { id: 1, name: 'First Street & Main Avenue', time: '7:50 AM', students: 2, address: '777 First Street' },
        { id: 2, name: 'Second Street & Center Road', time: '7:56 AM', students: 3, address: '888 Second Street' },
        { id: 3, name: 'Third Avenue & Park Drive', time: '8:02 AM', students: 4, address: '999 Third Avenue' },
        { id: 4, name: 'Fourth Street & Garden Lane', time: '8:08 AM', students: 3, address: '1010 Fourth Street' },
        { id: 5, name: 'Oakwood Elementary School', time: '8:15 AM', students: 0, address: '100 School District Drive' }
      ]
    }
  ];

  const filteredRoutes = routes.filter(route =>
    route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    route.bus.includes(searchTerm) ||
    route.driver.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Delayed':
        return 'bg-yellow-100 text-yellow-800';
      case 'Maintenance':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Bus Routes</h1>
            <p className="text-gray-600">View and manage all school bus routes</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search routes, buses, or drivers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button onClick={() => navigate('/map')} className="bg-blue-500 hover:bg-blue-600">
              <Navigation className="w-4 h-4 mr-2" />
              Live Map
            </Button>
          </div>
        </div>

        {selectedRoute ? (
          /* Route Details View */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedRoute(null)}
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back to Routes
              </Button>
              <Button onClick={() => navigate('/map')} variant="outline">
                <MapPin className="w-4 h-4 mr-2" />
                Track on Map
              </Button>
            </div>

            {/* Route Header */}
            <Card className="border-blue-100">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                      <Bus className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedRoute.name}</h2>
                      <p className="text-gray-600">Bus #{selectedRoute.bus} • {selectedRoute.driver}</p>
                      <Badge className={getStatusColor(selectedRoute.status)}>
                        {selectedRoute.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                      <p className="text-sm font-medium text-blue-900">{selectedRoute.students}</p>
                      <p className="text-xs text-blue-700">Students</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <Route className="w-5 h-5 text-green-600 mx-auto mb-1" />
                      <p className="text-sm font-medium text-green-900">{selectedRoute.distance}</p>
                      <p className="text-xs text-green-700">Distance</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <Clock className="w-5 h-5 text-yellow-600 mx-auto mb-1" />
                      <p className="text-sm font-medium text-yellow-900">{selectedRoute.duration}</p>
                      <p className="text-xs text-yellow-700">Duration</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Route Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>Route Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedRoute.stops.map((stop: any, index: number) => (
                    <div key={stop.id} className="flex items-start space-x-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index === selectedRoute.stops.length - 1 
                            ? 'bg-red-500' 
                            : 'bg-blue-500'
                        }`}>
                          {index === selectedRoute.stops.length - 1 ? (
                            <School className="w-4 h-4 text-white" />
                          ) : (
                            <span className="text-white text-sm font-medium">{index + 1}</span>
                          )}
                        </div>
                        {index < selectedRoute.stops.length - 1 && (
                          <div className="w-0.5 h-12 bg-gray-300 mt-2"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">{stop.name}</h4>
                            <p className="text-sm text-gray-600">{stop.address}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="font-medium text-gray-900">{stop.time}</span>
                            </div>
                            {stop.students > 0 && (
                              <div className="flex items-center space-x-1 mt-1">
                                <Users className="w-3 h-3 text-blue-500" />
                                <span className="text-xs text-blue-600">{stop.students} students</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Routes List View */
          <div className="grid gap-6">
            {filteredRoutes.map((route) => (
              <Card 
                key={route.id} 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedRoute(route)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Bus className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="text-lg font-semibold text-gray-900">{route.name}</h3>
                          <Badge className={getStatusColor(route.status)}>
                            {route.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600">Bus #{route.bus} • {route.driver}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{route.students} students</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Route className="w-4 h-4" />
                            <span>{route.distance}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{route.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{route.stops.length} stops</p>
                        <p className="text-xs text-gray-500">
                          {route.stops[0]?.time} - {route.stops[route.stops.length - 1]?.time}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredRoutes.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No routes found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or check back later.</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Routes;
