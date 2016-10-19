let app = new Ractive({
    el: '#app',
    template: '<h1>Hello, {{name}}!</h1>',
    data: {
        name: 'World'
    }
})
