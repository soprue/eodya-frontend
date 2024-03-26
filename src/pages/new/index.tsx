import { Link } from "react-router-dom";

import Navigation from "../../components/common/menu/Navigation";

function NewRegisterPage() {
  return (
    <main className="h-dvh">
      <Link to={"/new/spot"}>새 장소 등록하기</Link>

      <Navigation />
    </main>
  );
}

export default NewRegisterPage;
