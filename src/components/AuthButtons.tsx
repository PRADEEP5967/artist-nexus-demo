
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, LogIn, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthButtons = () => {
  // In a real app, this would come from an auth context
  const isLoggedIn = false;
  const user = null;

  if (isLoggedIn && user) {
    return (
      <div className="flex items-center space-x-4">
        <Link to="/dashboard">
          <Button variant="outline" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>Dashboard</span>
          </Button>
        </Link>
        <Button variant="ghost" className="text-sm">
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <Link to="/login">
        <Button variant="ghost" className="flex items-center space-x-2 hover:bg-purple-50">
          <LogIn className="h-4 w-4" />
          <span>Login</span>
        </Button>
      </Link>
      <Link to="/register">
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 flex items-center space-x-2">
          <UserPlus className="h-4 w-4" />
          <span>Sign Up</span>
        </Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
