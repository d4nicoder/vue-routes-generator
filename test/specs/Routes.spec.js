import Routes from 'src/router.js'

describe('Routes generate', function () {
	it('Debe contener las rutas correctas', function () {
		Routes.route('/main', {
			name: 'Main',
			component: null
		})

		Routes.route('/main').child('test', {
			name: 'Test',
			component: null
		})

		const miRuta = Routes.export()
		expect(miRuta.length).to.equal(1)
	})
})
