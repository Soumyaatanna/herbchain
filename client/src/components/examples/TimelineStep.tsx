import TimelineStep from '../TimelineStep';
import { Leaf } from 'lucide-react';

export default function TimelineStepExample() {
  return (
    <TimelineStep
      stepNumber={1}
      title="Farmer"
      subtitle="Harvest"
      status="approved"
      icon={<Leaf className="w-5 h-5" />}
    >
      <div className="space-y-2">
        <p className="text-sm"><strong>Name:</strong> Rajesh Kumar</p>
        <p className="text-sm"><strong>Location:</strong> Nagpur, Maharashtra</p>
        <p className="text-sm"><strong>Harvest Date:</strong> 15/01/2024</p>
      </div>
    </TimelineStep>
  );
}