import LabStep from '../LabStep';
import labTechPhoto from "@assets/stock_images/laboratory_technicia_851353e1.jpg";

export default function LabStepExample() {
  return (
    <LabStep
      stepNumber={3}
      labName="AgriLab Pvt Ltd"
      testDate="15 Aug 2025"
      testResults={{
        moistureContent: "8%",
        curcuminLevel: "5.8%",
        heavyMetals: "Within permissible limits"
      }}
      reportFile="/uploads/lab_report_batch01.pdf"
      labTechnicianPhoto={labTechPhoto}
      status="approved"
    />
  );
}