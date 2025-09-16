import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Users, Calendar, ArrowRight, CheckCircle, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-education.jpg";
import assessmentImage from "@/assets/assessment.jpg";
import careerPathsImage from "@/assets/career-paths.jpg";
import collegesImage from "@/assets/colleges.jpg";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Aptitude Assessment",
      description: "AI-powered quiz to identify your strengths and recommend the perfect stream",
      image: assessmentImage,
      link: "/assessment"
    },
    {
      icon: TrendingUp,
      title: "Career Path Mapping",
      description: "Visualize career opportunities and growth prospects for different streams",
      image: careerPathsImage,
      link: "/career-paths"
    },
    {
      icon: Users,
      title: "College Directory",
      description: "Find nearby government colleges with course details and admission info",
      image: collegesImage,
      link: "/colleges"
    }
  ];

  const benefits = [
    "Make informed academic decisions",
    "Access government college information",
    "Get personalized career guidance",
    "Track important deadlines",
    "Compare different streams and courses",
    "Find scholarships and financial aid"
  ];

  const stats = [
    { label: "Students Helped", value: "50,000+", icon: Users },
    { label: "Government Colleges", value: "2,500+", icon: BookOpen },
    { label: "Career Paths", value: "150+", icon: TrendingUp },
    { label: "Success Rate", value: "95%", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
                  🎓 Your Future Starts Here
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                  Choose Your Perfect 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    Career Path
                  </span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-lg">
                  Get personalized guidance to select the right stream, find quality government colleges, 
                  and unlock your career potential with AI-powered recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/assessment">
                    <Button variant="secondary" size="lg" className="flex items-center gap-2">
                      Start Assessment
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/colleges">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                      Find Colleges
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Students planning their future" 
                  className="w-full h-auto rounded-2xl shadow-strong"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-strong">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                    <div>
                      <div className="font-semibold">95% Success Rate</div>
                      <div className="text-sm text-muted-foreground">Students find their path</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools and guidance you need to make 
              the right educational and career decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 primary-gradient rounded-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {feature.description}
                  </CardDescription>
                  <Link to={feature.link}>
                    <Button variant="outline" className="w-full">
                      Explore
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose EduGuide?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the challenges students face when choosing their career path. 
                Our platform is designed to eliminate confusion and provide clear, actionable guidance.
              </p>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-1">Never Miss a Deadline</h3>
                      <p className="text-sm text-muted-foreground">
                        Get timely reminders for applications, exams, and counseling
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Target className="h-8 w-8 text-secondary" />
                    <div>
                      <h3 className="font-semibold mb-1">Personalized Recommendations</h3>
                      <p className="text-sm text-muted-foreground">
                        AI-powered suggestions based on your interests and aptitude
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="primary-gradient text-white shadow-strong max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Shape Your Future?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have found their perfect career path with our guidance. 
                Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/assessment">
                  <Button variant="secondary" size="lg" className="flex items-center gap-2">
                    Take Free Assessment
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <div className="p-2 primary-gradient rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                EduGuide
              </div>
              <p className="text-background/80">
                Empowering students to make informed educational and career decisions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2">
                <Link to="/assessment" className="block text-background/80 hover:text-background">Assessment</Link>
                <Link to="/career-paths" className="block text-background/80 hover:text-background">Career Paths</Link>
                <Link to="/colleges" className="block text-background/80 hover:text-background">Colleges</Link>
                <Link to="/dashboard" className="block text-background/80 hover:text-background">Dashboard</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-background/80 hover:text-background">Help Center</a>
                <a href="#" className="block text-background/80 hover:text-background">Contact Us</a>
                <a href="#" className="block text-background/80 hover:text-background">FAQ</a>
                <a href="#" className="block text-background/80 hover:text-background">Community</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-background/80 hover:text-background">Study Materials</a>
                <a href="#" className="block text-background/80 hover:text-background">Scholarships</a>
                <a href="#" className="block text-background/80 hover:text-background">Exam Guides</a>
                <a href="#" className="block text-background/80 hover:text-background">Success Stories</a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/80">
            <p>&copy; 2024 EduGuide. All rights reserved. Built for student success.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
