import { useNavigate } from "react-router";
import { ArrowRight, Play, TrendingUp, ShoppingCart, Users } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const navigate = useNavigate();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-purple-50/30 overflow-hidden pt-16">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-300/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs px-3 py-1.5 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              Trusted by 12,000+ businesses worldwide
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] text-slate-900 mb-6 leading-tight">
              Optimize Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Online Sales
              </span>{" "}
              with SaaS Automation
            </h1>

            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl">
              Automate your entire sales workflow, gain powerful analytics insights, and integrate
              with 50+ platforms — all in one simple dashboard built for small businesses.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { icon: TrendingUp, value: "3x", label: "Revenue Growth" },
                { icon: ShoppingCart, value: "98%", label: "Order Accuracy" },
                { icon: Users, value: "12k+", label: "Active Users" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-slate-900 text-sm">{value}</div>
                    <div className="text-slate-400 text-xs">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/dashboard")}
                className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white px-7 py-3.5 rounded-xl shadow-lg hover:shadow-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollTo("#dashboard-preview")}
                className="group flex items-center gap-2 bg-white text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-blue-200 px-7 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="w-7 h-7 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Play className="w-3 h-3 text-blue-500 ml-0.5" />
                </div>
                View Demo
              </button>
            </div>
          </motion.div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
              {/* Browser Bar */}
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400">
                    app.saleflow.io/dashboard
                  </div>
                </div>
              </div>

              {/* Mini Dashboard */}
              <div className="flex h-64 sm:h-80">
                {/* Sidebar */}
                <div className="w-14 sm:w-16 bg-slate-900 flex flex-col items-center py-4 gap-4">
                  {[
                    { color: "bg-blue-400", active: true },
                    { color: "bg-slate-600", active: false },
                    { color: "bg-slate-600", active: false },
                    { color: "bg-slate-600", active: false },
                    { color: "bg-slate-600", active: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-lg ${item.active ? "bg-blue-500/20 border border-blue-400/30" : ""} flex items-center justify-center`}
                    >
                      <div className={`w-4 h-0.5 ${item.color} rounded mb-0.5`} />
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-slate-50 p-3 sm:p-4 overflow-hidden">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { label: "Revenue", value: "$24.8K", change: "+12%", color: "text-green-500" },
                      { label: "Orders", value: "1,284", change: "+8%", color: "text-blue-500" },
                      { label: "Customers", value: "892", change: "+5%", color: "text-purple-500" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white rounded-lg p-2 shadow-sm border border-slate-100">
                        <div className="text-slate-400 text-[9px] mb-1">{stat.label}</div>
                        <div className="text-slate-800 text-xs sm:text-sm">{stat.value}</div>
                        <div className={`text-[9px] ${stat.color}`}>{stat.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-slate-100 mb-3">
                    <div className="text-slate-400 text-[9px] mb-2">Sales Overview</div>
                    <div className="flex items-end gap-1 h-12">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-gradient-to-t from-blue-500 to-blue-400 opacity-80"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Orders Table */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
                    <div className="text-slate-400 text-[9px] px-2 py-1.5 border-b border-slate-50">Recent Orders</div>
                    {[
                      { id: "#1024", status: "Delivered", amount: "$120", color: "bg-green-100 text-green-600" },
                      { id: "#1023", status: "Processing", amount: "$85", color: "bg-blue-100 text-blue-600" },
                      { id: "#1022", status: "Pending", amount: "$240", color: "bg-yellow-100 text-yellow-600" },
                    ].map((order) => (
                      <div key={order.id} className="flex items-center justify-between px-2 py-1 border-b border-slate-50 last:border-0">
                        <span className="text-[9px] text-slate-600">{order.id}</span>
                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${order.color}`}>{order.status}</span>
                        <span className="text-[9px] text-slate-800">{order.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="text-slate-800 text-xs">Monthly Revenue</div>
                <div className="text-green-500 text-xs">↑ +34% this month</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="text-slate-800 text-xs">New Order</div>
                <div className="text-slate-400 text-xs">Order #1025 — $340</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
