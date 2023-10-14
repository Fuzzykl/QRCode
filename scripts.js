var Content = document.getElementById("Input");
async function DownloadImage(ImageSrc,NameImage) {
  var response = await fetch(ImageSrc);

  var BlobImage = await response.blob();

  var Href = URL.createObjectURL(BlobImage);

  var AnchorElement = document.createElement('a');
  AnchorElement.href = Href;
  AnchorElement.download = NameImage;

  document.body.appendChild(AnchorElement);
  AnchorElement.click();

  document.body.removeChild(AnchorElement);
  window.URL.revokeObjectURL(Href);
}
function Run() {
    if (Content.value === ""){
        alert("Không Được Để Trống");
    } else if (Content.value){
        var LinkDownload = document.getElementById("LinkDownload");
        var ShowQR = document.getElementById("ShowQR");
        var EncodeText = encodeURIComponent(Content.value);
        var Link = `https://api.qrserver.com/v1/create-qr-code/?size=450x450&data=${EncodeText}`
        ShowQR.outerHTML = `<img id='ShowQR' height='200' width='200' src='${Link}'></img>`;
        LinkDownload.innerHTML = `Tải QR <button id='Link'>Tại Đây</button>`;
        var ButtonDownload = document.getElementById('Link');
        ButtonDownload.addEventListener('click',function(){DownloadImage(Link,'QRCode.png')});
    };
};