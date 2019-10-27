var membersCertifiedApp = new Vue({
  el: '#membersCertifiedApp',
  data: {
    members: [],
    certifications: [],
    memberCertifications: [],
    newMemberCertified: {},
    membersCertified: [],
    filter:{
      memberId: ''
    }
  },
  methods: {
    fetchMembers() {
      fetch('api/members/data_entry.php')
      .then(response => response.json())
      .then(json => {membersCertifiedApp.members = json})
    },
    fetchCertifications() {
      fetch('api/certifications/data_entry.php')
      .then(response => response.json())
      .then(json => { membersCertifiedApp.certifications = json })
    },
    fetchMembersCertified() {
      fetch('api/membersCertified/data_entry.php')
      .then(response => response.json())
      .then(json => { membersCertifiedApp.membersCertified = json })
    },
    assignCertificate(member, certfication) {
      this.newMemberCertified.expirationDate = this.calculateEndDate (this.newMemberCertified.certifiedDate, this.certifications.experationPeriod);
      fetch('api/membersCertified/postMemberCertified.php', {
        method:'POST',
        body: JSON.stringify(this.newMemberCertified),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => {alert('Assigned!')} )
      .catch( err => {
        console.error('MEMBER POST ERROR:');
        console.error(err);
  })
},
calculateEndDate (startDate, exp_period) {
  return moment(startDate).add(exp_period, 'years').format("YYYY-MM-DD")
}
  },
  created() {
    this.fetchMembers();
    this.fetchCertifications();
    this.fetchMembersCertified();
  }
});
