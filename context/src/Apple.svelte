<script>
    import { getContext, hasContext } from "svelte";  // getContext, hasContext 사용 선언
    let rate = getContext("discount");   // 현재 컨텍스트의 할인율을 읽어서 rate에 저장
    // 현재 컨텍스트에 할인율이 없으면
    if(!hasContext("discount")){
        rate = 0; // rate를 0으로 설정
    }
</script>

<p>오늘 사과는 {rate}% 세일합니다.</p> <!-- 할인율 출력 -->
