const counter = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    }
}

const firstCounter = counter();
const secondCounter = counter();