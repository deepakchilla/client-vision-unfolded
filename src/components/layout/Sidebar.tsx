import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Package,
  Ship,
  CreditCard,
  Mail,
  ScrollText,
  RefreshCw,
  BarChart3,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const menuItems = [
  {
    title: "Export Management",
    icon: FileText,
    items: [
      { title: "Export Invoice", href: "/export-invoice", badge: "New" },
      { title: "Export Packing List", href: "/packing-list" },
    ],
  },
  {
    title: "Import Services",
    icon: Package,
    items: [
      { title: "Shipping Bill Import", href: "/shipping-bill" },
      { title: "BRC Details Import", href: "/brc-import" },
      { title: "IGST Scroll Data", href: "/igst-scroll" },
      { title: "Duty Drawback", href: "/duty-drawback" },
    ],
  },
  {
    title: "Banking Services",
    icon: CreditCard,
    items: [
      { title: "Letter to Bank", href: "/bank-letter" },
      { title: "Mail to Bank", href: "/mail-bank" },
    ],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    title: "Help & Support",
    icon: HelpCircle,
    href: "/support",
  },
];

export function Sidebar({ className, isOpen = true, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Export Management"]);

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-sidebar-border">
          <h2 className="text-lg font-semibold text-sidebar-foreground">Navigation</h2>
          <p className="text-sm text-sidebar-foreground/70 mt-1">Manage your export operations</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.items ? (
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => toggleExpanded(item.title)}
                    className="w-full justify-between text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    {expandedItems.includes(item.title) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                  
                  {expandedItems.includes(item.title) && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.items.map((subItem) => (
                        <Button
                          key={subItem.title}
                          variant="ghost"
                          className="w-full justify-between text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground pl-8"
                        >
                          <span className="text-sm">{subItem.title}</span>
                          {subItem.badge && (
                            <Badge variant="secondary" className="ml-2 text-xs">
                              {subItem.badge}
                            </Badge>
                          )}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  <span className="font-medium">{item.title}</span>
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-sidebar-border">
          <div className="bg-primary rounded-sm p-4 text-primary-foreground">
            <h3 className="font-semibold text-sm mb-1">Pro Features</h3>
            <p className="text-xs opacity-90 mb-3">
              Unlock advanced export management tools
            </p>
            <Button size="sm" variant="secondary" className="w-full">
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}