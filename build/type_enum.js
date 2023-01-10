"use strict";
var DesignColor;
(function (DesignColor) {
    DesignColor["blue"] = "blue";
    DesignColor["black"] = "#000";
})(DesignColor || (DesignColor = {}));
console.log(DesignColor.blue);
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["USER"] = 3] = "USER";
    StatusPermission[StatusPermission["ADMIN"] = 5] = "ADMIN";
    StatusPermission[StatusPermission["SUPERADMIN"] = 6] = "SUPERADMIN";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission);
