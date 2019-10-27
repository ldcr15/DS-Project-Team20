var edit_membersApp = new Vue({
  el: '#edit_membersApp',
  data: {
    employee: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/members/editmembersPost.php', {
        method:'POST',
        body: JSON.stringify(this.employee),
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
    fetch('api/members/deletemembersPost.php', {
      method:'POST',
      body: JSON.stringify(this.employee),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
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
  handleRowClick(member){
    edit_membersApp.employee = member;
  }
},
  created() {
  }
})

function editExistingFunction() {
  var x = document.getElementById("edit_membersApp");
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
