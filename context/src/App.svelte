<script>
    import { setContext } from "svelte"; // setContext 사용 선언
    import Fruit from "./Fruits.svelte"; // Fruit 컴포넌트 사용 선언
    import Clothes from "./Clothes.svelte"; // Clothes 컴포넌트 사용 선언
    setContext("ceo", "박승현"); // 현재 컨텍스트에 ceo 텍스트를 설정
</script>

<Fruit/> <!-- 과일 컴포넌트 인스턴스 생성 -->
<Clothes/> <!-- 옷 컴포넌트 인스턴스 생성 -->
