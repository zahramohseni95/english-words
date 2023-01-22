export default function wordPicker(list) {
        return list[randomRange(list.length)]
}


function randomRange(length) {
    return Math.floor(Math.random()*length);
}