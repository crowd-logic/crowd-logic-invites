interface SolutionPortalProps {
  solution: any;
}

export const SolutionPortal = ({ solution }: SolutionPortalProps) => {
  return (
    <div className="min-h-screen">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Solution Portal</h1>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(solution, null, 2)}
        </pre>
      </div>
    </div>
  );
};