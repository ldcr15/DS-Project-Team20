var certificationsMemberApp = new Vue({
  el: '#certificationsMemberApp',
  data: {
    certifications: [],
    certificationsMember: [],
    filter: {
      certificationId: ''
    }
  },
  methods: {
    fetchCertificationsMember() {
      fetch('api/certificationsMember/data_entry.php')
      .then(response => response.json())
      .then(json => { certificationsMemberApp.certificationsMember = json })
    },
    fetchCertifications() {
      fetch('api/certifications/data_entry.php')
      .then(response => response.json())
      .then(json => { certificationsMemberApp.certifications = json })
    },
  },
  created() {
    this.fetchCertificationsMember();
    this.fetchCertifications();
  }
});
