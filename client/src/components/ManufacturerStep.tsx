import TimelineStep from "./TimelineStep";
import { Factory, Star, FileCheck, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ManufacturerStepProps {
  stepNumber: number;
  manufacturerName: string;
  manufacturingDate: string;
  bestBeforeDate: string;
  grade: string;
  qaReports: string[];
  govCertificates: string[];
  status: "approved" | "pending" | "failed";
  isLast?: boolean;
}

export default function ManufacturerStep({
  stepNumber,
  manufacturerName,
  manufacturingDate,
  bestBeforeDate,
  grade,
  qaReports,
  govCertificates,
  status,
  isLast = false,
}: ManufacturerStepProps) {
  const handleViewDocument = (docName: string) => {
    console.log('Opening document:', docName);
    // TODO: remove mock functionality - open actual document
  };

  return (
    <TimelineStep
      stepNumber={stepNumber}
      title="Manufacturer"
      subtitle="Final Production & Quality Assurance"
      status={status}
      isLast={isLast}
      icon={<Factory className="w-5 h-5" />}
    >
      <div className="space-y-4">
        {/* Manufacturer Info */}
        <div className="flex items-start gap-2">
          <Factory className="w-4 h-4 text-primary mt-0.5" />
          <div>
            <h5 className="text-sm font-medium text-foreground">Manufacturing Facility</h5>
            <p className="text-sm text-foreground">{manufacturerName}</p>
          </div>
        </div>

        {/* Manufacturing Details */}
        <div className="flex items-start gap-2">
          <Calendar className="w-4 h-4 text-primary mt-0.5" />
          <div>
            <h5 className="text-sm font-medium text-foreground">Production Details</h5>
            <p className="text-sm text-foreground">Manufacturing Date: {manufacturingDate}</p>
            <p className="text-sm text-foreground">Best Before: {bestBeforeDate}</p>
          </div>
        </div>

        {/* Grade */}
        <div className="flex items-start gap-2">
          <Star className="w-4 h-4 text-primary mt-0.5" />
          <div>
            <h5 className="text-sm font-medium text-foreground">Grade</h5>
            <Badge variant="secondary" className="mt-1">
              Grade {grade}
            </Badge>
          </div>
        </div>

        {/* QA Reports */}
        <div className="flex items-start gap-2">
          <FileCheck className="w-4 h-4 text-primary mt-0.5" />
          <div className="flex-1">
            <h5 className="text-sm font-medium text-foreground">QA Test Reports</h5>
            <div className="space-y-1 mt-1">
              {qaReports.map((report, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleViewDocument(report)}
                  data-testid={`button-qa-report-${index}`}
                >
                  <FileCheck className="w-3 h-3 mr-1" />
                  {report}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Government Certificates */}
        <div className="flex items-start gap-2">
          <FileCheck className="w-4 h-4 text-primary mt-0.5" />
          <div className="flex-1">
            <h5 className="text-sm font-medium text-foreground">Government Certificates</h5>
            <div className="space-y-1 mt-1">
              {govCertificates.map((cert, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleViewDocument(cert)}
                  data-testid={`button-gov-cert-${index}`}
                >
                  <FileCheck className="w-3 h-3 mr-1" />
                  {cert}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TimelineStep>
  );
}