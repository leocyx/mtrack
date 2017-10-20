var assert = require('assert')
var M = require('../mtrack') 
describe('mtrack', function() {
   
    describe("記帳金額檢查測試", function() {
        it("在M.mtrack(eat, play, traffic)將花費金額相加", function(){
            assert.equal('245', M.mtrack('dinner', 'zoo_ticket', 'mrt'))
        })
        it("在M.mtrack(eat, play, traffic)將花費金額相加", function(){
            assert.equal('260', M.mtrack('lunch', 'zoo_ticket', 'mrt'))
        })
        it("在M.mtrack(eat, play, traffic)將花費金額相加", function(){
            assert.equal('1805', M.mtrack('breakfast', 'movie_ticket', 'aircraft'))
        })
    })
})

