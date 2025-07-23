import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
    Calculator,
    CheckCircle,
    ArrowRight,
    Phone,
    Star,
    TrendingUp,
    FileText,
    DollarSign,
    Shield,
    Clock,
    Users,
} from 'lucide-react'
import { MobileMenu } from '@/components/mobile-menu'
import { ContactForm } from '@/components/contact-form'
import { Testimonials } from '@/components/testimonials'
import { PricingSection } from '@/components/pricing-section'

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <Calculator className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">
                                    Live Better Bookkeeping
                                </h1>
                                <p className="text-sm text-gray-600">LLC</p>
                            </div>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            <Link
                                href="#home"
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="#services"
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                                Services & Pricing
                            </Link>
                            <Link
                                href="#about"
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="#testimonials"
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                                Testimonials
                            </Link>
                            <Link
                                href="#contact"
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                                Contact
                            </Link>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                Get Started
                            </Button>
                        </nav>

                        <MobileMenu />
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section
                id="home"
                className="relative bg-gradient-to-br from-blue-50 via-white to-sky-50 py-20 lg:py-32"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Professional Bookkeeping Services
                                </div>
                                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Focus on Your Business,
                                    <span className="text-blue-600">
                                        {' '}
                                        We'll Handle
                                    </span>{' '}
                                    the Books
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Professional bookkeeping services designed
                                    to give you peace of mind and help your
                                    business thrive. Accurate, organized, and
                                    reliable financial management you can trust.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                                >
                                    Start Your Free Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-8 py-3 bg-transparent"
                                >
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call Now
                                </Button>
                            </div>

                            <div className="flex items-center space-x-8 pt-4">
                                <div className="flex items-center space-x-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div
                                                key={i}
                                                className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center"
                                            >
                                                <span className="text-xs font-medium text-blue-600">
                                                    ★
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600">
                                        50+ Happy Clients
                                    </span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                    <span className="text-sm text-gray-600 ml-2">
                                        5.0 Rating
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl transform -rotate-6"></div>
                                <div className="relative bg-white rounded-xl p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-500">
                                                Monthly Revenue
                                            </span>
                                            <TrendingUp className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div className="text-3xl font-bold text-gray-900">
                                            $47,892
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                                            </div>
                                            <span className="text-sm text-blue-600 font-medium">
                                                +12%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative">
                                <Image
                                    src="/jeff-portrait.jpeg"
                                    alt="Jeff - Professional Bookkeeper"
                                    width={500}
                                    height={600}
                                    className="rounded-2xl shadow-xl object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-blue-100 p-2 rounded-lg">
                                            <Shield className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                Certified Professional
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                QuickBooks ProAdvisor
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                    Meet Your Bookkeeper
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Hi, I'm Jeff,
                                    <span className="block text-blue-600">
                                        Your Trusted Bookkeeping Professional
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    At Live Better Bookkeeping LLC, I specialize
                                    in providing top-notch bookkeeping services
                                    to alleviate the financial burdens of your
                                    business. I am dedicated to ensuring
                                    accurate and organized financial records,
                                    allowing you to focus on growing your
                                    business.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex items-start space-x-3">
                                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                                        <Clock className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            10+ Years Experience
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Extensive experience in small
                                            business bookkeeping
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                                        <Users className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            50+ Clients Served
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Helping businesses across various
                                            industries
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                                        <CheckCircle className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            100% Accuracy
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Meticulous attention to detail in
                                            every transaction
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                                        <Shield className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Fully Insured
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Professional liability insurance for
                                            your peace of mind
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                Schedule a Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                            Our Services
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900">
                            Comprehensive Bookkeeping Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From daily transaction recording to financial
                            reporting, we provide all the bookkeeping services
                            your business needs to stay organized and compliant.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FileText,
                                title: 'Daily Bookkeeping',
                                description:
                                    'Accurate recording of all business transactions, receipts, and expenses',
                                features: [
                                    'Transaction categorization',
                                    'Receipt management',
                                    'Bank reconciliation',
                                ],
                            },
                            {
                                icon: Calculator,
                                title: 'Financial Reporting',
                                description:
                                    'Comprehensive financial statements and reports for informed decision making',
                                features: [
                                    'Profit & Loss statements',
                                    'Balance sheets',
                                    'Cash flow reports',
                                ],
                            },
                            {
                                icon: DollarSign,
                                title: 'Payroll Processing',
                                description:
                                    'Complete payroll management including tax calculations and filings',
                                features: [
                                    'Employee pay processing',
                                    'Tax withholdings',
                                    'Quarterly filings',
                                ],
                            },
                            {
                                icon: TrendingUp,
                                title: 'Tax Preparation Support',
                                description:
                                    'Year-end preparation and support for tax filing requirements',
                                features: [
                                    '1099 preparation',
                                    'Tax document organization',
                                    'CPA coordination',
                                ],
                            },
                            {
                                icon: Shield,
                                title: 'QuickBooks Setup',
                                description:
                                    'Professional setup and training for QuickBooks accounting software',
                                features: [
                                    'Initial setup',
                                    'Chart of accounts',
                                    'User training',
                                ],
                            },
                            {
                                icon: Clock,
                                title: 'Monthly Reviews',
                                description:
                                    'Regular financial health checks and consultation meetings',
                                features: [
                                    'Monthly meetings',
                                    'Financial analysis',
                                    'Business insights',
                                ],
                            },
                        ].map((service, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                            >
                                <CardContent className="p-8">
                                    <div className="space-y-4">
                                        <div className="bg-blue-100 group-hover:bg-blue-600 p-3 rounded-xl w-fit transition-colors">
                                            <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {service.features.map(
                                                (feature, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-center space-x-2 text-sm text-gray-600"
                                                    >
                                                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <PricingSection />

            {/* Testimonials */}
            <Testimonials />

            {/* Contact Form Section */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                            Get In Touch
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900">
                            Ready to Streamline Your Finances?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Let's discuss your bookkeeping needs and create a
                            customized solution for your business. Get started
                            with a free consultation today.
                        </p>
                    </div>

                    <ContactForm />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-8">
                        <h2 className="text-4xl font-bold text-white">
                            Ready to Take Control of Your Finances?
                        </h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Let's discuss how our professional bookkeeping
                            services can help streamline your business finances
                            and give you the peace of mind you deserve.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
                            >
                                Schedule Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
                            >
                                <Phone className="mr-2 h-5 w-5" />
                                Call (555) 123-4567
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="bg-blue-600 p-2 rounded-lg">
                                    <Calculator className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">
                                        Live Better Bookkeeping
                                    </h3>
                                    <p className="text-gray-400">LLC</p>
                                </div>
                            </div>
                            <p className="text-gray-400">
                                Professional bookkeeping services for small
                                businesses. Accurate, reliable, and
                                personalized.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Daily Bookkeeping
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Financial Reporting
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Payroll Processing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Tax Preparation
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <Link
                                        href="#about"
                                        className="hover:text-white transition-colors"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#services"
                                        className="hover:text-white transition-colors"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#testimonials"
                                        className="hover:text-white transition-colors"
                                    >
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#contact"
                                        className="hover:text-white transition-colors"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">
                                Contact Info
                            </h4>
                            <div className="space-y-2 text-gray-400">
                                <p>📧 jeff@livebetterbookkeeping.com</p>
                                <p>📞 (555) 123-4567</p>
                                <p>🕒 Mon-Fri: 9AM-5PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>
                            &copy; 2024 Live Better Bookkeeping LLC. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
