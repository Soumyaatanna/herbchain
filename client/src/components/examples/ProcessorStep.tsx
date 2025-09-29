import ProcessorStep from '../ProcessorStep';
import cleaningPhoto from "@assets/stock_images/turmeric_cleaning_pr_d74ec154.jpg";
import dryingPhoto from "@assets/stock_images/spice_drying_process_5b6a3262.jpg";
import grindingPhoto from "@assets/stock_images/spice_grinding_proce_96020105.jpg";
import packagingPhoto from "@assets/stock_images/spice_packaging_proc_358cfa8a.jpg";

export default function ProcessorStepExample() {
  return (
    <ProcessorStep
      stepNumber={4}
      processorName="FreshSpice Foods Ltd"
      factoryLocation="Bangalore, Karnataka"
      processingSteps={[
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
      ]}
      qaReport={{
        status: "Quality Passed ✅",
        url: "/uploads/qa_report.pdf"
      }}
      status="approved"
    />
  );
}