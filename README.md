## Gamsung 프로젝트 Front-end/Back-end 소개

- 국내 시총 1위 기업 삼성전자 사이트 https://www.samsung.com/sec/ 클론
- 짧은 프로젝트 기간동안 개발에 집중해야 하므로 디자인/기획 부분만 클론했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### 개발 인원 및 기간

- 개발기간 : 2021/12/27 ~ 2022/1/07
- 개발 인원 : 프론트엔드 3명, 백엔드 2명
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/28-1st-Gamsung-backend)

### 프로젝트 선정이유

- 이 사이트는 기본적인 프론트엔드 스킬 및 백엔드 스킬을 학습해볼 수 있어 선정함

### 데모 영상(이미지 클릭)
https://drive.google.com/file/d/1sXzSnNrqCis-dJuwqMfAkRqHFQURISFY/view?usp=sharing

<br>


### 적용 기술

**_Front-end_**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

**_Back-end_**

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)



### 구현 기능

#### 공통

#### 일반 회원가입 / 로그인
 1) 입력한 정보에 대한 유효성 검사 기능 구현
 
#### 메인페이지
 1) 최상단으 이미지 슬라이더 추가
 2) 서비스 카드 구현
 3) 상품 Preview에 대한 이미 탭 구현
 4) Story 구현

#### 상품 리스트 
 1) 상품 정보 카드 구현 
 2) 옵션을 필터링 하여 특저 상품정보만 보이도록 하는 로직 구현


#### 상품 상세 페이지
 1) 상품에 대한 이미지 슬라이더 구현 
 2) 상품에 대한 정보르 보여주는 부분 구현

#### 장바구니 
 1) 장바구니에 담은 상품들에 대해 전체, 개별 선택 기능 구현
 2) 선택 변동 시 가격 / 수량 변동 기능 구현

<br>

## 맡은 부분 및 구체적인 구현 사항설명
### (1) 메인페이지
![](https://media.giphy.com/media/y8hxzBrTRlRDdv604g/giphy.gif)

**1. 메인 페이지 최상단의 이미지 슬라이더 추가**
 - 필요한 이미지는 public/main/hero에 추가해 img태그의 src에 경로 작성
 - 이미지는 컴포넌트 내에서 인덱스로 관리하도록 useState 적용
 - 양쪽 끝에 화살표 2개를 배치, 클릭시 다음 인덱스에 해당하는 이미지가 보이도록 구현
 - 현재 인덱스 (carouselIndex)를 css 변수로 stlye객체에 전달하였고 css에서 이를 이용해 transform에 적용
 - 이미지 밑의 navigator를 생성 
 - navigator 클릭 시 해당 인덱스로 이동토록 적용
 - navigator 오른쪽에는 재생, 정지 상태를 나타내는 버튼을 구현하였고 현재 재생상태인지는 isPlaying이란 state로 관리
 - isPlaying이 true인 경우 정지 버튼이 나타나며 setTimeOut을 활용하여 2.5초 이후에 자동으로 다음 인덱스로 넘어가도록 구현
 - 이 때, 컴포넌트 외부에 timer라는 변수를 선언하여 setTimeout에 의해 반환되는 ID를 저장
 - 만약 화살표 또는 navigator를 클릭하여 setTimeOut이 종료되기 전에 인덱스가 변경되는 경우 clearTimeOut으로 setTimeOut을 초기화 
 - 추가 구현 예정 : 슬라이더가 맨 앞, 뒤의 이미지를 가리키는 상황에서 화살표를 클릭 시 transform이 초기화 되지 않고 다음 페이지로 넘기듯 자연스럽게 넘어가는 효과 구현 예정

**2. Service 구현**
 - 이미지 슬라이더 하단에 서비스 종류를 보여주는 부분 구현
 - 탭은 있으나 작동하지 않으며 다른 화면이 보여지지는 않는다,
 - Service에서 hard coding으로 Icon, title, description등을 컴포넌트 외부에서 const CARDS라는 변수에 작성하였음
 - CARDS에 대해 map 메소드를 사용, Icon, title, description을 ServiceCard 컴포넌트의 prop으로 넘겨 주어 UI 구성
 - 각 Card에 대해 hover시 radial-gradient로 주어진 스타일 나타나도록 스타일 추가

**3. 상품 Preview에 대한 이미지 탭 구현**
 - 제품 미리보기에 관련된 이미지 슬라이더 추가
 - 1)과는 다르게 화살표는 제거 하였고 tab만을 통해 transform되도록 구현
 - 이미지의 높이를 105vh로 주었고 위의 탭 부분과 아래의 짧은 설명이 이미지 내부에 위치하도록 position: absolute로 위치
 
