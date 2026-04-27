import { motion } from "motion/react";

const integrations = [
  {
    name: "Stripe",
    category: "Payments",
    color: "#635BFF",
    bg: "bg-[#635BFF]/10",
    initials: "ST",
  },
  {
    name: "PayPal",
    category: "Payments",
    color: "#003087",
    bg: "bg-[#003087]/10",
    initials: "PP",
  },
  {
    name: "Shopify",
    category: "E-commerce",
    color: "#96BF48",
    bg: "bg-green-50",
    initials: "SH",
  },
  {
    name: "WooCommerce",
    category: "E-commerce",
    color: "#7F54B3",
    bg: "bg-purple-50",
    initials: "WC",
  },
  {
    name: "DHL",
    category: "Shipping",
    color: "#FFCC00",
    bg: "bg-yellow-50",
    initials: "DH",
    textColor: "#D4A800",
  },
  {
    name: "FedEx",
    category: "Shipping",
    color: "#4D148C",
    bg: "bg-purple-50",
    initials: "FX",
  },
  {
    name: "UPS",
    category: "Shipping",
    color: "#351C15",
    bg: "bg-amber-50",
    initials: "UP",
    textColor: "#8B4513",
  },
  {
    name: "Mailchimp",
    category: "Marketing",
    color: "#FFE01B",
    bg: "bg-yellow-50",
    initials: "MC",
    textColor: "#C08C00",
  },
  {
    name: "Meta Ads",
    category: "Marketing",
    color: "#1877F2",
    bg: "bg-blue-50",
    initials: "FB",
  },
  {
    name: "Google Ads",
    category: "Marketing",
    color: "#4285F4",
    bg: "bg-blue-50",
    initials: "GA",
  },
  {
    name: "Instagram",
    category: "Social",
    color: "#E4405F",
    bg: "bg-rose-50",
    initials: "IG",
  },
  {
    name: "TikTok Shop",
    category: "Social",
    color: "#010101",
    bg: "bg-slate-50",
    initials: "TT",
  },
  {
    name: "Slack",
    category: "Productivity",
    color: "#4A154B",
    bg: "bg-purple-50",
    initials: "SL",
  },
  {
    name: "Zapier",
    category: "Automation",
    color: "#FF4A00",
    bg: "bg-orange-50",
    initials: "ZP",
  },
  {
    name: "QuickBooks",
    category: "Accounting",
    color: "#2CA01C",
    bg: "bg-green-50",
    initials: "QB",
  },
];

const categories = ["All", "Payments", "Shipping", "E-commerce", "Marketing", "Social", "Automation"];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs px-3 py-1.5 rounded-full mb-4 border border-indigo-100">
            50+ integrations
          </div>
          <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4">
            Connects with the Tools{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              You Already Use
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            One-click integrations with payment gateways, shipping carriers, marketing platforms,
            and more — no technical knowledge needed.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`text-xs px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                i === 0
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl border border-slate-100 p-4 flex flex-col items-center gap-3 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300 cursor-default group"
            >
              <div className={`w-12 h-12 ${integration.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <span
                  className="text-xs"
                  style={{ color: integration.textColor || integration.color }}
                >
                  {integration.initials}
                </span>
              </div>
              <div className="text-center">
                <p className="text-slate-800 text-xs">{integration.name}</p>
                <p className="text-slate-400 text-[10px]">{integration.category}</p>
              </div>
              <div className="w-full">
                <div className="text-[9px] text-center text-slate-400 bg-slate-50 rounded-lg px-2 py-1 border border-slate-100">
                  Connected
                </div>
              </div>
            </motion.div>
          ))}

          {/* +More Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl border border-blue-400 p-4 flex flex-col items-center justify-center gap-2 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 col-span-1"
          >
            <div className="text-2xl text-white">+35</div>
            <p className="text-blue-100 text-xs text-center">More integrations</p>
            <p className="text-blue-200 text-[10px] text-center">Coming soon</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
