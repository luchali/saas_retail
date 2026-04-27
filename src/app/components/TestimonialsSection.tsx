import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Sarah Miller",
    role: "Handmade Jewelry Store Owner",
    location: "Austin, TX",
    avatar: "https://images.unsplash.com/photo-1753161029194-1b95f4d65c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMHNtYWxsJTIwYnVzaW5lc3MlMjBvd25lciUyMHNtaWxpbmd8ZW58MXx8fHwxNzc0MjkxNTE0fDA&ixlib=rb-4.1.0&q=80&w=200",
    quote: "SaleFlow completely transformed my Etsy-like business. I was manually processing every order — now automation handles 95% of my workflow. My revenue tripled in 6 months!",
    rating: 5,
    highlight: "Revenue tripled in 6 months",
    plan: "Pro Plan",
  },
  {
    name: "Marcus Chen",
    role: "Streetwear Brand Founder",
    location: "Los Angeles, CA",
    avatar: "https://images.unsplash.com/photo-1622258416260-cc79f4763be4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzdGFydHVwJTIwZm91bmRlciUyMHdvcmtpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzc0MjkxNTE0fDA&ixlib=rb-4.1.0&q=80&w=200",
    quote: "I was selling through Instagram DMs and it was chaos. SaleFlow gave me a real store with payments, tracking, and analytics. I finally know which products are my best sellers.",
    rating: 5,
    highlight: "From Instagram DMs to a real store",
    plan: "Pro Plan",
  },
  {
    name: "Elena Rodriguez",
    role: "Organic Skincare Brand",
    location: "Miami, FL",
    avatar: "https://images.unsplash.com/photo-1753161618037-e6a8f740fd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBlbnRyZXByZW5ldXIlMjB3b3JraW5nJTIwbGFwdG9wfGVufDF8fHx8MTc3NDI5MTUxM3ww&ixlib=rb-4.1.0&q=80&w=200",
    quote: "The analytics dashboard is incredible for someone with no tech background. I can see exactly where my customers come from and which products they love most. Set up took under an hour!",
    rating: 5,
    highlight: "Setup in under an hour",
    plan: "Business Plan",
  },
  {
    name: "Tom Nguyen",
    role: "Electronics Reseller",
    location: "Seattle, WA",
    avatar: null,
    initials: "TN",
    quote: "The inventory management and multi-channel sync save me hours every week. Orders from my website, Instagram, and marketplace all flow into one dashboard automatically.",
    rating: 5,
    highlight: "Saves hours every week",
    plan: "Business Plan",
  },
  {
    name: "Priya Sharma",
    role: "Boutique Fashion Owner",
    location: "New York, NY",
    avatar: null,
    initials: "PS",
    quote: "I was worried about the technical side, but SaleFlow makes it so simple. Customer support was incredibly helpful during setup. Now I'm running 3 stores from one account!",
    rating: 5,
    highlight: "Running 3 stores, one account",
    plan: "Pro Plan",
  },
  {
    name: "Jake Williams",
    role: "Home Decor Brand",
    location: "Chicago, IL",
    avatar: null,
    initials: "JW",
    quote: "Switching from a manual spreadsheet system to SaleFlow was the best business decision I made. The delivery tracking alone has reduced customer support inquiries by 60%.",
    rating: 5,
    highlight: "60% fewer support tickets",
    plan: "Basic Plan",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 text-xs px-3 py-1.5 rounded-full mb-4 border border-amber-100">
            ★ 4.9/5 average rating
          </div>
          <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4">
            Real Business Owners,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            Thousands of entrepreneurs have grown their businesses with SaleFlow. Here's what some
            of them have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-100/80 hover:border-slate-200 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Quote className="w-4 h-4 text-blue-400" />
                </div>
                {/* Rating */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="inline-flex items-center bg-blue-50 text-blue-600 text-[10px] px-2.5 py-1 rounded-full mb-4 border border-blue-100">
                {t.highlight}
              </div>

              {/* Quote Text */}
              <p className="text-slate-600 text-xs leading-relaxed mb-5 italic">"{t.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center ring-2 ring-slate-100 shrink-0">
                    <span className="text-white text-xs">{t.initials}</span>
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-slate-900 text-xs">{t.name}</p>
                  <p className="text-slate-400 text-[10px] truncate">{t.role} • {t.location}</p>
                </div>
                <div className="ml-auto shrink-0">
                  <span className="text-[9px] bg-slate-50 text-slate-400 border border-slate-100 px-2 py-0.5 rounded-full">
                    {t.plan}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-8 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {[
              { value: "12,000+", label: "Active Businesses" },
              { value: "$180M+", label: "Revenue Processed" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "99.9%", label: "Uptime SLA" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
