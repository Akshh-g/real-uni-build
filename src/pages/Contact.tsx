import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    department: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Campus Address",
      details: [
        "MATS University",
        "Arang, Raipur",
        "Chhattisgarh - 493441, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: +91-771-2581234",
        "Admissions: +91-771-2581235",
        "Hostel: +91-771-2581236"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: info@matsuniversity.ac.in",
        "Admissions: admissions@matsuniversity.ac.in",
        "Academic: academic@matsuniversity.ac.in"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const departments = [
    { value: "admissions", label: "Admissions Office" },
    { value: "academic", label: "Academic Office" },
    { value: "hostel", label: "Hostel Administration" },
    { value: "finance", label: "Finance Department" },
    { value: "placement", label: "Placement Cell" },
    { value: "library", label: "Library Services" },
    { value: "it", label: "IT Support" },
    { value: "general", label: "General Inquiry" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for contacting us! We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      department: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help! Get in touch with us for any questions, information, 
            or assistance you need regarding MATS University.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Live Chat Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule a Call
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Campus Tour Request
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Select onValueChange={(value) => handleSelectChange("department", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.value} value={dept.value}>
                              {dept.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter the subject of your inquiry"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your message here..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Campus Map */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Campus Location</CardTitle>
                <CardDescription>
                  Find us on the map and plan your visit to our campus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">MATS University Campus</p>
                    <p className="text-sm">Arang, Raipur, Chhattisgarh</p>
                  </div>
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <Button variant="outline">
                    Get Directions
                  </Button>
                  <Button variant="outline">
                    Virtual Campus Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What are the admission requirements?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Admission requirements vary by program. Generally, you need a minimum of 50% 
                  in your qualifying examination. Please visit our admissions page for detailed requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">How can I apply for scholarships?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Scholarship applications are processed during admission. Submit the scholarship 
                  form along with required documents during your application process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What hostel facilities are available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer separate hostels for boys and girls with modern amenities including 
                  Wi-Fi, mess facilities, recreation rooms, and 24/7 security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">How is the placement record?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We have an excellent placement record with 95%+ placement rate. Top companies 
                  like TCS, Infosys, and Wipro regularly visit our campus for recruitment.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="mt-16">
          <Card className="border-0 shadow-lg bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">Emergency Contacts</CardTitle>
              <CardDescription className="text-red-700">
                For urgent matters and emergencies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Medical Emergency</h4>
                  <p className="text-red-700">+91-771-2581240</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Security</h4>
                  <p className="text-red-700">+91-771-2581241</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Administration</h4>
                  <p className="text-red-700">+91-771-2581242</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;