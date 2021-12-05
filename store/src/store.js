// 1. derived 꺼내기
import { writable, readable, derived } from "svelte/store";

export const count = writable (10);

console.log("스토어", count);

export const time = readable(new Date(), function start(set) {
    console.log("구독이 시작되었습니다");
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function stop() {
        console.log("모든 구독이 종료되었습니다");
        clearInterval(interval);
    };
});

// 2. derived 함수로 power 스토어와 elapsed 스토어 만들기
export const power = derived(count, $count => $count * $count);

const start = new Date();
export const elapsed = derived(time, ($time, set) => {
    set(Math.round(($time - start) / 1000));
    return () => {
        // 실행이 종료됐을 때 구문
    }
});
