import FarmerStep from "./FarmerStep";
import CooperativeStep from "./CooperativeStep";
import LabStep from "./LabStep";
import ProcessorStep from "./ProcessorStep";
import ManufacturerStep from "./ManufacturerStep";
import QRCodeVerification from "./QRCodeVerification";

// Import sample images
import farmerPhoto from "@assets/stock_images/indian_farmer_portra_f52ffbb6.jpg";
import batchPhoto from "@assets/stock_images/turmeric_harvest_col_57d7594a.jpg";
import labTechPhoto from "@assets/stock_images/laboratory_technicia_851353e1.jpg";
import cleaningPhoto from "@assets/stock_images/turmeric_cleaning_pr_d74ec154.jpg";
import dryingPhoto from "@assets/stock_images/spice_drying_process_5b6a3262.jpg";
import grindingPhoto from "@assets/stock_images/spice_grinding_proce_96020105.jpg";
import packagingPhoto from "@assets/stock_images/spice_packaging_proc_358cfa8a.jpg";

interface SupplyChainData {
  farmer: {
    name: string;
    farmerId: string;
    location: string;
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
  };
  cooperative: {
    name: string;
    batchId: string;
    collectionCenter: string;
    collectionDate: string;
    batchPhoto: string;
    metadata: string;
    status: "approved" | "pending" | "failed";
  };
  lab: {
    name: string;
    testDate: string;
    testResults: {
      moistureContent: string;
      curcuminLevel: string;
      heavyMetals: string;
    };
    reportFile: string;
    labTechnicianPhoto: string;
    status: "approved" | "pending" | "failed";
  };
  processor: {
    name: string;
    factoryLocation: string;
    processingSteps: Array<{
      date: string;
      step: string;
      photo: string;
    }>;
    qaReport: {
      status: string;
      url: string;
    };
    status: "approved" | "pending" | "failed";
  };
  manufacturer: {
    name: string;
    manufacturingDate: string;
    bestBeforeDate: string;
    grade: string;
    qaReports: string[];
    govCertificates: string[];
    status: "approved" | "pending" | "failed";
  };
  blockchain: {
    transactionHash: string;
    explorerUrl: string;
    qrCodeData: string;
  };
}

interface SupplyChainTimelineProps {
  data: SupplyChainData;
}

export default function SupplyChainTimeline({ data }: SupplyChainTimelineProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold text-foreground">Supply Chain Journey</h1>
        <p className="text-muted-foreground">
          Track your product from farm to table with complete transparency
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-0">
        <FarmerStep
          stepNumber={1}
          farmerName={data.farmer.name}
          farmerId={data.farmer.farmerId}
          farmLocation={data.farmer.location}
          gpsCoordinates={data.farmer.gpsCoordinates}
          cropType={data.farmer.cropType}
          harvestDate={data.farmer.harvestDate}
          farmerPhoto={data.farmer.farmerPhoto}
          certificates={data.farmer.certificates}
          notes={data.farmer.notes}
          status={data.farmer.status}
        />

        <CooperativeStep
          stepNumber={2}
          cooperativeName={data.cooperative.name}
          batchId={data.cooperative.batchId}
          collectionCenter={data.cooperative.collectionCenter}
          collectionDate={data.cooperative.collectionDate}
          batchPhoto={data.cooperative.batchPhoto}
          metadata={data.cooperative.metadata}
          status={data.cooperative.status}
        />

        <LabStep
          stepNumber={3}
          labName={data.lab.name}
          testDate={data.lab.testDate}
          testResults={data.lab.testResults}
          reportFile={data.lab.reportFile}
          labTechnicianPhoto={data.lab.labTechnicianPhoto}
          status={data.lab.status}
        />

        <ProcessorStep
          stepNumber={4}
          processorName={data.processor.name}
          factoryLocation={data.processor.factoryLocation}
          processingSteps={data.processor.processingSteps}
          qaReport={data.processor.qaReport}
          status={data.processor.status}
        />

        <ManufacturerStep
          stepNumber={5}
          manufacturerName={data.manufacturer.name}
          manufacturingDate={data.manufacturer.manufacturingDate}
          bestBeforeDate={data.manufacturer.bestBeforeDate}
          grade={data.manufacturer.grade}
          qaReports={data.manufacturer.qaReports}
          govCertificates={data.manufacturer.govCertificates}
          status={data.manufacturer.status}
          isLast={true}
        />
      </div>

      {/* Blockchain Verification */}
      <div className="mt-8">
        <QRCodeVerification
          transactionHash={data.blockchain.transactionHash}
          explorerUrl={data.blockchain.explorerUrl}
          qrCodeData={data.blockchain.qrCodeData}
        />
      </div>
    </div>
  );
}