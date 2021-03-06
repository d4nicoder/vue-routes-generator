/*!
 * vue-routes-generator v0.0.0
 * (c) 2019 dcanada
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var instancia = null;
var rutas = [];

var Router$1 = function Router () {
	if (!instancia) {
		instancia = this;
	}

	return instancia
};

Router$1.prototype.route = function route (path, options) {
	for (var i = 0; i < rutas.length; i++) {
		if (rutas[i].ruta.path === path) {
			for (var prop in options) {
				if (prop !== 'children' && prop !== 'path') {
					rutas[i].ruta[prop] = options[prop];
				}
			}
			return rutas[i]
		}
	}

	var ruta = {
		path: path
	};

	for (var prop$1 in options) {
		ruta[prop$1] = options[prop$1];
	}
	var r = new Ruta(ruta);
	rutas.push(r);
	return r
};

Router$1.prototype.export = function export$1 () {
	// Exportamos las rutas
	var arr = [];

	for (var i = 0; i < rutas.length; i++) {
		arr.push(rutas[i].get());
	}
	return arr
};

var Ruta = function Ruta (ruta) {
	this.ruta = ruta;
};

Ruta.prototype.child = function child (path, options) {
		var this$1 = this;

	if (!this.ruta.children) {
		this.ruta.children = [];
	}

	for (var i = 0; i < this.ruta.children.length; i++) {
		if (this$1.ruta.children[i].ruta.path === path) {
			return this$1.ruta.children[i]
		}
	}

	var obj = {
		path: path
	};

	for (var prop in options) {
		obj[prop] = options[prop];
	}

	this.ruta.children.push(new Ruta(obj));
};

Ruta.prototype.get = function get () {
		var this$1 = this;

	var ruta = {};

	for (var prop in this$1.ruta) {
		if (prop !== 'children') {
			ruta[prop] = this$1.ruta[prop];
		}
	}

	if (this.ruta.children && this.ruta.children.length > 0) {
		ruta.children = [];
		for (var i = 0; i < this.ruta.children.length; i++) {
			ruta.children.push(this$1.ruta.children[i].get());
		}
		return ruta
	} else {
		return this.ruta
	}
};

var Router$2 = new Router$1();

var version = '0.0.0';

exports['default'] = Router$2;
exports.Router = Router$2;
exports.version = version;
