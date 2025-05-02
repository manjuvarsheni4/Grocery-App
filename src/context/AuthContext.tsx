
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { toast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is already logged in using localStorage
    const storedUser = localStorage.getItem('metamart-user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error parsing user from localStorage', error);
        localStorage.removeItem('metamart-user');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, we would call an API here
      // For now, we'll simulate by checking if the user exists in localStorage
      const allUsers = JSON.parse(localStorage.getItem('metamart-users') || '[]');
      const foundUser = allUsers.find((u: any) => 
        u.email === email && u.password === password
      );
      
      if (!foundUser) {
        toast({
          title: "Login Failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
        return false;
      }

      // Create safe user object (without password)
      const safeUser: User = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name
      };
      
      // Save to state and localStorage
      setUser(safeUser);
      setIsLoggedIn(true);
      localStorage.setItem('metamart-user', JSON.stringify(safeUser));
      
      toast({
        title: "Login Successful",
        description: `Welcome back, ${safeUser.name}!`,
      });
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Get existing users
      const existingUsers = JSON.parse(localStorage.getItem('metamart-users') || '[]');
      
      // Check if user already exists
      if (existingUsers.some((u: any) => u.email === email)) {
        toast({
          title: "Signup Failed",
          description: "Email already exists",
          variant: "destructive",
        });
        return false;
      }
      
      // Create new user with ID
      const newUser = {
        id: `user_${Date.now()}`,
        name,
        email,
        password, // In a real app, this should be hashed
      };
      
      // Add to users list
      existingUsers.push(newUser);
      localStorage.setItem('metamart-users', JSON.stringify(existingUsers));
      
      // Create safe user object (without password)
      const safeUser: User = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
      };
      
      // Log user in
      setUser(safeUser);
      setIsLoggedIn(true);
      localStorage.setItem('metamart-user', JSON.stringify(safeUser));
      
      toast({
        title: "Welcome to MetaMart!",
        description: "Your account has been created successfully.",
      });
      
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Signup Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('metamart-user');
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
