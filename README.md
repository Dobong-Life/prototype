# Dobong Life Web Application

## 🛠️ 수정해야 할 사항
1. **`ReviewList` 컴포넌트 문제 해결**
   - `NavBar`가 작동하지 않는 문제 수정 필요.

---

## ➕ 추가해야 할 사항
1. **로그인 페이지 만들기**
   - 사용자 인증 기능을 위한 로그인 페이지 구현. (프로토타입용으로 구현, 백엔드 서버 별도로 구축하지 않음.)
   
2. **`User` Mock Data 생성**
   - 회원 가입 없이 임의의 사용자로 로그인 가능하도록 설정.

3. **Header의 로그인 상태 관리**
   - 로그인 이후 **로그인 | 로그아웃** 버튼 상태 관리.

4. **`ReviewList`에서 리뷰 작성 기능 구현**
   - 로그인된 사용자만 리뷰 작성 가능.

5. **`Review Write` Local Storage 저장**
   - 작성된 리뷰를 Local Storage에 저장하여 유지.

6. **리뷰 작성 기능 테스트**
   - 작성, 저장, 및 UI 반영 로직의 정상 작동 확인.

---

## 🎨 디자인 수정해야 할 사항
### 전반적인 디자인 적용 필요:
- **Figma 디자인 반영**:
  - 기존 미적용 부분 전반적인 수정.
  
### 구체적인 디자인 수정 항목:
1. **도봉 라이프 로고 디자인 추가**
   - 헤더에 로고 이미지 추가.
   
2. **홈 화면 컴포넌트 UI 수정**
   - Figma에 맞춘 디자인 리뉴얼.

3. **맛집 모달창 내 지도 버튼 수정**
   - 버튼 스타일 및 위치 조정.

4. **해시 태그별 아이콘 이미지 추가**
   - 각 제목별 해시 태그에 관련 아이콘 적용.

---

## 🚧 미구현 페이지
### 1. **비즈니스 페이지**
   - **도봉 상공회 데이터 엑셀 파일 참조**:
     - 주요 데이터 컬럼 설정.
     - 샘플 데이터 생성.
   - 이후 페이지 UI 및 로직 구현.

### 2. **명소 페이지**
   - **맛집 페이지와 동일한 컬럼 구성**:
     - 명소 데이터 로드 및 컴포넌트 구성.

### 3. **마이페이지**
   - **Local Storage 기반 좋아요 관리**:
     - 사용자가 좋아요한 맛집, 비즈니스, 명소 목록 확인 가능.
   - **프로필 사진 및 기타 정보 설정**:
     - Figma 디자인 참조 후 추가 화면 구현.

---

## 📌 TODO Summary
- [ ] `ReviewList` 컴포넌트의 `NavBar` 문제 수정.
- [ ] 로그인 페이지 및 사용자 상태 관리.
- [ ] 리뷰 작성 기능 구현 및 테스트.
- [ ] Figma 기반 디자인 전면 적용.
- [ ] 비즈니스 및 명소 페이지 구현.
- [ ] 마이페이지 로직 개발 및 UI 추가.

---

Feel free to contribute or suggest enhancements to the Dobong Life Web Application! 🚀