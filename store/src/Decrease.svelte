<script>
    // 1. 파일 임포트, count를 꺼냄
    import { count } from "./store.js";

    // 2. 버튼 활성/비활성 값 선언
    let disabled = false; 

    // 3. count 구독 대신 반응 상태(Reactive Statement) 사용
    $: disabled = $count<=1 ? true: false; // 스토어도 감지가 된다!
</script>

<!--  4. count 감소 버튼 구현  -->
<button {disabled}
        on:click={()=>{
            $count = $count - 1; 
        }}
>count 감소</button>
