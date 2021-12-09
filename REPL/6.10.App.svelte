<!-- 6.10.  크기 값 바인딩 -->

<script>
    let w = 500; // clientWidth 초깃값
    let h = 500; // clientHeight 초깃값
    let text = "크기 값 바인딩 예제";
    let size = 15; // 텍스트 사이즈 추가
</script>

<p>{w}px x {h}px</p> <!-- w, h 값 확인 -->

<input type=range bind:value={size}> <!-- 사이즈값 변경할 range 컨트롤 -->

<!-- w, h와 바인딩 -->
<div bind:clientWidth={w} bind:clientHeight={h}>
   <span style="font-size: {size}px">{text}</span> <!-- 사이즈 바인딩 -->
</div>

<style>
    div { border: solid gray 1px; }
</style>
