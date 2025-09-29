import TimelineStep from "./TimelineStep";
import { MapPin, Calendar, Wheat, User, FileText, ChevronDown, ChevronUp, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FarmerStepProps {
  stepNumber: number;
  farmerName: string;
  farmerId: string;
  farmLocation: string;
  gpsCoordinates: string;
  cropType: string;
  harvestDate: string;
  farmerPhoto: string;
  certificates: Array<{
    name: string;
    type: string;
    url: string;
  }>;
  notes: string;
  status: "approved" | "pending" | "failed";
  isLast?: boolean;
}

export default function FarmerStep({
  stepNumber,
  farmerName,
  farmerId,
  farmLocation,
  gpsCoordinates,
  cropType,
  harvestDate,
  farmerPhoto,
  certificates,
  notes,
  status,
  isLast = false,
}: FarmerStepProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewCertificate = (certUrl: string) => {
    console.log('Opening certificate:', certUrl);
    // TODO: remove mock functionality - open actual certificate
  };
  return (
    <TimelineStep
      stepNumber={stepNumber}
      title="Farmer"
      subtitle="Harvest"
      status={status}
      isLast={isLast}
      icon={<Wheat className="w-5 h-5" />}
    >
      <div className="space-y-4">
        {/* Farmer Info */}
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center overflow-hidden">
            {farmerPhoto ? (
              <img 
                src={farmerPhoto} 
                alt={farmerName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <User className="w-6 h-6 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-foreground">{farmerName}</h4>
            <p className="text-sm text-muted-foreground">ID: {farmerId}</p>
            <p className="text-sm text-muted-foreground">{farmLocation}</p>
          </div>
        </div>

        <Separator />

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <Wheat className="w-4 h-4 text-primary mt-0.5" />
            <div>
              <h5 className="text-sm font-medium text-foreground">Crop</h5>
              <p className="text-sm text-foreground">{cropType}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-primary mt-0.5" />
            <div>
              <h5 className="text-sm font-medium text-foreground">Harvest Date</h5>
              <p className="text-sm text-foreground">{harvestDate}</p>
            </div>
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full"
          data-testid="button-explore-farmer"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              Show Less Details
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              Explore Farmer Stage
            </>
          )}
        </Button>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="space-y-4 border-t pt-4">
            {/* Location Details */}
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              <div>
                <h5 className="text-sm font-medium text-foreground">Farm Location</h5>
                <p className="text-sm text-foreground">{farmLocation}</p>
                <p className="text-xs text-muted-foreground">GPS: {gpsCoordinates}</p>
              </div>
            </div>

            {/* Certificates */}
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-primary mt-0.5" />
              <div className="flex-1">
                <h5 className="text-sm font-medium text-foreground">Certificates</h5>
                <div className="space-y-1 mt-1">
                  {certificates.map((cert, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewCertificate(cert.url)}
                      data-testid={`button-farmer-cert-${index}`}
                    >
                      <FileText className="w-3 h-3 mr-1" />
                      {cert.name} ({cert.type})
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="flex items-start gap-2">
              <FileText className="w-4 h-4 text-primary mt-0.5" />
              <div>
                <h5 className="text-sm font-medium text-foreground">Notes</h5>
                <p className="text-sm text-foreground">{notes}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </TimelineStep>
  );
}