**4. Story 부분 구현**
- 메인 페이지에 story 부분 추가
- 오른쪽 탭에 따라 연동된 이미지가 가운데에 나타나도록 구현하였으며 각 탭은 background: linear-gradient( )와 background-clip: text를 사용해 그라데이션을 텍스트에 적용
- 초기에는 탭에 대한 index에 따라 img의 src로 index 번째 이미지를 불러오도록 하였으나 매끄럽게 넘어가지 않았음
- 모든 이미지를 초기에 불러온 뒤 position: absolute를 주었고 해당 index이외의 이미지에 z-index: -1을 주어 조금 더 매끄럽게 되도록 구현

**5. 트렌드 부분 구현**
- 메인페이지 마지막 sectio인 트렌드 부분 추가
- grid 레이아웃을 사용하였으며 각 Cell에 들어가는 부분도 중복 되었기에 TrendCard 컴포넌트 생성
- 이미지의 너비는 각 Cell의 너비로 맞추었고 높이는 조정이 필요한 경우 각 cell에 대해 --height라는 변수를 만들어 지정하였고,   
 TrendCard.scss에서 height: var(--height, 100%)로 하여 높이 조정


### (2) 상세페이지 
![](https://media.giphy.com/media/PYpNG0JLYkWpgifF7Y/giphy.gif)
1. 상세페이지 레이아웃 구현 
 - 특정 제품에 대한 상세페이지 레이아웃 작성
 - 크게 왼쪽 (이미지 슬라이더) , 오른쪽 (제품에 대한 상세설명 Info) 라는 2개의 컴포넌트로 분리

2. Detail Carousel 컴포넌트 
 - 상세페이지에서 보여줄 제품에 대한 이미지 슬라이더를 컴포넌트화 
 - 슬라이더 왼쪽에 이미지들을 작게 표시한 네비게이터 생성 
 - 네비게이터의 작은 이미지 클릭시 해당 이미지로 이동, 상,하단의 화살표 클릭 시 이전, 다음의 이미지가 표시되도록 구현.

 
3. ProductInfo 컴포넌트
 -  제품 이름, 가격, 용량, 이미지 등을 백엔드에서 넘겨 받아 표시하기 위한 컴포넌트
 - 현재는 임의의 데이터로 구성되어 있으며 추후 백엔드와 통신하여 데이터 수정 예정 
 - 색상, 용량등 화살표 클릭 시 숨겨진 부분이 보여지는 부분이 겹쳐서 dropdown 컴포넌트를 생성해 활용
 - Dropdown 컴포넌트는 title과 description을 prop으로 받아 보여 주고 숨겨진 부분은 각기 다르기에 children으로 넘겨 주어 화살표 클릭여부에 따라 숨김여부 설정
 - Dropdown의 children을 조건부 랜더링을 설정하였고 children을 wrapping하는 태그에 onAnimationEnd이벤트를 주어 마운트/언마운트 될 때에도 애니메이션/트랜지션 효과가 부여 되도록 작성


## Reference

- 이 프로젝트는 [삼성전자](https://www.samsung.com/sec/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
