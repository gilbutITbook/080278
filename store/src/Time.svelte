<!-- 3. 스크립트 블록 -->
<script>
    import { time } from "./store.js";

    // 시각 포매팅을 위한 formatter 함수 생성
    const formatter = new Intl.DateTimeFormat("kr", {
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    });
</script>

<!-- 4. HTML 블록 -->
<h1>현재 시각은 {formatter.format($time)}입니다</h1>
