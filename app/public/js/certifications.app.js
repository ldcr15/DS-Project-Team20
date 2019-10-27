var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certifications: [],
    newCertification: {}
  },
  methods: {
    fetchCertifications() {
      fetch('api/certifications/data_entry.php')
      .then(response => response.json())
      .then(json => { certificationApp.certifications = json })
  },
  handleSubmit() {
    fetch('api/certifications/certificationsPost.php', {
      method:'POST',
      body: JSON.stringify(this.newCertification),
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
 this.fetchCertifications();
},
handleReset() {
  this.newCertification = {
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
    this.fetchCertifications();
    this.handleReset();
    }
    })

  function myFunction() {
    var x = document.getElementById("certificationDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
