import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, Users, Award, Clock, ArrowRight, GraduationCap } from "lucide-react";
import engineeringLab from "@/assets/engineering-lab.jpg";
import labResearch from "@/assets/lab-research.jpg";
import studentsLibrary from "@/assets/students-library.jpg";

const Academics = () => {
  const { department } = useParams();

  const faculties = [
    {
      id: "engineering",
      name: "School of Engineering & Technology",
      description: "Leading programs in engineering with state-of-the-art laboratories and industry partnerships",
      programs: ["Computer Science & Engineering", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Electronics & Communication"],
      duration: "4 Years",
      degree: "B.Tech / M.Tech",
      seats: "240",
      image: "/api/placeholder/400/250"
    },
    {
      id: "management",
      name: "School of Management",
      description: "Comprehensive business education with focus on leadership and entrepreneurship",
      programs: ["MBA - General", "MBA - Finance", "MBA - Marketing", "MBA - HR", "MBA - Operations"],
      duration: "2 Years",
      degree: "MBA / PGDM",
      seats: "120",
      image: "/api/placeholder/400/250"
    },
    {
      id: "law",
      name: "School of Law",
      description: "Rigorous legal education preparing students for successful legal careers",
      programs: ["B.A. LL.B", "B.Com LL.B", "LL.M Constitutional Law", "LL.M Corporate Law"],
      duration: "5 Years / 1 Year",
      degree: "LL.B / LL.M",
      seats: "60",
      image: "/api/placeholder/400/250"
    },
    {
      id: "arts-science",
      name: "School of Arts & Sciences",
      description: "Diverse programs in humanities, sciences, and liberal arts",
      programs: ["B.Sc Chemistry", "B.Sc Physics", "B.A English", "M.Sc Mathematics", "M.A Psychology"],
      duration: "3 Years",
      degree: "B.A / B.Sc / M.A / M.Sc",
      seats: "180",
      image: "/api/placeholder/400/250"
    },
    {
      id: "medical",
      name: "School of Medical Sciences",
      description: "Advanced medical education with modern healthcare facilities",
      programs: ["MBBS", "BDS", "B.Pharma", "M.Pharma", "Nursing"],
      duration: "4-5.5 Years",
      degree: "MBBS / BDS / B.Pharma",
      seats: "150",
      image: "/api/placeholder/400/250"
    },
    {
      id: "pharmacy",
      name: "School of Pharmacy",
      description: "Cutting-edge pharmaceutical education and research",
      programs: ["B.Pharma", "M.Pharma", "Pharm.D", "Ph.D Pharmacy"],
      duration: "4 Years",
      degree: "B.Pharma / M.Pharma",
      seats: "80",
      image: "/api/placeholder/400/250"
    }
  ];

  const selectedFaculty = department ? faculties.find(f => f.id === department) : null;

  if (selectedFaculty) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link to="/academics">← Back to All Programs</Link>
            </Button>
          </div>

          {/* Faculty Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {selectedFaculty.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {selectedFaculty.description}
            </p>
          </div>

          {/* Faculty Details */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Duration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-primary">{selectedFaculty.duration}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Degree</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold">{selectedFaculty.degree}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Intake</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-primary">{selectedFaculty.seats}</p>
              </CardContent>
            </Card>
          </div>

          {/* Programs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Available Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedFaculty.programs.map((program, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Book className="h-6 w-6 text-primary mr-2" />
                      <h3 className="font-semibold">{program}</h3>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Facilities & Faculty */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-primary mr-2" />
                    State-of-the-art laboratories
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-primary mr-2" />
                    Modern classrooms with smart boards
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-primary mr-2" />
                    Well-equipped library
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-primary mr-2" />
                    Industry collaboration projects
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-primary mr-2" />
                    Research and development centers
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Experienced and qualified faculty
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Industry-relevant curriculum
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    100% placement assistance
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Internship opportunities
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Global exposure programs
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Academic Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of undergraduate, postgraduate, and doctoral programs 
            designed to prepare you for success in your chosen field.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">120+</div>
            <div className="text-muted-foreground">Programs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-muted-foreground">Schools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">800+</div>
            <div className="text-muted-foreground">Faculty</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Placement Rate</div>
          </div>
        </div>

        {/* Faculties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculties.map((faculty, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="h-48 bg-cover bg-center relative" 
                   style={{ 
                     backgroundImage: `url(${
                       index === 0 ? engineeringLab : 
                       index === 1 ? labResearch : 
                       studentsLibrary
                     })` 
                   }}>
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Book className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-center">{faculty.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center">
                  {faculty.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <Badge variant="secondary">{faculty.duration}</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Intake:</span>
                    <Badge variant="secondary">{faculty.seats} seats</Badge>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full" asChild>
                    <Link to={`/academics/${faculty.id}`}>
                      View Programs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-16 text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Start Your Academic Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of students who have chosen MATS University for their higher education. 
            Take the first step towards a successful career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;