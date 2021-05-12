import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return (
    <h1>
      상품 상세 설명 각자 상세정보가 라우트를 타고 고유아이디 부여 {id} 페이지
    </h1>
  );
}

export default ProductPage;
