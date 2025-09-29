import FarmerStep from '../FarmerStep';
import farmerPhoto from "@assets/stock_images/indian_farmer_portra_f52ffbb6.jpg";

export default function FarmerStepExample() {
  return (
    <FarmerStep
      stepNumber={1}
      farmerName="Ramesh Kumar"
      farmerId="F12345"
      farmLocation="Nashik, Maharashtra, India"
      gpsCoordinates="19.9975° N, 73.7898° E"
      cropType="Organic Turmeric"
      harvestDate="12 Aug 2025"
      farmerPhoto={farmerPhoto}
      certificates={[
        {
          name: "Organic Farming Certification",
          type: "Ayush",
          url: "/uploads/organic_cert.pdf"
        }
      ]}
      notes="Pesticide-free cultivation"
      status="approved"
    />
  );
}