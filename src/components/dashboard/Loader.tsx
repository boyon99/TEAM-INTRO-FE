export default function Loader({ className }: { className?: string }) {
  return <div className={`loader animate-spin ${className}`}></div>;
}
