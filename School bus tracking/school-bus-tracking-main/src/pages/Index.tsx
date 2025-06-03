import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bus, Shield, MapPin, Bell } from 'lucide-react';
const Index = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Bus className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SafeRide</h1>
              <p className="text-sm text-gray-500">School Bus Tracking</p>
            </div>
          </div>
          <Button onClick={() => navigate('/login')} className="bg-blue-500 hover:bg-blue-600">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 md:text-6xl text-slate-950">
            Track Your Child's
            <span className="text-blue-500"> School Bus </span>
            in Real-Time
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay connected with your child's journey to and from school. Get real-time updates, 
            notifications, and peace of mind with our advanced tracking system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-6" onClick={() => navigate('/login')}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-blue-200 hover:bg-blue-50">
              Learn More
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-2xl bg-white shadow-sm border border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Tracking</h3>
            <p className="text-gray-600">
              Real-time GPS tracking of school buses with accurate location updates every few seconds.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white shadow-sm border border-blue-100">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Notifications</h3>
            <p className="text-gray-600">
              Get instant alerts for pickup times, delays, and when your child reaches school safely.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white shadow-sm border border-blue-100">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Secure</h3>
            <p className="text-gray-600">
              Advanced security features ensure your child's information is protected at all times.
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Try the Demo</h3>
            <p className="text-gray-600 mb-6">
              Experience our platform with these demo credentials:
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
              <div className="p-4 bg-blue-50 rounded-xl">
                <strong>Parent:</strong><br />
                parent@demo.com / demo123
              </div>
              <div className="p-4 bg-yellow-50 rounded-xl">
                <strong>Driver:</strong><br />
                driver@demo.com / demo123
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <strong>Admin:</strong><br />
                admin@demo.com / demo123
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600" onClick={() => navigate('/login')}>
              Try Demo Now
            </Button>
          </div>
        </div>
      </main>
    </div>;
};
export default Index;