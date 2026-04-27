import { Package, RefreshCw, CreditCard, Truck, BarChart2, Bell, Search, Globe } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Package,
    title: "Product Management",
    description: "Easily add, update, and organize your entire product catalog with bulk editing, variants, and inventory tracking.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    tag: "Core",
  },
  {
    icon: RefreshCw,
    title: "Order Automation",
    description: "Automate order processing, status updates, and fulfillment workflows to reduce manual work by up to 80%.",
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    tag: "Popular",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Accept payments via Stripe, PayPal, and 20+ gateways. Automatic invoicing and reconciliation included.",
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    tag: "Core",
  },
  {
    icon: Truck,
    title: "Delivery Tracking",
    description: "Real-time shipping status updates synced with 30+ carriers. Customers get automatic SMS and email notifications.",
    color: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    tag: "New",
  },
  {
    icon: BarChart2,
    title: "Analytics Dashboard",
    description: "Visual sales reports, conversion funnels, and customer behavior insights to drive smarter decisions.",
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    tag: "Pro",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Automated alerts for low stock, new orders, payment issues, and customer reviews across all channels.",
    color: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
    tag: "Core",
  },
  {
    icon: Search,
    title: "SEO & Discoverability",
    description: "Built-in SEO tools, meta tags, sitemaps, and schema markup to help your products rank on search engines.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    tag: "Pro",
  },
  {
    icon: Globe,
    title: "Multi-channel Sales",
    description: "Sync your store with Instagram, Facebook, TikTok Shop, and marketplaces from one central hub.",
    color: "from-teal-500 to-teal-600",
    bg: "bg-teal-50",
    iconColor: "text-teal-600",
    tag: "New",
  },
];

const tagColors: Record<string, string> = {
  Core: "bg-slate-100 text-slate-500",
  Popular: "bg-purple-100 text-purple-600",
  New: "bg-green-100 text-green-600",
  Pro: "bg-blue-100 text-blue-600",
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs px-3 py-1.5 rounded-full mb-4 border border-blue-100">
            Everything you need
          </div>
          <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Sellers
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            All the tools you need to run, grow, and automate your online business — no technical
            skills required.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-100 hover:border-slate-200 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 ${feature.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${tagColors[feature.tag]}`}>
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-slate-900 text-sm mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
