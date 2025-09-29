import TimelineStep from "./TimelineStep";
import { Factory, Calendar, Package2, ChevronDown, ChevronUp, Camera, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProcessingStep {
  date: string;
  step: string;
  photo: string;
}

interface ProcessorStepProps {
  stepNumber: number;
  processorName: string;
  factoryLocation: string;
  processingSteps: ProcessingStep[];
  qaReport: {
    status: string;
    url: string;
  };
  status: "approved" | "pending" | "failed";
  isLast?: boolean;
}

export default function ProcessorStep({
  stepNumber,
  processorName,
  factoryLocation,
  processingSteps,
  qaReport,
  status,
  isLast = false,
}: ProcessorStepProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewQAReport = () => {
    console.log('Opening QA report:', qaReport.url);
    // TODO: remove mock functionality - open actual QA report
  };
  return (
    <TimelineStep
      stepNumber={stepNumber}
      title="Processor"
      subtitle="Processing & Packaging"
      status={status}
      isLast={isLast}
      icon={<Factory className="w-5 h-5" />}
    >
      <div className="space-y-4">
        {/* Processor Info */}
        <div className="flex items-start gap-2">
          <Factory className="w-4 h-4 text-primary mt-0.5" />
          <div>
            <h5 className="text-sm font-medium text-foreground">Processing Facility</h5>
            <p className="text-sm text-foreground">{processorName}</p>
            <p className="text-sm text-muted-foreground">{factoryLocation}</p>
          </div>
        </div>

        {/* QA Status */}
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-chart-1" />
          <Badge variant="secondary" className="bg-chart-1 text-white">
            {qaReport.status}
          </Badge>
        </div>

        {/* Processing Timeline Preview */}
        <div className="text-sm text-muted-foreground">
          {processingSteps.length} processing steps completed
        </div>

        {/* Expand/Collapse Button */}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full"
          data-testid="button-explore-processor"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              Show Less Details
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              Explore Processing Stage
            </>
          )}
        </Button>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="space-y-4 border-t pt-4">
            {/* Processing Timeline */}
            <div>
              <h5 className="text-sm font-medium text-foreground mb-3">Processing Timeline</h5>
              <div className="space-y-3">
                {processingSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium text-foreground">{step.step}</p>
                        <Badge variant="outline">{step.date}</Badge>
                      </div>
                      <div className="w-16 h-12 bg-muted rounded flex items-center justify-center overflow-hidden">
                        {step.photo ? (
                          <img 
                            src={step.photo} 
                            alt={step.step}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                        ) : null}
                        <Camera className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* QA Report */}
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
              <div className="flex-1">
                <h5 className="text-sm font-medium text-foreground">Quality Assurance</h5>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-1"
                  onClick={handleViewQAReport}
                  data-testid="button-view-qa-report"
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  View QA Report (PDF)
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </TimelineStep>
  );
}