class ab {
    constructor(a,b){
      console.log(a,b,'接收到ab参数')
    };
    xx(a){
        console.log(a)
    }
  }


//es 6
  let a=new ab('a','b')
  a.xx('xxxxxxx')

//es5
  function cd(a,b){
      console.log(a,b)
      function xx(a){
          console.log(a)
      }
      return{
          xx:xx
      }
  }

//  var b=new cd('3','4')
//  b.xx(123456)
//cd('a','bb').xx('dddd')
