const link = document.querySelector('#link');
const range1 = document.querySelector('#size');
const logo1 = document.querySelector('#logo');
const range2 = document.querySelector('#margin');
const boxtype = document.querySelector('#pattern');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const bgcolor = document.querySelector('#bgcolor');
const download = document.querySelector("#down");
const del = document.querySelector("#clear");
let op={
    width: 500,
    height: 500,
    type: "jpg",
    data: "https://arycodes.in/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Mozilla_Firefox_Nightly_logo_2013.png/640px-Mozilla_Firefox_Nightly_logo_2013.png",
    dotsOptions: {
        color: "#4267b2",
        type: "rounded",
        gradient: {
            "type":"linear",
            "colorStops":[
                {
                    "offset":0,
                    "color":"#00000"
                },
                {
                    "offset":1,
                    "color":"#00000"
                }

            ]
        }
    },
    backgroundOptions: {
        color: "#e9ebee",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    }
};
render();
range1.addEventListener('input',e=>{
    op.width=e.target.value * 10;
    op.height = e.target.value * 10;
    render();
});
link.addEventListener('keyup',e=>{
    op.data=e.target.value;
    render();
});
range2.addEventListener('input',e=>{
    op.imageOptions= {margin: e.target.value};
    render();
});
boxtype.addEventListener('change',e=>{
    op.dotsOptions.type = e.target.value;
    render();
});
color1.addEventListener('input',e=>{
    op.dotsOptions.gradient.colorStops[0].color = e.target.value;
    render();
});
color2.addEventListener('input',e=>{
    op.dotsOptions.gradient.colorStops[1].color = e.target.value;
    render();
});
bgcolor.addEventListener('input',e=>{
    op.backgroundOptions.color = e.target.value;
    render();
});
function browse(){
    logo1.click();
};
logo1.addEventListener('change', () => {
    const file = logo1.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      op.image = event.target.result;
      render();
    };
    reader.readAsDataURL(file);
});
del.addEventListener('click',e=>{
    delete op.image;
    render();
});
download.addEventListener('click',e=>{
    qrcode.download({name:'arycode',extension:'svg'})
});
var qrcode;
function render(){
    qrcode = new QRCodeStyling(op);
    let canvas=document.querySelector('#canvas');
    canvas.innerHTML = '';
    qrcode.append(canvas);
    canvas.nextElementSibling.innerHTML=`${op.width}px x ${op.height}px`;
};