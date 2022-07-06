const sleep = (duration) => {
    const now = new Date().getTime();
    while(new Date().getTime() < now + duration);
}