import SupplyChainTimeline from "@/components/SupplyChainTimeline";

// Import sample images
import farmerPhoto from "@assets/stock_images/indian_farmer_portra_f52ffbb6.jpg";
import batchPhoto from "@assets/stock_images/turmeric_harvest_col_57d7594a.jpg";
import labTechPhoto from "@assets/stock_images/laboratory_technicia_851353e1.jpg";
import cleaningPhoto from "@assets/stock_images/turmeric_cleaning_pr_d74ec154.jpg";
import dryingPhoto from "@assets/stock_images/spice_drying_process_5b6a3262.jpg";
import grindingPhoto from "@assets/stock_images/spice_grinding_proce_96020105.jpg";
import packagingPhoto from "@assets/stock_images/spice_packaging_proc_358cfa8a.jpg";

export default function Home() {
  // TODO: remove mock functionality - replace with real data from API
  const supplyChainData = {
    farmer: {
      name: "Ramesh Kumar",
      farmerId: "F12345",
      location: "Nashik, Maharashtra, India",
      gpsCoordinates: "19.9975° N, 73.7898° E",
      cropType: "Organic Turmeric",
      harvestDate: "12 Aug 2025",
      farmerPhoto: farmerPhoto,
      certificates: [
        {
          name: "Organic Farming Certification",
          type: "Ayush",
          url: "/uploads/organic_cert.pdf"
        },
        {
          name: "Cooperative Registration Certificate",
          type: "Maharashtra Cooperative Societies",
          url: "/uploads/cooperative_registration.pdf"
        }
      ],
      notes: "Pesticide-free cultivation",
      status: "approved" as const,
    },
    cooperative: {
      name: "Green Harvest Co-op Society",
      batchId: "BATCH-TRM-20250812-01",
      collectionCenter: "Pune, Maharashtra",
      collectionDate: "13 Aug 2025",
      batchPhoto: batchPhoto,
      metadata: "250 kg turmeric collected",
      status: "approved" as const,
    },
    lab: {
      name: "AgriLab Pvt Ltd",
      testDate: "15 Aug 2025",
      testResults: {
        moistureContent: "8%",
        curcuminLevel: "5.8%",
        heavyMetals: "Within permissible limits"
      },
      reportFile: "/uploads/lab_report_batch01.pdf",
      reports: [
        {
          name: "Lab Analysis Report",
          type: "AgriLab",
          url: "/uploads/lab_report_batch01.pdf"
        },
        {
          name: "Eurofins Detailed Analysis",
          type: "Eurofins",
          url: "/uploads/eurofins_analysis.pdf"
        }
      ],
      labTechnicianPhoto: labTechPhoto,
      status: "approved" as const,
    },
    processor: {
      name: "FreshSpice Foods Ltd",
      factoryLocation: "Bangalore, Karnataka",
      processingSteps: [
        {
          date: "16 Aug 2025",
          step: "Cleaning",
          photo: cleaningPhoto
        },
        {
          date: "17 Aug 2025",
          step: "Drying",
          photo: dryingPhoto
        },
        {
          date: "18 Aug 2025",
          step: "Grinding",
          photo: grindingPhoto
        },
        {
          date: "19 Aug 2025",
          step: "Packaging",
          photo: packagingPhoto
        }
      ],
      qaReport: {
        status: "Quality Passed ✅",
        url: "/uploads/qa_report.pdf"
      },
      qualityReports: [
        {
          name: "Processing QA Report",
          type: "Internal",
          url: "/uploads/qa_report.pdf"
        },
        {
          name: "QA Status Report",
          type: "Batch Testing",
          url: "/uploads/qa_status_report.pdf"
        }
      ],
      status: "approved" as const,
    },
    manufacturer: {
      name: "Premium Organics Manufacturing Pvt. Ltd.",
      manufacturingDate: "30/01/2024",
      bestBeforeDate: "30/01/2026",
      grade: "A+",
      qaReports: ["Quality Test Report", "Nutritional Analysis", "Purity Certificate"],
      govCertificates: ["FSSAI License", "Organic Certification", "Export License"],
      licenses: [
        {
          name: "Food Processing License",
          type: "FSSAI",
          url: "/uploads/fssai_license.pdf"
        },
        {
          name: "ISO 22000:2018 Certificate",
          type: "Food Safety Management",
          url: "/uploads/iso_certificate.pdf"
        },
        {
          name: "Pollution Clearance Certificate",
          type: "KSPCB",
          url: "/uploads/pollution_clearance.pdf"
        }
      ],
      status: "approved" as const,
    },
    blockchain: {
      transactionHash: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
      explorerUrl: "https://explorer.hyperledger.org/tx/0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
      qrCodeData: "https://verify.supply-chain.com/product/BATCH-TRM-20250812-01",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SupplyChainTimeline data={supplyChainData} />
    </div>
  );
}