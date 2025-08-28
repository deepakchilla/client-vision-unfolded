import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import {
  FileText,
  Package,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onToggleSidebar={toggleSidebar} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="p-6 space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-hero rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  Export Concern Service Dashboard
                </h1>
                <p className="text-lg opacity-90 mb-6 max-w-2xl">
                  Comprehensive trade management solution for export operations, 
                  documentation, and compliance with advanced security features.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="text-sm font-medium">ICEGATE Integration</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="text-sm font-medium">Automated Processing</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="text-sm font-medium">Secure & Compliant</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Exports"
                value="2,847"
                change="+12.5% from last month"
                changeType="positive"
                icon={FileText}
              />
              <StatsCard
                title="Processing Time"
                value="2.4 hrs"
                change="-18% faster"
                changeType="positive"
                icon={Clock}
              />
              <StatsCard
                title="Compliance Rate"
                value="99.8%"
                change="Maintained"
                changeType="positive"
                icon={CheckCircle}
              />
              <StatsCard
                title="Monthly Volume"
                value="₹45.2M"
                change="+28.3% growth"
                changeType="positive"
                icon={TrendingUp}
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <QuickActions />
              <RecentActivity />
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-card rounded-lg border border-border p-6 shadow-elegant">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Automated Import Processing
                </h3>
                <p className="text-muted-foreground text-sm">
                  Seamlessly import shipping bills, BRC details, and IGST scroll data 
                  directly from ICEGATE with real-time synchronization.
                </p>
              </div>

              <div className="bg-gradient-card rounded-lg border border-border p-6 shadow-elegant">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Smart Documentation
                </h3>
                <p className="text-muted-foreground text-sm">
                  Generate professional export invoices, packing lists, and bank letters 
                  with automated compliance checking and formatting.
                </p>
              </div>

              <div className="bg-gradient-card rounded-lg border border-border p-6 shadow-elegant">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Real-time Tracking
                </h3>
                <p className="text-muted-foreground text-sm">
                  Monitor IGST refund status and duty drawback processes with 
                  automatic updates and error notifications.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Index;
