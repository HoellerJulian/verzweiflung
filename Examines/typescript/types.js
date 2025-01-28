//basic obj
var user = {
    name: "Hayes",
    id: 0,
};
//implements
var user2 = {
    name: "Hayes",
    id: 0,
};
//class with constructor
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user3 = new UserAccount("Murphy", 1);
//                  name  type   returntype
function deleteUser(user) {
    // ...
    return true;
}
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
// logs "12, 26"
var point = { x: 12, y: 26 };
logPoint(point);
//The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check.
