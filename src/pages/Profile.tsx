
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Redirect to login if not logged in
  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }
  
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would call an API to update the profile
    toast({
      title: 'Profile Updated',
      description: 'Your profile information has been updated successfully',
    });
  };
  
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: 'Password Error',
        description: "New passwords don't match",
        variant: 'destructive'
      });
      return;
    }
    
    if (newPassword.length < 6) {
      toast({
        title: 'Password Error',
        description: 'New password must be at least 6 characters',
        variant: 'destructive'
      });
      return;
    }
    
    // In a real app, we would validate the current password and update it
    toast({
      title: 'Password Changed',
      description: 'Your password has been updated successfully',
    });
    
    // Clear form
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        <h1 className="mb-8 border-b pb-4 text-2xl font-bold">My Account</h1>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold">Profile Information</h2>
              
              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-metamart-yellow text-metamart-yellow-dark hover:bg-metamart-yellow-dark hover:text-white"
                >
                  Update Profile
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold">Change Password</h2>
              
              <form onSubmit={handleChangePassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                  <Input
                    id="confirm-new-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-metamart-yellow text-metamart-yellow-dark hover:bg-metamart-yellow-dark hover:text-white"
                >
                  Change Password
                </Button>
              </form>
            </div>
            
            {/* Account Actions */}
            <div className="mt-8 rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold">Account Actions</h2>
              
              <Button 
                variant="destructive" 
                onClick={logout}
                className="w-full"
              >
                Log Out
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
