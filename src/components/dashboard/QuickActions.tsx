import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Package,
  CreditCard,
  Upload,
  Download,
  Mail,
  Plus,
  ArrowRight,
} from "lucide-react";

const quickActions = [
  {
    title: "Create Export Invoice",
    description: "Generate new export invoice",
    icon: FileText,
    action: "create-invoice",
    color: "bg-blue-500",
  },
  {
    title: "Import Shipping Bill",
    description: "Upload from custom or email",
    icon: Upload,
    action: "import-shipping",
    color: "bg-green-500",
  },
  {
    title: "Generate Bank Letter",
    description: "Create letter for bank submission",
    icon: Mail,
    action: "bank-letter",
    color: "bg-purple-500",
  },
  {
    title: "Export Packing List",
    description: "Create detailed packing list",
    icon: Package,
    action: "packing-list",
    color: "bg-orange-500",
  },
];

export function QuickActions() {
  return (
    <Card className="gradient-card border-border shadow-elegant">
      <CardHeader>
        <CardTitle className="text-foreground">Quick Actions</CardTitle>
        <CardDescription>
          Frequently used operations for faster workflow
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quickActions.map((action) => (
          <Button
            key={action.action}
            variant="ghost"
            className="h-auto p-4 justify-start text-left hover:bg-accent/50 transition-all duration-200 group"
          >
            <div className="flex items-center gap-4 w-full">
              <div className={`w-10 h-10 rounded-sm ${action.color} flex items-center justify-center text-white`}>
                <action.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground group-hover:text-accent-foreground">
                  {action.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}