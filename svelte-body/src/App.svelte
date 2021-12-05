<script>
    let message  = "마우스를 잃어버렸어요";
    
    function mouseleaveHandler (){
        message = "마우스를 잃어버렸어요";
    }

</script>

<svelte:body
    on:mouseenter={() => message = "마우스 포인터 발견"}
    on:mouseleave={mouseleaveHandler}
/>

<h3>{message}</h3>
