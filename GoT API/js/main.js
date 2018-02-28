var person = 1
$('#submit').on('click',function(e){
  e.preventDefault();
  person = $('#personId').val();
  console.log(person);
  $.ajax({
    url: 'https://anapioficeandfire.com/api/characters/'+person,
    success: function(r){

      console.log(r.aliases)
      console.log(r.name)
      $('#aliases').append(r.aliases);
      $('#name').append(r.name);
    },
    error: function(er){
     console.log(er);
    }
  })
})
