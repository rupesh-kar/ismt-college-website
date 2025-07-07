"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  GraduationCap,
  Globe,
  Users,
  Award,
  BookOpen,
  Target,
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  CheckCircle,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ISMTWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const courses = [
    {
      title: "BSc (Hons) Computer Systems Engineering (IT)",
      description:
        "Comprehensive program combining hardware and software engineering principles with industry-focused practical training",
      duration: "4 Years",
      level: "Undergraduate",
      highlights: ["Hardware & Software Integration", "Industry Projects", "Professional Certifications"],
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      imageAlt: "Computer Systems Engineering - Circuit boards and hardware components",
    },
    {
      title: "BA (Hons) Business and Management (BBA)",
      description: "Strategic business education with practical management skills and entrepreneurship focus",
      duration: "3 Years",
      level: "Undergraduate",
      highlights: ["Strategic Management", "Leadership Skills", "Business Analytics"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      imageAlt: "Business and Management - Professional business meeting",
    },
    {
      title: "BSc (Hons) International Tourism and Hospitality Management (BHM)",
      description: "Global perspective on tourism and hospitality industry management with practical exposure",
      duration: "4 Years",
      level: "Undergraduate",
      highlights: ["Global Tourism Trends", "Hotel Management", "Cultural Studies"],
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      imageAlt: "Tourism and Hospitality - Luxury hotel lobby",
    },
    {
      title: "BSc (Hons) Computer Science",
      description: "Cutting-edge computer science curriculum with industry focus and emerging technologies",
      duration: "4 Years",
      level: "Undergraduate",
      badge: "Subject to Approval",
      highlights: ["AI & Machine Learning", "Software Development", "Data Science"],
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      imageAlt: "Computer Science - Programming code on multiple monitors",
    },
    {
      title: "BSc (Hons) Cyber Security and Digital Forensics",
      description: "Advanced cybersecurity and digital investigation techniques with hands-on lab experience",
      duration: "4 Years",
      level: "Undergraduate",
      highlights: ["Ethical Hacking", "Digital Forensics", "Network Security"],
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      imageAlt: "Cyber Security - Digital security and network protection",
    },
  ]

  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "UK Qualifications in Nepal",
      description:
        "Earn prestigious UK degrees without leaving Nepal through our partnerships with University of Sunderland and Pearson Edexcel.",
      stats: "100% UK Equivalent",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      imageAlt: "UK University campus representing international education",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Industry-Relevant Education",
      description:
        "Curriculum designed to bridge the gap between academia and industry with practical, hands-on learning.",
      stats: "95% Employment Rate",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      imageAlt: "Students working on industry projects in modern lab",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Holistic Development",
      description:
        "Beyond academics, we focus on developing technical expertise alongside interpersonal and leadership skills.",
      stats: "50+ Activities",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      imageAlt: "Students participating in extracurricular activities",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "International Standards",
      description: "Delivering education that meets international standards while embracing core local values.",
      stats: "ISO Certified",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      imageAlt: "International certification and quality standards",
    },
  ]

  const stats = [
    { number: "13+", label: "Years of Excellence", description: "Established in 2011" },
    { number: "2000+", label: "Graduates", description: "Successful Alumni" },
    { number: "5", label: "Degree Programs", description: "UK Accredited" },
    { number: "50+", label: "Industry Partners", description: "Global Network" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">ISMT</h1>
              <p className="text-xs text-muted-foreground">College</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </Link>
            <Link href="#partnerships" className="text-sm font-medium hover:text-primary transition-colors">
              Partnerships
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex">Apply Now</Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="container py-4 space-y-4">
              <Link
                href="#home"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#courses"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="#partnerships"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partnerships
              </Link>
              <Link
                href="#contact"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full mt-4">Apply Now</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit animate-bounce">
                  🎓 Established 2011
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  Redefining Higher Education in{" "}
                  <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Nepal
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                  Earn prestigious UK qualifications without leaving Nepal. ISMT bridges the gap between academia and
                  industry with internationally recognized, industry-relevant education.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all">
                  Explore Courses
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent hover:bg-primary/5">
                  Download Brochure
                </Button>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-white/50 backdrop-blur border">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm font-medium">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-slide-in">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=1200&q=80"
                alt="ISMT Campus - Modern University Building"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">International Standards</div>
                    <div className="text-sm text-muted-foreground">UK Accredited Programs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-sm">
              About ISMT
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold">Our Mission & Vision</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Contributing to Nepal's higher education by providing internationally recognized and industry-relevant
              qualifications since 2011.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Academic Excellence with Local Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                ISMT's commitment to academic excellence is reflected in its inclusive and cost-effective educational
                approach, delivering international standards while adopting core local values. We foster a holistic
                learning environment that encourages active student engagement through project-based work, interactive
                discussions, and presentations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Project-based learning approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Interactive discussions and presentations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Diverse assessment methodologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Extracurricular activities and workshops</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=800&q=80"
                alt="Students collaborating in modern classroom"
                width={500}
                height={400}
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
              >
                {/* Feature Image */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.imageAlt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 p-2 rounded-full">{feature.icon}</div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {feature.stats}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Courses Section */}
      <section id="courses" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-sm">
              Academic Programs
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold">Our Courses</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Choose from our range of internationally recognized degree programs designed to prepare you for global
              career opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.imageAlt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {course.badge && (
                    <Badge variant="secondary" className="absolute top-3 right-3 animate-pulse">
                      {course.badge}
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>Duration: {course.duration}</span>
                  </div>

                  {/* Course Highlights */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Key Highlights:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {course.highlights?.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    variant="outline"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Partnerships Section */}
      <section id="partnerships" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-sm">
              International Partnerships
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold">Trusted Academic Partners</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              In academic partnership with prestigious UK institutions, ensuring world-class education standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="text-center p-8 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4 hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">University of Sunderland, UK</CardTitle>
                <CardDescription className="text-base">Academic Partnership for Degree Programs</CardDescription>
                <Badge className="w-fit mx-auto mt-2">Since 2011</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Partnered with one of the UK's leading universities to deliver internationally recognized degree
                  programs with the same academic rigor and standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4 hover:bg-primary/20 transition-colors">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">Pearson Edexcel, UK</CardTitle>
                <CardDescription className="text-base">Quality Assurance & Certification</CardDescription>
                <Badge className="w-fit mx-auto mt-2">Quality Partner</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Collaboration with Pearson Edexcel ensures our programs meet the highest international education
                  standards and quality benchmarks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container text-center relative">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-xl opacity-90">
              Join ISMT and gain a competitive edge in the global job market with our UK-accredited programs. Take the
              first step towards your future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all">
                Apply Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent transition-all"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer id="contact" className="bg-muted/50 py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold">ISMT</h3>
                  <p className="text-sm text-muted-foreground">College</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Redefining higher education in Nepal with internationally recognized qualifications and
                industry-relevant programs.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <Link href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="#courses" className="block text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
                <Link href="#partnerships" className="block text-muted-foreground hover:text-primary transition-colors">
                  Partnerships
                </Link>
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Admissions
                </Link>
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Student Portal
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Programs</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                  Computer Systems Engineering
                </Link>
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                  Business and Management
                </Link>
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                  Tourism & Hospitality
                </Link>
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                  Computer Science
                </Link>
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                  Cyber Security
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Tinkune, Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+977-1-4004555</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">info@ismt.edu.np</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-2 pt-4">
                <h5 className="font-medium text-sm">Stay Updated</h5>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-sm border rounded-md bg-background"
                  />
                  <Button size="sm">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} ISMT College. All rights reserved. |
              <span className="ml-1">
                Developed by{" "}
                <Link
                  href="https://rupeshkarki.com.np"
                  className="text-primary hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rupesh Karki
                </Link>
              </span>
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
