let Fellowship=["This is 1st export method Array","This is 2st export method Array","This is 3st export method Array"];
const fellows= Fellowship.length;

export {Fellowship,fellows};
export default fellows;

//you can export and import based on the your need and if you want to export an only default one value
//you need to send the specific value based on your need to export

// let Fellowship={firstobj:"This is 1st export method Array",
// Secnodfirstobj:"This is 2st export method Array",
// Thirdfirstobj:"This is 3st export method Array"};
// let {firstfellows,secondfeell}= Fellowship;
// console.log(firstfellows,secondfeell);
//
// export {firstfellows,secondfeell};
// //export default fellows;
//
// //you can export and import based on the your need and if you want to export an only default one value
// //you need to send the specific value based on your need to export
