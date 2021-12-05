<script>
    // 1. 파일 임포트, count와 onDestroy를 꺼냄
    import { count } from "./store.js";
    import { onDestroy } from "svelte"; // 라이프 사이클 함수 onDestroy 선언

    // 2. 버튼 활성/비활성 값 선언
    let disabled = false;

    // 3. count 스토어 업데이트 
    function Increase () {
        count.update((n)=>{ // 스토어 현재 값을 n으로 전달 받음
            return n + 1;   // n+1을 스토어에 저장
        });
    }

    // 4. count 구독 구현, count의 값이 100보다 클 때 비활성화
    const unsub = count.subscribe((v) => { // 변경된 값 v를 전달 받음
        disabled = v>=100 ? true: false;
    })

    // 5. count 구독 종료 구현
    onDestroy(unsub); // 컴포넌트 파괴 시 구독 종료
</script>

<!--  6. count 증가 버튼 구현  --> 
<button disabled={disabled} on:click={Increase}>count 증가</button>
