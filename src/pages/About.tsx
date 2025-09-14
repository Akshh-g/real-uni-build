import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const leadership = [
    {
      name: "Dr. Rajesh Kumar Sharma",
      position: "Chancellor",
      description: "Leading educator with 30+ years in academic administration",
      qualifications: "Ph.D. in Education, IIT Delhi",
    },
    {
      name: "Prof. Anita Verma",
      position: "Vice Chancellor",
      description: "Renowned researcher in engineering and technology",
      qualifications: "Ph.D. in Computer Science, Stanford University",
    },
    {
      name: "Dr. Suresh Patel",
      position: "Registrar",
      description: "Expert in university operations and student affairs",
      qualifications: "Ph.D. in Management, IIM Ahmedabad",
    },
  ];

  const accreditations = [
    {
      organization: "NAAC",
      grade: "A+",
      description: "National Assessment and Accreditation Council",
      year: "2023",
    },
    {
      organization: "UGC",
      grade: "Recognized",
      description: "University Grants Commission",
      year: "2018",
    },
    {
      organization: "AICTE",
      grade: "Approved",
      description: "All India Council for Technical Education",
      year: "2019",
    },
    {
      organization: "NBA",
      grade: "Accredited",
      description: "National Board of Accreditation",
      year: "2022",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About MATS University
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Established in 2006, MATS University has been at the forefront of higher education, 
            fostering innovation, research, and holistic development of students.
          </p>
        </div>

        {/* Mission & Vision */}
        <section className="mb-16" id="mission">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  To provide world-class education that empowers students with knowledge, skills, 
                  and values necessary to become responsible global citizens and leaders in their 
                  chosen fields while fostering innovation and research excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  To be recognized as a leading university that transforms lives through innovative 
                  education, cutting-edge research, and meaningful community engagement, creating 
                  a sustainable impact on society and the global community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* History */}
        <section className="mb-16" id="history">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our History</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of excellence spanning nearly two decades
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">2006 - Foundation</h3>
                      <p className="text-muted-foreground">
                        MATS University was established with the vision of providing quality 
                        education in a serene campus environment in Chhattisgarh.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">2010 - UGC Recognition</h3>
                      <p className="text-muted-foreground">
                        Received full recognition from the University Grants Commission, 
                        establishing our credibility in higher education.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">2015 - Research Excellence</h3>
                      <p className="text-muted-foreground">
                        Established research centers and initiated PhD programs across 
                        multiple disciplines, marking our commitment to research.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">2023 - NAAC A+ Grade</h3>
                      <p className="text-muted-foreground">
                        Achieved the highest NAAC A+ grade, recognizing our excellence 
                        in education, research, and institutional governance.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-16" id="leadership">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders guiding MATS University towards excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{leader.position}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{leader.description}</p>
                  <p className="text-sm font-medium text-primary">{leader.qualifications}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Accreditations */}
        <section className="mb-16" id="accreditation">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Accreditations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognized by leading educational bodies for our commitment to quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((accreditation, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{accreditation.organization}</CardTitle>
                  <Badge variant="default">{accreditation.grade}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{accreditation.description}</p>
                  <p className="text-sm font-medium text-primary">Since {accreditation.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">MATS by Numbers</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">18</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">800+</div>
              <div className="text-muted-foreground">Faculty Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25,000+</div>
              <div className="text-muted-foreground">Alumni Worldwide</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;