
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Clock,
  MapPin,
  Bus,
  Settings
} from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'pickup',
      title: 'Bus Approaching Your Stop',
      message: 'Bus #42 will arrive at Pine Street in 3 minutes',
      time: '2 minutes ago',
      read: false,
      priority: 'high'
    },
    {
      id: 2,
      type: 'safety',
      title: 'Student Safely Boarded',
      message: 'Emma has safely boarded Bus #42 at Pine Street & 5th Avenue',
      time: '15 minutes ago',
      read: false,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'delay',
      title: 'Afternoon Route Delayed',
      message: 'Bus #42 is running 10 minutes behind schedule due to traffic',
      time: '2 hours ago',
      read: true,
      priority: 'medium'
    },
    {
      id: 4,
      type: 'arrival',
      title: 'Arrived at School',
      message: 'Emma has safely arrived at Oakwood Elementary School',
      time: '6 hours ago',
      read: true,
      priority: 'low'
    },
    {
      id: 5,
      type: 'info',
      title: 'Route Change Notice',
      message: 'Temporary route modification for Pine Street due to construction',
      time: '1 day ago',
      read: true,
      priority: 'medium'
    }
  ]);

  const [settings, setSettings] = useState({
    pickupReminders: true,
    arrivalNotifications: true,
    delayAlerts: true,
    safetyUpdates: true,
    routeChanges: true,
    weeklyReports: false,
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false
  });

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'pickup':
        return <Bus className="w-5 h-5 text-blue-500" />;
      case 'safety':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'delay':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'arrival':
        return <MapPin className="w-5 h-5 text-purple-500" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <Bell className="w-6 h-6 text-blue-500" />
              <span>Notifications</span>
              {unreadCount > 0 && (
                <Badge className="bg-red-500 text-white">
                  {unreadCount}
                </Badge>
              )}
            </h1>
            <p className="text-gray-600">Stay updated with your bus tracking alerts</p>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" onClick={markAllAsRead}>
              Mark All as Read
            </Button>
          )}
        </div>

        <Tabs defaultValue="notifications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="notifications">
              Notifications {unreadCount > 0 && `(${unreadCount})`}
            </TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="notifications" className="space-y-4">
            {notifications.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
                  <p className="text-gray-600">You're all caught up! We'll notify you when there's something new.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <Card 
                    key={notification.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                      !notification.read ? 'border-blue-200 bg-blue-50' : 'border-gray-200'
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          {getNotificationIcon(notification.type)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className={`font-medium ${
                                  !notification.read ? 'text-gray-900' : 'text-gray-700'
                                }`}>
                                  {notification.title}
                                </h4>
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                )}
                              </div>
                              <p className={`text-sm ${
                                !notification.read ? 'text-gray-700' : 'text-gray-600'
                              }`}>
                                {notification.message}
                              </p>
                              <div className="flex items-center space-x-3 mt-2">
                                <div className="flex items-center space-x-1 text-xs text-gray-500">
                                  <Clock className="w-3 h-3" />
                                  <span>{notification.time}</span>
                                </div>
                                <Badge className={getPriorityColor(notification.priority)}>
                                  {notification.priority}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-blue-500" />
                  <span>Notification Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Alert Types */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Alert Types</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="pickup-reminders" className="font-medium">
                          Pickup Reminders
                        </Label>
                        <p className="text-sm text-gray-600">Get notified when the bus is approaching your stop</p>
                      </div>
                      <Switch
                        id="pickup-reminders"
                        checked={settings.pickupReminders}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({ ...prev, pickupReminders: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="arrival-notifications" className="font-medium">
                          Arrival Notifications
                        </Label>
                        <p className="text-sm text-gray-600">Get notified when your child arrives at school</p>
                      </div>
                      <Switch
                        id="arrival-notifications"
                        checked={settings.arrivalNotifications}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({ ...prev, arrivalNotifications: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="delay-alerts" className="font-medium">
                          Delay Alerts
                        </Label>
                        <p className="text-sm text-gray-600">Get notified about bus delays or route changes</p>
                      </div>
                      <Switch
                        id="delay-alerts"
                        checked={settings.delayAlerts}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({ ...prev, delayAlerts: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="safety-updates" className="font-medium">
                          Safety Updates
                        </Label>
                        <p className="text-sm text-gray-600">Get notified when your child boards or exits the bus</p>
                      </div>
                      <Switch
                        id="safety-updates"
                        checked={settings.safetyUpdates}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({ ...prev, safetyUpdates: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="route-changes" className="font-medium">
                          Route Changes
                        </Label>
                        <p className="text-sm text-gray-600">Get notified about temporary route modifications</p>
                      </div>
                      <Switch
                        id="route-changes"
                        checked={settings.routeChanges}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({ ...prev, routeChanges: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="weekly-reports" className="font-medium">
                          Weekly Reports
                        </Label>
                        <p className="text-sm text-gray-600">Receive weekly summaries of your child's bus journey</p>
                      </div>
                      <Switch
                        id="weekly-reports"
                        checked={settings.weeklyReports}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({ ...prev, weeklyReports: checked }))
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Methods */}
                <div className="border-t pt-6">
                  <h4 className="font-medium text-gray-900 mb-4">Delivery Methods</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-notifications" className="font-medium">
                          Push Notifications
                        </Label>
                        <p className="text-sm text-gray-600">Receive notifications in the app</p>
                      </div>
                      <Switch
                        id="push-notifications"
                        checked={settings.pushNotifications}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({ ...prev, pushNotifications: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-notifications" className="font-medium">
                          Email Notifications
                        </Label>
                        <p className="text-sm text-gray-600">Receive notifications via email</p>
                      </div>
                      <Switch
                        id="email-notifications"
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({ ...prev, emailNotifications: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sms-notifications" className="font-medium">
                          SMS Notifications
                        </Label>
                        <p className="text-sm text-gray-600">Receive notifications via text message</p>
                      </div>
                      <Switch
                        id="sms-notifications"
                        checked={settings.smsNotifications}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({ ...prev, smsNotifications: checked }))
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    Save Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Notifications;
