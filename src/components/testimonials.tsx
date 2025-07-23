import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Johnson's Bakery",
    role: "Owner",
    content:
      "Jeff has been a lifesaver for our bakery. His attention to detail and monthly reports have helped us understand our finances better than ever. We've been able to make informed decisions that increased our profit by 30%.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    company: "Chen Construction",
    role: "CEO",
    content:
      "As a construction company, our bookkeeping was a nightmare before Jeff. He organized everything, set up proper systems, and now we're always ready for tax season. Highly recommend his services!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Lisa Rodriguez",
    company: "Rodriguez Consulting",
    role: "Founder",
    content:
      "Professional, reliable, and incredibly knowledgeable. Jeff doesn't just do the books - he provides valuable insights that have helped grow my consulting business. Worth every penny!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Thompson",
    company: "Thompson Auto Repair",
    role: "Owner",
    content:
      "I was drowning in receipts and invoices before finding Jeff. Now everything is organized, and I actually understand my financial reports. He's given me peace of mind and more time to focus on my customers.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Amanda Foster",
    company: "Foster Marketing Agency",
    role: "Creative Director",
    content:
      "Jeff's QuickBooks setup and training were exactly what we needed. He made the transition seamless and continues to provide excellent monthly support. Our financial processes are now streamlined and efficient.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Robert Kim",
    company: "Kim's Restaurant Group",
    role: "Managing Partner",
    content:
      "Managing finances for multiple restaurant locations was overwhelming. Jeff created a system that works perfectly for our needs. His payroll processing service has been flawless for over two years.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            Client Success Stories
          </div>
          <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners say about working with Live Better Bookkeeping.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-blue-100 group-hover:text-blue-200 transition-colors">
                <Quote className="h-8 w-8" />
              </div>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>

                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-gray-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5.0</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
