import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, 
  BookOpen, 
  Trophy, 
  Music, 
  Users, 
  Utensils,
  Wifi,
  Car,
  Shield,
  Heart,
  MapPin,
  Clock,
  Award
} from "lucide-react";

const StudentLife = () => {
  const hostelFacilities = [
    {
      name: "Boys Hostel - Block A",
      capacity: "500 Students",
      type: "Single & Double Sharing",
      facilities: ["Wi-Fi", "24/7 Security", "Mess", "Recreation Room", "Laundry"]
    },
    {
      name: "Boys Hostel - Block B",
      capacity: "400 Students", 
      type: "Single & Double Sharing",
      facilities: ["Wi-Fi", "24/7 Security", "Mess", "Gym", "Study Room"]
    },
    {
      name: "Girls Hostel - Block A",
      capacity: "350 Students",
      type: "Single & Double Sharing", 
      facilities: ["Wi-Fi", "24/7 Security", "Mess", "Recreation Room", "Medical Room"]
    },
    {
      name: "Girls Hostel - Block B",
      capacity: "300 Students",
      type: "Single & Double Sharing",
      facilities: ["Wi-Fi", "24/7 Security", "Mess", "Salon", "Common Room"]
    }
  ];

  const libraryFeatures = [
    {
      title: "Central Library",
      description: "State-of-the-art facility with over 2 lakh books and journals",
      features: ["Digital Library", "Research Databases", "Silent Study Areas", "Group Discussion Rooms"]
    },
    {
      title: "Digital Resources",
      description: "Access to international journals and online databases",
      features: ["IEEE Library", "Springer", "Elsevier", "JSTOR", "E-books Collection"]
    }
  ];

  const sportsActivities = [
    { name: "Cricket", facility: "Cricket Ground", tournaments: "Inter-college, Intra-university" },
    { name: "Football", facility: "Football Field", tournaments: "District Level, State Level" },
    { name: "Basketball", facility: "Indoor Courts", tournaments: "Annual Championship" },
    { name: "Volleyball", facility: "Volleyball Courts", tournaments: "Inter-departmental" },
    { name: "Tennis", facility: "Tennis Courts", tournaments: "University Open" },
    { name: "Swimming", facility: "Swimming Pool", tournaments: "Aquatic Championship" },
    { name: "Athletics", facility: "Athletics Track", tournaments: "Sports Meet" },
    { name: "Badminton", facility: "Indoor Courts", tournaments: "Monthly Tournament" }
  ];

  const culturalClubs = [
    {
      name: "Drama Club",
      description: "Theater productions, street plays, and dramatic performances",
      members: "120+",
      events: ["Annual Drama Festival", "Street Play Competition"]
    },
    {
      name: "Music Society", 
      description: "Classical, contemporary, and fusion music performances",
      members: "80+",
      events: ["Music Night", "Battle of Bands", "Classical Music Concert"]
    },
    {
      name: "Dance Troupe",
      description: "Classical, folk, and contemporary dance forms",
      members: "95+", 
      events: ["Dance Competition", "Cultural Fest", "Flash Mobs"]
    },
    {
      name: "Literary Society",
      description: "Poetry, debate, creative writing, and literary discussions",
      members: "60+",
      events: ["Poetry Slam", "Debate Tournament", "Creative Writing Workshop"]
    },
    {
      name: "Photography Club",
      description: "Photography workshops, exhibitions, and competitions",
      members: "45+",
      events: ["Photo Walk", "Photography Contest", "Exhibition"]
    },
    {
      name: "Art & Craft Club",
      description: "Painting, sculpture, handicrafts, and art exhibitions",
      members: "55+",
      events: ["Art Exhibition", "Craft Fair", "Painting Competition"]
    }
  ];

  const technicalClubs = [
    {
      name: "Robotics Club",
      description: "Design and build robots, participate in competitions",
      members: "70+",
      achievements: ["Winner - State Robotics Championship 2023"]
    },
    {
      name: "Coding Club",
      description: "Programming competitions, hackathons, and coding workshops",
      members: "150+",
      achievements: ["Top 10 - National Hackathon 2023"]
    },
    {
      name: "Innovation Hub",
      description: "Startup incubation, innovation projects, and entrepreneurship",
      members: "40+",
      achievements: ["3 Startups Incubated"]
    },
    {
      name: "Electronics Club",
      description: "Circuit design, embedded systems, and electronics projects", 
      members: "85+",
      achievements: ["Best Project Award - Tech Fest 2023"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Student Life
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience a vibrant campus life with world-class facilities, diverse activities, 
            and a supportive community that nurtures your personal and academic growth.
          </p>
        </div>

        <Tabs defaultValue="hostel" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="hostel">Hostel</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
            <TabsTrigger value="clubs">Clubs</TabsTrigger>
          </TabsList>

          {/* Hostel Facilities */}
          <TabsContent value="hostel" className="space-y-8" id="hostel">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Hostel Facilities</h2>
              <p className="text-lg text-muted-foreground">
                Comfortable and secure accommodation with modern amenities for all students
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {hostelFacilities.map((hostel, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{hostel.name}</CardTitle>
                        <div className="flex space-x-2 mb-3">
                          <Badge variant="outline">{hostel.capacity}</Badge>
                          <Badge variant="secondary">{hostel.type}</Badge>
                        </div>
                      </div>
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-3">Facilities Available:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {hostel.facilities.map((facility, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {facility}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <Utensils className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Mess Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Hygienic and nutritious meals with variety of cuisines</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>24/7 Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Round-the-clock security with CCTV surveillance</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <Wifi className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Wi-Fi Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">High-speed internet access in all hostel areas</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">Hostel Amenities</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <Car className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Parking</h4>
                  <p className="text-sm text-muted-foreground">Dedicated parking spaces</p>
                </div>
                <div>
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Medical Room</h4>
                  <p className="text-sm text-muted-foreground">First aid and medical assistance</p>
                </div>
                <div>
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Common Areas</h4>
                  <p className="text-sm text-muted-foreground">Recreation and study rooms</p>
                </div>
                <div>
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">Round-the-clock assistance</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Library */}
          <TabsContent value="library" className="space-y-8" id="library">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Library Resources</h2>
              <p className="text-lg text-muted-foreground">
                Modern library facilities supporting research, study, and intellectual growth
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {libraryFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.features.map((item, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-primary/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">2,00,000+</div>
                <div className="text-muted-foreground">Books & Journals</div>
              </div>
              <div className="bg-primary/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground">E-books</div>
              </div>
              <div className="bg-primary/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Seating Capacity</div>
              </div>
              <div className="bg-primary/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Access Hours</div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Library Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Reading Rooms</h4>
                    <p className="text-sm text-muted-foreground">Quiet study spaces with comfortable seating</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Research Support</h4>
                    <p className="text-sm text-muted-foreground">Assistance for research projects and thesis</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Book Reservation</h4>
                    <p className="text-sm text-muted-foreground">Online book reservation system</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sports */}
          <TabsContent value="sports" className="space-y-8" id="sports">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Sports & Recreation</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive sports facilities to promote physical fitness and competitive spirit
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sportsActivities.map((sport, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Trophy className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">{sport.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium">Facility: </span>
                        <span className="text-muted-foreground">{sport.facility}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Tournaments: </span>
                        <span className="text-muted-foreground">{sport.tournaments}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Gymnasium</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Modern gym with latest equipment for fitness training</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Sports Coaching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional coaches for various sports activities</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Annual Sports Meet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Inter-departmental and inter-college competitions</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Clubs */}
          <TabsContent value="clubs" className="space-y-8" id="clubs">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Student Clubs & Activities</h2>
              <p className="text-lg text-muted-foreground">
                Join diverse clubs and societies to explore your interests and develop new skills
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Cultural Clubs</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {culturalClubs.map((club, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <Music className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">{club.name}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="w-fit">{club.members} members</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{club.description}</p>
                      <div>
                        <h4 className="font-medium text-sm mb-1">Upcoming Events:</h4>
                        <div className="text-sm text-muted-foreground">
                          {club.events.join(", ")}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Technical Clubs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {technicalClubs.map((club, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <Users className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">{club.name}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="w-fit">{club.members} members</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{club.description}</p>
                      <div>
                        <h4 className="font-medium text-sm mb-1">Recent Achievements:</h4>
                        <div className="text-sm text-muted-foreground">
                          {club.achievements.join(", ")}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Join a Club Today!</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Discover your passion, develop leadership skills, and make lifelong friends
                </p>
                <Button size="lg">
                  Explore All Clubs
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentLife;