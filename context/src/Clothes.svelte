<script>
    import { setContext } from "svelte"; // setContext 사용 선언
    import Socks from "./Socks.svelte"; // Socks 컴포넌트 사용 선언
    setContext("discount", 20); // 컨텍스트에 할인율을 20으로 설정
</script>

<h3>의류 매장</h3>
<Socks/> <!-- 양말 인스턴스 생성 -->
