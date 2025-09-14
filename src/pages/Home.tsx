import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, BookOpen, Award, Calendar, ArrowRight, Star, Quote, MapPin, Phone, Mail, Globe } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";
import studentsLibrary from "@/assets/students-library.jpg";
import labResearch from "@/assets/lab-research.jpg";
import graduation from "@/assets/graduation.jpg";
import sportsComplex from "@/assets/sports-complex.jpg";
import engineeringLab from "@/assets/engineering-lab.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";
import hostel from "@/assets/hostel.jpg";

const Home = () => {
  const stats = [
    { icon: Users, label: "Students", value: "15,000+" },
    { icon: BookOpen, label: "Programs", value: "120+" },
    { icon: GraduationCap, label: "Faculty", value: "800+" },
    { icon: Award, label: "Awards", value: "50+" },
  ];

  const news = [
    {
      date: "Dec 15, 2024",
      title: "MATS University Receives NAAC A+ Grade Accreditation",
      description: "University achieves highest grade in institutional assessment",
      category: "Achievement",
    },
    {
      date: "Dec 12, 2024",
      title: "International Conference on AI and Machine Learning",
      description: "Join renowned experts from around the world for three days of innovation",
      category: "Event",
    },
    {
      date: "Dec 10, 2024",
      title: "New Research Center for Sustainable Technologies Inaugurated",
      description: "State-of-the-art facility to focus on green energy solutions",
      category: "Research",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Professor, Computer Science",
      image: "/api/placeholder/80/80",
      content: "MATS University provides an excellent environment for both teaching and research. The support for innovation is remarkable.",
    },
    {
      name: "Rahul Sharma",
      role: "Engineering Graduate, Class of 2023",
      image: "/api/placeholder/80/80",
      content: "The practical exposure and industry connections at MATS helped me land my dream job at a Fortune 500 company.",
    },
    {
      name: "Priya Patel",
      role: "MBA Student",
      image: "/api/placeholder/80/80",
      content: "The diverse academic programs and global perspective at MATS have broadened my horizons tremendously.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${campusHero})` }}
        >
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            MATS University
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Shaping Tomorrow's Leaders Through Excellence in Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/admissions" className="flex items-center">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/about">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-university-sky/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Explore MATS University
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive programs, world-class facilities, and vibrant campus life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <GraduationCap className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Academics</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  Explore our diverse range of undergraduate and postgraduate programs across multiple disciplines
                </CardDescription>
                <Button variant="outline" asChild>
                  <Link to="/academics">View Programs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Users className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Admissions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  Start your journey with us. Learn about our admission process, requirements, and scholarships
                </CardDescription>
                <Button variant="outline" asChild>
                  <Link to="/admissions">Apply Today</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <BookOpen className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Research</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  Discover groundbreaking research opportunities and innovation initiatives at our university
                </CardDescription>
                <Button variant="outline" asChild>
                  <Link to="/research">Explore Research</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-16 bg-university-sky/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Campus Life at MATS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience a vibrant campus community with world-class facilities and endless opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${studentsLibrary})` }}>
                <div className="h-full bg-primary/20 group-hover:bg-primary/30 transition-colors"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Modern Library</h3>
                <p className="text-sm text-muted-foreground">24/7 access to over 100,000 books and digital resources</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${labResearch})` }}>
                <div className="h-full bg-primary/20 group-hover:bg-primary/30 transition-colors"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Research Labs</h3>
                <p className="text-sm text-muted-foreground">State-of-the-art laboratories for hands-on learning</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${sportsComplex})` }}>
                <div className="h-full bg-primary/20 group-hover:bg-primary/30 transition-colors"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Sports Complex</h3>
                <p className="text-sm text-muted-foreground">Olympic-size pool, gym, and multi-sport facilities</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${hostel})` }}>
                <div className="h-full bg-primary/20 group-hover:bg-primary/30 transition-colors"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Campus Housing</h3>
                <p className="text-sm text-muted-foreground">Safe, comfortable accommodation for 5,000+ students</p>
              </CardContent>
            </Card>
          </div>

          {/* Campus Map Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Explore Our Campus</h3>
                <p className="text-muted-foreground mb-6">
                  Spread across 200+ acres in the heart of Raipur, our campus combines modern architecture 
                  with green spaces, creating an ideal environment for learning and growth.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span>MATS University, Gullu, Arang Road, Raipur - 492001</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span>+91-771-4073000</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span>info@matsuniversity.ac.in</span>
                  </div>
                </div>
                <Button className="mt-6" asChild>
                  <Link to="/contact">Visit Campus</Link>
                </Button>
              </div>
              <div className="h-80 rounded-lg overflow-hidden">
                <div 
                  className="h-full bg-cover bg-center" 
                  style={{ backgroundImage: `url(${campusAerial})` }}
                >
                  <div className="h-full bg-primary/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                News & Events
              </h2>
              <p className="text-lg text-muted-foreground">
                Stay updated with the latest happenings at MATS University
              </p>
            </div>
            <Button variant="outline">
              <Link to="/news">View All</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Academic Excellence & Innovation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At MATS University, we foster a culture of innovation and academic excellence. 
                Our students and faculty are engaged in cutting-edge research that shapes the future.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">₹12L</div>
                  <div className="text-sm text-muted-foreground">Avg. Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Research Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Industry Partners</div>
                </div>
              </div>
              <Button asChild>
                <Link to="/research">Explore Research</Link>
              </Button>
            </div>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <div 
                className="h-full bg-cover bg-center" 
                style={{ backgroundImage: `url(${engineeringLab})` }}
              >
                <div className="h-full bg-primary/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our students, faculty, and alumni about their experiences at MATS University
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative border-0 shadow-md">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;