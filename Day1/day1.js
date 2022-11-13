// let t = Number(prompt("Nhập số"))
// switch(t){
//     case 1:
//         console.log("1.In ra sv");   
//         break;
//     case 2:
//         console.log("2.Tạo sv");
//         break;
//     case 3:
//         console.log("3.Update");
//         break;
//     case 4:
//         console.log("4.Xóa");
//         break;
//     case 5:
//         console.log("5.Thoát chương trình");
//         break;
//     default:
//         console.log("Nhập sai rồi");
// }
// let array= [2,11,16,7]
// let emptArr=[]
// k= 9
// for(i=0;i<array.length; i++){
//     for(j=i+1;j<array.length; j++){
//         if(array[i]+array[j]==k){
//         emptArr.push(i)
//         emptArr.push(j)
//     }
// }
// }
// console.log(emptArr);
function checkReverseString(s) {
let a = "";
    for(let i = s.length -1; i >= 0; i--){
     a= a + s.charAt(i);
}
    if(s===a){
    console.log("True");
}else{
    console.log("False");
}
}
checkReverseString("abcab");