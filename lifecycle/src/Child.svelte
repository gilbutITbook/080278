<script>
    let txt; // input 박스 위치 저장용 전역 변수 생성 

    // svelte 컴포넌트 임포트, 라이프 사이클 함수 4종 꺼내기
    // 1. tick import 하기
    import { tick, onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";

    // onMount 예제 코드
    onMount(() => {
        txt = document.getElementById("text01"); // 돔에서 엘리먼트 찾아오기
        txt.focus(); // 포커스 주기
        console.log("Child onMount 호출됨");
        //onDestory 같은 동작
        return ()=>{ console.log("Child가 파괴되었습니다."); }
    });

    // onDestory 예제 코드
    onDestroy(() => {
        console.log("Child onDestroy 호출됨");
    });

    // beforeUpdate 예제 코드
    beforeUpdate(() => {
        console.log("Child beforeUpdate 호출됨", x); // 바인딩 변수 x의 변화를 확인
        if(txt) console.log("before :: ", txt.value); // if로 방어 후 바뀌기 이전 값을 확인하기
    });

    // afterUpdate 예제 코드
    afterUpdate(() => {
        console.log("Child afterUpdate 호출됨", x); // 바인딩 변수 x의 변화를 확인
        console.log("after :: ", txt.value);       // 바뀐 값을 확인하기
    });
    let x = 0; //바인딩 변수 x를 선언 
</script>

<h1> Child </h1>
<input type="text" id="text01"/> <!-- 테스트용 input 박스 -->
<!-- 2. async 함수로 만들기 -->
<button on:click={async ()=>{
    x = x + 1; //클릭할 때 마다 x값 1씩 증가
    await tick(); // 3. tick 호출, 돔 업데이트 기다리기
    console.log ("* x값: " + x); // 스크립트 블록의 x 값 출력
    console.log ("* DOM: " + document.getElementById("text01").value); // 돔의 x값 출력
}}>add</button>
