import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Plus, 
  Heart, 
  Sparkles, 
  Settings, 
  Moon, 
  Sun,
  Zap,
  Brain,
  Target
} from 'lucide-react';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [panicMode, setPanicMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Mock data - will be replaced with real data from Supabase
  const userStats = {
    currentStreak: 5,
    xpPoints: 240,
    todaysTasks: 3,
    completedTasks: 2
  };

  const tasks = [
    { id: 1, title: "Take morning vitamins", completed: true, priority: 1, energyLevel: "low" },
    { id: 2, title: "10-minute walk outside", completed: true, priority: 2, energyLevel: "medium" },
    { id: 3, title: "Call mom back", completed: false, priority: 3, energyLevel: "medium" },
    { id: 4, title: "Tidy desk area", completed: false, priority: 1, energyLevel: "low" },
    { id: 5, title: "Review tomorrow's schedule", completed: false, priority: 2, energyLevel: "high" },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const togglePanicMode = () => {
    setPanicMode(!panicMode);
    document.body.classList.toggle('panic-mode');
  };

  const getEnergyIcon = (level: string) => {
    switch (level) {
      case 'low': return <Zap className="h-3 w-3 text-muted-foreground" />;
      case 'medium': return <Zap className="h-3 w-3 text-primary" />;
      case 'high': return <Zap className="h-3 w-3 text-accent" />;
      default: return null;
    }
  };

  return (
    <div className={`min-h-screen p-4 transition-all duration-300 ${panicMode ? 'panic-mode' : ''} gradient-warm-subtle dark:gradient-cool-subtle`}>
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary animate-gentle-float" />
              <Sparkles className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Good morning {user?.user_metadata?.display_name || 'friend'}
              </h1>
              <p className="text-sm text-muted-foreground">Let's make today gentle and achievable</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={togglePanicMode}
              className={panicMode ? "bg-accent/20" : ""}
            >
              <Brain className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">Streak</p>
                  <p className="text-2xl font-bold text-primary">{userStats.currentStreak}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm font-medium">XP Points</p>
                  <p className="text-2xl font-bold text-accent">{userStats.xpPoints}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div>
                <p className="text-sm font-medium mb-2">Today's Progress</p>
                <Progress 
                  value={(userStats.completedTasks / userStats.todaysTasks) * 100} 
                  className="h-2"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {userStats.completedTasks} of {userStats.todaysTasks} tiny wins
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <Button className="w-full" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Quick Add
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Tasks Section */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Today's Tiny Wins</span>
              <Badge variant="secondary">{tasks.filter(t => !t.completed).length} remaining</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {panicMode ? (
              <div className="text-center p-8 space-y-4">
                <Brain className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-lg font-medium">Calm Mode Active</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Take a deep breath. Focus on just one small thing at a time. 
                  You're doing great.
                </p>
                <Button onClick={togglePanicMode} variant="outline">
                  Return to Full View
                </Button>
              </div>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg border transition-all hover:shadow-soft ${
                    task.completed ? 'bg-muted/50 opacity-75' : 'bg-card hover:bg-accent/5'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 cursor-pointer transition-colors ${
                      task.completed
                        ? 'bg-primary border-primary'
                        : 'border-muted-foreground hover:border-primary'
                    }`}
                  />
                  <div className="flex-1">
                    <p className={`${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {task.title}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getEnergyIcon(task.energyLevel)}
                    <Badge variant="outline" className="text-xs">
                      P{task.priority}
                    </Badge>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;