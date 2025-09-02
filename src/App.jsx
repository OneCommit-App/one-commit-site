import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { CheckCircle, Target, Mail, BarChart3, Users, Shield, Clock, Star, Menu, X, Linkedin, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { supabase } from './lib/supabase'
import phoneFanImage from './assets/images/phone-fan.png'
import hughProfessional from './assets/images/hugh-professional.png'
import onecommitLogo from './assets/images/onecommit-logo.png'

// Privacy Policy content
const privacyPolicyContent = `Privacy Policy

Effective Date: August 20, 2025

OneCommit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.

Information We Collect

Personal Information
- Name, email address, phone number
- Academic and athletic information
- Communication preferences

Usage Information
- Website usage data
- Email engagement metrics
- Service interaction data

How We Use Your Information

We use your information to:
- Provide and improve our services
- Communicate with you about our services
- Send you relevant recruiting opportunities
- Analyze and improve our platform

Information Sharing

We do not sell your personal information. We may share information:
- With colleges and coaches (with your consent)
- With service providers who assist our operations
- As required by law

Data Security

We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.

Your Rights

You have the right to:
- Access your personal information
- Correct inaccurate information
- Delete your information
- Opt out of communications

Contact Us

If you have questions about this Privacy Policy, contact us at:
- Email: admin@onecommit.us

This policy may be updated periodically. We will notify you of significant changes.
`

// Terms of Service content
const termsOfServiceContent = `Terms of Service

Effective Date: August 20, 2025

Welcome to OneCommit. These Terms of Service ("Terms") govern your use of our website and services.

Acceptance of Terms

By accessing or using OneCommit, you agree to be bound by these Terms and our Privacy Policy.

Description of Service

OneCommit is a recruiting platform that helps high school athletes connect with college coaches and programs.

User Accounts

- You must provide accurate information when creating an account
- You are responsible for maintaining account security
- You must be at least 13 years old to use our services

Acceptable Use

You agree not to:
- Use the service for any illegal purpose
- Harass, abuse, or harm others
- Interfere with the service's operation
- Violate any applicable laws or regulations

Intellectual Property

OneCommit retains all rights to our platform, content, and technology. You retain rights to your personal information and content.

Payment Terms

- Subscription fees are billed in advance
- Refunds are provided according to our refund policy
- Prices may change with notice

Limitation of Liability

OneCommit is provided "as is" without warranties. We are not liable for indirect, incidental, or consequential damages.

Termination

We may terminate or suspend your account for violations of these Terms or for any reason with notice.

Changes to Terms

We may modify these Terms at any time. Continued use constitutes acceptance of modified Terms.

Contact Information

For questions about these Terms, contact us at:
- Email: admin@onecommit.us

Governing Law

These Terms are governed by the laws of Ohio.
`

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [storyModalOpen, setStoryModalOpen] = useState(false)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)
  const [currentText, setCurrentText] = useState('')

  // Form states
  const [betaFormData, setBetaFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sport: '',
    graduationYear: '',
    state: '',
    phoneNumber: ''
  })
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [betaSubmitting, setBetaSubmitting] = useState(false)
  const [contactSubmitting, setContactSubmitting] = useState(false)
  const [betaSuccess, setBetaSuccess] = useState(false)
  const [contactSuccess, setContactSuccess] = useState(false)
  const [betaError, setBetaError] = useState('')
  const [contactError, setContactError] = useState('')

  const texts = [
    `<span class="text-gray-900">Match with Colleges.</span>`,
    `<span class="text-[#235d48]">Email Coaches.</span>`,
    `<span class="text-gray-900">Track Results.</span>`
  ]

  useEffect(() => {
    setCurrentText(texts.join(' '))
  }, []) // one-time init

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  // ---------- SUBMIT HANDLERS ----------
  const handleBetaSubmit = async (e) => {
    e.preventDefault()
    setBetaSubmitting(true)
    setBetaError('')

    try {
      const payload = {
        first_name: betaFormData.firstName?.trim(),
        last_name: betaFormData.lastName?.trim(),
        email: betaFormData.email?.trim().toLowerCase(),
        sport: betaFormData.sport,
        grad_year: String(betaFormData.graduationYear || ''),
        state: betaFormData.state || null,
        phone: betaFormData.phoneNumber || null,
        created_at: new Date().toISOString()
      }

      const { error } = await supabase.from('waitlist').insert([payload])
      if (error) throw error

      setBetaSuccess(true)
      setBetaFormData({
        firstName: '',
        lastName: '',
        email: '',
        sport: '',
        graduationYear: '',
        state: '',
        phoneNumber: ''
      })
    } catch (err) {
      console.error('[waitlist insert error]', err)
      setBetaError('Something went wrong. Please try again.')
    } finally {
      setBetaSubmitting(false)
    }
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setContactSubmitting(true)
    setContactError('')

    try {
      const { error } = await supabase.from('contact').insert([{
        name: contactFormData.name?.trim(),
        email: contactFormData.email?.trim().toLowerCase(),
        subject: contactFormData.subject || null,
        created_at: new Date().toISOString()
      }])
      if (error) throw error

      setContactSuccess(true)
      setContactFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('[contact insert error]', err)
      setContactError('Something went wrong. Please try again.')
    } finally {
      setContactSubmitting(false)
    }
  }
  // ---------- END SUBMIT HANDLERS ----------

  const sports = [
    'Track & Field', 'Cross Country', 'Football', 'Basketball', 'Soccer',
    'Baseball', 'Softball', 'Tennis', 'Golf', 'Swimming', 'Wrestling',
    'Volleyball', 'Lacrosse', 'Hockey', 'Other'
  ]

  const graduationYears = ['2025', '2026', '2027', '2028', '2029', '2030']

  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ]

  return (
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              {/* Navigation */}
              <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                      <img src={onecommitLogo} alt="OneCommit" className="h-8 w-8 rounded-full" />
                      <span className="ml-2 text-xl font-bold text-gray-900">OneCommit</span>
                    </div>

                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        <button onClick={() => scrollToSection('why-onecommit')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                          Why OneCommit?
                        </button>
                        <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                          How It Works
                        </button>
                        <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                          Features
                        </button>
                        <button onClick={() => scrollToSection('demo')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                          Beta Demo
                        </button>
                        <button onClick={() => scrollToSection('story')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                          Our Story
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                          Contact
                        </button>
                        <Button onClick={() => scrollToSection('beta')} className="bg-[#235d48] hover:bg-[#1a4435] text-white">
                          Join Beta
                        </Button>
                      </div>
                    </div>

                    <div className="md:hidden">
                      <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                      >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                      </button>
                    </div>
                  </div>
                </div>

                {mobileMenuOpen && (
                  <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                      <button onClick={() => scrollToSection('why-onecommit')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                        Why OneCommit?
                      </button>
                      <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                        How It Works
                      </button>
                      <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                        Features
                      </button>
                      <button onClick={() => scrollToSection('demo')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                        Beta Demo
                      </button>
                      <button onClick={() => scrollToSection('story')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                        Our Story
                      </button>
                      <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                        Contact
                      </button>
                      <Button onClick={() => scrollToSection('beta')} className="bg-[#235d48] hover:bg-[#1a4435] text-white w-full mt-2">
                        Join Beta
                      </Button>
                    </div>
                  </div>
                )}
              </nav>

              {/* Hero Section */}
              <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="mb-12 lg:mb-0">
                      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        <span dangerouslySetInnerHTML={{ __html: currentText }} />
                        <span className="animate-pulse">|</span>
                      </h1>
                      <p className="text-xl text-gray-600 mb-6">
                        Built for high school athletes who want to get recruited — and want it to be easier.
                      </p>
                      <p className="text-lg text-gray-700 mb-8">
                        OneCommit automatically finds you the right schools, emails coaches directly, and adapts based on what it learns.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button onClick={() => scrollToSection('beta')} size="lg" className="bg-[#235d48] hover:bg-[#1a4435] text-white">
                          Join the Waiting List
                        </Button>
                        <Button onClick={() => scrollToSection('why-onecommit')} variant="outline" size="lg">
                          Learn More
                        </Button>
                      </div>
                      <div className="flex items-center gap-6 mt-8">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#235d48]" />
                          <span className="text-sm text-gray-600">Currently Free</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#235d48]" />
                          <span className="text-sm text-gray-600">Streamlined & Fast</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#235d48]" />
                          <span className="text-sm text-gray-600">Real Results</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <img src={phoneFanImage} alt="OneCommit App" className="max-w-full h-auto" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Why OneCommit Section */}
              <section id="why-onecommit" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Getting recruited isn't easy — especially if you're not in the top 1%.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      That's why we built OneCommit, the first self-service recruiting copilot built for the overlooked.
                    </p>
                  </div>

                  <div className="text-center mb-16">
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                      OneCommit matches you with schools, drafts and sends personalized emails from your own inbox, tracks real coach engagement, and adapts your list based on what it learns.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-red-50 border-red-200">
                      <CardHeader>
                        <CardTitle className="text-red-800">The Reality</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">You don't know where you realistically fit among hundreds of programs</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">You send emails into the void and get ghosted</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">Legacy platforms cost thousands with no guarantee of results</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">Profile-based systems put all the power in coaches' hands</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#e8f0ed] border-[#c0d8d0]">
                      <CardHeader>
                        <CardTitle className="text-[#1a4435]">The OneCommit Difference</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#e8f0ed] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">Intelligent matching based on comprehensive data analysis</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#e8f0ed] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">Real emails from your account that coaches actually open</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#e8f0ed] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">Affordable pricing that scales with your recruiting journey</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#e8f0ed] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">You control your timeline and strategy</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* How It Works Section */}
              <section id="how-it-works" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
                    <p className="text-xl text-gray-600">Simple 3-step process that puts you in control of your recruiting journey</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#235d48] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Match</h3>
                      <p className="text-gray-600">Match with colleges based on your performance & fit</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#235d48] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
                      <p className="text-gray-600">Email coaches directly from your inbox</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#235d48] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Track</h3>
                      <p className="text-gray-600">Track interest and adapt your list based on replies</p>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <Button onClick={() => scrollToSection('beta')} size="lg" className="bg-[#235d48] hover:bg-[#1a4435] text-white">
                      Join Beta
                    </Button>
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <section id="features" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Features Built for Athletes</h2>
                    <p className="text-xl text-gray-600">Every feature is designed to work as your recruiting agent, handling the heavy lifting so you can focus on what matters most — getting better.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card>
                      <CardHeader>
                        <Target className="h-8 w-8 text-[#235d48] mb-2" />
                        <CardTitle>Smart Matching</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">Your agent builds Reach / Target / Foundational tiers based on your performance and academics.</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Mail className="h-8 w-8 text-[#235d48] mb-2" />
                        <CardTitle>Gmail/Outlook Integration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">Your agent emails coaches from your real account — it's truly you reaching out.</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <BarChart3 className="h-8 w-8 text-[#235d48] mb-2" />
                        <CardTitle>Real-Time Engagement</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">Your agent monitors opens, clicks, replies and shows you what's working.</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Clock className="h-8 w-8 text-[#235d48] mb-2" />
                        <CardTitle>Recruiting Calendar</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">Your agent tracks visits, deadlines, and milestones so you never miss anything.</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Users className="h-8 w-8 text-[#235d48] mb-2" />
                        <CardTitle>Adaptive School List</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">Your agent updates your list as coaches respond and new opportunities emerge.</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Star className="h-8 w-8 text-[#235d48] mb-2" />
                        <CardTitle>Commitment Graphics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">Turn an action shot into your commitment post when you're ready to announce.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Demo Section */}
              <section id="demo" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">See Your Agent in Action</h2>
                  <p className="text-xl text-gray-600 mb-12">Watch how OneCommit works as your recruiting agent</p>

                  <div className="bg-gray-100 rounded-lg p-12 mb-8">
                    <p className="text-gray-500 text-lg">Demo video coming soon</p>
                  </div>

                  <Button onClick={() => scrollToSection('beta')} size="lg" className="bg-[#235d48] hover:bg-[#1a4435] text-white">
                    Join Beta for Early Access
                  </Button>
                </div>
              </section>

              {/* Founder Story Section */}
              <section id="story" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">The OneCommit Story</h2>
                    <div className="flex justify-center mb-8">
                      <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                        <img src={hughProfessional} alt="Hugh Professional" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                      "In early 2024, I began my journey to becoming a college track athlete. I knew who I was as an athlete and a student, but didn't know anything about where I could fit. After finding coach contact emails and writing the same introductory email over and over again, I decided to write some code to do it for me — thus, OneCommit was born."
                    </p>

                    <Button onClick={() => setStoryModalOpen(true)} variant="outline" size="lg">
                      Read the Full Story →
                    </Button>
                  </div>
                </div>
              </section>

              {/* Beta Signup Section */}
              <section id="beta" className="bg-white py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join the Beta</h2>
                    <p className="text-xl text-gray-600">Be among the first to experience OneCommit. Currently free during beta.</p>
                  </div>

                  {betaSuccess ? (
                    <Card className="text-center">
                      <CardContent className="pt-6">
                        <CheckCircle className="h-16 w-16 text-[#235d48] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to OneCommit!</h3>
                        <p className="text-gray-600">Thanks for joining our beta. We'll be in touch soon with next steps.</p>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card>
                      <CardContent className="pt-6">
                        <form onSubmit={handleBetaSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="firstName">First Name *</Label>
                              <Input
                                id="firstName"
                                value={betaFormData.firstName}
                                onChange={(e) => setBetaFormData({ ...betaFormData, firstName: e.target.value })}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="lastName">Last Name *</Label>
                              <Input
                                id="lastName"
                                value={betaFormData.lastName}
                                onChange={(e) => setBetaFormData({ ...betaFormData, lastName: e.target.value })}
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={betaFormData.email}
                              onChange={(e) => setBetaFormData({ ...betaFormData, email: e.target.value })}
                              required
                            />
                          </div>

                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="sport">Sport *</Label>
                              <Select value={betaFormData.sport} onValueChange={(value) => setBetaFormData({ ...betaFormData, sport: value })}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Sport" />
                                </SelectTrigger>
                                <SelectContent>
                                  {sports.map((sport) => (
                                    <SelectItem key={sport} value={sport}>
                                      {sport}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="graduationYear">Graduation Year *</Label>
                              <Select
                                value={betaFormData.graduationYear}
                                onValueChange={(value) => setBetaFormData({ ...betaFormData, graduationYear: value })}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Year" />
                                </SelectTrigger>
                                <SelectContent>
                                  {graduationYears.map((year) => (
                                    <SelectItem key={year} value={year}>
                                      {year}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="state">State *</Label>
                              <Select value={betaFormData.state} onValueChange={(value) => setBetaFormData({ ...betaFormData, state: value })}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select State" />
                                </SelectTrigger>
                                <SelectContent>
                                  {states.map((state) => (
                                    <SelectItem key={state} value={state}>
                                      {state}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="phoneNumber">Phone Number</Label>
                            <Input
                              id="phoneNumber"
                              type="tel"
                              value={betaFormData.phoneNumber}
                              onChange={(e) => setBetaFormData({ ...betaFormData, phoneNumber: e.target.value })}
                            />
                          </div>

                          {betaError && (
                            <div className="bg-red-50 border border-red-200 rounded-md p-4">
                              <p className="text-red-600">{betaError}</p>
                            </div>
                          )}

                          <Button type="submit" disabled={betaSubmitting} className="w-full bg-[#235d48] hover:bg-[#1a4435] text-white">
                            {betaSubmitting ? 'Joining...' : 'Join Beta'}
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                    <p className="text-xl text-gray-600">Have questions about OneCommit? Want to learn more about how it works? We'd love to hear from you.</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Email</h3>
                      <p className="text-lg text-gray-700 mb-8">hello@onecommit.com</p>

                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Support</h3>
                      <p className="text-lg text-gray-700">We typically respond within 24 hours</p>
                    </div>

                    <div>
                      {contactSuccess ? (
                        <Card className="text-center">
                          <CardContent className="pt-6">
                            <CheckCircle className="h-16 w-16 text-[#235d48] mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                            <p className="text-gray-600">Thanks for reaching out. We'll get back to you soon.</p>
                          </CardContent>
                        </Card>
                      ) : (
                        <form onSubmit={handleContactSubmit} className="space-y-6">
                          <div>
                            <Label htmlFor="name">Name *</Label>
                            <Input
                              id="name"
                              value={contactFormData.name}
                              onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                              required
                            />
                          </div>

                          <div>
                            <Label htmlFor="contactEmail">Email *</Label>
                            <Input
                              id="contactEmail"
                              type="email"
                              value={contactFormData.email}
                              onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                              required
                            />
                          </div>

                          <div>
                            <Label htmlFor="subject">Subject *</Label>
                            <Input
                              id="subject"
                              value={contactFormData.subject}
                              onChange={(e) => setContactFormData({ ...contactFormData, subject: e.target.value })}
                              required
                            />
                          </div>

                          <div>
                            <Label htmlFor="message">Message *</Label>
                            <textarea
                              id="message"
                              rows={4}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#235d48] focus:border-transparent"
                              value={contactFormData.message}
                              onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                              required
                            />
                          </div>

                          {contactError && (
                            <div className="bg-red-50 border border-red-200 rounded-md p-4">
                              <p className="text-red-600">{contactError}</p>
                            </div>
                          )}

                          <Button type="submit" disabled={contactSubmitting} className="w-full bg-[#235d48] hover:bg-[#1a4435] text-white">
                            {contactSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <img src={onecommitLogo} alt="OneCommit" className="h-8 w-8 rounded-full" />
                        <span className="ml-2 text-xl font-bold">OneCommit</span>
                      </div>
                      <p className="text-gray-400">Your recruiting agent for college athletics.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4">Product</h4>
                      <ul className="space-y-2">
                        <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white">Features</button></li>
                        <li><button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-white">How It Works</button></li>
                        <li><button onClick={() => scrollToSection('demo')} className="text-gray-400 hover:text-white">Beta Demo</button></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4">Company</h4>
                      <ul className="space-y-2">
                        <li><button onClick={() => scrollToSection('story')} className="text-gray-400 hover:text-white">Our Story</button></li>
                        <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white">Contact</button></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4">Legal</h4>
                      <ul className="space-y-2">
                        <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">&copy; 2025 OneCommit. All rights reserved.</p>
                  </div>
                </div>
              </footer>

              {/* Story Modal */}
              <Dialog open={storyModalOpen} onOpenChange={setStoryModalOpen}>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>The OneCommit Story</DialogTitle>
                  </DialogHeader>
                  <div className="prose max-w-none whitespace-pre-line">{`In early 2024, I began my journey to becoming a college track athlete. I knew who I was as an athlete and a student, but didn't know anything about where I could fit. After finding coach contact emails and writing the same introductory email over and over again, I decided to write some code to do it for me — thus, OneCommit was born.

The recruiting process is broken for most athletes. Unless you're in the top 1% of performers, you're left to navigate a complex, time-consuming process with little guidance. Traditional recruiting services are expensive and often ineffective, leaving athletes and families frustrated.

OneCommit changes this by putting the power back in the athlete's hands. Our platform uses intelligent matching to identify schools where you have the best chance of success, both athletically and academically. We then help you craft personalized outreach emails and track engagement to optimize your recruiting strategy.

What makes OneCommit different is that we work as your recruiting agent. We don't just provide a platform — we actively help you succeed. Our system learns from coach responses and adapts your strategy in real-time, ensuring you're always putting your best foot forward.

As a student-athlete myself, I understand the challenges you face. That's why I built OneCommit to be the recruiting tool I wish I had when I started my journey. We're here to level the playing field and help every athlete find their perfect college match.

- Hugh Kopittke, Founder & CEO - OneCommit
`}</div>
                </DialogContent>
              </Dialog>

              {/* Privacy Policy Modal */}
              <Dialog open={privacyModalOpen} onOpenChange={setPrivacyModalOpen}>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Privacy Policy</DialogTitle>
                  </DialogHeader>
                  <div className="prose max-w-none whitespace-pre-line">
                    {privacyPolicyContent}
                  </div>
                </DialogContent>
              </Dialog>

              {/* Terms of Service Modal */}
              <Dialog open={termsModalOpen} onOpenChange={setTermsModalOpen}>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Terms of Service</DialogTitle>
                  </DialogHeader>
                  <div className="prose max-w-none whitespace-pre-line">
                    {termsOfServiceContent}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

// Privacy Policy Page Component
function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="text-[#235d48] hover:text-[#1a4435] font-medium">
            ← Back to Home
          </Link>
        </div>
        <div className="prose max-w-none whitespace-pre-line">
          {privacyPolicyContent}
        </div>
      </div>
    </div>
  )
}

// Terms of Service Page Component
function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="text-[#235d48] hover:text-[#1a4435] font-medium">
            ← Back to Home
          </Link>
        </div>
        <div className="prose max-w-none whitespace-pre-line">
          {termsOfServiceContent}
        </div>
      </div>
    </div>
  )
}

export default App
