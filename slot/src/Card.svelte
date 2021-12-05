<script>
    console.log($$slots);
</script>

<div class="card">
    <slot name="user"></slot> <!-- user slot 선언 -->
    <p>전화번호: <slot name="mobile"></slot></p> <!-- mobile slot 선언 -->

    <!-- email slot으로 값이 들어올 경우 처리 -->
    {#if $$slots.email}
        <p>이메일: <slot name="email"></slot></p>  <!-- email slot 선언 -->
    {/if}
</div>

<style>
    .card {
        width: 300px;
        border: 1px solid #aaa;
        border-radius: 2px;
        padding: 1em;
        margin: 0 0 1em 0;
    }
</style>
