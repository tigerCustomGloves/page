$('#cap').click(function (e) {
  
  
  html2canvas(document.getElementById("palma"), {
                //proxy:'https://cdn.prod.website-files.com/664cf6f60407d481fabbf724/6737ee30e5de7d9524d7ce44_Frame%20(1).png', 
                type: 'view',
                logging: true, 
                userCORS: true,
                ignoreElements:(showDashboard)=>{return false}
            })
            .then(canvas =>
            {
              var img = canvas.toDataURL("image/png")
              console.log(img)
                let pdf = new jsPDF('p', 'mm', 'a4');
              pdf.setFillColor('#bbbb');
              pdf.rect(10, 10, 150, 160, "F");
              pdf.addImage(img, 'PNG', 0, 0, 124, 129);
              pdf.save("down");  
            });


            

});
