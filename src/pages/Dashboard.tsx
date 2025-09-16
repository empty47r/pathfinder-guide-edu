import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, BookOpen, Calendar, Target, TrendingUp, Bell, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = {
    name: "Rahul Kumar",
    class: "12th",
    stream: "Science",
    completedAssessment: true,
    recommendedStream: "Science",
    appliedColleges: 3,
    savedColleges: 5
  };

  const upcomingDeadlines = [
    { exam: "JEE Main 2024", date: "April 15, 2024", type: "Application", priority: "high" },
    { exam: "NEET 2024", date: "April 20, 2024", type: "Application", priority: "high" },
    { exam: "State CET", date: "May 5, 2024", type: "Exam", priority: "medium" },
    { exam: "College Counseling", date: "June 1, 2024", type: "Registration", priority: "low" }
  ];

  const recommendations = [
    {
      title: "B.Tech Computer Science",
      college: "Government Engineering College",
      match: 95,
      reason: "Perfect match based on your interests in programming and mathematics"
    },
    {
      title: "B.Sc. Physics",
      college: "State University",
      match: 88,
      reason: "Strong alignment with your analytical skills and science aptitude"
    },
    {
      title: "B.Tech Electronics",
      college: "Regional Technical Institute",
      match: 82,
      reason: "Good fit for your technical interests and problem-solving abilities"
    }
  ];

  const achievements = [
    { title: "Assessment Completed", icon: Target, completed: true },
    { title: "First College Applied", icon: BookOpen, completed: true },
    { title: "Profile 80% Complete", icon: Users, completed: true },
    { title: "Career Path Explored", icon: TrendingUp, completed: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="primary-gradient text-white">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
              <p className="text-white/90">
                Class {user.class} • {user.stream} Stream
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">85%</div>
              <div className="text-white/80">Profile Complete</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Colleges Applied</p>
                      <p className="text-2xl font-bold">{user.appliedColleges}</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Saved Colleges</p>
                      <p className="text-2xl font-bold">{user.savedColleges}</p>
                    </div>
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Upcoming Deadlines</p>
                      <p className="text-2xl font-bold">{upcomingDeadlines.length}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-accent" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Personalized Recommendations */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Personalized Recommendations
                </CardTitle>
                <CardDescription>
                  Based on your assessment results and interests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{rec.title}</h4>
                        <p className="text-sm text-muted-foreground">{rec.college}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{rec.match}%</div>
                        <div className="text-xs text-muted-foreground">Match</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{rec.reason}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="default">Learn More</Button>
                      <Button size="sm" variant="outline">Save</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievement Progress */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Your Progress
                </CardTitle>
                <CardDescription>
                  Complete these milestones to optimize your college selection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${achievement.completed ? 'bg-secondary' : 'bg-muted'}`}>
                        <achievement.icon className={`h-4 w-4 ${achievement.completed ? 'text-secondary-foreground' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${achievement.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {achievement.title}
                        </p>
                      </div>
                      {achievement.completed ? (
                        <Badge variant="secondary">Completed</Badge>
                      ) : (
                        <Button size="sm" variant="outline">Complete</Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upcoming Deadlines */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Upcoming Deadlines
                </CardTitle>
                <CardDescription>
                  Don't miss important dates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-sm">{deadline.exam}</h4>
                        <p className="text-xs text-muted-foreground">{deadline.type}</p>
                      </div>
                      <Badge 
                        variant={deadline.priority === "high" ? "destructive" : 
                                deadline.priority === "medium" ? "outline" : "secondary"}
                        className="text-xs"
                      >
                        {deadline.priority}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium">{deadline.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/assessment" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Target className="h-4 w-4 mr-2" />
                    Retake Assessment
                  </Button>
                </Link>
                <Link to="/colleges" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Find More Colleges
                  </Button>
                </Link>
                <Link to="/career-paths" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Explore Career Paths
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Set Reminders
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;