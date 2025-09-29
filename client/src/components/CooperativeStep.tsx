import TimelineStep from "./TimelineStep";
import { Building2, Calendar, Package, ChevronDown, ChevronUp, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CooperativeStepProps {
  stepNumber: number;
  cooperativeName: string;
  batchId: string;
  collectionCenter: string;
  collectionDate: string;
  batchPhoto: string;
  metadata: string;
  status: "approved" | "pending" | "failed";
  isLast?: boolean;
}

export default function CooperativeStep({
  stepNumber,
  cooperativeName,
  batchId,
  collectionCenter,
  collectionDate,
  batchPhoto,
  metadata,
  status,
  isLast = false,
}: CooperativeStepProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <TimelineStep
      stepNumber={stepNumber}
      title="Cooperative"
      subtitle="Collection & Batch Creation"
      status={status}
      isLast={isLast}
      icon={<Building2 className="w-5 h-5" />}
    >
      <div className="space-y-4">
        {/* Cooperative Info */}
        <div className="flex items-start gap-2">
          <Building2 className="w-4 h-4 text-primary mt-0.5" />
          <div>
            <h5 className="text-sm font-medium text-foreground">Cooperative</h5>
            <p className="text-sm text-foreground">{cooperativeName}</p>
            <p className="text-sm text-muted-foreground">{collectionCenter}</p>
          </div>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <Package className="w-4 h-4 text-primary mt-0.5" />
            <div>
              <h5 className="text-sm font-medium text-foreground">Batch ID</h5>
              <p className="text-sm font-mono font-semibold text-primary">{batchId}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-primary mt-0.5" />
            <div>
              <h5 className="text-sm font-medium text-foreground">Collection Date</h5>
              <p className="text-sm text-foreground">{collectionDate}</p>
            </div>
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full"
          data-testid="button-explore-cooperative"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              Show Less Details
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              Explore Cooperative Stage
            </>
          )}
        </Button>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="space-y-4 border-t pt-4">
            {/* Batch Photo */}
            <div className="flex items-start gap-2">
              <Camera className="w-4 h-4 text-primary mt-0.5" />
              <div className="flex-1">
                <h5 className="text-sm font-medium text-foreground">Batch Collection Photo</h5>
                <div className="mt-2 w-full max-w-xs h-32 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  {batchPhoto ? (
                    <img 
                      src={batchPhoto} 
                      alt="Batch collection"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <Camera className="w-8 h-8 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Metadata */}
            <div className="flex items-start gap-2">
              <Package className="w-4 h-4 text-primary mt-0.5" />
              <div>
                <h5 className="text-sm font-medium text-foreground">Collection Details</h5>
                <p className="text-sm text-foreground">{metadata}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </TimelineStep>
  );
}