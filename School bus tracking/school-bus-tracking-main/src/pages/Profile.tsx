
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Lock, 
  Bell,
  Shield,
  Camera,
  Save
} from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 234-5678',
    address: '123 Pine Street, Oakwood City, OC 12345',
    emergencyContact: 'David Johnson',
    emergencyPhone: '+1 (555) 345-6789'
  });

  const [privacy, setPrivacy] = useState({
    shareLocation: true,
    allowNotifications: true,
    dataCollection: false,
    thirdPartySharing: false
  });

  const [activeTab, setActiveTab] = useState('personal');

  const handleSaveProfile = () => {
    // Simulate saving
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleSavePrivacy = () => {
    // Simulate saving
    toast({
      title: "Privacy Settings Updated",
      description: "Your privacy preferences have been saved.",
    });
  };

  const handleChangePassword = () => {
    // Simulate password change
    toast({
      title: "Password Changed",
      description: "Your password has been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        {/* Profile Overview Card */}
        <Card className="border-blue-100">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative mx-auto md:mx-0">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback className="text-lg bg-blue-100 text-blue-600">
                    {user?.name?.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  className="absolute -bottom-2 -right-2 w-8 h-8 p-0 rounded-full bg-blue-500 hover:bg-blue-600"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl font-semibold text-gray-900">{profile.name}</h2>
                <p className="text-gray-600 capitalize">{user?.role}</p>
                <p className="text-sm text-gray-500">{profile.email}</p>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Camera className="w-4 h-4 mr-2" />
                  Change Photo
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-blue-500" />
                  <span>Personal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={profile.phone}
                      onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Home Address</Label>
                    <Input
                      id="address"
                      value={profile.address}
                      onChange={(e) => setProfile(prev => ({ ...prev, address: e.target.value }))}
                    />
                  </div>
                </div>
                
                <div className="border-t pt-4 space-y-4">
                  <h4 className="font-medium text-gray-900">Emergency Contact</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergency-contact">Contact Name</Label>
                      <Input
                        id="emergency-contact"
                        value={profile.emergencyContact}
                        onChange={(e) => setProfile(prev => ({ ...prev, emergencyContact: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergency-phone">Contact Phone</Label>
                      <Input
                        id="emergency-phone"
                        value={profile.emergencyPhone}
                        onChange={(e) => setProfile(prev => ({ ...prev, emergencyPhone: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button onClick={handleSaveProfile} className="bg-blue-500 hover:bg-blue-600">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-blue-500" />
                  <span>Security Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Change Password */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Change Password</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <Button onClick={handleChangePassword} variant="outline">
                    Update Password
                  </Button>
                </div>

                {/* Two-Factor Authentication */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                    <Button variant="outline">
                      Enable 2FA
                    </Button>
                  </div>
                </div>

                {/* Login Activity */}
                <div className="border-t pt-6">
                  <h4 className="font-medium text-gray-900 mb-4">Recent Login Activity</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Current Session</p>
                        <p className="text-sm text-gray-600">Chrome on Windows • 192.168.1.100</p>
                      </div>
                      <div className="text-sm text-gray-500">Active now</div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Mobile App</p>
                        <p className="text-sm text-gray-600">iOS App • iPhone</p>
                      </div>
                      <div className="text-sm text-gray-500">2 hours ago</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span>Privacy Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="share-location" className="font-medium">
                        Share Location Data
                      </Label>
                      <p className="text-sm text-gray-600">Allow the app to access your location for bus tracking</p>
                    </div>
                    <Switch
                      id="share-location"
                      checked={privacy.shareLocation}
                      onCheckedChange={(checked) => 
                        setPrivacy(prev => ({ ...prev, shareLocation: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="allow-notifications" className="font-medium">
                        Push Notifications
                      </Label>
                      <p className="text-sm text-gray-600">Receive notifications about bus updates</p>
                    </div>
                    <Switch
                      id="allow-notifications"
                      checked={privacy.allowNotifications}
                      onCheckedChange={(checked) => 
                        setPrivacy(prev => ({ ...prev, allowNotifications: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="data-collection" className="font-medium">
                        Analytics Data Collection
                      </Label>
                      <p className="text-sm text-gray-600">Help improve the app by sharing usage data</p>
                    </div>
                    <Switch
                      id="data-collection"
                      checked={privacy.dataCollection}
                      onCheckedChange={(checked) => 
                        setPrivacy(prev => ({ ...prev, dataCollection: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="third-party-sharing" className="font-medium">
                        Third-Party Data Sharing
                      </Label>
                      <p className="text-sm text-gray-600">Allow sharing data with trusted partners</p>
                    </div>
                    <Switch
                      id="third-party-sharing"
                      checked={privacy.thirdPartySharing}
                      onCheckedChange={(checked) => 
                        setPrivacy(prev => ({ ...prev, thirdPartySharing: checked }))
                      }
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-gray-900 mb-4">Data Management</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="w-4 h-4 mr-2" />
                      Download My Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                      <User className="w-4 h-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button onClick={handleSavePrivacy} className="bg-blue-500 hover:bg-blue-600">
                    <Save className="w-4 h-4 mr-2" />
                    Save Privacy Settings
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

export default Profile;
