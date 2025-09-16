import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, GraduationCap, Building, Users, TrendingUp, BookOpen, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import careerPathsImage from "@/assets/career-paths.jpg";

const careerPaths = [
  {
    stream: "Science",
    icon: GraduationCap,
    color: "bg-blue-500",
    courses: [
      {
        name: "B.Sc. Physics",
        duration: "3 years",
        careers: ["Research Scientist", "ISRO Scientist", "Professor", "Data Analyst"],
        exams: ["NET", "JEE Advanced", "GATE"],
        salary: "₹3-8 LPA",
        description: "Fundamental physics principles for research and technology careers"
      },
      {
        name: "B.Tech Engineering",
        duration: "4 years",
        careers: ["Software Engineer", "Civil Engineer", "Mechanical Engineer", "Electronics Engineer"],
        exams: ["JEE Main", "GATE", "UPSC Engineering"],
        salary: "₹4-15 LPA",
        description: "Technical skills for engineering and technology sectors"
      },
      {
        name: "MBBS",
        duration: "5.5 years",
        careers: ["Doctor", "Surgeon", "Medical Officer", "Researcher"],
        exams: ["NEET", "AIIMS", "JIPMER"],
        salary: "₹6-20 LPA",
        description: "Medical education for healthcare and research careers"
      }
    ]
  },
  {
    stream: "Arts",
    icon: BookOpen,
    color: "bg-green-500",
    courses: [
      {
        name: "B.A. English",
        duration: "3 years",
        careers: ["Teacher", "Journalist", "Content Writer", "Civil Servant"],
        exams: ["UPSC", "NET", "CTET", "Bank PO"],
        salary: "₹2.5-8 LPA",
        description: "Language skills for education, media, and administration"
      },
      {
        name: "B.A. Political Science",
        duration: "3 years",
        careers: ["Civil Servant", "Politician", "Policy Analyst", "Diplomat"],
        exams: ["UPSC", "State PCS", "NET"],
        salary: "₹3-12 LPA",
        description: "Political understanding for governance and public service"
      },
      {
        name: "B.A. Psychology",
        duration: "3 years",
        careers: ["Counselor", "HR Manager", "Social Worker", "Therapist"],
        exams: ["NET", "Clinical Psychology Entrance"],
        salary: "₹2.5-6 LPA",
        description: "Human behavior study for counseling and HR roles"
      }
    ]
  },
  {
    stream: "Commerce",
    icon: TrendingUp,
    color: "bg-orange-500",
    courses: [
      {
        name: "B.Com",
        duration: "3 years",
        careers: ["Accountant", "Tax Consultant", "Banking Officer", "Financial Analyst"],
        exams: ["CA", "CS", "CMA", "Bank PO"],
        salary: "₹3-10 LPA",
        description: "Commerce fundamentals for finance and business careers"
      },
      {
        name: "BBA",
        duration: "3 years",
        careers: ["Business Manager", "Marketing Executive", "Entrepreneur", "HR Manager"],
        exams: ["MBA Entrance", "Company Management"],
        salary: "₹3-8 LPA",
        description: "Business administration for management and entrepreneurship"
      },
      {
        name: "B.Com (Honours)",
        duration: "3 years",
        careers: ["Financial Advisor", "Investment Banker", "Corporate Accountant"],
        exams: ["CA", "CFA", "FRM"],
        salary: "₹4-12 LPA",
        description: "Advanced commerce for specialized finance roles"
      }
    ]
  }
];

const CareerPaths = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Explore Career Paths
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Discover what each stream offers and map your future success
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/assessment">
                  <Button variant="secondary" size="lg">
                    Take Assessment First
                  </Button>
                </Link>
                <Link to="/colleges">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    Find Colleges
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <img 
                src={careerPathsImage} 
                alt="Career exploration" 
                className="w-full h-auto rounded-lg shadow-strong"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Career Paths Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {careerPaths.map((stream) => (
            <div key={stream.stream} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${stream.color}`}>
                  <stream.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{stream.stream} Stream</h2>
                  <p className="text-muted-foreground">Career opportunities and degree programs</p>
                </div>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {stream.courses.map((course) => (
                  <Card key={course.name} className="shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {course.name}
                        <Badge variant="secondary">{course.duration}</Badge>
                      </CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          Career Options
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {course.careers.slice(0, 3).map((career) => (
                            <Badge key={career} variant="outline" className="text-xs">
                              {career}
                            </Badge>
                          ))}
                          {course.careers.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{course.careers.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Competitive Exams
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {course.exams.map((exam) => (
                            <Badge key={exam} variant="outline" className="text-xs">
                              {exam}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2 border-t">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Expected Salary</span>
                          <span className="text-primary font-semibold">{course.salary}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="card-gradient shadow-strong max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Start Your Journey?</CardTitle>
              <CardDescription>
                Take our aptitude assessment to get personalized recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/assessment">
                  <Button variant="hero" size="lg">
                    Take Assessment
                  </Button>
                </Link>
                <Link to="/colleges">
                  <Button variant="outline" size="lg">
                    Find Colleges
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CareerPaths;