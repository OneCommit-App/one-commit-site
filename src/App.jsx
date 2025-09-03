// src/App.jsx
import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { CheckCircle, Target, Mail, BarChart3, Users, Shield, Clock, Star, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { supabase } from './lib/supabase'
import phoneFanImage from './assets/images/phone-fan.png'
import hughProfessional from './assets/images/hugh-professional.png'
import onecommitLogo from './assets/images/onecommit-logo.png'

// ---------- LEGAL CONTENT ----------

// NOTE: We keep everything in Markdown so the "prose" styles render nicely.

// PRIVACY POLICY (from your uploaded doc, formatted; dates updated to current)
const privacyPolicyContent = `# Privacy Policy

**Effective Date:** September 3, 2025
**Last Updated:** September 3, 2025

## Introduction
Welcome to OneCommit! We understand that privacy is important to you and your family, especially when it comes to the college recruiting process. This Privacy Policy explains how OneCommit LLC ("OneCommit," "we," "us," or "our") collects, uses, and protects your personal information when you use our mobile application and services (collectively, the "Service").

Since our app is designed for high school student-athletes across various sports, we've written this policy to be clear and understandable for both students and parents. We take the privacy of young users seriously and have implemented special protections for users under 18.

By using OneCommit, you agree to this Privacy Policy. If you do not agree with this policy, please do not use our Service.

## Age Requirements and Parental Consent
- You must be at least 13 years old to use OneCommit.
- If you are between 13 and 17 years old, you must have your parent or guardian's permission to create an account.
- During registration, we will require parental consent verification for users under 18.
- Parents have the right to review and request deletion of their child's information.
- We do not knowingly collect information from children under 13 without parental consent.

## Information We Collect

### Information You Provide to Us
When you create an account and use OneCommit, you provide us with:

**Profile Information**
- Name and contact information
- Date of birth
- City and state of residence
- High school information
- Graduation year

**Academic Information**
- GPA (weighted and unweighted)
- SAT/ACT scores
- Intended college majors
- Academic achievements

**Athletic Information**
- Sport(s) you participate in
- Position(s) or event(s) within your sport
- Performance statistics and personal records
- Athletic achievements and honors
- Competition history

**College Preferences**
- Preferred regions or distance from home
- Division preferences (D1, D2, D3, etc.)
- School size preferences
- Campus type preferences
- Budget considerations

**Email Account Access**
When you connect your Gmail or Outlook account, we access limited email data to:
- Send recruiting emails on your behalf
- Track responses from coaches and schools
- Help draft follow-up communications

We only access emails related to your recruiting conversations and emails from school domains. **We do not store email content in our database.**

### Information Collected Automatically
When you use our Service, we may automatically collect:

**Device Information**
- Device type and model
- Operating system and version
- Unique device identifiers
- Mobile network information

**Usage Information**
- App features used
- Time and date of access
- App performance data
- Error logs and crash reports

### Information We Don't Collect
- We do not use tracking cookies or third-party analytics services.
- We do not collect precise location data from your device.
- We do not access your photos, videos, contacts, or other personal files without your explicit permission.
- We do not store the full content of your emails.

## How We Use Your Information

### Provide Our Core Service
- Match you with suitable colleges based on your academic, athletic, and personal preferences
- Generate personalized email drafts for coach outreach using AI assistance
- Track recruiting communications and suggest follow-ups
- Process subscription payments

### Improve Our Service
- Analyze aggregate data to improve our matching algorithm
- Understand which features are most helpful
- Enhance the accuracy of our recommendations
- Fix bugs and improve app performance

### Communicate With You
- Send important service updates and changes
- Respond to your support requests
- Send receipts and handle billing issues

### Legal and Safety
- Comply with legal obligations
- Protect against fraud and abuse
- Enforce our Terms of Service

## How We Share Your Information

### With Your Explicit Direction
- When you send emails to coaches through your connected email account
- Information you choose to include in your outreach emails

### With Service Providers
- Payment processors to handle subscriptions (subject to their privacy policies)
- Email service providers (Gmail/Outlook) when you connect your account
- Cloud infrastructure providers (AWS) for secure data storage
- AI service providers (e.g., Anthropic’s Claude) to help generate email drafts (no personal data is stored by these providers)

### For Legal Reasons
- If required by law, subpoena, court order, or governmental request
- To protect the rights, property, or safety of OneCommit, our users, or others
- To detect, prevent, or address fraud, security, or technical issues
- To enforce our Terms of Service or other agreements

### Business Transfers
- In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business

### Anonymized Data
- We may share aggregated, anonymized success stories and statistics for marketing purposes (cannot identify you)

**We do NOT:**
- Sell or rent your personal information to third parties
- Share your information with colleges unless you explicitly send them an email
- Use your information for targeted advertising
- Share your information for marketing purposes unrelated to our Service

## Data Security

### Technical Safeguards
- HTTPS/TLS in transit
- AES-256 at rest
- Secure AWS infrastructure
- Regular security audits and vulnerability assessments
- Authenticated API endpoints

### Administrative Safeguards
- Role-based access to data
- Staff privacy/security training
- AWS CloudWatch security monitoring
- Secrets stored in AWS Secrets Manager
- Regular review of access logs and permissions

### Physical Safeguards
- SOC 2 compliant data centers
- Multiple backups

Despite our efforts, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security of your information.

## Data Breach Notification
In the unlikely event of a data breach:
- We will promptly investigate the incident
- Notify affected users via email **within 72 hours** of discovery
- Provide details (what was involved, actions taken, steps you can take)
- Implement additional safeguards and cooperate with law enforcement if required

## Your Rights and Choices
**Access & Portability** – View your profile in-app; request a portable copy.
**Correction** – Update in-app or contact us.
**Deletion** – Request account/data deletion (some retention may be required by law).
**Email Access** – Disconnect email at any time in settings or via your provider’s security settings.
**Communication Preferences** – Manage notifications and opt-outs.
**Parental Rights** – Parents/guardians of users under 18 may review, correct, delete, or withdraw consent.

To exercise rights: **privacy@onecommit.us**. We respond within **30 days**.

## Data Retention
- Active accounts: retained while subscription is active
- After cancellation: deletion within **3 months** (except where lawfully required to retain)
- Anonymized data may be retained indefinitely

## International Use and Data Transfer
- Designed for use in the **United States** only
- Data processed/stored in the U.S.
- We do not intentionally collect/process data from users in the EU or other international jurisdictions

## Third-Party Links and Services
Our Service may link to third-party sites (college sites, associations, resources). They have their own policies. Review theirs before sharing information.

## User Responsibilities
- Keep credentials confidential
- Don’t share passwords
- Log out on shared devices
- Notify **support@onecommit.us** about suspected unauthorized access
- Keep your information accurate
- Comply with our Terms of Service

## Limitation of Liability
TO THE MAXIMUM EXTENT PERMITTED BY LAW:
- OneCommit LLC is not liable for indirect, incidental, special, consequential, or punitive damages (e.g., data loss, lost profits, substitution costs).
- Our total liability is capped at fees paid for the Service in the **12 months** preceding the claim.
- We are not responsible for user-provided data errors, actions by colleges, third-party services, or access resulting from your failure to maintain security.

## California Privacy Rights
California residents may have additional rights (know, delete, opt-out of sale (we don’t sell), non-discrimination). Contact **privacy@onecommit.us**.

## Accessibility
Need an alternative format or assistance? Contact **support@onecommit.us**.

## Changes to This Privacy Policy
When we update this policy:
- We update the **Last Updated** date
- For material changes, we notify you via email and/or prominent in-app notice
- Continued use after changes constitutes acceptance
- Renewed parental consent may be required for changes affecting minors

## Dispute Resolution
Disputes related to this policy are resolved by **binding arbitration** under AAA rules in the state where OneCommit LLC is headquartered. Judgment may be entered in any court of competent jurisdiction.

## Severability
If any provision is unenforceable, it will be limited to the minimum extent necessary; the rest remains in effect.

## Contact Us
**Privacy:** privacy@onecommit.us
**Support:** support@onecommit.us

OneCommit LLC — Empowering student-athletes in their college recruiting journey.
`

// TERMS OF SERVICE (full length & detailed; dates current)
const termsOfServiceContent = `# Terms of Service

**Effective Date:** September 3, 2025
**Last Updated:** September 3, 2025

Welcome to OneCommit. These Terms of Service (“Terms”) are a legally binding agreement between you and OneCommit LLC (“OneCommit,” “we,” “us,” or “our”) that govern your access to and use of our website, mobile application, software, and related services (collectively, the “Service”). By accessing or using the Service, you agree to be bound by these Terms and our [Privacy Policy](/privacy-policy).

If you do not agree, do not use the Service.

---

## 1. Eligibility & Accounts
- **Minimum Age.** You must be at least 13 years old to use the Service. If you are between 13–17, you may use the Service only with the permission and supervision of a parent or legal guardian who agrees to these Terms on your behalf.
- **Account Registration.** You must provide accurate, current, and complete information and keep it updated.
- **Parent/Guardian Consent.** For users under 18, we may require verifiable parental consent.
- **Account Security.** You are responsible for safeguarding your credentials. Notify us immediately of unauthorized use.
- **One Account.** We may restrict you to a single account and may disable accounts in our discretion to protect users or the Service.

## 2. Description of the Service
OneCommit is a self-serve recruiting tool for student-athletes. Core features may include: (a) school matching (Reach/Target/Foundational tiers), (b) email outreach via Gmail/Outlook integration, and (c) engagement analytics for opens/replies. Features may evolve; some are offered as **beta** or **experimental**.

**No Admissions or Roster Guarantee.** We do not guarantee college admission, roster spots, scholarships, or coach responses.

## 3. Email Integrations & Communications
- **Sending From Your Account.** When you connect Gmail/Outlook, the Service drafts and sends emails from your mailbox at your direction. You are responsible for message content and recipients.
- **Compliance.** You must follow your provider’s terms (e.g., Google/Microsoft), applicable anti-spam laws (e.g., CAN-SPAM), school communication policies, and NCAA/NAIA rules.
- **Tracking.** We may record metadata (timestamps, opens/replies) to provide analytics.
- **Templates & AI Assistance.** Drafts may be generated using programmatic logic or AI assistance and should be reviewed by you before sending.

## 4. Acceptable Use
You agree **not** to:
- Use the Service for unlawful, harassing, deceptive, or misleading purposes
- Send spam, mass unsolicited messages, or misrepresent your identity/affiliation
- Interfere with or disrupt the Service (e.g., rate-limit abuse, scraping without permission)
- Reverse engineer, copy, or create derivative works from our software or datasets
- Upload, transmit, or distribute viruses, malware, or harmful code
- Infringe, misappropriate, or violate intellectual property, privacy, or publicity rights

We may suspend or terminate access for violations.

## 5. Fees, Trials, and Renewals
- **Subscriptions.** Paid plans are billed in advance and renew automatically until canceled.
- **Trials/Promotions.** Trial terms (duration/limitations) will be shown at sign-up.
- **Price Changes.** We may update pricing with prior notice; changes apply upon renewal.
- **Taxes.** Prices exclude applicable taxes unless noted.
- **Refunds.** Except where required by law or expressly stated, fees are non-refundable. If we offer a refund, it is at our sole discretion.

## 6. Cancellations
You may cancel at any time in your account settings or by contacting support. Upon cancellation, you retain access through the end of your current billing period. Some data may be deleted after the retention window described in our Privacy Policy.

## 7. Intellectual Property; License
- **Ownership.** The Service, software, UI, logos, and content are owned by OneCommit or our licensors and are protected by IP laws.
- **License to You.** Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for your personal, non-commercial recruiting purposes.
- **User Content.** You retain ownership of information you upload or send. You grant OneCommit a limited license to host, process, transmit, and display your content solely to provide and improve the Service.
- **Feedback.** If you provide feedback, you grant us a perpetual, irrevocable, royalty-free license to use it without restriction.

## 8. NCAA/Association Compliance
You are solely responsible for complying with NCAA, NAIA, NJCAA, state athletic associations, and school-specific rules, including but not limited to contact periods, recruiting calendars, communication limits, and amateurism regulations. We do not provide legal or compliance advice.

## 9. Third-Party Services
The Service may interoperate with services we do not control (e.g., Gmail/Outlook, AWS). Those services are governed by their own terms and policies, and we are not responsible for them. Enabling a third-party integration authorizes us to exchange data as reasonably necessary to provide the integration.

## 10. Privacy; Data Use
Our collection and use of personal data are described in our Privacy Policy. By using the Service, you consent to those practices. Where required, you agree to obtain consents (e.g., parental) and provide notices to relevant parties.

## 11. Beta Features
Certain features may be labeled “beta,” “preview,” or similar. They are provided **as-is**, may be changed or discontinued at any time, and may be subject to additional terms.

## 12. Disclaimers
THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, ONECOMMIT DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT RESULTS WILL MEET YOUR EXPECTATIONS.

## 13. Limitation of Liability
TO THE MAXIMUM EXTENT PERMITTED BY LAW, ONECOMMIT WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION, EVEN IF ADVISED OF THE POSSIBILITY. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO ONECOMMIT FOR THE SERVICE IN THE **TWELVE (12) MONTHS** PRECEDING THE EVENT GIVING RISE TO THE CLAIM.

Some jurisdictions do not allow certain limitations; those limitations apply to the maximum extent permitted.

## 14. Indemnification
You agree to defend, indemnify, and hold harmless OneCommit and our officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising out of or related to: (a) your use of the Service; (b) your User Content; (c) violation of these Terms; or (d) violation of any law or third-party right.

## 15. Dispute Resolution & Arbitration
**Binding Arbitration.** Any dispute arising from or relating to these Terms or the Service shall be resolved by binding arbitration under the rules of the American Arbitration Association.
**Venue.** The arbitration shall occur in the state where OneCommit LLC is headquartered.
**Class Action Waiver.** Disputes must be brought in the parties’ individual capacity and not as a plaintiff or class member in any class or representative proceeding.
**Injunctive Relief.** Nothing prevents a party from seeking provisional or injunctive relief in court to protect IP or confidential information.

## 16. Governing Law; Venue
These Terms are governed by the laws of the **State of Ohio**, without regard to conflict-of-laws rules. Subject to the arbitration provision, the exclusive venue for any permitted court action is state or federal courts located in Ohio, and you consent to personal jurisdiction there.

## 17. Changes to the Service or Terms
We may modify the Service or these Terms at any time. If we make material changes, we will provide notice (e.g., in-app, email, or on our website). Continued use after changes become effective constitutes acceptance.

## 18. Term & Termination
These Terms remain in effect until terminated. We may suspend or terminate the Service or your access immediately for any violation of these Terms or if required by law. Upon termination, your right to use the Service ceases, but Sections that by their nature should survive will survive (e.g., IP, Disclaimers, Limitations, Indemnity, Arbitration).

## 19. App Stores
If you download our app from Apple or Google:
- You acknowledge those platforms are not parties to these Terms and have no obligations regarding the Service.
- You must comply with their applicable terms and policies.
- You acknowledge that Apple/Google have no warranty or support obligations for the app.

## 20. Export & Sanctions
You may not use or export the Service in violation of U.S. export laws and regulations, including to embargoed countries or prohibited parties.

## 21. Force Majeure
We are not liable for delays or failures due to events beyond our reasonable control (e.g., natural disasters, outages, labor disputes, governmental actions).

## 22. Notices
We may provide notices to the email associated with your account or through in-app messages. You may send notices to **legal@onecommit.us**.

## 23. Miscellaneous
- **Entire Agreement.** These Terms, plus any policies referenced (e.g., Privacy Policy), are the entire agreement.
- **Severability.** If any provision is unenforceable, the remainder stays in effect.
- **Waiver.** Failure to enforce a right is not a waiver.
- **Assignment.** You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or sale.
- **Headings.** Headings are for convenience only.
- **Electronic Communications.** You consent to receive communications electronically.

## 24. Contact
**General:** support@onecommit.us
**Legal:** legal@onecommit.us

Thank you for using OneCommit.
`

// ---------- APP ----------

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [storyModalOpen, setStoryModalOpen] = useState(false)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)

  // Typing animation
  const p1 = 'Match with Colleges.'
  const p2 = ' Email Coaches.'
  const p3 = ' Track Results.'
  const totalLen = p1.length + p2.length + p3.length
  const [count, setCount] = useState(0)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setCount(i)
      if (i >= totalLen) clearInterval(interval)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Forms
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  // SUBMIT HANDLERS
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
        message: contactFormData.message || null,
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
                        <button onClick={() => scrollToSection('why-onecommit')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Why OneCommit?</button>
                        <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">How It Works</button>
                        <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Features</button>
                        <button onClick={() => scrollToSection('demo')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Beta Demo</button>
                        <button onClick={() => scrollToSection('story')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Our Story</button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</button>
                        <Button onClick={() => scrollToSection('beta')} className="bg-[#235d48] hover:bg-[#1a4435] text-white">Join Beta</Button>
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
                      <button onClick={() => scrollToSection('why-onecommit')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Why OneCommit?</button>
                      <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">How It Works</button>
                      <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Features</button>
                      <button onClick={() => scrollToSection('demo')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Beta Demo</button>
                      <button onClick={() => scrollToSection('story')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Our Story</button>
                      <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</button>
                      <Button onClick={() => scrollToSection('beta')} className="bg-[#235d48] hover:bg-[#1a4435] text-white w-full mt-2">Join Beta</Button>
                    </div>
                  </div>
                )}
              </nav>

              {/* Hero */}
              <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="mb-12 lg:mb-0">
                      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        <span>{p1.slice(0, Math.min(count, p1.length))}</span>
                        <span className="text-[#235d48]">
                          {p2.slice(0, Math.min(Math.max(count - p1.length, 0), p2.length))}
                        </span>
                        <span>
                          {p3.slice(0, Math.min(Math.max(count - p1.length - p2.length, 0), p3.length))}
                        </span>
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

              {/* Why OneCommit */}
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
                        <Bullet text="You don't know where you realistically fit among hundreds of programs" />
                        <Bullet text="You send emails into the void and get ghosted" />
                        <Bullet text="Legacy platforms cost thousands with no guarantee of results" />
                        <Bullet text="Profile-based systems put all the power in coaches' hands" />
                      </CardContent>
                    </Card>

                    <Card className="bg-[#e8f0ed] border-[#c0d8d0]">
                      <CardHeader>
                        <CardTitle className="text-[#1a4435]">The OneCommit Difference</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Bullet text="Intelligent matching based on comprehensive data analysis" />
                        <Bullet text="Real emails from your account that coaches actually open" />
                        <Bullet text="Affordable pricing that scales with your recruiting journey" />
                        <Bullet text="You control your timeline and strategy" />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* How It Works */}
              <section id="how-it-works" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
                    <p className="text-xl text-gray-600">Simple 3-step process that puts you in control of your recruiting journey</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <Step num="1" title="Match" desc="Match with colleges based on your performance & fit" />
                    <Step num="2" title="Email" desc="Email coaches directly from your inbox" />
                    <Step num="3" title="Track" desc="Track interest and adapt your list based on replies" />
                  </div>

                  <div className="text-center mt-12">
                    <Button onClick={() => scrollToSection('beta')} size="lg" className="bg-[#235d48] hover:bg-[#1a4435] text-white">
                      Join Beta
                    </Button>
                  </div>
                </div>
              </section>

              {/* Features */}
              <section id="features" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Features Built for Athletes</h2>
                    <p className="text-xl text-gray-600">Every feature is designed to work as your recruiting agent, handling the heavy lifting so you can focus on what matters most — getting better.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Feature icon={<Target className="h-8 w-8 text-[#235d48] mb-2" />} title="Smart Matching" body="Your agent builds Reach / Target / Foundational tiers based on your performance and academics." />
                    <Feature icon={<Mail className="h-8 w-8 text-[#235d48] mb-2" />} title="Gmail/Outlook Integration" body="Your agent emails coaches from your real account — it's truly you reaching out." />
                    <Feature icon={<BarChart3 className="h-8 w-8 text-[#235d48] mb-2" />} title="Real-Time Engagement" body="Your agent monitors opens, clicks, replies and shows you what's working." />
                    <Feature icon={<Clock className="h-8 w-8 text-[#235d48] mb-2" />} title="Recruiting Calendar" body="Your agent tracks visits, deadlines, and milestones so you never miss anything." />
                    <Feature icon={<Users className="h-8 w-8 text-[#235d48] mb-2" />} title="Adaptive School List" body="Your agent updates your list as coaches respond and new opportunities emerge." />
                    <Feature icon={<Star className="h-8 w-8 text-[#235d48] mb-2" />} title="Commitment Graphics" body="Turn an action shot into your commitment post when you're ready to announce." />
                  </div>
                </div>
              </section>

              {/* Demo */}
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

              {/* Story */}
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

              {/* Beta Signup */}
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
                            <TextField id="firstName" label="First Name *" value={betaFormData.firstName} onChange={(v) => setBetaFormData({ ...betaFormData, firstName: v })} />
                            <TextField id="lastName" label="Last Name *" value={betaFormData.lastName} onChange={(v) => setBetaFormData({ ...betaFormData, lastName: v })} />
                          </div>
                          <TextField id="email" type="email" label="Email *" value={betaFormData.email} onChange={(v) => setBetaFormData({ ...betaFormData, email: v })} />
                          <div className="grid md:grid-cols-3 gap-4">
                            <SelectField label="Sport *" value={betaFormData.sport} onValueChange={(val) => setBetaFormData({ ...betaFormData, sport: val })} items={sports} />
                            <SelectField label="Graduation Year *" value={betaFormData.graduationYear} onValueChange={(val) => setBetaFormData({ ...betaFormData, graduationYear: val })} items={graduationYears} />
                            <SelectField label="State *" value={betaFormData.state} onValueChange={(val) => setBetaFormData({ ...betaFormData, state: val })} items={states} />
                          </div>
                          <TextField id="phoneNumber" type="tel" label="Phone Number" value={betaFormData.phoneNumber} onChange={(v) => setBetaFormData({ ...betaFormData, phoneNumber: v })} />
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

              {/* Contact */}
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
                          <TextField id="name" label="Name *" value={contactFormData.name} onChange={(v) => setContactFormData({ ...contactFormData, name: v })} />
                          <TextField id="contactEmail" type="email" label="Email *" value={contactFormData.email} onChange={(v) => setContactFormData({ ...contactFormData, email: v })} />
                          <TextField id="subject" label="Subject *" value={contactFormData.subject} onChange={(v) => setContactFormData({ ...contactFormData, subject: v })} />
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
                    <p className="text-gray-400">© 2025 OneCommit. All rights reserved.</p>
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
