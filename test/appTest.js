const assert = require('chai').assert
// const app = require('../app')
const sayHello = require('../app').sayHello
const addNumbers = require('../app').addNumbers
// const sayHelloRes = app.sayHello()
// const addNumbersRes = app.addNumbers(5,5)

describe('App', function(){
    describe('sayHello', function(){
        it("sayHello should return hello", function(){
            let result = sayHello()
            assert.equal(result, "hello")
        })
    
        it("sayHello should return type of hello", function(){
            let result = sayHello()
            assert.typeOf(result, "string")
        })
    })
    
    describe('addNumbers', function(){
        it("addNumbers should be above 5", function(){
            let result = addNumbers(5,5)
            assert.isAbove(result, 9)
        })
    
        it("addNumbers should return a number type", function(){
            let result = addNumbers(5,5)
            assert.typeOf(result, "number")
        })
    })
    
})