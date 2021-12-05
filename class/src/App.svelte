<script>
    let pStyle = "active"; // 클래스 이름으로 직접 치환
    let active = true; // active 클래스 적용 여부 
    let isAdmin = true; // isAdmin 클래스 적용 여부
</script>

active: <input type="checkbox" bind:checked={active}> &nbsp;
isAdmin: <input type="checkbox" bind:checked={isAdmin}>

<main>
    <!-- 1. 클래스 속성 사용 -->
    <p class="active">클래스 적용하기</p>
    
    <!-- 2. 클래스 속성값과 변수 바인딩 -->
    <p class="{pStyle}">클래스 적용하기</p>
    
    <!-- 3. 연산 반환값을 적용 -->
    <p class="{active?'active':''}">클래스 적용하기</p>
    
    <!-- 4. class 지시자 사용 -->
    <p class:active={active}>class 지시자 사용</p>
    <p class:active>class 지시자 사용</p>
    
    <!-- 5. 여러 개 클래스 적용하기-->
    <p class:active class:isAdmin>다중 class 지시자 사용</p>
</main>
<style>
    .active { color:orangered; font-style: italic; }
    .isAdmin { font-weight: 700; }
</style>
