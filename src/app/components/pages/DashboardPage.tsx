import { useState } from "react";
import { Link } from "react-router";
import {
  LayoutDashboard, ShoppingCart, Package, BarChart2, Settings, Bell,
  Search, ChevronDown, TrendingUp, TrendingDown, ArrowUpRight,
  Filter, Download, Plus, Zap, Menu, X, Users, RefreshCw,
  ChevronRight, Star, Truck, AlertCircle, CheckCircle2, Clock, XCircle,
  ExternalLink, Globe, Link2, Save
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from "recharts";
import { motion, AnimatePresence } from "motion/react";
import { useAppContext } from "../../context/AppContext";

const salesData = [
  { month: "Aug", revenue: 18400, orders: 142, returns: 8 },
  { month: "Sep", revenue: 22100, orders: 168, returns: 11 },
  { month: "Oct", revenue: 19800, orders: 155, returns: 9 },
  { month: "Nov", revenue: 26500, orders: 198, returns: 14 },
  { month: "Dec", revenue: 31200, orders: 238, returns: 12 },
  { month: "Jan", revenue: 28700, orders: 210, returns: 10 },
  { month: "Feb", revenue: 35200, orders: 258, returns: 15 },
  { month: "Mar", revenue: 38900, orders: 284, returns: 13 },
];

const weeklyData = [
  { day: "Mon", sales: 4200 },
  { day: "Tue", sales: 5800 },
  { day: "Wed", sales: 4900 },
  { day: "Thu", sales: 7200 },
  { day: "Fri", sales: 8100 },
  { day: "Sat", sales: 6700 },
  { day: "Sun", sales: 5200 },
];

const categoryData = [
  { name: "Electronics", value: 35, color: "#3B82F6" },
  { name: "Clothing", value: 28, color: "#8B5CF6" },
  { name: "Home & Garden", value: 20, color: "#06B6D4" },
  { name: "Other", value: 17, color: "#E2E8F0" },
];

const demoOrders = [
  { id: "#ORD-1028", customer: "Sarah Miller", product: "Wireless Headphones", amount: "$149.99", status: "Delivered", date: "Mar 22, 2026", avatar: "SM" },
  { id: "#ORD-1027", customer: "James Chen", product: "Smart Watch Band", amount: "$34.50", status: "Shipped", date: "Mar 22, 2026", avatar: "JC" },
  { id: "#ORD-1026", customer: "Olivia Torres", product: "Linen Blouse Set", amount: "$89.00", status: "Processing", date: "Mar 21, 2026", avatar: "OT" },
  { id: "#ORD-1025", customer: "Daniel Park", product: "Ceramic Plant Pot", amount: "$42.00", status: "Pending", date: "Mar 21, 2026", avatar: "DP" },
  { id: "#ORD-1024", customer: "Emma Wilson", product: "Skincare Bundle", amount: "$124.00", status: "Delivered", date: "Mar 20, 2026", avatar: "EW" },
  { id: "#ORD-1023", customer: "Ryan Lee", product: "Leather Wallet", amount: "$65.00", status: "Cancelled", date: "Mar 20, 2026", avatar: "RL" },
  { id: "#ORD-1022", customer: "Mia Johnson", product: "Yoga Mat Premium", amount: "$78.00", status: "Shipped", date: "Mar 19, 2026", avatar: "MJ" },
  { id: "#ORD-1021", customer: "Alex Brown", product: "Coffee Grinder Pro", amount: "$210.00", status: "Delivered", date: "Mar 19, 2026", avatar: "AB" },
];

const demoNotifications = [
  { id: 'd1', type: "warning", text: "Smart Watch Band — low stock (8 left)", time: "1 hour ago", icon: AlertCircle, color: "text-amber-600 bg-amber-50", read: false },
  { id: 'd2', type: "success", text: "Payment confirmed for order #ORD-1026", time: "3 hours ago", icon: CheckCircle2, color: "text-green-600 bg-green-50", read: false },
  { id: 'd3', type: "shipping", text: "Order #ORD-1025 shipped via DHL", time: "5 hours ago", icon: Truck, color: "text-indigo-600 bg-indigo-50", read: true },
  { id: 'd4', type: "review", text: "New 5-star review from Sarah M.", time: "1 day ago", icon: Star, color: "text-yellow-600 bg-yellow-50", read: true },
];

const statusConfig: Record<string, { style: string; icon: any }> = {
  New: { style: "bg-blue-50 text-blue-600 border border-blue-100 animate-pulse", icon: Zap },
  Delivered: { style: "bg-green-50 text-green-600 border border-green-100", icon: CheckCircle2 },
  Shipped: { style: "bg-blue-50 text-blue-600 border border-blue-100", icon: Truck },
  Processing: { style: "bg-indigo-50 text-indigo-600 border border-indigo-100", icon: RefreshCw },
  Pending: { style: "bg-amber-50 text-amber-600 border border-amber-100", icon: Clock },
  Cancelled: { style: "bg-red-50 text-red-600 border border-red-100", icon: XCircle },
};

const iconMap: Record<string, any> = {
  order: ShoppingCart,
  warning: AlertCircle,
  success: CheckCircle2,
  shipping: Truck,
  review: Star,
};

const colorMap: Record<string, string> = {
  order: "text-blue-600 bg-blue-50",
  warning: "text-amber-600 bg-amber-50",
  success: "text-green-600 bg-green-50",
  shipping: "text-indigo-600 bg-indigo-50",
  review: "text-yellow-600 bg-yellow-50",
};

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: ShoppingCart, label: "Orders" },
  { icon: Package, label: "Products" },
  { icon: BarChart2, label: "Analytics" },
  { icon: Users, label: "Customers" },
  { icon: Truck, label: "Shipping" },
  { icon: Settings, label: "Settings" },
];

