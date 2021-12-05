<div class="container">
    <slot name="content"></slot>
    <p>1번 박스</p>
</div>

<style>
    .container {
        border: 1px solid gray;
        width: 200px;

        display: flex;
        flex-direction: column;
    }
</style>
