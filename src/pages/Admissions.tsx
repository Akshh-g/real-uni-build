import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, CheckCircle, DollarSign, Award, Download, Calendar, Phone, Mail, Upload, PenTool, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    category: "",
    address: "",
    message: ""
  });

  const admissionSteps = [
    {
      step: "1",
      title: "Online Application",
      description: "Fill out the online application form with all required details",
      icon: FileText,
    },
    {
      step: "2",
      title: "Document Submission",
      description: "Upload all required documents and certificates",
      icon: Upload,
    },
    {
      step: "3",
      title: "Entrance Test",
      description: "Appear for university entrance test (if applicable)",
      icon: PenTool,
    },
    {
      step: "4",
      title: "Interview",
      description: "Personal interview with faculty members",
      icon: Users,
    },
    {
      step: "5",
      title: "Admission Confirmation",
      description: "Receive admission letter and complete enrollment",
      icon: CheckCircle,
    },
  ];

  const scholarships = [
    {
      name: "Merit Scholarship",
      eligibility: "Top 10% students",
      amount: "Up to 50% fee waiver",
      description: "For students with exceptional academic performance"
    },
    {
      name: "Sports Scholarship",
      eligibility: "State/National level players",
      amount: "Up to 75% fee waiver",
      description: "For students excelling in sports and athletics"
    },
    {
      name: "Need-based Scholarship",
      eligibility: "Family income < ₹3 LPA",
      amount: "Up to 40% fee waiver",
      description: "Financial assistance for economically weaker sections"
    },
    {
      name: "Cultural Scholarship",
      eligibility: "Excellence in arts/culture",
      amount: "Up to 30% fee waiver",
      description: "For students with outstanding cultural achievements"
    }
  ];

  const feeStructure = [
    { program: "B.Tech", duration: "4 Years", annualFee: "₹1,50,000", totalFee: "₹6,00,000" },
    { program: "MBA", duration: "2 Years", annualFee: "₹2,00,000", totalFee: "₹4,00,000" },
    { program: "B.A. LL.B", duration: "5 Years", annualFee: "₹1,20,000", totalFee: "₹6,00,000" },
    { program: "MBBS", duration: "5.5 Years", annualFee: "₹3,50,000", totalFee: "₹19,25,000" },
    { program: "B.Pharma", duration: "4 Years", annualFee: "₹1,80,000", totalFee: "₹7,20,000" },
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
      title: "Application Submitted",
      description: "Thank you for your interest! We'll contact you within 2 business days.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: "",
      category: "",
      address: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Admissions 2024-25
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Begin your journey towards academic excellence. Join MATS University and be part of 
            a community that values innovation, research, and holistic development.
          </p>
        </div>

        <Tabs defaultValue="process" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="fees">Fees</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="apply">Apply</TabsTrigger>
          </TabsList>

          {/* Admission Process */}
          <TabsContent value="process" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Admission Process</h2>
              <p className="text-lg text-muted-foreground">Follow these simple steps to secure your admission</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {admissionSteps.map((step, index) => (
                <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-primary/5 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">Important Dates</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Application Start</h4>
                  <p className="text-muted-foreground">January 15, 2024</p>
                </div>
                <div>
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Application Deadline</h4>
                  <p className="text-muted-foreground">July 31, 2024</p>
                </div>
                <div>
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Session Begins</h4>
                  <p className="text-muted-foreground">August 15, 2024</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Eligibility */}
          <TabsContent value="eligibility" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Eligibility Criteria</h2>
              <p className="text-lg text-muted-foreground">Check if you meet the requirements for your desired program</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Undergraduate Programs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">B.Tech Programs</h4>
                    <p className="text-muted-foreground">12th pass with 50% in PCM subjects</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">B.A./B.Sc Programs</h4>
                    <p className="text-muted-foreground">12th pass from recognized board</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">B.A. LL.B</h4>
                    <p className="text-muted-foreground">12th pass with 45% marks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">MBBS</h4>
                    <p className="text-muted-foreground">12th with PCB, NEET qualification</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Postgraduate Programs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">MBA</h4>
                    <p className="text-muted-foreground">Bachelor's degree with 50% marks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">M.Tech</h4>
                    <p className="text-muted-foreground">B.Tech with 55% marks, GATE preferred</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">LL.M</h4>
                    <p className="text-muted-foreground">LL.B degree with 50% marks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">M.Sc/M.A</h4>
                    <p className="text-muted-foreground">Related bachelor's degree with 50% marks</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-800 mb-2">Note for Reserved Categories</h3>
              <p className="text-yellow-700">
                5% relaxation in minimum marks for SC/ST candidates. 
                Additional relaxation may be provided as per university and government norms.
              </p>
            </div>
          </TabsContent>

          {/* Fees */}
          <TabsContent value="fees" className="space-y-8" id="fees">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Fee Structure</h2>
              <p className="text-lg text-muted-foreground">Transparent and competitive fee structure for all programs</p>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-primary">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Program</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Duration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Annual Fee</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Total Fee</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {feeStructure.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{row.program}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{row.duration}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">{row.annualFee}</td>
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-primary">{row.totalFee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Payment Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Annual payment (5% discount)</li>
                    <li>• Semester-wise payment</li>
                    <li>• EMI options available</li>
                    <li>• Educational loan assistance</li>
                    <li>• Online payment gateway</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Fee Includes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Tuition fees</li>
                    <li>• Library access</li>
                    <li>• Laboratory charges</li>
                    <li>• Student activities</li>
                    <li>• Examination fees</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Scholarships */}
          <TabsContent value="scholarships" className="space-y-8" id="scholarships">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Scholarships</h2>
              <p className="text-lg text-muted-foreground">
                We believe education should be accessible to all deserving students
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {scholarships.map((scholarship, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{scholarship.name}</CardTitle>
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="w-fit">{scholarship.amount}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{scholarship.description}</p>
                    <div className="text-sm">
                      <span className="font-medium">Eligibility: </span>
                      <span className="text-muted-foreground">{scholarship.eligibility}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-2">How to Apply for Scholarships</h3>
              <p className="text-blue-700 mb-4">
                Scholarship applications are processed along with admission applications. 
                Submit required documents and fill the scholarship form during admission process.
              </p>
              <Button variant="outline" className="border-blue-500 text-blue-700 hover:bg-blue-50">
                <Download className="h-4 w-4 mr-2" />
                Download Scholarship Form
              </Button>
            </div>
          </TabsContent>

          {/* Apply Now */}
          <TabsContent value="apply" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Apply Now</h2>
              <p className="text-lg text-muted-foreground">
                Take the first step towards your bright future at MATS University
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Application Form</CardTitle>
                    <CardDescription>
                      Fill out this form to start your admission process. We'll contact you within 24 hours.
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
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div>
                          <Label htmlFor="program">Interested Program *</Label>
                          <Select onValueChange={(value) => handleSelectChange("program", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a program" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="btech">B.Tech</SelectItem>
                              <SelectItem value="mba">MBA</SelectItem>
                              <SelectItem value="law">B.A. LL.B</SelectItem>
                              <SelectItem value="mbbs">MBBS</SelectItem>
                              <SelectItem value="pharma">B.Pharma</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Select onValueChange={(value) => handleSelectChange("category", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General</SelectItem>
                            <SelectItem value="obc">OBC</SelectItem>
                            <SelectItem value="sc">SC</SelectItem>
                            <SelectItem value="st">ST</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Enter your address"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Additional Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Any questions or additional information"
                          rows={3}
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Admissions Helpline</p>
                        <p className="text-sm text-muted-foreground">+91-771-2581234</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-sm text-muted-foreground">admissions@matsuniversity.ac.in</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Download Brochures</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      University Brochure
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Engineering Brochure
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Medical Brochure
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admissions;