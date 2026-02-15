import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './components/ui/collapsible'
import { CheckCircle, Menu, X, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import { supabase } from './lib/supabase'
import onecommitLogo from './assets/images/onecommit-logo.png'

/**
 * --------- LEGAL CONTENT (nicely formatted, current dates) ----------
 * We render with Tailwind Typography (`prose`) for clean, docx-like layout.
 */

// Scroll to waitlist when URL is /#waitlist (e.g. after redirect from /waitlist)
function ScrollToWaitlistIfHash() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash === '#waitlist') {
      const el = document.getElementById('waitlist')
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200)
    }
  }, [location.hash])
  return null
}

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

const TYPING_PHRASES = [
  'Build your school list in minutes.',
  'Generate coach emails that don\'t sound generic.',
  'Track replies like a recruiting CRM.'
]
const graduationYears = ['2025','2026','2027','2028','2029','2030']

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)
  const [screenModal, setScreenModal] = useState(null)

  const [typingIndex, setTypingIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setTypingIndex((i) => (i + 1) % TYPING_PHRASES.length), 2000)
    return () => clearInterval(t)
  }, [])

  const [betaFormData, setBetaFormData] = useState({
    name: '', email: '', phone: '', grade: '', website_guard: ''
  })
  const [betaSubmitting, setBetaSubmitting] = useState(false)
  const [betaSuccess, setBetaSuccess] = useState(false)
  const [betaError, setBetaError] = useState('')

  const [contactFormData, setContactFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [contactSubmitting, setContactSubmitting] = useState(false)
  const [contactSuccess, setContactSuccess] = useState(false)
  const [contactError, setContactError] = useState('')

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const handleBetaSubmit = async (e) => {
    e.preventDefault()
    if (betaFormData.website_guard) return
    setBetaSubmitting(true); setBetaError('')
    try {
      const parts = (betaFormData.name || '').trim().split(/\s+/)
      const first_name = parts[0] || ''
      const last_name = parts.slice(1).join(' ') || ''
      const payload = {
        first_name,
        last_name,
        email: betaFormData.email?.trim().toLowerCase(),
        sport: 'Track & Field',
        grad_year: String(betaFormData.grade || ''),
        state: null,
        phone: betaFormData.phone?.trim() || null,
        created_at: new Date().toISOString()
      }
      const { error } = await supabase.from('waitlist').insert([payload])
      if (error) throw error
      setBetaSuccess(true)
      setBetaFormData({ name: '', email: '', phone: '', grade: '', website_guard: '' })
    } catch (err) {
      console.error('[waitlist insert error]', err)
      setBetaError(err?.message?.includes('duplicate') ? 'This email is already on the list.' : 'Something failed — try again.')
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

  return (
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/waitlist" element={<Navigate to="/#waitlist" replace />} />
        <Route path="/" element={
          <>
            <ScrollToWaitlistIfHash />
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
                      <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">How it Works</button>
                      <button onClick={() => scrollToSection('beta-features')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Beta Features</button>
                      <Button onClick={() => scrollToSection('waitlist')} className="bg-[#235d48] hover:bg-[#1a4435] text-white">Join Beta</Button>
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
                    <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">How it Works</button>
                    <button onClick={() => scrollToSection('beta-features')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Beta Features</button>
                    <Button onClick={() => scrollToSection('waitlist')} className="bg-[#235d48] hover:bg-[#1a4435] text-white w-full mt-2">Join Beta</Button>
                  </div>
                </div>
              )}
            </nav>

            {/* Hero */}
            <section className="bg-white py-16 md:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="mb-12 lg:mb-0">
                    <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                      Get recruited faster for Track &amp; Field.
                    </motion.h1>
                    <motion.div className="text-xl md:text-2xl text-gray-600 mb-4 min-h-[2.5rem]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                      <span className="text-[#235d48]">{TYPING_PHRASES[typingIndex]}</span>
                      <span className="animate-pulse">|</span>
                    </motion.div>
                    <motion.p className="text-lg text-gray-600 mb-6" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
                      OneCommit turns your stats + preferences into matched schools, then helps you send outreach emails and track coach replies — all in one place.
                    </motion.p>
                    <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                      <Button onClick={() => scrollToSection('waitlist')} size="lg" className="bg-[#235d48] hover:bg-[#1a4435] text-white">
                        Join the Track Beta
                      </Button>
                      <Button type="button" variant="outline" onClick={() => scrollToSection('how-it-works')} className="border-[#235d48] text-[#235d48] hover:bg-[#235d48]/10">
                        See how it works
                      </Button>
                    </motion.div>
                    <motion.p className="text-sm text-gray-500 mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                      Track &amp; Field only (for now). Free during beta. Limited spots.
                    </motion.p>
                  </div>
                  <motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                    <div className="w-full max-w-[320px] rounded-xl overflow-hidden bg-black shadow-xl">
                      <video
                        className="w-full h-auto object-contain"
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-label="OneCommit app demo"
                      >
                        <source src="/demo.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* How it works (3 steps) */}
            <section id="how-it-works" className="bg-white py-20 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
                  <p className="text-xl text-gray-600">Three steps. You're in control.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                  {[
                    { step: 1, title: 'Create your profile', desc: 'Add times/marks + GPA/SAT + what you care about.' },
                    { step: 2, title: 'Get matched schools', desc: 'See Reach/Target labels and match breakdowns (academics, athletics, preferences).' },
                    { step: 3, title: 'Start outreach + track replies', desc: 'Generate emails, send, and manage replies from one dashboard.' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.step}
                      className="relative rounded-2xl border border-gray-200 bg-gray-50/50 p-6 md:p-8"
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="absolute -top-3 -left-1 w-10 h-10 bg-[#235d48] text-white rounded-full flex items-center justify-center text-lg font-bold shadow-md">{item.step}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                  <Button onClick={() => scrollToSection('waitlist')} size="lg" className="bg-[#235d48] hover:bg-[#1a4435] text-white">Join the Track Beta</Button>
                </motion.div>
              </div>
            </section>

            {/* What's in the beta (4 cards) */}
            <section id="beta-features" className="bg-gray-50 py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's in the beta</h2>
                  <p className="text-xl text-gray-600">Exact features from the app.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Profile Builder', desc: 'Height/weight, PRs, GPA/SAT, links, notable results.' },
                    { title: 'Preferences Interview → "Must haves"', desc: 'Your answers become clear "must haves" and "preferences."' },
                    { title: 'SmartAdd + Search', desc: 'Type what you want; save matched schools to your dashboard.' },
                    { title: 'Outreach Dashboard', desc: 'Generate emails, track sent + replies, and manage threads.' },
                  ].map((card, i) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <Card>
                        <CardHeader><CardTitle className="text-[#1a4435]">{card.title}</CardTitle></CardHeader>
                        <CardContent><p className="text-gray-600">{card.desc}</p></CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <motion.p className="text-center text-gray-700 font-medium mt-8 p-4 rounded-lg bg-[#e8f0ed]/60 border border-[#235d48]/30" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  This beta is Track &amp; Field recruiting only. No other sports yet.
                </motion.p>
              </div>
            </section>

            {/* Screens */}
            <section id="screens" className="bg-white py-20">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Screens</h2>
                  <p className="text-xl text-gray-600">Profile → match → outreach → track replies.</p>
                </div>
                <motion.div className="flex justify-center mb-12" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <img src="/hero-trifold.png" alt="OneCommit app flow" className="max-w-full h-auto w-full max-w-2xl rounded-xl shadow-lg" />
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { img: '/product/proof-dashboard.png', title: 'Dashboard' },
                    { img: '/product/proof-email.png', title: 'Email' },
                    { img: '/product/proof-engagement.png', title: 'Replies' },
                    { img: '/product/match.png', title: 'Match' },
                  ].map((s) => (
                    <button
                      key={s.title}
                      type="button"
                      onClick={() => setScreenModal(s)}
                      className="rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left focus:outline-none focus:ring-2 focus:ring-[#235d48]"
                    >
                      <div className="aspect-[9/16] bg-gray-100">
                        <img src={s.img} alt={s.title} className="w-full h-full object-cover object-top" />
                      </div>
                      <p className="p-2 text-sm font-medium text-gray-700">{s.title}</p>
                    </button>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button onClick={() => scrollToSection('waitlist')} variant="outline" className="border-[#235d48] text-[#235d48] hover:bg-[#235d48]/10">Join the Track Beta</Button>
                </div>
              </div>
            </section>

            {/* Waitlist */}
            <section id="waitlist" className="bg-gray-50 py-20">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join the Beta Waitlist</h2>
                  <p className="text-xl text-gray-600">Track &amp; Field only. Free during beta. Limited spots.</p>
                </div>
                {betaSuccess ? (
                  <Card className="text-center">
                    <CardContent className="pt-8 pb-8">
                      <CheckCircle className="h-16 w-16 text-[#235d48] mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">You're in.</h3>
                      <p className="text-gray-600">We'll email you when your wave opens.</p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="pt-6">
                      <form onSubmit={handleBetaSubmit} className="space-y-5">
                        <div className="absolute -left-[9999px] aria-hidden" tabIndex="-1">
                          <label htmlFor="website_guard">Leave blank</label>
                          <input id="website_guard" type="text" name="website_guard" value={betaFormData.website_guard} onChange={(e)=>setBetaFormData({...betaFormData, website_guard:e.target.value})} autoComplete="off" />
                        </div>
                        <div>
                          <Label htmlFor="waitlist-name">Name *</Label>
                          <Input id="waitlist-name" type="text" placeholder="Your name" value={betaFormData.name} onChange={(e)=>setBetaFormData({...betaFormData, name:e.target.value})} required />
                        </div>
                        <div>
                          <Label htmlFor="waitlist-email">Email *</Label>
                          <Input id="waitlist-email" type="email" placeholder="you@example.com" value={betaFormData.email} onChange={(e)=>setBetaFormData({...betaFormData, email:e.target.value})} required />
                        </div>
                        <div>
                          <Label htmlFor="waitlist-phone">Phone</Label>
                          <Input id="waitlist-phone" type="tel" placeholder="(optional)" value={betaFormData.phone} onChange={(e)=>setBetaFormData({...betaFormData, phone:e.target.value})} />
                        </div>
                        <div>
                          <Label htmlFor="waitlist-sport">Sport</Label>
                          <Input id="waitlist-sport" value="Track & Field" disabled className="bg-gray-100 cursor-not-allowed" />
                        </div>
                        <div>
                          <Label htmlFor="waitlist-grade">Grade</Label>
                          <Select value={betaFormData.grade} onValueChange={(v)=>setBetaFormData({...betaFormData, grade:v})}>
                            <SelectTrigger><SelectValue placeholder="Select grade / grad year" /></SelectTrigger>
                            <SelectContent>{graduationYears.map(y=><SelectItem key={y} value={y}>{y}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                        {betaError && <div className="bg-red-50 border border-red-200 rounded-md p-3"><p className="text-red-600 text-sm">{betaError}</p></div>}
                        <Button type="submit" disabled={betaSubmitting} className="w-full bg-[#235d48] hover:bg-[#1a4435] text-white">{betaSubmitting ? 'Joining...' : 'Join Beta Waitlist'}</Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>
            </section>

            {/* Contact - hidden, footer has mailto */}
            <section id="contact" className="hidden bg-white py-20">
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
            <footer className="bg-[#1a4435] text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-center">
                    <img src={onecommitLogo} alt="OneCommit" className="h-8 w-8 rounded-full" />
                    <span className="ml-2 text-xl font-bold">OneCommit</span>
                  </div>
                  <div className="flex flex-wrap gap-6">
                    <Link to="/privacy-policy" className="text-[#c0d8d0] hover:text-white">Privacy Policy</Link>
                    <Link to="/terms-of-service" className="text-[#c0d8d0] hover:text-white">Terms of Service</Link>
                    <a href="mailto:hello@onecommit.com" className="text-[#c0d8d0] hover:text-white">Contact</a>
                  </div>
                </div>
                <div className="border-t border-[#235d48] mt-8 pt-8 text-center">
                  <p className="text-[#c0d8d0] text-sm">Track &amp; Field beta — expanding later.</p>
                  <p className="text-[#c0d8d0] text-sm mt-1">&copy; {new Date().getFullYear()} OneCommit. All rights reserved.</p>
                </div>
              </div>
            </footer>

            {/* Screenshot modal */}
            <Dialog open={!!screenModal} onOpenChange={() => setScreenModal(null)}>
              <DialogContent className="max-w-sm p-0 overflow-hidden">
                {screenModal && (
                  <>
                    <DialogHeader className="p-4 pb-0"><DialogTitle>{screenModal.title}</DialogTitle></DialogHeader>
                    <div className="aspect-[9/16] max-h-[70vh] bg-gray-100">
                      <img src={screenModal.img} alt={screenModal.title} className="w-full h-full object-cover object-top" />
                    </div>
                  </>
                )}
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
          </>
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
