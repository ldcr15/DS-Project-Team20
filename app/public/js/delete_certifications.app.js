var delete_certificationsApp = new Vue({
  el: '#delete_certificationsApp',
  data: {
    certificate: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/certifications/deleteCertificatePost.php', {
        method:'POST',
        body: JSON.stringify(this.certificate),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {certificationApp.certifications.push( json[0] ) })
      .catch( err => {
        console.error('MEMBER POST ERROR:');
        console.error(err);
  });
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
},
  created() {
  }
})

/* function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}*/
