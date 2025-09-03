import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { CheckCircle, Target, Mail, BarChart3, Users, Clock, Star, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { supabase } from './lib/supabase'
import phoneFanImage from './assets/images/phone-fan.png'
import hughProfessional from './assets/images/hugh-professional.png'
import onecommitLogo from './assets/images/onecommit-logo.png'

/**
 * --------- LEGAL CONTENT (nicely formatted, current dates) ----------
 * We render with Tailwind Typography (`prose`) for clean, docx-like layout.
 */

// 📅 Effective Date / Last Updated
const TODAY = 'September 3, 2025'

// PRIVACY — long-form HTML content
const privacyPolicyContent = `
<h1>Privacy Policy</h1>
<p><strong>Effective Date:</strong> ${TODAY}<br/><strong>Last Updated:</strong> ${TODAY}</p>

<h2>Introduction</h2>
<p>
Welcome to OneCommit! We understand that privacy is important to you and your family, especially when it comes to the college recruiting process. This Privacy Policy explains how OneCommit LLC ("OneCommit," "we," "us," or "our") collects, uses, and protects your personal information when you use our website, mobile application, and services (collectively, the "Service").
</p>
<p>
Since our app is designed for high school student-athletes across various sports, we've written this policy to be clear and understandable for both students and parents. We take the privacy of young users seriously and have implemented special protections for users under 18.
</p>
<p>By using OneCommit, you agree to this Privacy Policy. If you do not agree with this policy, please do not use our Service.</p>

<h2>Age Requirements and Parental Consent</h2>
<ul>
  <li>You must be at least 13 years old to use OneCommit.</li>
  <li>If you are between 13 and 17 years old, you must have your parent or guardian's permission to create an account.</li>
  <li>During registration, we may require parental consent verification for users under 18.</li>
  <li>Parents have the right to review and request deletion of their child’s information.</li>
  <li>We do not knowingly collect information from children under 13 without parental consent.</li>
</ul>

<h2>Information We Collect</h2>
<h3>Information You Provide to Us</h3>
<p>When you create an account and use OneCommit, you provide us with:</p>
<ul>
  <li><strong>Profile Information:</strong> Name, contact information, date of birth, city/state, high school, graduation year.</li>
  <li><strong>Academic Information:</strong> GPA, SAT/ACT, intended majors, academic achievements.</li>
  <li><strong>Athletic Information:</strong> Sport(s), positions/events, performance stats/PRs, achievements, competition history.</li>
  <li><strong>College Preferences:</strong> Regions/distance, division preferences (D1/D2/D3, etc.), school size, campus type, budget considerations.</li>
  <li><strong>Email Account Access:</strong> If you connect Gmail or Outlook, we access limited email data to send recruiting emails on your behalf, track replies from coaches/schools, and help draft follow-ups. Access is limited to recruiting-related threads; we do not store full email content.</li>
</ul>

<h3>Information Collected Automatically</h3>
<ul>
  <li><strong>Device Information:</strong> Device type/model, OS/version, identifiers, network info.</li>
  <li><strong>Usage Information:</strong> Features used, timestamps, performance metrics, error/crash logs.</li>
</ul>

<h3>Information We Don’t Collect</h3>
<ul>
  <li>No third-party tracking cookies or ad beacons.</li>
  <li>No precise device geolocation.</li>
  <li>No access to photos, videos, contacts, or personal files without permission.</li>
  <li>No storage of full email content.</li>
</ul>

<h2>How We Use Your Information</h2>
<ul>
  <li><strong>Provide Our Core Service:</strong> School matching; AI-assisted email drafting; communication tracking; subscription processing.</li>
  <li><strong>Improve Our Service:</strong> Aggregate analytics to improve matching; feature usage understanding; accuracy and performance improvements.</li>
  <li><strong>Communicate With You:</strong> Service updates, support responses, billing notices.</li>
  <li><strong>Legal and Safety:</strong> Compliance, fraud prevention, and enforcement of Terms.</li>
</ul>

<h2>How We Share Your Information</h2>
<ul>
  <li><strong>With Your Direction:</strong> When you email coaches from your connected account.</li>
  <li><strong>Service Providers:</strong> Payments, email providers (Gmail/Outlook), cloud hosting, and AI assistants (no personal data stored by AI vendors beyond processing).</li>
  <li><strong>Legal Reasons:</strong> Subpoena, court order, or lawful requests.</li>
  <li><strong>Business Transfers:</strong> In a merger, acquisition, or asset sale.</li>
  <li><strong>Anonymized Data:</strong> Aggregate stats/success stories that cannot identify you.</li>
</ul>
<p><strong>We do not sell or rent your personal information.</strong> We also do not share data with colleges unless you explicitly email them.</p>

<h2>Data Security</h2>
<ul>
  <li>TLS/HTTPS in transit; encryption at rest.</li>
  <li>Secure cloud infrastructure; credential management; access controls and logging.</li>
  <li>Periodic security reviews and vulnerability assessments.</li>
</ul>
<p>No method of electronic transmission or storage is 100% secure; we cannot guarantee absolute security.</p>

<h2>Data Breach Notification</h2>
<p>If a breach occurs, we will investigate, notify affected users within 72 hours where required, disclose scope/impact, steps taken, and guidance for protection, and cooperate with authorities when applicable.</p>

<h2>Your Rights and Choices</h2>
<ul>
  <li><strong>Access &amp; Portability</strong> — view and request a copy of your data.</li>
  <li><strong>Correction</strong> — update inaccuracies.</li>
  <li><strong>Deletion</strong> — request deletion (legal/legitimate retention may apply).</li>
  <li><strong>Email Access</strong> — disconnect Gmail/Outlook at any time.</li>
  <li><strong>Communication Preferences</strong> — manage notifications, opt out of non-essential comms.</li>
  <li><strong>Parental Rights</strong> — review, correct, delete, or withdraw consent for users under 18.</li>
</ul>
<p>Contact: <a href="mailto:privacy@onecommit.us">privacy@onecommit.us</a>. We’ll respond within 30 days.</p>

<h2>Data Retention</h2>
<ul>
  <li>Active accounts — retained while subscription is active.</li>
  <li>After cancellation — personal data deleted within 3 months (subject to legal retention).</li>
  <li>Anonymized data may be retained indefinitely for service improvement.</li>
</ul>

<h2>International Use</h2>
<p>OneCommit is designed for U.S. users. Data is processed/stored in the U.S.</p>

<h2>Third-Party Links</h2>
<p>We may link to third-party sites; review their policies. We’re not responsible for their practices.</p>

<h2>User Responsibilities</h2>
<ul>
  <li>Keep credentials confidential; log out on shared devices.</li>
  <li>Notify us of suspected unauthorized access.</li>
  <li>Provide accurate information and comply with the Terms.</li>
</ul>

<h2>Limitation of Liability</h2>
<p>To the maximum extent permitted by law, OneCommit LLC is not liable for indirect, incidental, special, consequential, or punitive damages. Total liability is limited to the amounts you paid in the 12 months before the claim.</p>

<h2>California Privacy Rights</h2>
<p>California residents may have additional rights. Contact <a href="mailto:privacy@onecommit.us">privacy@onecommit.us</a>.</p>

<h2>Accessibility</h2>
<p>If you need this policy in an alternative format, contact <a href="mailto:support@onecommit.us">support@onecommit.us</a>.</p>

<h2>Changes to This Policy</h2>
<p>We may update this policy. We’ll update the date above and, for significant changes, notify you in-app or via email. Continued use constitutes acceptance.</p>

<h2>Dispute Resolution; Severability</h2>
<p>Disputes are subject to binding arbitration in the state where OneCommit LLC is headquartered. If any provision is unenforceable, the remainder remains in effect.</p>

<h2>Contact Us</h2>
<p>
Privacy: <a href="mailto:privacy@onecommit.us">privacy@onecommit.us</a><br/>
Support: <a href="mailto:support@onecommit.us">support@onecommit.us</a>
</p>
<p>© 2025 OneCommit LLC. All rights reserved.</p>
`

// TERMS — long-form HTML content
const termsOfServiceContent = `
<h1>Terms of Service</h1>
<p><strong>Effective Date:</strong> ${TODAY}<br/><strong>Last Updated:</strong> ${TODAY}</p>

<h2>1. Agreement to Terms</h2>
<p>
These Terms of Service (“Terms”) govern your access to and use of the OneCommit website, mobile application, and related services (collectively, the “Service”) operated by OneCommit LLC (“OneCommit,” “we,” “us,” or “our”). By accessing or using the Service, you agree to be bound by these Terms and our <a href="/privacy-policy">Privacy Policy</a>.
</p>

<h2>2. Eligibility; Accounts</h2>
<ul>
  <li>You must be at least 13 years old to use the Service. If you are 13–17, you represent that you have permission from a parent or legal guardian, who also agrees to these Terms on your behalf.</li>
  <li>You agree to provide accurate, current, and complete information during registration and to keep it updated.</li>
  <li>You are responsible for safeguarding your login credentials and for all activity under your account.</li>
</ul>

<h2>3. Description of Service</h2>
<p>
OneCommit is an athlete-first recruiting copilot. Features may include: (a) school matching based on athletic/academic/profile inputs; (b) email drafting and sending through your connected email account (Gmail/Outlook); (c) engagement analytics (opens, replies); (d) organizing recruiting tasks and timelines; (e) dashboards and recommendations.
</p>
<p>
We may add, change, or remove features at any time, including during beta. We may throttle or limit usage (e.g., email volume) to protect deliverability and platform integrity.
</p>

<h2>4. Connecting Email Accounts</h2>
<ul>
  <li>When you connect Gmail/Outlook, you authorize OneCommit to send recruiting emails on your behalf and to process limited metadata (send, open, reply) for analytics and follow-ups.</li>
  <li>We do not store the full contents of your emails; see the Privacy Policy for details.</li>
  <li>You can disconnect at any time in settings or via your provider’s security dashboard.</li>
</ul>

<h2>5. Student-Athlete Compliance</h2>
<ul>
  <li>You are solely responsible for understanding and complying with all applicable recruiting rules (e.g., NCAA/NAIA/NJCAA, high-school association rules, and institutional policies).</li>
  <li>OneCommit is not a legal advisor or compliance authority. We provide tools; we do not guarantee eligibility or outcomes.</li>
</ul>

<h2>6. Acceptable Use</h2>
<ul>
  <li>No unlawful, deceptive, harassing, hateful, or abusive content or conduct.</li>
  <li>No spam or unsolicited mass outreach beyond reasonable recruiting purposes. Respect coach communication rules and quiet periods.</li>
  <li>No attempts to breach security, probe systems, or disrupt the Service.</li>
  <li>No scraping or reverse-engineering except as permitted by law.</li>
  <li>No use that infringes third-party rights (IP, privacy, publicity, contract).</li>
</ul>

<h2>7. Subscriptions, Trials, and Billing</h2>
<ul>
  <li>Certain features may require a paid subscription. Prices, features, and tiers may change with notice.</li>
  <li>Trials/promotions may be offered; unless canceled before trial end, your plan may convert to a paid subscription.</li>
  <li>Taxes may apply. You authorize us and our payment processors to charge your payment method for fees due.</li>
  <li>Unless a separate refund policy applies, fees are non-refundable except where required by law.</li>
</ul>

<h2>8. Coach Communications &amp; Deliverability</h2>
<ul>
  <li>You understand email deliverability is influenced by many factors (sender reputation, content, recipient filters). We cannot guarantee delivery, opens, or replies.</li>
  <li>You are responsible for the content of outreach and for honoring opt-out/“do not contact” requests.</li>
</ul>

<h2>9. Content; License to OneCommit</h2>
<ul>
  <li>You retain ownership of content you submit (metrics, profile, emails, preferences). You grant OneCommit a worldwide, non-exclusive, royalty-free license to use, reproduce, and display your content solely to provide and improve the Service.</li>
  <li>You represent that you have all necessary rights to your content and that it does not violate law or third-party rights.</li>
</ul>

<h2>10. Intellectual Property</h2>
<p>
The Service, including all software, designs, text, graphics, logos, and trademarks (excluding your content), are owned by or licensed to OneCommit and are protected by intellectual-property laws. No rights are granted except as expressly stated in these Terms.
</p>

<h2>11. Feedback</h2>
<p>
You may submit ideas or suggestions. By doing so, you grant OneCommit a perpetual, irrevocable, worldwide, royalty-free license to use them without restriction or compensation.
</p>

<h2>12. Third-Party Services</h2>
<p>
The Service may integrate third-party services (e.g., Gmail/Outlook, payment providers, cloud hosting, AI services). Your use of such services is subject to their terms and policies. We are not responsible for third-party actions or outages.
</p>

<h2>13. Beta Features; Disclaimers</h2>
<ul>
  <li>Beta or experimental features may be offered “as is” with reduced or different reliability and support.</li>
  <li>AI-assisted features generate drafts and recommendations; you must review for accuracy, appropriateness, and compliance before sending.</li>
</ul>

<h2>14. Disclaimers</h2>
<p>
TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR MEET YOUR REQUIREMENTS, NOR DO WE GUARANTEE ANY RECRUITING OUTCOMES.
</p>

<h2>15. Limitation of Liability</h2>
<p>
TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL ONECOMMIT LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES (INCLUDING LOSS OF DATA, PROFITS, OR GOODWILL), OR FOR DAMAGES EXCEEDING THE AMOUNTS YOU PAID TO ONECOMMIT IN THE 12 MONTHS PRECEDING THE CLAIM, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICE, WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
</p>

<h2>16. Indemnification</h2>
<p>
You agree to defend, indemnify, and hold harmless OneCommit LLC and its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising out of or in any way connected with your use of the Service, your content, or your violation of these Terms or applicable law.
</p>

<h2>17. Termination</h2>
<p>
We may suspend or terminate your access to the Service at any time, with or without notice, for conduct that we believe violates these Terms, harms other users, or risks the integrity of the platform. You may stop using the Service at any time. Certain provisions survive termination (e.g., IP, disclaimers, limitations, indemnities).
</p>

<h2>18. Governing Law; Venue</h2>
<p>
These Terms are governed by the laws of the State of Ohio, without regard to conflict-of-laws principles. Subject to Section 19 (Arbitration), the exclusive venue for any action shall be the state or federal courts located in Ohio, and you consent to their jurisdiction.
</p>

<h2>19. Dispute Resolution; Binding Arbitration</h2>
<p>
Any dispute arising out of or relating to these Terms or the Service shall be resolved by binding arbitration administered by the American Arbitration Association under its applicable rules. The arbitration shall take place in the state where OneCommit LLC is headquartered, in English. Judgment on the award may be entered in any court of competent jurisdiction. YOU WAIVE THE RIGHT TO A JURY TRIAL OR TO PARTICIPATE IN A CLASS ACTION. You and OneCommit may seek injunctive relief in court to protect IP or confidential information.
</p>

<h2>20. Changes to the Service or Terms</h2>
<p>
We may modify the Service or these Terms at any time. When we make material changes, we will provide reasonable notice (e.g., in-app notice or email). Continued use after changes becomes effective constitutes acceptance of the updated Terms.
</p>

<h2>21. Severability; Assignment; Entire Agreement</h2>
<p>
If any provision is held unenforceable, the remainder will remain in effect. You may not assign or transfer these Terms without our consent; we may assign them as part of a merger, acquisition, or sale of assets. These Terms, together with policies referenced herein (e.g., Privacy Policy), are the entire agreement between you and OneCommit regarding the Service.
</p>

<h2>22. Contact</h2>
<p>
Questions about these Terms? Email <a href="mailto:admin@onecommit.us">admin@onecommit.us</a>.
</p>
`

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
    const id = setInterval(() => {
      i += 1
      setCount(i)
      if (i >= totalLen) clearInterval(id)
    }, 45)
    return () => clearInterval(id)
  }, [])

  // Forms
  const [betaFormData, setBetaFormData] = useState({
    firstName: '', lastName: '', email: '', sport: '',
    graduationYear: '', state: '', phoneNumber: ''
  })
  const [contactFormData, setContactFormData] = useState({
    name: '', email: '', subject: '', message: ''
  })
  const [betaSubmitting, setBetaSubmitting] = useState(false)
  const [contactSubmitting, setContactSubmitting] = useState(false)
  const [betaSuccess, setBetaSuccess] = useState(false)
  const [contactSuccess, setContactSuccess] = useState(false)
  const [betaError, setBetaError] = useState('')
  const [contactError, setContactError] = useState('')

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  // ---------- SUBMIT HANDLERS ----------
  const handleBetaSubmit = async (e) => {
    e.preventDefault()
    setBetaSubmitting(true); setBetaError('')
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
      setBetaFormData({ firstName: '', lastName: '', email: '', sport: '', graduationYear: '', state: '', phoneNumber: '' })
    } catch (err) {
      console.error('[waitlist insert error]', err)
      setBetaError('Something went wrong. Please try again.')
    } finally {
      setBetaSubmitting(false)
    }
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setContactSubmitting(true); setContactError('')
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
    'Track & Field','Cross Country','Football','Basketball','Soccer',
    'Baseball','Softball','Tennis','Golf','Swimming','Wrestling',
    'Volleyball','Lacrosse','Hockey','Other'
  ]
  const graduationYears = ['2025','2026','2027','2028','2029','2030']
  const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

  return (
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/" element={
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
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                      {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                  </div>
                </div>
              </div>
              {mobileMenuOpen && (
                <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                    {['why-onecommit','how-it-works','features','demo','story','contact'].map((id) => (
                      <button key={id} onClick={() => scrollToSection(id)} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                        {id === 'why-onecommit' ? 'Why OneCommit?' :
                         id === 'how-it-works' ? 'How It Works' :
                         id[0].toUpperCase()+id.slice(1)}
                      </button>
                    ))}
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
                        <span className="text-sm text-gray-600">Streamlined &amp; Fast</span>
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
                    <CardHeader><CardTitle className="text-red-800">The Reality</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">You don't know where you realistically fit among hundreds of programs.</p>
                      <p className="text-gray-700">You send emails into the void and get ghosted.</p>
                      <p className="text-gray-700">Legacy platforms cost thousands with no guarantee of results.</p>
                      <p className="text-gray-700">Profile-based systems put all the power in coaches' hands.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#e8f0ed] border-[#c0d8d0]">
                    <CardHeader><CardTitle className="text-[#1a4435]">The OneCommit Difference</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">Intelligent matching based on comprehensive data analysis.</p>
                      <p className="text-gray-700">Real emails from your account that coaches actually open.</p>
                      <p className="text-gray-700">Affordable pricing that scales with your recruiting journey.</p>
                      <p className="text-gray-700">You control your timeline and strategy.</p>
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
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#235d48] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Match</h3>
                    <p className="text-gray-600">Match with colleges based on your performance &amp; fit.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#235d48] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
                    <p className="text-gray-600">Email coaches directly from your inbox.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#235d48] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Track</h3>
                    <p className="text-gray-600">Track interest and adapt your list based on replies.</p>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <Button onClick={() => scrollToSection('beta')} size="lg" className="bg-[#235d48] hover:bg-[#1a4435] text-white">Join Beta</Button>
                </div>
              </div>
            </section>

            {/* Features */}
            <section id="features" className="bg-white py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Features Built for Athletes</h2>
                  <p className="text-xl text-gray-600">Every feature is designed to work as your recruiting agent.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card><CardHeader><Target className="h-8 w-8 text-[#235d48] mb-2" /><CardTitle>Smart Matching</CardTitle></CardHeader><CardContent><p className="text-gray-600">Reach/Target/Foundational tiers.</p></CardContent></Card>
                  <Card><CardHeader><Mail className="h-8 w-8 text-[#235d48] mb-2" /><CardTitle>Gmail/Outlook Integration</CardTitle></CardHeader><CardContent><p className="text-gray-600">Real emails from your account.</p></CardContent></Card>
                  <Card><CardHeader><BarChart3 className="h-8 w-8 text-[#235d48] mb-2" /><CardTitle>Real-Time Engagement</CardTitle></CardHeader><CardContent><p className="text-gray-600">Opens, clicks, replies.</p></CardContent></Card>
                  <Card><CardHeader><Clock className="h-8 w-8 text-[#235d48] mb-2" /><CardTitle>Recruiting Calendar</CardTitle></CardHeader><CardContent><p className="text-gray-600">Visits, deadlines, milestones.</p></CardContent></Card>
                  <Card><CardHeader><Users className="h-8 w-8 text-[#235d48] mb-2" /><CardTitle>Adaptive School List</CardTitle></CardHeader><CardContent><p className="text-gray-600">Adapts as coaches respond.</p></CardContent></Card>
                  <Card><CardHeader><Star className="h-8 w-8 text-[#235d48] mb-2" /><CardTitle>Commitment Graphics</CardTitle></CardHeader><CardContent><p className="text-gray-600">Announce in style.</p></CardContent></Card>
                </div>
              </div>
            </section>

            {/* Demo */}
            <section id="demo" className="bg-white py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">See Your Agent in Action</h2>
                <p className="text-xl text-gray-600 mb-12">Watch how OneCommit works as your recruiting agent</p>
                <div className="bg-gray-100 rounded-lg p-12 mb-8"><p className="text-gray-500 text-lg">Demo video coming soon</p></div>
                <Button onClick={() => scrollToSection('beta')} size="lg" className="bg-[#235d48] hover:bg-[#1a4435] text-white">Join Beta for Early Access</Button>
              </div>
            </section>

            {/* Story */}
            <section id="story" className="bg-white py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">The OneCommit Story</h2>
                </div>
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                    <img src={hughProfessional} alt="Hugh Professional" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 text-center">
                  "In early 2024, I began my journey to becoming a college track athlete... thus, OneCommit was born."
                </p>
                <div className="text-center">
                  <Button onClick={() => setStoryModalOpen(true)} variant="outline" size="lg">Read the Full Story →</Button>
                </div>
              </div>
            </section>

            {/* Beta Signup */}
            <section id="beta" className="bg-white py-20">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join the Beta</h2>
                  <p className="text-xl text-gray-600">Currently free during beta.</p>
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
                          <div><Label htmlFor="firstName">First Name *</Label><Input id="firstName" value={betaFormData.firstName} onChange={(e)=>setBetaFormData({...betaFormData, firstName:e.target.value})} required /></div>
                          <div><Label htmlFor="lastName">Last Name *</Label><Input id="lastName" value={betaFormData.lastName} onChange={(e)=>setBetaFormData({...betaFormData, lastName:e.target.value})} required /></div>
                        </div>
                        <div><Label htmlFor="email">Email *</Label><Input id="email" type="email" value={betaFormData.email} onChange={(e)=>setBetaFormData({...betaFormData, email:e.target.value})} required /></div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="sport">Sport *</Label>
                            <Select value={betaFormData.sport} onValueChange={(v)=>setBetaFormData({...betaFormData, sport:v})}>
                              <SelectTrigger><SelectValue placeholder="Select Sport" /></SelectTrigger>
                              <SelectContent>{sports.map(s=><SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="graduationYear">Graduation Year *</Label>
                            <Select value={betaFormData.graduationYear} onValueChange={(v)=>setBetaFormData({...betaFormData, graduationYear:v})}>
                              <SelectTrigger><SelectValue placeholder="Select Year" /></SelectTrigger>
                              <SelectContent>{graduationYears.map(y=><SelectItem key={y} value={y}>{y}</SelectItem>)}</SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="state">State *</Label>
                            <Select value={betaFormData.state} onValueChange={(v)=>setBetaFormData({...betaFormData, state:v})}>
                              <SelectTrigger><SelectValue placeholder="Select State" /></SelectTrigger>
                              <SelectContent>{states.map(s=><SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div><Label htmlFor="phoneNumber">Phone Number</Label><Input id="phoneNumber" type="tel" value={betaFormData.phoneNumber} onChange={(e)=>setBetaFormData({...betaFormData, phoneNumber:e.target.value})} /></div>
                        {betaError && <div className="bg-red-50 border border-red-200 rounded-md p-4"><p className="text-red-600">{betaError}</p></div>}
                        <Button type="submit" disabled={betaSubmitting} className="w-full bg-[#235d48] hover:bg-[#1a4435] text-white">{betaSubmitting ? 'Joining...' : 'Join Beta'}</Button>
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
                  <p className="text-xl text-gray-600">Have questions about OneCommit? We’d love to hear from you.</p>
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
                        <div><Label htmlFor="name">Name *</Label><Input id="name" value={contactFormData.name} onChange={(e)=>setContactFormData({...contactFormData, name:e.target.value})} required /></div>
                        <div><Label htmlFor="contactEmail">Email *</Label><Input id="contactEmail" type="email" value={contactFormData.email} onChange={(e)=>setContactFormData({...contactFormData, email:e.target.value})} required /></div>
                        <div><Label htmlFor="subject">Subject *</Label><Input id="subject" value={contactFormData.subject} onChange={(e)=>setContactFormData({...contactFormData, subject:e.target.value})} required /></div>
                        <div>
                          <Label htmlFor="message">Message *</Label>
                          <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#235d48] focus:border-transparent"
                            value={contactFormData.message} onChange={(e)=>setContactFormData({...contactFormData, message:e.target.value})} required />
                        </div>
                        {contactError && <div className="bg-red-50 border border-red-200 rounded-md p-4"><p className="text-red-600">{contactError}</p></div>}
                        <Button type="submit" disabled={contactSubmitting} className="w-full bg-[#235d48] hover:bg-[#1a4435] text-white">{contactSubmitting ? 'Sending...' : 'Send Message'}</Button>
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
                <DialogHeader><DialogTitle>The OneCommit Story</DialogTitle></DialogHeader>
                <div className="prose prose-lg max-w-none">
                  {`In early 2024, I began my journey to becoming a college track athlete...`}
                </div>
              </DialogContent>
            </Dialog>

            {/* Privacy Policy Modal */}
            <Dialog open={privacyModalOpen} onOpenChange={setPrivacyModalOpen}>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader><DialogTitle>Privacy Policy</DialogTitle></DialogHeader>
                <LegalDoc html={privacyPolicyContent} />
              </DialogContent>
            </Dialog>

            {/* Terms of Service Modal */}
            <Dialog open={termsModalOpen} onOpenChange={setTermsModalOpen}>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader><DialogTitle>Terms of Service</DialogTitle></DialogHeader>
                <LegalDoc html={termsOfServiceContent} />
              </DialogContent>
            </Dialog>
          </div>
        } />
      </Routes>
    </Router>
  )
}

/** --------- Standalone Pages (docx-like typography) ---------- */

function LegalDoc({ html }) {
  return (
    <article
      className={[
        // base typography
        "prose prose-slate max-w-none",
        // heading sizes & spacing
        "prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:font-bold prose-h1:mb-6",
        "prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-semibold prose-h2:mt-10 prose-h2:mb-3",
        "prose-h3:text-xl md:prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-2",
        // paragraph & list rhythm
        "prose-p:leading-relaxed prose-p:my-3",
        "prose-ul:list-disc prose-ol:list-decimal prose-li:my-1 prose-li:leading-relaxed",
        // strong & links
        "prose-strong:font-semibold prose-a:font-medium prose-a:text-[#235d48] hover:prose-a:text-[#1a4435]",
        // niceties
        "prose-hr:my-10 prose-blockquote:my-6",
      ].join(" ")}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

function PageShell({ title, children }) {
  return (
    <div className="min-h-screen bg-[#f7faf9] py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-5">
          <Link to="/" className="text-[#235d48] hover:text-[#1a4435] font-medium">← Back to Home</Link>
        </div>

        {/* Title bar like a document header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5 md:px-8 md:py-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{title}</h1>
        </div>

        {/* Paper-like body */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-6 md:px-8 md:py-8">
          {children}
        </div>
      </div>
    </div>
  )
}

function PrivacyPolicyPage() {
  return (
    <PageShell title="Privacy Policy">
      <LegalDoc html={privacyPolicyContent} />
    </PageShell>
  )
}

function TermsOfServicePage() {
  return (
    <PageShell title="Terms of Service">
      <LegalDoc html={termsOfServiceContent} />
    </PageShell>
  )
}

export default App
