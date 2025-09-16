import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, MapPin, Star, Users, Calendar, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import collegesImage from "@/assets/colleges.jpg";

const colleges = [
  {
    id: 1,
    name: "Government College of Arts and Science",
    location: "Delhi",
    distance: "2.5 km",
    rating: 4.2,
    courses: ["B.A. English", "B.A. Political Science", "B.Sc. Physics", "B.Com"],
    fees: "₹15,000/year",
    cutoff: "85%",
    facilities: ["Library", "Lab", "Hostel", "Sports"],
    medium: "English/Hindi",
    established: "1965"
  },
  {
    id: 2,
    name: "State University College",
    location: "Mumbai",
    distance: "4.2 km",
    rating: 4.5,
    courses: ["B.Tech CSE", "B.Tech Mechanical", "B.Sc. Chemistry", "BBA"],
    fees: "₹25,000/year",
    cutoff: "90%",
    facilities: ["Library", "Lab", "Hostel", "WiFi", "Cafeteria"],
    medium: "English",
    established: "1978"
  },
  {
    id: 3,
    name: "Regional Government College",
    location: "Bangalore",
    distance: "1.8 km",
    rating: 4.0,
    courses: ["B.Com Honours", "B.A. Psychology", "B.Sc. Mathematics"],
    fees: "₹12,000/year",
    cutoff: "80%",
    facilities: ["Library", "Sports", "Canteen"],
    medium: "English/Local",
    established: "1982"
  },
  {
    id: 4,
    name: "Metropolitan Government Institute",
    location: "Chennai",
    distance: "3.7 km",
    rating: 4.3,
    courses: ["B.Tech ECE", "B.Sc. Biology", "B.A. History", "B.Com"],
    fees: "₹20,000/year",
    cutoff: "88%",
    facilities: ["Library", "Lab", "Hostel", "WiFi", "Sports", "Medical"],
    medium: "English",
    established: "1971"
  },
  {
    id: 5,
    name: "District College of Education",
    location: "Pune",
    distance: "5.1 km",
    rating: 3.9,
    courses: ["B.Ed", "B.A. Education", "B.Sc. Physics", "B.Com"],
    fees: "₹18,000/year",
    cutoff: "82%",
    facilities: ["Library", "Lab", "Practice School"],
    medium: "English/Marathi",
    established: "1990"
  },
  {
    id: 6,
    name: "Central Government Degree College",
    location: "Hyderabad",
    distance: "6.3 km",
    rating: 4.4,
    courses: ["B.Tech IT", "B.Sc. Computer Science", "BBA", "B.Com Honours"],
    fees: "₹22,000/year",
    cutoff: "92%",
    facilities: ["Library", "Lab", "Hostel", "WiFi", "Placement Cell"],
    medium: "English",
    established: "1985"
  }
];

const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStream, setFilterStream] = useState("all");
  const [sortBy, setSortBy] = useState("distance");

  const filteredColleges = colleges
    .filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStream = filterStream === "all" || 
                           college.courses.some(course => {
                             if (filterStream === "science") return course.includes("B.Tech") || course.includes("B.Sc");
                             if (filterStream === "arts") return course.includes("B.A.") || course.includes("B.Ed");
                             if (filterStream === "commerce") return course.includes("B.Com") || course.includes("BBA");
                             return true;
                           });
      
      return matchesSearch && matchesStream;
    })
    .sort((a, b) => {
      if (sortBy === "distance") return parseFloat(a.distance) - parseFloat(b.distance);
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "fees") return parseFloat(a.fees.replace(/[₹,]/g, "")) - parseFloat(b.fees.replace(/[₹,]/g, ""));
      return 0;
    });

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
                Government Colleges Near You
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Find quality education at affordable fees in your area
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/assessment">
                  <Button variant="secondary" size="lg">
                    Get Stream Recommendation
                  </Button>
                </Link>
                <Link to="/career-paths">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    Explore Careers
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <img 
                src={collegesImage} 
                alt="Government colleges" 
                className="w-full h-auto rounded-lg shadow-strong"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <Card className="shadow-soft mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter & Search Colleges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search colleges, courses, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={filterStream} onValueChange={setFilterStream}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by stream" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Streams</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                  <SelectItem value="commerce">Commerce</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="fees">Fees</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="w-full">
                <MapPin className="h-4 w-4 mr-2" />
                Change Location
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            {filteredColleges.length} Colleges Found
          </h2>
          <p className="text-muted-foreground">
            Showing government colleges based on your preferences
          </p>
        </div>

        {/* Colleges Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredColleges.map((college) => (
            <Card key={college.id} className="shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{college.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4" />
                      {college.location} • {college.distance} away
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1 bg-warning/10 px-2 py-1 rounded">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="text-sm font-medium">{college.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Available Courses</h4>
                  <div className="flex flex-wrap gap-1">
                    {college.courses.slice(0, 3).map((course) => (
                      <Badge key={course} variant="secondary" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                    {college.courses.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{college.courses.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Annual Fees</span>
                    <div className="font-semibold text-primary">{college.fees}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Cut-off</span>
                    <div className="font-semibold">{college.cutoff}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Facilities</h4>
                  <div className="flex flex-wrap gap-1">
                    {college.facilities.map((facility) => (
                      <Badge key={facility} variant="outline" className="text-xs">
                        {facility}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Medium</span>
                    <div className="font-medium">{college.medium}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Established</span>
                    <div className="font-medium">{college.established}</div>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="default" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No colleges found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or location
            </p>
            <Button variant="outline" onClick={() => {setSearchTerm(""); setFilterStream("all");}}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Colleges;