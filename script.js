function a(e){
    let y = 0;
    while(e > 0){
        let h = e%10;
        y =y*10+h;
        e = Math.floor(e/10);
    }
    return y
}
console.log(a(1234));

e=123
y=4
h=3