const avatarColors = [
  "from-blue-400 to-blue-600",
  "from-purple-400 to-purple-600",
  "from-green-400 to-green-600",
  "from-rose-400 to-rose-600",
  "from-amber-400 to-amber-600",
  "from-cyan-400 to-cyan-600",
  "from-indigo-400 to-indigo-600",
  "from-pink-400 to-pink-600",
];

export function DashboardPage() {
  const { orders: contextOrders, products, notifications, markNotificationAsRead, storeName, setStoreName } = useAppContext();
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [tempStoreName, setTempStoreName] = useState(storeName);

  const allOrders = [...contextOrders, ...demoOrders];
  const filteredOrders = activeTab === "all"
    ? allOrders
    : allOrders.filter(o => o.status.toLowerCase() === activeTab);

  const normalizedNotifications = [
    ...notifications.map(n => ({ ...n, icon: iconMap[n.type] || Bell, color: colorMap[n.type] || "text-slate-600 bg-slate-50" })),
    ...demoNotifications
  ];

  const unreadCount = normalizedNotifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans italic-none">
      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-slate-900 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        {/* Logo */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold"><span className="text-blue-400">Sale</span>Flow</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-2 border-b border-slate-800">
          <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5">
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-slate-300 text-xs outline-none placeholder-slate-500 flex-1 w-0"
            />
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-2 px-3 space-y-1 overflow-y-auto">
          <p className="text-slate-500 text-[10px] px-3 mb-2 uppercase tracking-wider font-bold">Main Menu</p>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { setActiveNav(item.label); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer group ${activeNav === item.label
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              <span className="text-xs font-semibold">{item.label}</span>
              {item.label === "Orders" && (
                <span className="ml-auto bg-blue-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">{allOrders.length}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Upgrade Banner */}
        <div className="px-4 pb-4">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-3.5 h-3.5 text-yellow-300 fill-current" />
              <span className="text-white text-xs font-bold">Pro Plan</span>
            </div>
            <p className="text-blue-100 text-[10px] mb-3 leading-relaxed">Upgrade to Business for unlimited automation</p>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white text-[10px] py-1.5 rounded-lg transition-colors cursor-pointer font-bold">
              Upgrade Plan →
            </button>
          </div>
        </div>

        {/* User */}
        <div className="px-4 pb-4 border-t border-slate-800 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">AJ</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-white text-xs truncate font-bold">Alex Johnson</div>
              <div className="text-slate-500 text-[10px]">alex@mystore.com</div>
            </div>
            <button className="text-slate-500 hover:text-white transition-colors cursor-pointer">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-100 px-4 sm:px-6 py-2 flex items-center justify-between sticky top-0 z-20 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-slate-900 text-sm font-bold tracking-tight">
                {activeNav}
              </h1>
              <p className="text-slate-400 text-[10px] hidden sm:block font-medium">Monday, March 23, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 w-48">
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-400 text-xs">Quick search...</span>
            </div>
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="relative w-9 h-9 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer shadow-sm"
              >
                <Bell className="w-4 h-4 text-slate-500" />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-bounce shadow-md">
                    <span className="text-white text-[8px] font-bold">{unreadCount}</span>
                  </div>
                )}
              </button>

              {/* Notification Dropdown */}
              <AnimatePresence>
                {notifOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setNotifOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 top-11 w-80 bg-white border border-slate-100 rounded-xl shadow-2xl z-50 overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
                        <h3 className="text-slate-900 text-[11px] font-bold uppercase tracking-widest">Notifications</h3>
                        <span className="bg-red-50 text-red-500 text-[9px] px-2 py-0.5 rounded-full font-bold">{unreadCount} new</span>
                      </div>
                      <div className="max-h-72 overflow-y-auto">
                        {normalizedNotifications.map((n) => (
                          <div
                            key={n.id}
                            onClick={() => typeof n.id === 'string' && n.id.startsWith('d') ? null : markNotificationAsRead(n.id)}
                            className={`flex items-start gap-3 px-4 py-3 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer ${!n.read ? "bg-blue-50/30" : ""}`}
                          >
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${n.color}`}>
                              <n.icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-slate-700 text-[11px] font-medium leading-relaxed">{n.text}</p>
                              <p className="text-slate-400 text-[9px] mt-0.5 font-bold uppercase">{n.time}</p>
                            </div>
                            {!n.read && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0 shadow-sm" />}
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-2.5 text-center border-t border-slate-50">
                        <button className="text-blue-600 text-[10px] font-bold uppercase tracking-widest hover:text-blue-700 transition-colors cursor-pointer">View all notifications</button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-slate-100 transition-colors shadow-sm">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white text-[9px] font-bold">AJ</span>
              </div>
              <span className="text-slate-700 text-xs hidden sm:block font-bold">Alex J.</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {activeNav === "Dashboard" && (
            <div className="space-y-6">
              {/* Welcome Banner */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl shadow-blue-100"
              >
                <div>
                  <h2 className="text-white text-xl font-bold mb-1 tracking-tight">Good morning, Alex! 👋</h2>
                  <p className="text-blue-50 text-xs font-medium">
                    You have <span className="text-white font-bold">{allOrders.length} new orders</span> and{" "}
                    <span className="text-white font-bold">3 low-stock alerts</span> today.
                  </p>
                </div>
                <div className="flex gap-2.5">
                  <button className="bg-white/20 hover:bg-white/30 text-white text-xs px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 font-bold backdrop-blur-sm">
                    <Plus className="w-3.5 h-3.5" />
                    Add Product
                  </button>
                  <button onClick={() => setActiveNav("Orders")} className="bg-white text-blue-600 hover:bg-blue-50 text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer font-bold shadow-lg shadow-blue-900/10">
                    View Orders
                  </button>
                </div>
              </motion.div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { label: "Total Revenue", value: "$38,900", change: "+18.5%", up: true, sub: "vs Feb 2026", icon: TrendingUp, color: "text-blue-600 bg-blue-50" },
                  { label: "Total Orders", value: (1284 + contextOrders.length).toLocaleString(), change: "+12.3%", up: true, sub: "vs Feb 2026", icon: ShoppingCart, color: "text-purple-600 bg-purple-50" },
                  { label: "Active Customers", value: "892", change: "+7.8%", up: true, sub: "vs Feb 2026", icon: Users, color: "text-green-600 bg-green-50" },
                  { label: "Return Rate", value: "2.4%", change: "-0.8%", up: false, sub: "vs Feb 2026", icon: RefreshCw, color: "text-rose-600 bg-rose-50" },
                ].map((kpi, i) => (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3.5">
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{kpi.label}</p>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${kpi.color} shadow-sm`}>
                        <kpi.icon className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-slate-900 text-2xl font-bold mb-2 tracking-tight">{kpi.value}</p>
                    <div className="flex items-center gap-1.5">
                      <div className={`flex items-center gap-0.5 ${kpi.up ? "text-green-500" : "text-rose-500"} bg-slate-50 px-1.5 py-0.5 rounded-lg text-[10px] font-bold shadow-sm`}>
                        {kpi.up ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                        {kpi.change}
                      </div>
                      <span className="text-slate-400 text-[10px] font-medium hidden sm:inline">{kpi.sub}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-slate-900 text-sm font-bold uppercase tracking-tight">Revenue Overview</h3>
                      <p className="text-slate-400 text-[10px] font-medium mt-0.5 tracking-tight">Aug 2025 — Mar 2026</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-200" />
                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-tight">Revenue</span>
                      </div>
                      <button className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-200 rounded-xl px-3 py-1.5 hover:bg-slate-50 cursor-pointer shadow-sm">
                        <Filter className="w-3 h-3" /> Filter
                      </button>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={220}>
                    <AreaChart data={salesData}>
                      <defs>
                        <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15} />
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                      <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#94A3B8", fontWeight: 700 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 10, fill: "#94A3B8", fontWeight: 700 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                      <Tooltip
                        contentStyle={{ fontSize: 11, borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", fontWeight: 700 }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} fill="url(#grad1)" dot={{ r: 4, fill: "#3B82F6", strokeWidth: 0 }} activeDot={{ r: 6, strokeWidth: 0 }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <h3 className="text-slate-900 text-sm font-bold uppercase tracking-tight mb-1">Sales by Category</h3>
                  <p className="text-slate-400 text-[10px] font-medium mb-5 tracking-tight flex items-center justify-between">
                    <span>March 2026</span>
                    <span className="text-blue-500 font-bold uppercase tracking-widest text-[9px]">Live Data</span>
                  </p>
                  <ResponsiveContainer width="100%" height={160}>
                    <PieChart>
                      <Pie data={categoryData} cx="50%" cy="50%" innerRadius={42} outerRadius={68} dataKey="value" strokeWidth={0} paddingAngle={4}>
                        {categoryData.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ fontSize: 11, borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", fontWeight: 700 }}
                        formatter={(value: number) => [`${value}%`, "Share"]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2.5 mt-5">
                    {categoryData.map((item) => (
                      <div key={item.name} className="flex items-center justify-between p-1.5 hover:bg-slate-50 transition-colors rounded-xl">
                        <div className="flex items-center gap-2.5">
                          <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ background: item.color }} />
                          <span className="text-slate-600 text-[11px] font-semibold">{item.name}</span>
                        </div>
                        <span className="text-slate-900 text-[11px] font-extrabold">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Weekly Bar Chart + Recent Activity */}
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <h3 className="text-slate-900 text-sm font-bold uppercase tracking-tight mb-1">This Week's Sales</h3>
                  <p className="text-slate-400 text-[10px] font-medium mb-6">Mar 17–23, 2026</p>
                  <ResponsiveContainer width="100%" height={180}>
                    <BarChart data={weeklyData} barSize={22}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                      <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#94A3B8", fontWeight: 700 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 10, fill: "#94A3B8", fontWeight: 700 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                      <Tooltip
                        contentStyle={{ fontSize: 11, borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", fontWeight: 700 }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, "Sales"]}
                      />
                      <Bar dataKey="sales" fill="#8B5CF6" radius={[6, 6, 0, 0]} className="shadow-lg shadow-purple-100" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="lg:col-span-2 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-slate-900 text-sm font-bold uppercase tracking-tight">Recent Activity</h3>
                    <button className="text-blue-600 text-[10px] font-bold uppercase tracking-widest hover:text-blue-700 transition-colors cursor-pointer flex items-center gap-1.5">
                      View all <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="space-y-3.5">
                    {normalizedNotifications.slice(0, 5).map((n) => (
                      <div key={n.id} className={`flex items-start gap-4 p-4 rounded-2xl transition-all ${!n.read ? "bg-blue-50/40 border border-blue-50 shadow-sm" : "bg-slate-50 border border-transparent"}`}>
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${n.color} shadow-sm`}>
                          <n.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0 pr-4">
                          <p className="text-slate-700 text-xs font-bold leading-relaxed">{n.text}</p>
                          <p className="text-slate-400 text-[9px] mt-1.5 font-extrabold uppercase tracking-widest">{n.time}</p>
                        </div>
                        {!n.read && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0 animate-pulse-slow shadow-sm" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Orders Table */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="px-4 py-4 border-b border-slate-50 bg-slate-50/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-slate-900 text-sm font-bold uppercase tracking-tight">Recent Orders</h3>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-tight mt-0.5">Showing {filteredOrders.length} records</p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3.5 py-2 group focus-within:border-blue-500 transition-all">
                        <Search className="w-3.5 h-3.5 text-slate-400 group-focus-within:text-blue-500" />
                        <input placeholder="Search orders..." className="bg-transparent text-xs text-slate-700 outline-none w-32 placeholder:text-slate-400 font-medium" />
                      </div>
                      <button className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-200 rounded-xl px-4 py-2 bg-white hover:bg-slate-50 cursor-pointer shadow-sm transition-all">
                        <Filter className="w-3.5 h-3.5" /> Filter
                      </button>
                      <button className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-600 border border-blue-100 rounded-xl px-4 py-2 bg-blue-50 hover:bg-blue-100 cursor-pointer shadow-sm transition-all">
                        <Download className="w-3.5 h-3.5" /> Export
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-1.5 mt-6 flex-wrap">
                    {["all", "new", "delivered", "shipped", "processing", "pending"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-[9px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${activeTab === tab
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-100"
                          : "text-slate-400 hover:bg-white hover:text-slate-700"
                          }`}
                      >
                        {tab === "all" ? "All Orders" : tab}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50/50">
                        <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Order ID</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Customer</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 hidden md:table-cell">Product</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Amount</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 hidden sm:table-cell">Date</th>
                        <th className="text-right px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredOrders.map((order, i) => {
                        const config = statusConfig[order.status];
                        const StatusIcon = config.icon;
                        return (
                          <tr key={order.id} className="border-t border-slate-50 hover:bg-slate-50/50 transition-colors cursor-default">
                            <td className="px-5 py-3.5 text-blue-600 text-xs">{order.id}</td>
                            <td className="px-5 py-3.5">
                              <div className="flex items-center gap-2">
                                <div className={`w-6 h-6 bg-gradient-to-br ${avatarColors[i % avatarColors.length]} rounded-full flex items-center justify-center shrink-0`}>
                                  <span className="text-white text-[8px]">{order.avatar}</span>
                                </div>
                                <span className="text-slate-700 text-xs">{order.customer}</span>
                              </div>
                            </td>
                            <td className="px-5 py-3.5 text-slate-500 text-xs hidden md:table-cell">{order.product}</td>
                            <td className="px-5 py-3.5 text-slate-900 text-xs">{order.amount}</td>
                            <td className="px-5 py-3.5">
                              <span className={`flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full w-fit ${config.style}`}>
                                <StatusIcon className="w-2.5 h-2.5" />
                                {order.status}
                              </span>
                            </td>
                            <td className="px-5 py-3.5 text-slate-400 text-xs hidden sm:table-cell">{order.date}</td>
                            <td className="px-5 py-3.5">
                              <button className="text-[10px] text-slate-500 hover:text-blue-600 border border-slate-200 hover:border-blue-200 px-2.5 py-1 rounded-lg transition-colors cursor-pointer">
                                View
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Products Table (Simplified summary version for dashboard) */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="px-4 py-4 border-b border-slate-50 flex items-center justify-between">
                  <div>
                    <h3 className="text-slate-900 text-sm">Top Products</h3>
                    <p className="text-slate-400 text-[10px]">By sales volume this month</p>
                  </div>
                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-blue-600 text-white px-4 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                    <Plus className="w-3.5 h-3.5" /> Add Product
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50/50">
                        <th className="text-left px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Product Name</th>
                        <th className="text-left px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 hidden sm:table-cell">Identity</th>
                        <th className="text-left px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Stock</th>
                        <th className="text-left px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Price</th>
                        <th className="text-left px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 hidden sm:table-cell">Sales</th>
                        <th className="text-left px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.sku} className="border-t border-slate-50 hover:bg-slate-50/50 transition-colors cursor-default">
                          <td className="px-5 py-3.5 text-slate-900 text-xs">{product.name}</td>
                          <td className="px-5 py-3.5 text-slate-400 text-[10px] hidden sm:table-cell">{product.sku}</td>
                          <td className="px-5 py-3.5 text-slate-700 text-xs">{product.stock}</td>
                          <td className="px-5 py-3.5 text-slate-900 text-xs">{product.price}</td>
                          <td className="px-5 py-3.5 hidden sm:table-cell">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-slate-100 rounded-full h-1.5 w-16">
                                <div
                                  className="bg-blue-500 h-1.5 rounded-full"
                                  style={{ width: `${(product.sales / 300) * 100}%` }}
                                />
                              </div>
                              <span className="text-slate-500 text-[10px] w-8">{product.sales}</span>
                            </div>
                          </td>
                          <td className="px-5 py-3.5">
                            <span className={`text-[10px] px-2 py-0.5 rounded-full ${product.status === "Active" ? "bg-green-50 text-green-600 border border-green-100" :
                              product.status === "Low Stock" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                                "bg-red-50 text-red-600 border border-red-100"
                              }`}>
                              {product.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeNav === "Settings" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-blue-50/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Settings className="w-32 h-32 text-blue-600" />
                </div>

                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-extrabold text-xl tracking-tight">System Configuration</h3>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-0.5">Control Center • {storeName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 border border-green-100 px-4 py-1.5 rounded-xl">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    <span className="text-green-600 text-[10px] font-extrabold uppercase tracking-widest">Platform Sync Active</span>
                  </div>
                </div>

                <div className="grid gap-8 max-w-3xl relative z-10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-500" /> Landing Page Identity
                      </label>
                      <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-tighter">Public Storefront</span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl transition-all group hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-8 focus-within:ring-blue-100/50 shadow-inner">
                        <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          <Link2 className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[9px] text-slate-400 font-extrabold uppercase mb-0.5 tracking-tighter">Synchronization Hook / Production URL</p>
                          <span className="text-slate-800 text-base font-extrabold tracking-tight">/saasretail/store</span>
                        </div>
                        <Link to="/store" target="_blank" className="flex items-center gap-2.5 text-white font-extrabold text-[11px] uppercase tracking-widest bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95 group">
                          Explore Live <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                      <div className="flex items-center gap-3 pl-2">
                        <div className="w-1 h-1 bg-slate-300 rounded-full" />
                        <p className="text-[10px] text-slate-400 font-bold italic tracking-tight">
                          This endpoint allows 24/7 automated order ingestion directly into your SaleFlow system.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 pt-8 border-t border-slate-100">
                    <div className="space-y-4">
                      <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                        <Star className="w-4 h-4 text-purple-500" /> Brand Architecture
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          value={tempStoreName}
                          onChange={(e) => setTempStoreName(e.target.value)}
                          className="w-full bg-slate-50 border-2 border-transparent rounded-xl px-5 py-3 text-base font-black tracking-tight text-slate-800 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-8 focus:ring-blue-100 transition-all shadow-inner"
                          placeholder="Platform Alias"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                          <Save className="w-5 h-5 text-blue-500" />
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setStoreName(tempStoreName)}
                      className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-black hover:shadow-2xl transition-all active:scale-95 group"
                    >
                      <Save className="w-4 h-4 group-hover:rotate-12 transition-transform" /> Commit Changes
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 rounded-2xl p-6 flex items-start gap-5 shadow-2xl shadow-blue-200 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-white/30 group-hover:scale-110 transition-transform duration-500">
                      <Zap className="w-6 h-6 text-white animate-pulse" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-white font-black text-sm mb-2 uppercase tracking-[0.1em]">SaleFlow Automation Protocol Active</h4>
                      <p className="text-blue-50/90 text-xs leading-relaxed font-bold tracking-tight">
                        Your landing page is synchronized 24/7. Customers can independently:
                        <br /><span className="text-cyan-200 mt-2 block underline underline-offset-4 decoration-2">Select Goods → Delivery Details → Instant Checkout</span>
                        Orders are automatically registered as <span className="bg-white/20 px-1.5 py-0.5 rounded text-white italic">“New”</span> with precise timestamps, ensuring zero manual intervention and complete data integrity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeNav !== "Dashboard" && activeNav !== "Settings" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center min-h-[500px] bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-100 px-10"
            >
              <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center mb-8 shadow-inner group transition-all duration-500 hover:rotate-12">
                <BarChart2 className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-slate-900 text-xl font-black uppercase tracking-widest mb-4">{activeNav} Infrastructure</h3>
              <p className="text-slate-400 text-xs text-center max-w-sm leading-relaxed font-bold uppercase tracking-tight px-6 opacity-60">
                This environment segment is strictly reserved for the fully deployed production instance. Visual metrics and core logic are accessible in the primary Dashboard.
              </p>
              <button
                onClick={() => setActiveNav("Dashboard")}
                className="mt-10 bg-slate-900 hover:bg-black text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-xl hover:shadow-slate-200 transition-all active:scale-95"
              >
                Return to Bridge
              </button>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
