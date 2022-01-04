import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-cards">
        <li className="footer-card">
          <h3>제품</h3>
          <p>갤럭시</p>
          <p>스마트폰</p>
          <p>태블릿</p>
          <p>갤럭시북</p>
          <p>워치</p>
          <p>버즈</p>
        </li>
        <li className="footer-card">
          <h3>고객 서비스</h3>
          <p>갬성닷컴 FAQ</p>
          <p>이메일 상담</p>
          <p>매장찾기</p>
          <p>디지털 프라자 </p>
          <p>E-카탈로그</p>
          <p>고객의 소리</p>
        </li>
        <li className="footer-card">
          <h3>백엔드 팀원 소개</h3>
          <p>강민성</p>
          <p>정병연</p>
        </li>
        <li className="footer-card">
          <h3>프론트 팀원 소개</h3>
          <p>윤종호</p>
          <p>진민욱</p>
          <p>박준영</p>
        </li>
      </ul>
      <section className="footer-desc">
        <p>사업자등록번호 : GAMSUNG-2021-12-27</p>
        <p>
          이 프로젝트는 삼성전자 사이트를 참조하여 학습목적으로 만들었습니다.
        </p>
        <p>
          실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를
          활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
        </p>
        <p>
          이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로
          해당 프로젝트 외부인이 사용할 수 없습니다.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
