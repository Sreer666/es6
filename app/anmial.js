class animal {
  constructor(name, height) {
    this.name=name;
    this.height= height;
  }
  hello (){
    let greedking=`Hello This is ${this.name} My height is ${this.height}`
    console.log(greedking);
  }
}
export default animal;
