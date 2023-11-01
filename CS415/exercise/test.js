function computeSalesCommission(isSaleried, sales){
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
  if(isSaleried){
      if(sales<maxSales && sales >=minSales){
          commision = sales * minRate;
      }
      else{
          commision = (minRate * maxSales) + (sales - maxSales) * midRate;
      }
  }
  else{
      if(sales<=maxSales && sales >=minSales){
          commision = sales * midRate;
      }
      else{
          commision = (midRate * maxSales) + (sales - maxSales) * maxRate;
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

describe("computeSalesCommission", () => {
  it("expect 0: ", () => {
    assert.equal(computeSalesCommission(true, 200), 0);
  });
  it("expect 0: ", () => {
    assert.equal(computeSalesCommission(false, 200), 0);
  });
  it("expect 3: ", () => {
    assert.equal(computeSalesCommission(true, 300), 3);
  });
  it("expect 6: ", () => {
    assert.equal(computeSalesCommission(false, 300), 6);
  });

  it("expect 65: ", () => {
    assert.equal(computeSalesCommission(true, 3500), 65);
  });
  it("expect 100: ", () => {
    assert.equal(computeSalesCommission(false, 3500), 100);
  });
  
});

mocha.run();