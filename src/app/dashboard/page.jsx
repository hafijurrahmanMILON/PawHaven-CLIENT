export default function DashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">
          This is a protected page. Only authenticated users can access it.
        </p>
      </div>
    </div>
  );
}
