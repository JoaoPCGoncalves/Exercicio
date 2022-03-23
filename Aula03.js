var fullname = 'Tulio Faria'
var obj = {
  fullname: 'Jose Silva',
  prop: {
    fullname: 'Nome Sobrenome',
    getFullname: function() {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname())
var test = obj.prop.getFullname
console.log(test.bind(obj)())