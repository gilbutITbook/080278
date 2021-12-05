<script>
    import { getContext } from "svelte"; // getContext 사용 선언
    let rate = getContext("discount"); // 현재 컨텍스트의 할인율을 읽어서 rate에 저장
</script>
<p>오늘 양말은 {rate}% 세일합니다.</p> <!-- 할인율 출력 -->
