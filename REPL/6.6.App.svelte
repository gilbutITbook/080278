<!-- 6.6. 단일 select, 다중 select 바인딩하기 -->

<script>
    let where = ""; // select 박스 바인딩 변수
    let menu = ["커피", "주스", "샌드위치", "김밥"]; // 메뉴를 담은 배열
    let chosen = []; // 다중 선택 값 저장 배열
    let order = ""; // 주문 내용을 저장할 변수
    $:order = chosen.length>0  
              ? `<b>${chosen}</b> 메뉴를 <b>
                          ${where=="매장"?"매장 식사를":"포장 주문을"}</b> 선택하셨습니다` 
              : "메뉴를 선택해주세요";
</script>

<main>
    <h2> 포장: {where}</h2>
    <select bind:value={where}>
        <option value="">선택하세요</option>
        <option value="포장">포장합니다</option>
        <option value="매장">매장에서 먹을래요</option>
    </select>

    <h2> 메뉴: {chosen}</h2>
    <select multiple bind:value={chosen}>
        {#each menu as item} <!-- 매뉴의 개수만큼 option 생성 -->
            <option value={item}> {item} </option> <!-- 매뉴를 값으로 가짐  -->
        {/each}
    </select>

    <p>{@html order}</p>
</main>
