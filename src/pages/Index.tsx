import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Sparkles, Brain, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    // Redirect authenticated users to dashboard
    if (user && !loading) {
      window.location.href = '/dashboard';
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-warm-subtle dark:gradient-cool-subtle">
        <div className="animate-gentle-float">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-warm-subtle dark:gradient-cool-subtle">
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Logo & Title */}
          <div className="space-y-4 animate-gentle-float">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <Sparkles className="h-7 w-7 text-accent" />
              <Brain className="h-8 w-8 text-primary" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold gradient-accent bg-clip-text text-transparent">
              Mindful Tasks
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              A gentle to-do app designed for neurodivergent minds. 
              <br />
              <span className="text-primary">5 tasks max. No overwhelm. Just progress.</span>
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="shadow-soft border-border/50">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Gentle Streaks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Grace days and flexible tracking. Progress, not perfection.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-border/50">
              <CardHeader>
                <Brain className="h-8 w-8 text-accent mx-auto mb-2" />
                <CardTitle className="text-lg">Panic-to-Calm</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Overwhelmed? One click simplifies everything into breathing room.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-border/50">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Energy-Aware</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tag tasks by energy level. Match your to-dos to your capacity.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="space-y-4 pt-8">
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8 py-6 shadow-glow">
                Start Your Gentle Journey
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free to use • Designed with neurodivergent minds in mind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
