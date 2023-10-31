function salesCommision(isSaleried, sales){
    const minSales = 300;
    const maxSales =500;
    const minRate = 0.01;
    const midRate =0.02;
    const maxRate =0.03;
    let commision = null;
    if(sales < minSales){
            commision = 0;
            return commision;
        }
    if(isSaleried === true){
        if(sales<=maxSales && sales >=minSales){
            commision = sales * midRate;
        }
        else{
            commision = sales * midRate;
        }
    }
    else{
        if(sales<=maxSales && sales >=minSales){
            commision = sales * midRate;
        }
        else{
            commision = sales * maxRate;
        }
    }
    return commision;
}


// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("salesCommision", () => {
  it('if the isSaleried true and sale is 200 the expected value is 0', () => {
    assert.equal(salesCommision(true, 200), 0);
  });
  it('"   bcb" is not a palindrome', () => {
    assert.equal(palindrome(" bcb"), false);
  });
  it('"bcb   " is not a palindrome', () => {
    assert.equal(palindrome("bcb "), false);
  });
  it('"love" is not a palindrome', () => {
    assert.equal(palindrome("love"), false);
  });
  it('"699996" a palindrome', () => {
    assert.equal(palindrome("699996"), true);
  });
  it('"racecar" a palindrome', () => {
    assert.equal(palindrome("bcb"), true);
  });
  it("is case insensitive.", () => {
    assert.equal(palindrome("Trunk knurt"), true);
  });
});

mocha.run();