const RBAC = require("easy-rbac")

const options =require("./policy")

const rbac =RBAC.create(options);

module.exports = rbac;
