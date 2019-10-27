var delete_membersApp = new Vue({
  el: '#delete_membersApp',
  data: {
    employee: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/members/deletemembersPost.php', {
        method:'POST',
        body: JSON.stringify(this.employee),
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
  },
  handleReset() {
    this.employee = {
      firstName: '',
      lastName: '',
      radioNumber: '',
      stationNumber: '',
      isActive: ''
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
