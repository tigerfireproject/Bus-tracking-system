
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Bus, 
  MapPin, 
  Clock, 
  Users, 
  Navigation,
  Phone,
  AlertTriangle
} from 'lucide-react';

const LiveMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedBus, setSelectedBus] = useState<any>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Mock bus data
  const buses = [
    {
      id: 'bus-42',
      number: '42',
      route: 'Route A',
      driver: 'Mike Rodriguez',
      phone: '+1 (555) 123-4567',
      students: 15,
      status: 'On Route',
      location: { lat: 40.7128, lng: -74.0060 },
      eta: '8 minutes',
      nextStop: 'Pine Street',
      speed: '25 mph'
    },
    {
      id: 'bus-35',
      number: '35',
      route: 'Route B',
      driver: 'Sarah Wilson',
      phone: '+1 (555) 987-6543',
      students: 18,
      status: 'At School',
      location: { lat: 40.7580, lng: -73.9855 },
      eta: 'Arrived',
      nextStop: 'Oakwood Elementary',
      speed: '0 mph'
    },
    {
      id: 'bus-28',
      number: '28',
      route: 'Route C',
      driver: 'John Davis',
      phone: '+1 (555) 456-7890',
      students: 12,
      status: 'Delayed',
      location: { lat: 40.7282, lng: -73.7949 },
      eta: '15 minutes',
      nextStop: 'Maple Avenue',
      speed: '0 mph'
    }
  ];

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const getBusStatusColor = (status: string) => {
    switch (status) {
      case 'On Route':
        return 'bg-green-500';
      case 'At School':
        return 'bg-blue-500';
      case 'Delayed':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Map Container */}
      <div className="flex-1 relative">
        <div 
          ref={mapRef}
          className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 relative overflow-hidden"
        >
          {!isMapLoaded ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading live map...</p>
              </div>
            </div>
          ) : (
            <>
              {/* Mock Map Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-200"></div>
                {/* Mock Streets */}
                <div className="absolute top-1/4 left-0 w-full h-1 bg-gray-400 opacity-50"></div>
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400 opacity-50"></div>
                <div className="absolute top-3/4 left-0 w-full h-1 bg-gray-400 opacity-50"></div>
                <div className="absolute left-1/4 top-0 w-1 h-full bg-gray-400 opacity-50"></div>
                <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-400 opacity-50"></div>
                <div className="absolute left-3/4 top-0 w-1 h-full bg-gray-400 opacity-50"></div>
              </div>

              {/* Bus Markers */}
              {buses.map((bus, index) => (
                <div
                  key={bus.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110 ${
                    selectedBus?.id === bus.id ? 'scale-125 z-20' : 'z-10'
                  }`}
                  style={{
                    left: `${25 + index * 20}%`,
                    top: `${30 + index * 15}%`
                  }}
                  onClick={() => setSelectedBus(bus)}
                >
                  <div className="relative">
                    <div className={`w-12 h-12 ${getBusStatusColor(bus.status)} rounded-full flex items-center justify-center shadow-lg`}>
                      <Bus className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Bus {bus.number}
                    </div>
                    
                    {/* Animated pulse for active buses */}
                    {bus.status === 'On Route' && (
                      <div className="absolute inset-0 w-12 h-12 bg-green-500 rounded-full animate-ping opacity-20"></div>
                    )}
                  </div>
                </div>
              ))}

              {/* School Marker */}
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: '75%', top: '20%' }}
              >
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Oakwood Elementary
                </div>
              </div>
            </>
          )}

          {/* Map Controls */}
          <div className="absolute top-4 right-4 space-y-2">
            <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
              +
            </Button>
            <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
              -
            </Button>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
            <h4 className="font-medium text-sm mb-2">Bus Status</h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>On Route</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>At School</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Delayed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-80 bg-white border-l border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Live Bus Tracking</h2>
          <p className="text-sm text-gray-600">Click on a bus to see details</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          {selectedBus ? (
            /* Selected Bus Details */
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Bus #{selectedBus.number}</h3>
                <Badge className={getBusStatusColor(selectedBus.status).replace('bg-', 'bg-') + ' text-white'}>
                  {selectedBus.status}
                </Badge>
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                      <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{selectedBus.driver}</p>
                      <p className="text-sm text-gray-600">Driver</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Route</span>
                      <span className="font-medium">{selectedBus.route}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Students</span>
                      <span className="font-medium">{selectedBus.students}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Speed</span>
                      <span className="font-medium">{selectedBus.speed}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Next Stop</span>
                      <span className="font-medium">{selectedBus.nextStop}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">ETA</span>
                      <span className="font-medium text-blue-600">{selectedBus.eta}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {selectedBus.status === 'Delayed' && (
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-600" />
                      <span className="font-medium text-yellow-900">Delay Notice</span>
                    </div>
                    <p className="text-sm text-yellow-800">
                      Bus is running 10 minutes behind schedule due to traffic conditions.
                    </p>
                  </CardContent>
                </Card>
              )}

              <div className="space-y-2">
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  <Navigation className="w-4 h-4 mr-2" />
                  View Full Route
                </Button>
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Driver
                </Button>
              </div>
            </div>
          ) : (
            /* Bus List */
            <div className="p-4 space-y-4">
              <h3 className="font-medium text-gray-900">All Buses</h3>
              {buses.map((bus) => (
                <Card
                  key={bus.id}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setSelectedBus(bus)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getBusStatusColor(bus.status)}`} />
                        <span className="font-medium">Bus #{bus.number}</span>
                      </div>
                      <Badge variant="secondary">{bus.status}</Badge>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Route:</span>
                        <span>{bus.route}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Students:</span>
                        <span>{bus.students}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ETA:</span>
                        <span className="text-blue-600">{bus.eta}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {selectedBus && (
          <div className="p-4 border-t border-gray-200">
            <Button
              variant="ghost"
              onClick={() => setSelectedBus(null)}
              className="w-full"
            >
              ← Back to Bus List
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveMap;
