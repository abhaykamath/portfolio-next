"use client";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const { theme, setTheme } = useTheme();

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with theme toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex justify-between items-center h-16">
          <h2 className="text-xl font-bold">Abhay Kamath</h2>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex">
              <ul className="flex gap-6">
                {["About", "Experience", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <Button
                        variant="ghost"
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="font-medium"
                      >
                        {item}
                      </Button>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="container pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <motion.div
            className="flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="h-32 w-32 mb-6">
              <AvatarImage
                src="/placeholder.svg?height=128&width=128"
                alt="Abhay Kamath"
              />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Abhay Kamath
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Web Developer
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge className="px-3 py-1 text-sm">React.js</Badge>
              <Badge className="px-3 py-1 text-sm">Next.js</Badge>
              <Badge className="px-3 py-1 text-sm">TypeScript</Badge>
              <Badge className="px-3 py-1 text-sm">Tailwind CSS</Badge>
            </div>
            <div className="flex gap-4 mb-12">
              <Button asChild variant="outline" size="icon">
                <a
                  href="https://github.com/abhaykamath"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a
                  href="https://linkedin.com/in/abhaykamath"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="mailto:abhaykamath2299@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <Button
              onClick={() => scrollToSection("about")}
              variant="ghost"
              className="animate-bounce"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-6 w-6" />
            </Button>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                Web Developer with 3+ years of industry experience, specializing
                in frontend development with a strong focus on React.js and
                JavaScript. Currently building Form Forge, a dev tool to build
                React Hook Form integrated forms. I'm also exploring Next.js and
                server-side rendering (SSR) to broaden my skill set. Passionate
                about building products, solving real-world problems, and
                collaborating with teams to deliver great user experiences.
              </p>
              <div className="flex flex-col md:flex-row gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="mailto:abhaykamath2299@gmail.com"
                    className="hover:underline"
                  >
                    abhaykamath2299@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+91-8921592612</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>India</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle>Software Engineer</CardTitle>
                    <CardDescription>
                      Gaian Solutions, Hyderabad
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    Sept 2023 – Oct 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Led a team of 8 freshers to rapidly develop 10 React demo
                    apps for CES 2024, delivering core functionality under tight
                    deadlines and iterating on them post-showcase
                  </li>
                  <li>
                    Built an internal tool that was used company wide that shows
                    JIRA data in a single dashboard, using React, Tailwind CSS
                    and Atlassian JIRA APIs
                  </li>
                  <li>
                    Integrated in app auto-demo modes for the apps showcased in
                    CES
                  </li>
                  <li>
                    Worked extensively on the frontend of chromecast based app
                    that helps you cast split-content, multi-screen-scaled
                    casting, scheduling etc.
                  </li>
                  <li>
                    Helped build a leaflet-map-based React that shows a variety
                    of weather and event-related tile layers and markers
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle>Project Engineer</CardTitle>
                    <CardDescription>Wipro, Bangalore</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    Dec 2020 – Dec 2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Created the Cypress automation testing repo from the ground
                    up for all the user journeys in the Customer Details and
                    Preferences wing of Lloyds Banking Group
                  </li>
                  <li>
                    Crafted tests using Cucumber BDD and Integrated in the
                    Cypress automation tests
                  </li>
                  <li>
                    Created Jenkins jobs to orchestrate nightly test runs to
                    generate and distribute reports to stakeholders
                  </li>
                  <li>
                    Presented our team's automation work in multiple company
                    guild sessions and helped many other teams in setting up
                    their automation journeys. I also helped On-board and train
                    multiple engineers onto the team and helped them in their
                    automation journey
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>ReactJs</Badge>
                    <Badge>NextJs</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>Redux</Badge>
                    <Badge>Zustand</Badge>
                    <Badge>React Hook Form</Badge>
                    <Badge>DnD-Kit</Badge>
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>Jest</Badge>
                    <Badge>Cypress</Badge>
                    <Badge>Framer Motion</Badge>
                    <Badge>Leaflet Maps</Badge>
                    <Badge>Figma</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>NodeJs</Badge>
                    <Badge>ExpressJs</Badge>
                    <Badge>REST APIs</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>SQL</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                    <Badge>Jira</Badge>
                    <Badge>Confluence</Badge>
                    <Badge>Postman</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle>10x Academy</CardTitle>
                    <CardDescription>MERN Stack Bootcamp</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    Feb 2023 – Aug 2023
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle>RV College of Engineering, Bangalore</CardTitle>
                    <CardDescription>Mechanical Engineering</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    Aug 2016 – Aug 2020
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Form Forge</CardTitle>
                <CardDescription>Dynamic form builder</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">
                  Developed a dynamic UI form builder with drag and drop to
                  rearrange fields, a form preview and a JSX generator with
                  React Hook Form integrated.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">ReactJs</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Shadcn</Badge>
                  <Badge variant="secondary">Zustand</Badge>
                  <Badge variant="secondary">RHF</Badge>
                  <Badge variant="secondary">dnd-kit</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Cinepedia</CardTitle>
                <CardDescription>Movie search app</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">
                  Developed a responsive movie search app built on top of the
                  OMDb API. Includes features like search, dark mode, bookmark,
                  like, auth, recommendations of the week etc.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">ReactJs</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Shadcn</Badge>
                  <Badge variant="secondary">Clerk</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
                  <p className="text-muted-foreground mb-6">
                    Feel free to reach out if you're looking for a developer,
                    have a question, or just want to connect.
                  </p>
                  <div className="flex flex-col md:flex-row md:flex-wrap gap-8">
                    <div className="flex items-center gap-3">
                      <Button size="icon" variant="outline">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                          href="mailto:abhaykamath2299@gmail.com"
                          className="hover:underline"
                        >
                          abhaykamath2299@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button size="icon" variant="outline">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p>+91-8921592612</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button size="icon" variant="outline">
                        <Github className="h-4 w-4" />
                      </Button>
                      <div>
                        <p className="text-sm text-muted-foreground">GitHub</p>
                        <a
                          href="https://github.com/abhaykamath"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          github.com/abhaykamath
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button size="icon" variant="outline">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          LinkedIn
                        </p>
                        <a
                          href="https://linkedin.com/in/abhaykamath"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          linkedin.com/in/abhaykamath
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex items-center justify-center">
                  <Button asChild size="lg" className="w-full md:w-auto">
                    <a href="mailto:abhaykamath2299@gmail.com">
                      Send me an email
                    </a>
                  </Button>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abhay Kamath. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button asChild variant="ghost" size="icon">
              <a
                href="https://github.com/abhaykamath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a
                href="https://linkedin.com/in/abhaykamath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="mailto:abhaykamath2299@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
