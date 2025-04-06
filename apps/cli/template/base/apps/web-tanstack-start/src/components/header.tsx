import { Link } from "@tanstack/react-router";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
  ];

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 py-1">
        <nav className="flex gap-4 text-lg">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              activeProps={{ className: "font-bold" }}
              activeOptions={{ exact: true }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <hr />
    </div>
  );
}
