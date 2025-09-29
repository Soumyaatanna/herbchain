import { Card, CardContent } from "@/components/ui/card";
import StatusBadge from "./StatusBadge";

interface TimelineStepProps {
  stepNumber: number;
  title: string;
  subtitle?: string;
  status: "approved" | "pending" | "failed";
  isLast?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function TimelineStep({
  stepNumber,
  title,
  subtitle,
  status,
  isLast = false,
  icon,
  children,
}: TimelineStepProps) {
  return (
    <div className="relative flex gap-4" data-testid={`timeline-step-${stepNumber}`}>
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full text-sm font-medium shadow-sm">
          {stepNumber}
        </div>
        {!isLast && (
          <div className="w-0.5 h-8 bg-primary mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <Card className="shadow-sm hover-elevate">
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {icon && <div className="text-primary">{icon}</div>}
                <div>
                  <h3 className="text-lg font-medium text-foreground">{title}</h3>
                  {subtitle && (
                    <p className="text-sm text-muted-foreground">{subtitle}</p>
                  )}
                </div>
              </div>
              <StatusBadge status={status} />
            </div>

            {/* Content */}
            <div className="space-y-4">
              {children}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}