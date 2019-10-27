var membersApp = new Vue({
  el: '#membersApp',
  data: {
    members:  [],
    newMember: {}
  },
  methods: {
    fetchMembers() {
      fetch('api/members/data_entry.php')
      .then(response => response.json())
      .then(json => {membersApp.members = json})
    },
    handleSubmit() {
      fetch('api/members/membersPost.php', {
        method:'POST',
        body: JSON.stringify(this.newMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {membersApp.members.push( json[0] ) })
      .catch( err => {
        console.error('MEMBER POST ERROR:');
        console.error(err);
  });
   this.handleReset();
   this.fetchMembers();
  },
  handleReset() {
    this.newMember = {
      firstName: '',
      lastName: '',
      radioNumber: '',
      stationNumber: '',
      isActive: ''
    }
  },
  handleRowClick(member){
    edit_membersApp.employee = member;
  }
},
  created() {
    this.fetchMembers();
     this.handleReset();
  }
})

function addFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
