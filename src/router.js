let instancia = null
const rutas = []

class Router {
	constructor () {
		if (!instancia) {
			instancia = this
		}

		return instancia
	}

	route (path, options) {
		for (let i = 0; i < rutas.length; i++) {
			if (rutas[i].ruta.path === path) {
				for (const prop in options) {
					if (prop !== 'component') {
						rutas[i].ruta[prop] = options[prop]
					}
				}
				return rutas[i]
			}
		}

		const ruta = {
			path: path
		}

		for (const prop in options) {
			ruta[prop] = options[prop]
		}
		const r = new Ruta(ruta)
		rutas.push(r)
		return r
	}

	export () {
		// Exportamos las rutas
		const arr = []

		for (let i = 0; i < rutas.length; i++) {
			arr.push(rutas[i].get())
		}
		return arr
	}
}

class Ruta {
	constructor (ruta) {
		this.ruta = ruta
	}

	child (path, options) {
		if (!this.ruta.children) {
			this.ruta.children = []
		}

		for (let i = 0; i < this.ruta.children.length; i++) {
			if (this.ruta.children[i].ruta.path === path) {
				return this.ruta.children[i]
			}
		}

		const obj = {
			path: path
		}

		for (const prop in options) {
			obj[prop] = options[prop]
		}

		this.ruta.children.push(new Ruta(obj))
	}

	get () {
		const ruta = {}

		for (const prop in this.ruta) {
			if (prop !== 'children') {
				ruta[prop] = this.ruta[prop]
			}
		}

		if (this.ruta.children && this.ruta.children.length > 0) {
			ruta.children = []
			for (let i = 0; i < this.ruta.children.length; i++) {
				ruta.children.push(this.ruta.children[i].get())
			}
			return ruta
		} else {
			return this.ruta
		}
	}
}

export default new Router()
