<nav>
    <ul>
        <li>
            <a href="/">홈</a>
        </li>
        <li>
            <a href="/quiz">게임하기</a>
        </li>
        <li>
            <a href="/contact">만든이</a>
        </li>
    </ul>
</nav>

<slot/>

<style>
    ul {
        display: flex;
        list-style: none;
    }
    li {
        margin-right: 10px;
    }
</style>
