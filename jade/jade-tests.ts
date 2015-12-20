/// <reference path="jade.d.ts"/>

import jade = require('jade');

jade.compile("b")();
jade.compileFile("foo.jade", {})();
jade.compileClient("a")({ a: 1 });
jade.compileClientWithDependenciesTracked("test").body();
jade.render("h1",{});
jade.renderFile("foo.jade");