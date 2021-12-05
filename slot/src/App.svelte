<script>
	// Card 컴포넌트 임포트, 사용 선언
	import Card from "./Card.svelte";
	let user = "홍길동";
</script>

<!-- Card 인스턴스 생성 -->
<Card>
	<h2 slot="user">{user}</h2> <!-- user 콘텐츠 전달 -->
    <!-- span slot="email">hong@email.com</span --> <!-- user 콘텐츠 전달 -->
	<span slot="mobile">010-1234-5678</span> <!-- mobile 콘텐츠 전달 -->
</Card>