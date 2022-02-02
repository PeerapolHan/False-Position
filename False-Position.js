let xl = 0.02; 
let xr = 0.03;
let xm = ((xl*fx(xr))-(xr*fx(xl)))/(fx(xr)-fx(xl));
//xm =x1 (one)
let xmo = 0;
let es =0;
let i = 0;
function fx(x){
    return ((43*x)-1);
    //x-1/43
    //(43*x)-1
    //(1/x)-43
    //สมการต่างxlที่ขั้นที่0ต่างแต่rootเท่ากัน

}
while(Math.abs((xm-xmo)/xm)>=0.000001){
    xm = ((xl*fx(xr))-(xr*fx(xl)))/(fx(xr)-fx(xl));

    if(fx(xm)*fx(xr)<0){
        xmo = xl;
        xl = xm;   
    }
    else if(fx(xm)*fx(xr)>0){
        xmo = xr;
        xr = xm;           
    }
    else{
        es = Math.abs((xm-xmo)/xm);
        break;
    }
    if(i>=1){
        //es = Math.abs((xm-xmo)/xm);
        console.log('Iteration:',i);
        console.log('xl',(xl).toFixed(6));
        console.log('xr',(xr).toFixed(6));
        console.log('x1',(xm).toFixed(6));
        //console.log('xo',(xmo).toFixed(6));
        console.log('es', (es).toFixed(6));
        //console.log('fx(xm)*fx(xr)',(fx(xm)*fx(xr)));
        console.log('-----------------');
    }
    else{
        //es = Math.abs((xm-xmo)/xm);
        console.log('Iteration:',i);
        console.log('xl',(xl).toFixed(6));
        console.log('xr',(xr).toFixed(6));
        console.log('x1',(xm).toFixed(6));
        //console.log('xo',(xmo).toFixed(6));
        //console.log('fx(xm)*fx(xr)',(fx(xm)*fx(xr)));
        console.log('-----------------');       
    }
    i++;
}
console.log('root',(xm).toFixed(6));
