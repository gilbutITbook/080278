<script>
    import { setContext } from "svelte"; // setContext 사용 선언
    import Apple from "./Apple.svelte"; // Apple 컴포넌트 사용 선언
    setContext("discount", 10); // 현재 컨텍스트에 할인율을 10으로 설정
</script>

<h3>과일 매장</h3>
<Apple/> <!-- 사과 인스턴스 생성 -->
