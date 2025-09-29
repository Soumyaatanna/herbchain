import ManufacturerStep from '../ManufacturerStep';

export default function ManufacturerStepExample() {
  return (
    <ManufacturerStep
      stepNumber={5}
      manufacturerName="Premium Organics Manufacturing Pvt. Ltd."
      manufacturingDate="30/01/2024"
      bestBeforeDate="30/01/2026"
      grade="A+"
      qaReports={["Quality Test Report", "Nutritional Analysis", "Purity Certificate"]}
      govCertificates={["FSSAI License", "Organic Certification", "Export License"]}
      status="approved"
      isLast={true}
    />
  );
}