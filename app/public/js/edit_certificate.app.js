var edit_certificateApp = new Vue({
  el: '#edit_certificateApp',
  data: {
    certificate: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/certifications/editCertificatePost.php', {
        method:'POST',
        body: JSON.stringify(this.certificate),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      // .then( response => response.json() )
      // .then( json => {edit_membersApp.employee.push( json[0] ) })
      // .catch( err => {
      //   console.error('MEMBER POST ERROR:');
      //   console.error(err);
  // });
   this.handleReset();
  },

  handleDelete() {
    fetch('api/certifications/deleteCertificatePost.php', {
      method:'POST',
      body: JSON.stringify(this.certificate),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
 this.handleReset();
},






  handleReset() {
    this.certificate = {
      certificationId: '',
      certificationName: '',
      experationPeriod: '',
      certifyingAgency: ''
    }
  },
  handleRowClick(certifications){
    edit_certificateApp.certificate = certifications;
  }
},
  created() {
  }
})

function editExistingCertFunction() {
  var x = document.getElementById("eCert");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
/* function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}*/
