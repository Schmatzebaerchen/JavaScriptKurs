class userService {


  static init(){
    var user=userService.createUser(1,"Herbert","xxxxxx","herbert@irgendwas.de","01.01.1900");
    //create Presentation of User
    userService.displayUser(user);
    userService.createTableHeader(user);
  }





  static createUser(id,name,password,email){
    var user=new User(id,name,password,email);
    return user;
  }



  static createTableHeader(user){
    var columnNames=Object.keys(user);
    var result="";
    for (var i=0;i<columnNames;i++){
      var columnName="th"+columName[i]+"</th>";
      result=result+columnName;
      console.log(columnName);
    }
    document.getElementById("header").innerHTML=result;
  }





  static displayUser(user) {
    var columnValueArray=Object.values(user);
    var result="<tr>";
    for (var i=0;i<columnValueArray.length;i++){
      var columnValue="<td>"+columnValueArray[i]+"</td>";
      result=result+columnValue;
    }
    document.getElementById("content").innerHTML=result+"</tr>";

      }





  static changePassword(oldPassword,newPassword,repeatedNewPassword){
    return "passwordChanged";
  }



}
