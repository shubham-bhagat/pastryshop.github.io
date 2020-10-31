
var ids=['cupcake_card','donuts_card','candy_card'];
function showhide(id) {
		var e = document.getElementById(id);
    for(let i=0;i<ids.length;i++)
    {
      var f=document.getElementById(ids[i]);
      if(id==='allcard')
      {
        ids.map(j=>document.getElementById(j).style.display='block');
        break;
      }
      else if(id===ids[i])
      {
        f.style.display='block';
      }

      else  {
        f.style.display='none';
      }
    }

	//	e.style.display =  'none';
 }








 function mySearchFunction() {
  var input, filter, ul, li, item, i, txtValue;
  input = document.getElementById("inputbar");
  filter = input.value.toUpperCase();
  ul = document.getElementById("allcard");
  li = ul.getElementsByTagName("div");
	 for (i = 0; i < li.length; i++) {
    item = li[i];
		console.log(li[i]);
	  txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";

    } else {
      li[i].style.display = "none";
    }
  }
}



//
// function mySearchFunction(){
// 	var item,textvalue,division;
// var input = document.getElementById("inputbar");
// var filter=input.value.toUpperCase();
// var u = document.getElementById("allcard");
// var t= document.getElementsByTagName("h3");
// var l = u.getElementsByTagName("div");
// //var l=t.getElementsByTagName("h3");
// console.log(t.length);
// for (i = 0; i < t.length; i++) {
// 			item=l[i];
// 			console.log(division.textContent);
// 			 //item =u.getElementsByTagName("h3")[i] ;
// 			txtValue = item.textContent || item.innerText;
// 			if (txtValue.toUpperCase().indexOf(filter) > -1) {
// 			l[i].style.display = "";
// 			//console.log(a.textContent);
//  } else {
// 	 l[i].style.display = "none";
//  }
// }}
