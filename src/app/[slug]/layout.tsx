export default function SinglePostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen lg:flex py-10">
      <div className="lg:flex-grow fade-in">{children}</div>
      <div className="lg:w-[332px] pl-8 flex-none">
          <p>Sidebar</p>
      </div>
    </div>
  );
}
