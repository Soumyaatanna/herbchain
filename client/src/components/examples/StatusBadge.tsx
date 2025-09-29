import StatusBadge from '../StatusBadge';

export default function StatusBadgeExample() {
  return (
    <div className="space-y-4">
      <StatusBadge status="approved" />
      <StatusBadge status="pending" />
      <StatusBadge status="failed" />
    </div>
  );
}