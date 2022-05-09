$(function(){

    $("#button-1").on("click",function(e){
        e.preventDefault();
       var firstName=$("#namef").val();
        var lastName=$("#namel").val();
        var adress=$("#adress").val();
        var age=$("#age").val();
        var email=$("#mail").val()


        if((firstName==='') && (lastName==='') && (adress==='')&& (age==='') && (email==='')){
            alert("Please fill all the fields");
        }
        else{
            var str='The Full name is: '+firstName+' '+lastName+' And his Adresse is: '+adress+' And his is Age: '+age+' and his E-mail is: '+email;
            $("#output-details").append(str);

            $("#namef").val("");
            $("#namel").val("");
            $("#adress").val("");
            $("#age").val("");
            $("#mail").val("");
        }
    })
});