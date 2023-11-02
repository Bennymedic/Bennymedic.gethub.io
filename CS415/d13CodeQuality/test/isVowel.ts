import { assert } from "chai"

function isVowel(chr:string):boolean{
    chr = chr.toString();
    if(chr === 'a' || chr==='o' || chr==='u' || chr === 'e' || chr === 'i'){
        return true;
    }
    return false;
}

//Mocha test for isVowel
describe("isVowel", function () {

    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });

    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });    
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });          

    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });

    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});