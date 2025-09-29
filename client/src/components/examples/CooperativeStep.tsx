import CooperativeStep from '../CooperativeStep';
import batchPhoto from "@assets/stock_images/turmeric_harvest_col_57d7594a.jpg";

export default function CooperativeStepExample() {
  return (
    <CooperativeStep
      stepNumber={2}
      cooperativeName="Green Harvest Co-op Society"
      batchId="BATCH-TRM-20250812-01"
      collectionCenter="Pune, Maharashtra"
      collectionDate="13 Aug 2025"
      batchPhoto={batchPhoto}
      metadata="250 kg turmeric collected"
      status="approved"
    />
  );
}