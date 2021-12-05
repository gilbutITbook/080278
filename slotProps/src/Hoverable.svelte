<script>
    let flag = false; // slot의 hovered props와 바인딩
</script>

<div on:mouseenter={()=>{flag=true}} 
     on:mouseleave={()=>{flag=false}}>
    <slot name="user" hovered={flag}></slot> <!-- hovered props 선언, flag 값과 바인딩 -->
</div>
