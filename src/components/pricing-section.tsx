import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Star } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small businesses just getting started",
    features: [
      "Monthly transaction recording",
      "Bank reconciliation",
      "Basic financial reports",
      "Email support",
      "Up to 50 transactions/month",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    description: "Ideal for growing businesses with regular activity",
    features: [
      "Weekly transaction recording",
      "Bank & credit card reconciliation",
      "Comprehensive financial reports",
      "Monthly consultation call",
      "Accounts payable/receivable",
      "Up to 200 transactions/month",
      "Priority support",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$999",
    period: "/month",
    description: "Complete solution for established businesses",
    features: [
      "Daily transaction recording",
      "Full reconciliation services",
      "Advanced financial reporting",
      "Bi-weekly consultation calls",
      "Payroll processing (up to 10 employees)",
      "Tax preparation support",
      "Unlimited transactions",
      "Dedicated support line",
    ],
    popular: false,
    cta: "Contact Us",
  },
]

const addOnServices = [
  { name: "Additional Employee Payroll", price: "$25/employee/month" },
  { name: "1099 Contractor Processing", price: "$15/contractor" },
  { name: "Sales Tax Filing", price: "$75/filing" },
  { name: "Extra Consultation Hour", price: "$125/hour" },
  { name: "QuickBooks Setup & Training", price: "$350 one-time" },
  { name: "Financial Analysis Report", price: "$200/report" },
]

export function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            Transparent Pricing
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Choose the Right Plan for Your Business</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees, no surprises. Just professional bookkeeping services at transparent, competitive rates that
            scale with your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "ring-2 ring-blue-500 shadow-xl scale-105" : "shadow-lg"} transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"} text-lg py-3`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Add-On Services</h3>
            <p className="text-gray-600">Customize your package with additional services as needed</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOnServices.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">{service.name}</span>
                <span className="text-blue-600 font-semibold">{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12 bg-blue-50 rounded-2xl p-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-700 mb-6">
              Not satisfied with our services? We'll refund your first month's payment, no questions asked. Your
              satisfaction is our priority.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
