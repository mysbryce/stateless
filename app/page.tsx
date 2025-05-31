"use client"

import { ExternalLink, FolderOpen, Github, Mail, Terminal, User, Home, CircuitBoard, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ProjectsSection } from "@/components/projects-section"
import { DiscordAlertDialog } from "@/components/discord-alert-dialog"
import { useState } from "react"

// JavaScript", "TypeScript", "React", "Next.js", "Node.js"
const talentValues: { [key: string]: number } = {
  "JavaScript": 90,
  "TypeScript": 70,
  "React": 90,
  "Next.js": 80,
  "Node.js": 90
}

export default function Portfolio() {
  // Form state
  const [formData, setFormData] = useState({
    discordId: "",
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Discord webhook URL
      const webhookUrl = "https://discord.com/api/webhooks/1364997976237543518/pnH9_6huE8_Uh8JoBpCY-ikjQn_InQIjQwnSoVUCEXROC3_bELB05tcILRLvNkD5DDnW";
      
      // Current date and time
      const currentDate = new Date().toLocaleString();
      
      // Create Discord webhook embed
      const webhookData = {
        content: "<@723157846635839499> You've received a new contact form submission!",
        embeds: [
          {
            title: "New Contact Form Submission",
            color: 10181046, // Purple color in decimal
            fields: [
              {
                name: "Discord ID",
                value: formData.discordId || "Not provided",
                inline: true
              },
              {
                name: "Name",
                value: formData.name || "Not provided",
                inline: true
              },
              {
                name: "Email",
                value: formData.email || "Not provided",
                inline: true
              },
              {
                name: "Subject",
                value: formData.subject || "Not provided",
                inline: false
              },
              {
                name: "Message",
                value: formData.message || "Not provided",
                inline: false
              }
            ],
            footer: {
              text: `Submitted on ${currentDate}`
            }
          }
        ]
      };
      
      // Send the webhook
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(webhookData)
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        // Reset form after successful submission
        setFormData({
          discordId: "",
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
        console.error("Failed to send webhook:", await response.text());
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white font-ibm-plex-sans-thai">
      {/* Header */}
      <header className="border-b border-zinc-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-purple-500" />
            <span className="font-bold text-xl">
              State<span className="text-purple-500">less</span> (999s)
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="hover:text-purple-500 transition-colors text-sm flex items-center gap-2">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link href="#projects" className="hover:text-purple-500 transition-colors text-sm flex items-center gap-2">
              <FolderOpen className="h-4 w-4" />
              Projects
            </Link>
            <Link href="#skills" className="hover:text-purple-500 transition-colors text-sm flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              Skills
            </Link>
            <Link href="#contact" className="hover:text-purple-500 transition-colors text-sm flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </nav>
          <Button asChild variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/30 rounded-xl">
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Contact
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 border-b border-zinc-800">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm">
              Full Stack Developer
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I am <span className="text-purple-500">Coder</span>
            </h1>
            <p className="text-zinc-400 text-lg">
              I am a Full Stack web developer with expertise in building efficient and visually appealing applications. I also specialize in creating FiveM resources and have a wide range of additional skills.
            </p>
            <div className="flex gap-4">
              <Button className="bg-purple-500 hover:bg-purple-600 rounded-xl">
                <Link href="#projects" className="flex items-center gap-2">
                  <FolderOpen className="h-4 w-4" />
                  My Projects
                </Link>
              </Button>
              <DiscordAlertDialog>
                <ExternalLink className="h-4 w-4" />
                My Discord
              </DiscordAlertDialog>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/mysbryce" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#contact" className="text-zinc-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 h-full w-full rounded-xl bg-zinc-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="relative p-6 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-white/20"></div>
                <div className="h-2 w-2 rounded-full bg-white/20"></div>
                <div className="h-2 w-2 rounded-full bg-white/20"></div>
                <div className="ml-2 text-sm text-zinc-400">terminal</div>
              </div>
              <pre className="font-mono text-sm">
                <code className="text-zinc-300">
                  <span className="text-purple-500">999s@portfolio</span>:<span className="text-blue-400">~</span>$
                    whoami
                  <br />
                  <span className="text-zinc-100">{">"} Full Stack Developer</span>
                  <br />
                  <br />
                  <span className="text-purple-500">999s@portfolio</span>:<span className="text-blue-400">~</span>$ ls
                    skills
                  <br />
                  <span className="text-zinc-100">{">"} React.js Next.js Node.js TypeScript</span>
                  <br />
                  <br />
                  <span className="text-purple-500">999s@portfolio</span>:<span className="text-blue-400">~</span>$
                    contact --send
                  <br />
                  <span className="text-zinc-100">{">"} Sending message...</span>
                  <br />
                  <span className="text-zinc-50">{">"} Ready to collaborate!</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <section id="skills" className="py-20 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-12">
            <Terminal className="h-6 w-6 text-purple-500" />
            <h2 className="text-3xl font-bold">My Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Technology Stack</h3>
              <div className="space-y-4">
                {["JavaScript", "TypeScript", "React", "Next.js", "Node.js"].map((skill) => (
                  <div key={skill} className="relative">
                    <div className="flex justify-between mb-1">
                      <span>{skill}</span>
                      <span className="text-purple-500">{talentValues[skill]}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                        style={{ width: `${talentValues[skill]}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Tools</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {["VS Code", "Git", "GitHub", "Figma"].map((tool) => (
                  <div
                    key={tool}
                    className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-2">
                      <Terminal className="h-6 w-6 text-purple-500" />
                    </div>
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-12">
            <Mail className="h-6 w-6 text-purple-500" />
            <h2 className="text-3xl font-bold">Contact</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Let's talk together</h3>
              <p className="text-zinc-400">
                I’m open to new opportunities and ready to collaborate with you on your next project. If you have any questions or would like to talk, feel free to contact me.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-zinc-400">อีเมล</p>
                    <p>kittichai.malain@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-zinc-400">GitHub</p>
                    <p>github.com/mysbryce</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Send me a message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-zinc-400">
                    Discord ID
                  </label>
                  <input
                    id="discordId"
                    type="text"
                    value={formData.discordId}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 border border-zinc-700 px-4 py-2 focus:outline-none focus:ring-purple-500 rounded-xl"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-zinc-400">
                      Fullname
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-zinc-400">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-zinc-400">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-purple-500"
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-purple-500 hover:bg-purple-600 rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
                
                {/* Success/Error message */}
                {submitStatus === "success" && (
                  <div className="mt-4 p-3 bg-green-500/10 border border-green-500 text-green-500 rounded-md">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mt-4 p-3 bg-red-500/10 border border-red-500 text-red-500 rounded-md">
                    Failed to send message. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Terminal className="h-5 w-5 text-purple-500" />
            <span className="font-bold">
              State<span className="text-purple-500">less</span>
            </span>
          </div>
          <p className="text-zinc-400 text-sm">&copy; {new Date().getFullYear()} Stateless. &copy; Copyright all rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="https://github.com/mysbryce" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#contact" className="text-zinc-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
