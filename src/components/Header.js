import Filter from "./Filter";
import Info from "./Info";

export default function Header() {
  return (
    <div className="row g-3 justify-content-between">
      <Info />
      <Filter />
    </div>
  );
}
