export function InfoItem({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-1 text-zinc-400 text-sm">
      {Icon && <Icon size={16} />}
      <span>{children}</span>
    </div>
  );
}
