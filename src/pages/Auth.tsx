import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { Heart, Sparkles } from 'lucide-react';

const Auth = () => {
  const { signIn, signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  // Sign in form
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  
  // Sign up form
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signInEmail || !signInPassword) return;
    
    setIsLoading(true);
    try {
      const { error } = await signIn(signInEmail, signInPassword);
      if (error) {
        toast({
          title: "Sign in failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        window.location.href = '/';
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signUpEmail || !signUpPassword) return;
    
    setIsLoading(true);
    try {
      const { error } = await signUp(signUpEmail, signUpPassword, displayName);
      if (error) {
        toast({
          title: "Sign up failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Welcome!",
          description: "Check your email to confirm your account",
        });
        window.location.href = '/';
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen gradient-wellness p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 wellness-card-primary flex items-center justify-center rounded-2xl">
              <Heart className="h-6 w-6 animate-gentle-float" />
            </div>
            <h1 className="text-3xl font-bold text-wellness-gradient">
              Mindful Tasks
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Your wellness companion for productive, peaceful days
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          
          {/* Welcome Card */}
          <div className="wellness-card dashboard-card-large animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="p-6 h-full flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 wellness-card-nature flex items-center justify-center rounded-2xl mb-4">
                <Sparkles className="h-8 w-8 text-white animate-gentle-float" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Welcome</h2>
              <p className="text-muted-foreground mb-6">
                Take a moment to breathe. Let's create a mindful, productive space together.
              </p>
              <div className="text-sm text-muted-foreground">
                Ready to begin your journey?
              </div>
            </div>
          </div>

          {/* Sign In Card */}
          <div className="wellness-card dashboard-card-medium animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 wellness-card-primary flex items-center justify-center rounded-lg mr-3">
                  <span className="text-sm">🏠</span>
                </div>
                Sign In
              </h3>
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2 wellness-card">
                  <TabsTrigger value="signin">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="signin" className="space-y-4 mt-4">
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email" className="text-sm">Email</Label>
                      <Input
                        id="signin-email"
                        type="email"
                        placeholder="your@email.com"
                        value={signInEmail}
                        onChange={(e) => setSignInEmail(e.target.value)}
                        className="wellness-card border-0"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signin-password" className="text-sm">Password</Label>
                      <Input
                        id="signin-password"
                        type="password"
                        value={signInPassword}
                        onChange={(e) => setSignInPassword(e.target.value)}
                        className="wellness-card border-0"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full wellness-button font-semibold" 
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-4 mt-4">
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="display-name" className="text-sm">Display Name</Label>
                      <Input
                        id="display-name"
                        type="text"
                        placeholder="How should we call you?"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="wellness-card border-0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-sm">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your@email.com"
                        value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                        className="wellness-card border-0"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-sm">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        value={signUpPassword}
                        onChange={(e) => setSignUpPassword(e.target.value)}
                        className="wellness-card border-0"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full wellness-button font-semibold" 
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Features Preview Cards */}
          <div className="wellness-card dashboard-card-small animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="p-4 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 wellness-card-primary flex items-center justify-center rounded-lg mr-3">
                  <span className="text-sm">🎯</span>
                </div>
                <h4 className="font-semibold">5 Task Limit</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Gentle focus. No overwhelm.
              </p>
            </div>
          </div>

          <div className="wellness-card dashboard-card-small animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="p-4 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 wellness-card-nature flex items-center justify-center rounded-lg mr-3">
                  <span className="text-sm">🧘</span>
                </div>
                <h4 className="font-semibold">Panic Mode</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                One click to calm chaos.
              </p>
            </div>
          </div>

          <div className="wellness-card dashboard-card-small animate-scale-in" style={{ animationDelay: '1.0s' }}>
            <div className="p-4 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 gradient-primary flex items-center justify-center rounded-lg mr-3">
                  <span className="text-sm">⚡</span>
                </div>
                <h4 className="font-semibold">Energy Aware</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Match tasks to your energy.
              </p>
            </div>
          </div>

        </div>
        
        <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <p className="text-xs text-muted-foreground">
            Designed with neurodivergent minds in mind • Free to use
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;