function whatTimeIsIT(){
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    alert(`${hour}시 ${minutes}분 ${seconds}초`)
}