import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FileText,
  Package,
  CreditCard,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Export Invoice #EXP-2024-001",
    description: "Invoice generated for ABC Trading Co.",
    timestamp: "2 hours ago",
    status: "completed",
    icon: FileText,
  },
  {
    id: 2,
    title: "BRC Details Imported",
    description: "Successfully imported from ICEGATE",
    timestamp: "4 hours ago",
    status: "completed",
    icon: Package,
  },
  {
    id: 3,
    title: "Bank Letter Generated",
    description: "Letter created for Export Documentation",
    timestamp: "6 hours ago",
    status: "pending",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "IGST Scroll Data Updated",
    description: "Latest refund status retrieved",
    timestamp: "1 day ago",
    status: "completed",
    icon: FileText,
  },
  {
    id: 5,
    title: "Shipping Bill Processing",
    description: "Import from custom department",
    timestamp: "2 days ago",
    status: "processing",
    icon: Package,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-success text-success-foreground";
    case "pending":
      return "bg-warning text-warning-foreground";
    case "processing":
      return "bg-primary text-primary-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return CheckCircle;
    case "pending":
      return Clock;
    case "processing":
      return AlertCircle;
    default:
      return Clock;
  }
};

export function RecentActivity() {
  return (
    <Card className="gradient-card border-border shadow-elegant">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Activity</CardTitle>
        <CardDescription>
          Latest operations and system updates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-4">
            {activities.map((activity) => {
              const StatusIcon = getStatusIcon(activity.status);
              return (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent/20 transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {activity.title}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {activity.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {activity.timestamp}
                        </p>
                      </div>
                      <Badge
                        className={`${getStatusColor(activity.status)} flex items-center gap-1 text-xs`}
                      >
                        <StatusIcon className="w-3 h-3" />
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}