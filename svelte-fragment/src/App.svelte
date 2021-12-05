<script>
    import Container from "./Container.svelte";
</script>

<h4>1. slot 예제</h4>
<Container>
    <div slot="content">
        <p>3번 박스</p>
        <p>2번 박스</p>
    </div>
</Container>

<h4>2. svelte:fragment 예제</h4>
<Container>
    <svelte:fragment slot="content"> <!-- 나중에 없어질 태그 -->
        <p>3번 박스</p>
        <p>2번 박스</p>
    </svelte:fragment> <!-- 나중에 없어질 태그 -->
</Container>
