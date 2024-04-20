import Detail from "../../components/List/detail.component"
import List from "../../components/List/list.component";

export default function ProductList() {
  return (
    <div className="row mt-5">
      <List/>
      <Detail/>
    </div>
  );
}
