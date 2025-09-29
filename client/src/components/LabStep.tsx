import TimelineStep from "./TimelineStep";
import { FlaskConical, FileText, Award, ChevronDown, ChevronUp, Camera, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface LabStepProps {
  stepNumber: number;
  labName: string;
  testDate: string;
  testResults: {
    moistureContent: string;
    curcuminLevel: string;
    heavyMetals: string;
  };
  reportFile: string;
  labTechnicianPhoto: string;
  status: "approved" | "pending" | "failed";
  isLast?: boolean;
}

export default function LabStep({
  stepNumber,
  labName,
  testDate,
  testResults,
  reportFile,
  labTechnicianPhoto,
  status,
  isLast = false,
}: LabStepProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewReport = () => {
    console.log('Opening test report:', reportFile);
    // TODO: remove mock functionality - open actual PDF report
  };

  return (
    <TimelineStep
      stepNumber={stepNumber}
      title="Lab"
      subtitle="Test Results & Certification"
      status={status}
      isLast={isLast}
      icon={<FlaskConical className="w-5 h-5" />}
    >
      <div className="space-y-4">
        {/* Lab Info */}
        <div className="flex items-start gap-2">
          <FlaskConical className="w-4 h-4 text-primary mt-0.5" />
          <div>
            <h5 className="text-sm font-medium text-foreground">Testing Laboratory</h5>
            <p className="text-sm text-foreground">{labName}</p>
          </div>
        </div>

        {/* Basic Info */}
        <div className="flex items-start gap-2">
          <Beaker className="w-4 h-4 text-primary mt-0.5" />
          <div>
            <h5 className="text-sm font-medium text-foreground">Test Date</h5>
            <p className="text-sm text-foreground">{testDate}</p>
          </div>
        </div>

        {/* Key Results Preview */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Moisture: {testResults.moistureContent}</Badge>
          <Badge variant="secondary">Curcumin: {testResults.curcuminLevel}</Badge>
        </div>

        {/* Expand/Collapse Button */}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full"
          data-testid="button-explore-lab"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              Show Less Details
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              Explore Lab Testing Stage
            </>
          )}
        </Button>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="space-y-4 border-t pt-4">
            {/* Detailed Test Results */}
            <div className="space-y-3">
              <h5 className="text-sm font-medium text-foreground">Detailed Test Results</h5>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-xs font-medium text-muted-foreground">Moisture Content</p>
                  <p className="text-lg font-semibold text-foreground">{testResults.moistureContent}</p>
                </div>
                
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-xs font-medium text-muted-foreground">Curcumin Level</p>
                  <p className="text-lg font-semibold text-foreground">{testResults.curcuminLevel}</p>
                </div>
                
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-xs font-medium text-muted-foreground">Heavy Metals</p>
                  <p className="text-sm font-semibold text-chart-1">{testResults.heavyMetals}</p>
                </div>
              </div>
            </div>

            {/* Lab Technician Photo */}
            <div className="flex items-start gap-2">
              <Camera className="w-4 h-4 text-primary mt-0.5" />
              <div className="flex-1">
                <h5 className="text-sm font-medium text-foreground">Lab Technician</h5>
                <div className="mt-2 w-24 h-24 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  {labTechnicianPhoto ? (
                    <img 
                      src={labTechnicianPhoto} 
                      alt="Lab technician"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <Camera className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Test Report */}
            <div className="flex items-start gap-2">
              <FileText className="w-4 h-4 text-primary mt-0.5" />
              <div className="flex-1">
                <h5 className="text-sm font-medium text-foreground">Test Report</h5>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-1"
                  onClick={handleViewReport}
                  data-testid="button-view-report"
                >
                  <FileText className="w-3 h-3 mr-1" />
                  View Full Report (PDF)
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </TimelineStep>
  );
}