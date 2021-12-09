<!-- 6.7. contenteditable 바인딩 -->

<script>
    let html = "<p>가장 빨리 만나는 스벨트</p>";
</script>

<div contenteditable="true" bind:innerHTML={html}></div> <!-- html 변수와 바인딩 -->
<pre>{html}</pre> <!-- html 변수의 내용을 출력 -->

<style>
    [contenteditable=true] {
        padding: 0.5em;
        border: 1px solid #eee;
        border-radius: 10px;
    }
</style>
