import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, XCircle } from "lucide-react";

interface StatusBadgeProps {
  status: "approved" | "pending" | "failed";
  className?: string;
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status) {
      case "approved":
        return {
          icon: CheckCircle,
          text: "Approved",
          className: "bg-chart-1 text-white border-chart-1",
        };
      case "pending":
        return {
          icon: Clock,
          text: "Pending",
          className: "bg-chart-2 text-white border-chart-2",
        };
      case "failed":
        return {
          icon: XCircle,
          text: "Failed",
          className: "bg-destructive text-destructive-foreground border-destructive",
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <Badge
      className={`${config.className} ${className} flex items-center gap-1 px-3 py-1`}
      data-testid={`badge-status-${status}`}
    >
      <Icon className="w-3 h-3" />
      {config.text}
    </Badge>
  );
}