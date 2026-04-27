import { useState } from "react";
import {
  LayoutDashboard, ShoppingCart, Package, BarChart2, Settings, Bell,
  Search, ChevronDown, TrendingUp, TrendingDown, ArrowUpRight, Filter, Download
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from "recharts";
import { motion } from "motion/react";

const salesData = [
  { month: "Jan", revenue: 18400, orders: 142 },
  { month: "Feb", revenue: 22100, orders: 168 },
  { month: "Mar", revenue: 19800, orders: 155 },
  { month: "Apr", revenue: 26500, orders: 198 },
  { month: "May", revenue: 24200, orders: 187 },
  { month: "Jun", revenue: 31000, orders: 224 },
  { month: "Jul", revenue: 28700, orders: 210 },
  { month: "Aug", revenue: 35200, orders: 258 },
];

const categoryData = [
  { name: "Electronics", value: 35, color: "#3B82F6" },
  { name: "Clothing", value: 28, color: "#8B5CF6" },
  { name: "Home & Garden", value: 20, color: "#06B6D4" },
  { name: "Other", value: 17, color: "#E2E8F0" },
];

const orders = [
  { id: "#ORD-1028", customer: "Sarah Miller", product: "Wireless Headphones", amount: "$149.99", status: "Delivered", date: "Mar 22" },
  { id: "#ORD-1027", customer: "James Chen", product: "Smart Watch Band", amount: "$34.50", status: "Shipped", date: "Mar 22" },
  { id: "#ORD-1026", customer: "Olivia Torres", product: "Linen Blouse Set", amount: "$89.00", status: "Processing", date: "Mar 21" },
  { id: "#ORD-1025", customer: "Daniel Park", product: "Ceramic Plant Pot", amount: "$42.00", status: "Pending", date: "Mar 21" },
  { id: "#ORD-1024", customer: "Emma Wilson", product: "Skincare Bundle", amount: "$124.00", status: "Delivered", date: "Mar 20" },
];

const statusStyle: Record<string, string> = {
  Delivered: "bg-green-50 text-green-600 border border-green-100",
  Shipped: "bg-blue-50 text-blue-600 border border-blue-100",
  Processing: "bg-indigo-50 text-indigo-600 border border-indigo-100",
  Pending: "bg-amber-50 text-amber-600 border border-amber-100",
  Cancelled: "bg-red-50 text-red-600 border border-red-100",
};

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ShoppingCart, label: "Orders", active: false },
  { icon: Package, label: "Products", active: false },
  { icon: BarChart2, label: "Analytics", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function DashboardPreview() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <section id="dashboard-preview" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs px-3 py-1.5 rounded-full mb-4 border border-indigo-100">
            Live dashboard preview
          </div>
          <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4">
            Your Sales Command{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Center
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            A beautifully designed admin panel that gives you complete control and visibility over
            your entire business at a glance.
          </p>
        </div>

        {/* Dashboard Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-2xl shadow-slate-200/70 border border-slate-200 overflow-hidden"
        >
          {/* Browser Chrome */}
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 max-w-xs">
              <div className="bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                app.saleflow.io/dashboard
              </div>
            </div>
          </div>

          <div className="flex h-[600px] lg:h-[680px]">
            {/* Sidebar */}
            <div className="w-14 sm:w-56 bg-slate-900 flex flex-col border-r border-slate-800">
              {/* Logo */}
              <div className="px-4 py-5 border-b border-slate-800">
                <div className="hidden sm:flex items-center gap-2">
                  <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">S</span>
                  </div>
                  <span className="text-white text-sm"><span className="text-blue-400">Sale</span>Flow</span>
                </div>
                <div className="sm:hidden flex justify-center">
                  <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">S</span>
                  </div>
                </div>
              </div>

              {/* Nav */}
              <nav className="flex-1 py-4 space-y-1 px-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveNav(item.label)}
                    className={`w-full flex items-center gap-3 px-2 sm:px-3 py-2.5 rounded-lg transition-all duration-200 group cursor-pointer ${
                      activeNav === item.label
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    <span className="hidden sm:block text-xs">{item.label}</span>
                  </button>
                ))}
              </nav>

              {/* User */}
              <div className="px-2 sm:px-3 pb-4 border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-xs">A</span>
                  </div>
                  <div className="hidden sm:block min-w-0">
                    <div className="text-white text-xs truncate">Alex Johnson</div>
                    <div className="text-slate-500 text-[10px]">Pro Plan</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-slate-50 overflow-y-auto">
              {/* Top Bar */}
              <div className="bg-white border-b border-slate-100 px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-10">
                <div>
                  <h1 className="text-slate-900 text-sm">Dashboard</h1>
                  <p className="text-slate-400 text-[10px]">Monday, March 23, 2026</p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
                    <Search className="w-3 h-3 text-slate-400" />
                    <span className="text-slate-400 text-xs">Search...</span>
                  </div>
                  <div className="relative">
                    <button className="w-8 h-8 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer">
                      <Bell className="w-4 h-4 text-slate-500" />
                    </button>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-[7px]">3</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 cursor-pointer hover:bg-slate-100 transition-colors">
                    <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-5">
                {/* KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    { label: "Total Revenue", value: "$35,200", change: "+18.5%", up: true, sub: "vs last month" },
                    { label: "Total Orders", value: "1,284", change: "+12.3%", up: true, sub: "vs last month" },
                    { label: "Avg. Order Value", value: "$86.40", change: "+4.1%", up: true, sub: "vs last month" },
                    { label: "Return Rate", value: "2.4%", change: "-0.8%", up: false, sub: "vs last month" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <p className="text-slate-400 text-[10px] mb-2">{kpi.label}</p>
                      <p className="text-slate-900 text-base sm:text-lg mb-1">{kpi.value}</p>
                      <div className="flex items-center gap-1">
                        {kpi.up ? (
                          <TrendingUp className="w-3 h-3 text-green-500" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-green-500" />
                        )}
                        <span className="text-green-500 text-[10px]">{kpi.change}</span>
                        <span className="text-slate-400 text-[10px] hidden sm:inline">{kpi.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts Row */}
                <div className="grid lg:grid-cols-3 gap-4">
                  {/* Revenue Chart */}
                  <div className="lg:col-span-2 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-slate-900 text-xs">Revenue Overview</h3>
                        <p className="text-slate-400 text-[10px]">Last 8 months</p>
                      </div>
                      <button className="flex items-center gap-1 text-[10px] text-slate-500 border border-slate-200 rounded-lg px-2 py-1 hover:bg-slate-50 cursor-pointer">
                        <Filter className="w-3 h-3" /> Filter
                      </button>
                    </div>
                    <ResponsiveContainer width="100%" height={160}>
                      <AreaChart data={salesData}>
                        <defs>
                          <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15} />
                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                        <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 9, fill: "#94A3B8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                        <Tooltip
                          contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                          formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                        />
                        <Area type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} fill="url(#revenueGrad)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Category Pie */}
                  <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                    <h3 className="text-slate-900 text-xs mb-1">Sales by Category</h3>
                    <p className="text-slate-400 text-[10px] mb-3">This month</p>
                    <ResponsiveContainer width="100%" height={100}>
                      <PieChart>
                        <Pie data={categoryData} cx="50%" cy="50%" innerRadius={28} outerRadius={45} dataKey="value" strokeWidth={0}>
                          {categoryData.map((entry) => (
                            <Cell key={entry.name} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="space-y-1.5 mt-2">
                      {categoryData.map((item) => (
                        <div key={item.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-slate-500 text-[10px]">{item.name}</span>
                          </div>
                          <span className="text-slate-700 text-[10px]">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Orders Table */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="px-4 sm:px-5 py-4 flex items-center justify-between border-b border-slate-50">
                    <div>
                      <h3 className="text-slate-900 text-xs">Recent Orders</h3>
                      <p className="text-slate-400 text-[10px]">Latest 5 transactions</p>
                    </div>
                    <button className="flex items-center gap-1.5 text-[10px] text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                      <Download className="w-3 h-3" />
                      <span className="hidden sm:inline">Export</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="text-left px-4 sm:px-5 py-2.5 text-[10px] text-slate-400 font-normal">Order ID</th>
                          <th className="text-left px-4 sm:px-5 py-2.5 text-[10px] text-slate-400 font-normal hidden sm:table-cell">Customer</th>
                          <th className="text-left px-4 sm:px-5 py-2.5 text-[10px] text-slate-400 font-normal hidden md:table-cell">Product</th>
                          <th className="text-left px-4 sm:px-5 py-2.5 text-[10px] text-slate-400 font-normal">Amount</th>
                          <th className="text-left px-4 sm:px-5 py-2.5 text-[10px] text-slate-400 font-normal">Status</th>
                          <th className="text-left px-4 sm:px-5 py-2.5 text-[10px] text-slate-400 font-normal hidden sm:table-cell">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order, i) => (
                          <tr key={order.id} className="border-t border-slate-50 hover:bg-slate-50/50 transition-colors cursor-default">
                            <td className="px-4 sm:px-5 py-3 text-blue-600 text-xs">{order.id}</td>
                            <td className="px-4 sm:px-5 py-3 text-slate-700 text-xs hidden sm:table-cell">{order.customer}</td>
                            <td className="px-4 sm:px-5 py-3 text-slate-500 text-xs hidden md:table-cell">{order.product}</td>
                            <td className="px-4 sm:px-5 py-3 text-slate-900 text-xs">{order.amount}</td>
                            <td className="px-4 sm:px-5 py-3">
                              <span className={`text-[10px] px-2 py-0.5 rounded-full ${statusStyle[order.status]}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-4 sm:px-5 py-3 text-slate-400 text-xs hidden sm:table-cell">{order.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
