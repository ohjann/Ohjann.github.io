export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="min-h-screen py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
      <div className="relative w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
        <div className="mt-8 prose prose-slate mx-auto md:prose-md">
          {children}
        </div>
      </div>
    </div>
  );
}
