import { useNavigate } from "react-router";
import { Store, PackagePlus, ShoppingBag, LineChart } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    icon: Store,
    title: "Create Your Store",
    description: "Sign up and set up your online store in minutes. Choose a template, add your branding, and you're ready to sell.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    detail: "No coding required • Templates included • Custom domain support",
  },
  {
    number: "02",
    icon: PackagePlus,
    title: "Add Your Products",
    description: "Upload products with photos, descriptions, pricing, and variants. Import from CSV or connect existing inventory.",
    color: "from-indigo-500 to-purple-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    detail: "Bulk upload • Inventory tracking • Variants & SKUs",
  },
  {
    number: "03",
    icon: ShoppingBag,
    title: "Receive & Process Orders",
    description: "Orders flow in automatically. SaleFlow handles payments, sends confirmations, and routes to fulfillment.",
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    detail: "Auto-fulfillment • Real-time notifications • Multi-channel sync",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Analyze & Scale",
    description: "Review performance with visual dashboards, identify top products, and use AI-driven insights to grow smarter.",
    color: "from-violet-500 to-blue-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    detail: "Visual reports • AI insights • Export data",
  },
];

export function HowItWorks() {
  const navigate = useNavigate();

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 text-xs px-3 py-1.5 rounded-full mb-4 border border-purple-100">
            Simple process
          </div>
          <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4">
            From Setup to Sales in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            Designed for busy entrepreneurs — get your store running and start selling within the same
            day.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[calc(12.5%+40px)] right-[calc(12.5%+40px)] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-violet-200 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group"
              >
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className={`w-16 h-16 bg-white border-2 border-slate-100 group-hover:border-blue-200 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                      <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white text-[9px]">{step.number.replace("0", "")}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="text-slate-300 text-sm mb-1">{step.number}</div>
                  <h3 className="text-slate-900 text-sm mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{step.description}</p>
                  <div className="bg-white rounded-xl px-3 py-2 border border-slate-100 shadow-sm">
                    <p className="text-[10px] text-slate-400">{step.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button 
            onClick={() => navigate("/dashboard")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3.5 rounded-xl shadow-lg hover:shadow-purple-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
            Get Started for Free — No Credit Card
          </button>
          <p className="text-slate-400 text-xs mt-3">14-day free trial • Cancel anytime • Free onboarding support</p>
        </motion.div>
      </div>
    </section>
  );
}
