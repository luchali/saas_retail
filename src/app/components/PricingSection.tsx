import { Check, Zap, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    monthly: 19,
    annual: 15,
    description: "Perfect for beginners starting their first online store.",
    color: "border-slate-200",
    buttonStyle: "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50",
    badge: null,
    features: [
      "Up to 50 products",
      "100 orders/month",
      "Basic analytics",
      "Email support",
      "Payment integration (2 gateways)",
      "SSL & hosting included",
      "Mobile-responsive storefront",
    ],
    missing: ["Automation workflows", "Advanced analytics", "Priority support", "Custom domain", "API access"],
  },
  {
    name: "Pro",
    monthly: 49,
    annual: 39,
    description: "For growing businesses that need automation and advanced insights.",
    color: "border-blue-500",
    buttonStyle: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-blue-200",
    badge: "Most Popular",
    features: [
      "Unlimited products",
      "Unlimited orders",
      "Advanced analytics & reports",
      "Priority email & chat support",
      "All payment gateways",
      "Custom domain",
      "Automation workflows (10)",
      "Multi-channel selling",
      "API access",
      "Delivery tracking integration",
    ],
    missing: ["Dedicated account manager", "White-label option"],
  },
  {
    name: "Business",
    monthly: 99,
    annual: 79,
    description: "Full-featured solution for scaling businesses with premium support.",
    color: "border-purple-200",
    buttonStyle: "bg-white text-purple-600 border border-purple-200 hover:bg-purple-50",
    badge: null,
    features: [
      "Everything in Pro",
      "Unlimited automation workflows",
      "Dedicated account manager",
      "White-label option",
      "Custom integrations",
      "Team access (up to 15 users)",
      "SLA uptime guarantee (99.9%)",
      "Advanced fraud protection",
      "Data export & backups",
      "Custom reporting",
    ],
    missing: [],
  },
];

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 text-xs px-3 py-1.5 rounded-full mb-4 border border-green-100">
            Transparent pricing
          </div>
          <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4">
            Plans That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Grow with You
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed mb-8">
            No hidden fees. Start free, upgrade when you're ready.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-slate-100 rounded-xl p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 cursor-pointer ${!annual ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 ${annual ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}
            >
              Annual
              <span className="bg-green-100 text-green-600 text-[10px] px-1.5 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl border-2 ${plan.color} p-6 sm:p-7 flex flex-col ${
                plan.badge ? "shadow-xl shadow-blue-100/50 scale-[1.02]" : "shadow-md hover:shadow-xl transition-shadow duration-300"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow-md">
                  <Star className="w-2.5 h-2.5 fill-current" />
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  {plan.badge && (
                    <div className="w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <h3 className="text-slate-900 text-base">{plan.name}</h3>
                </div>
                <p className="text-slate-500 text-xs mb-4">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-3xl sm:text-4xl text-slate-900">
                    ${annual ? plan.annual : plan.monthly}
                  </span>
                  <span className="text-slate-400 text-xs mb-1.5">/month</span>
                </div>
                {annual && (
                  <p className="text-green-500 text-[10px] mt-1">
                    Save ${(plan.monthly - plan.annual) * 12}/year
                  </p>
                )}
              </div>

              {/* CTA */}
              <button className={`w-full py-3 rounded-xl text-sm mb-6 transition-all duration-200 cursor-pointer ${plan.buttonStyle}`}>
                {plan.name === "Basic" ? "Start Free Trial" : plan.name === "Pro" ? "Get Pro — Most Popular" : "Contact Sales"}
              </button>

              {/* Features */}
              <div className="flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.badge ? "bg-blue-100" : "bg-slate-100"}`}>
                      <Check className={`w-2.5 h-2.5 ${plan.badge ? "text-blue-600" : "text-slate-600"}`} />
                    </div>
                    <span className="text-slate-600 text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-slate-400 text-xs mt-8">
          All plans include a 14-day free trial. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
