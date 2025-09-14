import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Microscope, 
  BookOpen, 
  Users, 
  Award, 
  ExternalLink, 
  FileText, 
  Lightbulb,
  Globe,
  TrendingUp,
  Calendar
} from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Advanced research in AI/ML algorithms, neural networks, and intelligent systems",
      projects: 12,
      publications: 45,
      funding: "₹2.5 Cr",
      status: "Active"
    },
    {
      title: "Sustainable Energy Solutions",
      description: "Green energy technologies, solar power systems, and environmental sustainability",
      projects: 8,
      publications: 28,
      funding: "₹1.8 Cr",
      status: "Active"
    },
    {
      title: "Biotechnology & Life Sciences",
      description: "Medical research, drug discovery, and biotechnological innovations",
      projects: 15,
      publications: 67,
      funding: "₹3.2 Cr",
      status: "Active"
    },
    {
      title: "Materials Science",
      description: "Nanomaterials, smart materials, and advanced manufacturing technologies",
      projects: 10,
      publications: 38,
      funding: "₹2.1 Cr",
      status: "Active"
    }
  ];

  const publications = [
    {
      title: "Machine Learning Approaches for Predictive Healthcare Analytics",
      authors: "Dr. Priya Sharma, Dr. Rajesh Kumar",
      journal: "IEEE Transactions on Biomedical Engineering",
      year: "2024",
      impact: "High Impact",
      type: "Journal"
    },
    {
      title: "Sustainable Solar Cell Technologies: A Comprehensive Review",
      authors: "Dr. Ankit Verma, Dr. Sunita Patel",
      journal: "Nature Energy",
      year: "2024",
      impact: "High Impact",
      type: "Journal"
    },
    {
      title: "Novel Drug Delivery Systems Using Nanotechnology",
      authors: "Dr. Meera Singh, Dr. Amit Gupta",
      journal: "Advanced Drug Delivery Reviews",
      year: "2023",
      impact: "Medium Impact",
      type: "Journal"
    },
    {
      title: "Smart Materials for Next-Generation Electronics",
      authors: "Dr. Vikash Yadav, Dr. Pooja Mishra",
      journal: "Materials Today",
      year: "2023",
      impact: "High Impact",
      type: "Journal"
    }
  ];

  const collaborations = [
    {
      name: "Indian Institute of Technology, Delhi",
      type: "Academic",
      focus: "AI Research & Development",
      since: "2020"
    },
    {
      name: "DRDO (Defence Research and Development Organisation)",
      type: "Government",
      focus: "Defence Technologies",
      since: "2019"
    },
    {
      name: "Infosys Technologies",
      type: "Industry",
      focus: "Software Engineering",
      since: "2021"
    },
    {
      name: "Stanford University, USA",
      type: "International",
      focus: "Medical Research",
      since: "2022"
    }
  ];

  const phdPrograms = [
    {
      department: "Computer Science & Engineering",
      seats: 15,
      duration: "3-5 Years",
      eligibility: "M.Tech/MCA with 60% marks",
      research_areas: ["AI/ML", "Cybersecurity", "IoT", "Data Science"]
    },
    {
      department: "Mechanical Engineering",
      seats: 12,
      duration: "3-5 Years",
      eligibility: "M.Tech with 60% marks",
      research_areas: ["Robotics", "Manufacturing", "Thermal Engineering", "Materials"]
    },
    {
      department: "Biotechnology",
      seats: 10,
      duration: "3-5 Years",
      eligibility: "M.Sc/M.Tech in relevant field",
      research_areas: ["Genomics", "Drug Discovery", "Bioprocessing", "Bioinformatics"]
    },
    {
      department: "Management",
      seats: 8,
      duration: "3-4 Years",
      eligibility: "MBA/Master's with 60% marks",
      research_areas: ["Finance", "Marketing", "Operations", "HR"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Research & Innovation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MATS University is committed to advancing knowledge through cutting-edge research, 
            innovation, and collaboration with leading institutions worldwide.
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Microscope className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">45+</div>
            <div className="text-muted-foreground">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">178+</div>
            <div className="text-muted-foreground">Publications</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">120+</div>
            <div className="text-muted-foreground">PhD Scholars</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">₹9.6 Cr</div>
            <div className="text-muted-foreground">Research Funding</div>
          </div>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
            <TabsTrigger value="phd">PhD Programs</TabsTrigger>
          </TabsList>

          {/* Research Projects */}
          <TabsContent value="projects" className="space-y-8" id="projects">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Ongoing Research Projects</h2>
              <p className="text-lg text-muted-foreground">
                Explore our cutting-edge research initiatives across various domains
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                        <Badge variant="secondary" className="mb-3">{area.status}</Badge>
                      </div>
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">{area.projects}</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{area.publications}</div>
                        <div className="text-sm text-muted-foreground">Publications</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{area.funding}</div>
                        <div className="text-sm text-muted-foreground">Funding</div>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      View Details <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Publications */}
          <TabsContent value="publications" className="space-y-8" id="publications">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Recent Publications</h2>
              <p className="text-lg text-muted-foreground">
                Our faculty's latest contributions to scientific literature
              </p>
            </div>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{pub.title}</h3>
                        <p className="text-muted-foreground mb-2">By {pub.authors}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="font-medium">{pub.journal}</span>
                          <Badge variant="outline">{pub.year}</Badge>
                          <Badge variant={pub.impact === "High Impact" ? "default" : "secondary"}>
                            {pub.impact}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <span className="text-sm text-muted-foreground">{pub.type}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Publication <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg">
                View All Publications
              </Button>
            </div>
          </TabsContent>

          {/* Collaborations */}
          <TabsContent value="collaborations" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Research Collaborations</h2>
              <p className="text-lg text-muted-foreground">
                Strategic partnerships driving innovation and knowledge exchange
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {collaborations.map((collab, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{collab.name}</CardTitle>
                        <Badge variant="secondary" className="mb-3">{collab.type}</Badge>
                      </div>
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium">Focus Area: </span>
                        <span className="text-muted-foreground">{collab.focus}</span>
                      </div>
                      <div>
                        <span className="font-medium">Partnership Since: </span>
                        <span className="text-muted-foreground">{collab.since}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4">
                      Learn More <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* PhD Programs */}
          <TabsContent value="phd" className="space-y-8" id="phd">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">PhD Programs</h2>
              <p className="text-lg text-muted-foreground">
                Join our doctoral programs and contribute to cutting-edge research
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {phdPrograms.map((program, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{program.department}</CardTitle>
                    <div className="flex space-x-2">
                      <Badge variant="outline">{program.seats} seats</Badge>
                      <Badge variant="outline">{program.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Eligibility</h4>
                      <p className="text-muted-foreground text-sm">{program.eligibility}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Research Areas</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.research_areas.map((area, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" asChild>
                      <Link to="/admissions">Apply for PhD</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-primary/5 rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">PhD Application Timeline</h3>
                <p className="text-muted-foreground">Important dates for the upcoming academic session</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Application Opens</h4>
                  <p className="text-muted-foreground">March 1, 2024</p>
                </div>
                <div>
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Application Deadline</h4>
                  <p className="text-muted-foreground">June 30, 2024</p>
                </div>
                <div>
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Session Begins</h4>
                  <p className="text-muted-foreground">August 1, 2024</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <section className="mt-16 text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Join Our Research Community
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be part of groundbreaking research that shapes the future. 
            Explore opportunities for collaboration, PhD programs, and research funding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/admissions">Apply for PhD</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Research Office</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;